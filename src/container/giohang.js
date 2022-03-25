import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../conponents/Cart";
import ProductCartList from "../conponents/ProductCart";
import { mangSanPham2 } from "../data";
const GioHang = () => {
    const state = useSelector((stateGlobal)=>stateGlobal.GioHangReducer);
    return (
       <>
        <header>
            <h1 className="text-center text-info display-3">Shopping Cart</h1>
            <p className="text-right text-danger mr-5">Giỏ hàng:(<span className="text-danger">
                    {state.cart.reduce((amounTotal,item)=>{
                        return amounTotal + item.amount;
                    },0)}
                </span>)
            </p>
            <ProductCartList data={mangSanPham2}/>
            <Cart />
        </header>   
       </>
    )
}
export default GioHang;