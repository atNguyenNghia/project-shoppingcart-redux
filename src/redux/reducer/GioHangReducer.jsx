const initialState = {
    total: 0,
    amountTotal: 0,
    modal:false,
    cart:[],
    detailCard: undefined,
    showDetail : false
  }
// SET_DETAIL_CART
const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case "CLOSE_MODAL" :
            return {
                ...state,
                modal:false
            };
        case 'DETAIL_CART' : {
            const detail =action.payload
            return {...state,detailCard:detail , showDetail: true};
        }
        case 'BUY_ITEM': {
            const {maSP,tenSP,gia,hinhAnh} = action.payload;
            let amount = 1;
            let index =state.cart.find((item)=>item.maSP===action.payload);
            if(index){
                amount = index.amount;
                console.log(amount , 'amount')
            }
            const thanhTien = gia * amount;
            const newCart =[...state.cart,{maSP,tenSP,hinhAnh,thanhTien,amount,gia}]
            return {...state,cart:newCart,modal:true, total:newCart.length};
        }

        case 'DECREASE_AMOUNT' : {
            const newState=state.cart.map((item)=>{
                console.log(item)
                if(item.maSP===action.payload){
                    let newAmount = item.amount - 1;
                    let newPrice = item.thanhTien*newAmount;
                    return {...item,amount:newAmount,thanhTien:newPrice}
                }
                return item;
            }).filter((item)=>item.amount>0)
            return {...state,cart:newState};
        }
        case 'INCREASE_AMOUNT': 
        {
            const newState=state.cart.map((item)=>{
                if(item.maSP===action.payload){
                    let newAmount = item.amount + 1;
                    let newPrice = item.thanhTien*newAmount;
                    return {...item,amount:newAmount,thanhTien:newPrice}
                }
                return item;
            })
            console.log(newState)
            return {...state,cart:newState};
        }
        case 'DELETE_PRODUCT': {
            const newCart = state.cart.filter((item)=>item.maSP!==action.payload);
            return {...state,cart:newCart}
        }
        default:
            return state;
    }
} 

export default reducer;