/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch, useSelector  } from "react-redux";

const ProductCartList = (data) => {
    const state = useSelector((stateGlobal)=>stateGlobal.GioHangReducer);
    console.log( 'state', state )
    const dispatch = useDispatch();
    const buyItemAction = (item)=>{
        // action creator 
        // object (type,payload)
        dispatch({type: 'BUY_ITEM', payload: item})
    }
    const detailCart = (item) => {
        console.log(state.cart , 'test test')
        dispatch({type: 'DETAIL_CART' , payload: item})
    }
        return (
       <>
         <div className="container-fluid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem' }}>
                {data.data.map((item) => {
                    return (
                        <article className="card col-12 p-3" key={item.maSP}>
                            <img src={item.hinhAnh} className="card-img-top" style={{ height: '300px' }} alt />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.tenSP}</h5>
                                <a href="#" className="btn btn-primary mr-2" onClick={(e) => {
                                    e.preventDefault();
                                    detailCart(item);
                                }}>Xem chi tiết</a>
                                <a href="#" className="btn btn-danger" 
                                    onClick={(e) => {
                                        e.preventDefault(); 
                                        buyItemAction(item);
                                    }}>
                                    Thêm giỏ hàng
                                </a>
                            </div>
                        </article>
                    )
                })}
               
            </div>
             <article  className={state.showDetail?'container-fluid my-5 showDetail col-12':"container-fluid my-5 detail-product col-12" } >
                {state.detailCard && (
                    <div key={state.detailCard.maSP} style={{display:'flex',flexDirection:'row',background:'white'}}>
                    <div className="col-6">
                    <img src={state.detailCard.hinhAnh} className="card-img-top" style={{ height: '500px' }}  />
                    </div>
                    <table className="table col-8">
                        <thead>
                            <tr>
                                <th scope="col" colSpan="2">Thông số kỹ thuật</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Màn Hình</td>
                                <td>{state.detailCard.manHinh}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành</td>
                                <td>{state.detailCard.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <td>Camera trước</td>
                                <td>{state.detailCard.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <td>Camera sau</td>
                                <td>{state.detailCard.cameraSau}</td>
                            </tr>
                            <tr>
                                <td>RAM</td>
                                <td>{state.detailCard.ram}</td>
                            </tr>
                            <tr>
                                <td>ROM</td>
                                <td>{state.detailCard.rom}</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
                )}
            </article>
       </>
    )
}
export default ProductCartList;