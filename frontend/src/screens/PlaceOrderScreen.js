import React from "react";
import { useSelector } from "react-redux";
import CheckoutSteps from "../components/checkoutSteps/CheckoutSteps";
import {Link} from "react-router-dom";

export default function PlaceOrderScreen(props){
    const cart = useSelector((state) => state.cart);
    if (!cart.paymentMethod){
        props.history.push('/payment')
    }
    return(
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top"> 
                <div className="col-2">
                    <ul>
                        <li>
                        <div className="card card-body">
                            <h2>Envio</h2>
                            <p>
                                <strong>Nome: </strong>{cart.shippingAddress.fullName} <br/>
                                <strong>Endereço: </strong>{cart.shippingAddress.address},
                                {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},
                                {cart.shippingAddress.state}
                                
                            </p>
                        </div>
                        </li>
                        <li>
                        <div className="card card-body">
                            <h2>Pagamento</h2>
                            <p>
                                <strong>Metodo de Pagamento: </strong>{cart.paymentMethod} <br/>
                            </p>
                        </div>
                        </li>
                        <li>
                        <div className="card card-body">
                            <h2>Item(ns) do Pedido</h2>
                            <ul>
              {cart.cartItems.map((item) => (
                  <li key={item.product}>
                    <div className="row">
                      <div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="small">
                        </img>
                      </div>
                      <div className="min-30">
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </div>
                      <div>
                        {item.qty} x ${item.price} = ${item.qty * item.price}
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}