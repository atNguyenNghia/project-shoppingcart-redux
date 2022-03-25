/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const state = useSelector((stateGlobal)=>stateGlobal.GioHangReducer);
    const dispatch = useDispatch();
    const DecreaseAmount = (maSp)=>{
        dispatch({type: 'DECREASE_AMOUNT' , payload: maSp})
    }
    const IncreaseAmount = (maSp)=>{
        dispatch({type: 'INCREASE_AMOUNT' , payload: maSp})
    }
    const Close = () => {
        dispatch({type:'CLOSE_MODAL' })
    }
    const DeleteProduct = (item) => {
        dispatch({type: 'DELETE_PRODUCT' , payload: item})
    }
    return (
        <div className={state.modal ? " cart-container show" : " cart-container"} style={{background:'white'}}>
            <header className="d-flex justify-content-between card-header">
                <h1>Giỏ hàng</h1>
                <button type="button" className="btn-close" aria-label="Close" onClick={Close}><i class="fas fa-times"></i></button>
            </header>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>

                            <th scope="col">Mã sản phẩm</th>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Đơn giá</th>
                            <th scope="col">Thành tiền</th>
                            <th scope="col">Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.cart.map((item , index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.maSP}</td>
                                        <td><img src = {item.hinhAnh} height={50} width={50} style= {{borderRadius: 10}}/></td>
                                        <td>{item.tenSP}</td>
                                        <td className="d-flex flex-direction-column">
                                            <button className="btn btn-outline-primary mr-2"
                                                onClick={() => {
                                                IncreaseAmount(item.maSP)
                                                }}><i className="fas fa-chevron-up"></i>
                                            </button>
                                               <span className="text-success">{item.amount}</span> 
                                            <button className="btn btn-outline-primary ml-2"
                                                onClick={() => {
                                                DecreaseAmount(item.maSP)
                                                }}
                                                ><i className="fas fa-chevron-down"></i>
                                            </button>
                                        </td>
                                        <td>{item.gia}</td>
                                        <td>{item.thanhTien}</td>
                                        <td>
                                        <button className="btn btn-outline-danger" onClick={() => {
                                                    DeleteProduct(item.maSP)
                                                }}>Xóa</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <footer className="d-flex justify-content-between card-footer">
                <div>
                <h3>Tổng tiền: ${state.cart.reduce((total,item)=>{
                                    console.log(total);
                                    return total + (item.amount *item.gia);
                                },0)}</h3>
                </div>
                <button type="button" className="btn btn-secondary" onClick={Close} >Đóng</button>
            </footer>
        </div>
    )
}
export default Cart;