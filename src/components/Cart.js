import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { addtocart, removefromcart } from "../redux/actions/productsActions";
const Maincartstyles = styled.div`
  .cart__product {
    display: flex;
    justify-content: space-between;
    height: 27.96%;
    width: 76.25%;
    margin-top: 21px;
    margin-left: 6.94%;
    margin-bottom: 21px;
    flex-direction: row;

    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;

    .cart__productS1 {
      display: flex;
      flex-direction: column;

      .cart__titleM {
        display: flex;
        flex-direction: column;

        h3 {
          margin-top: 16px;
          font-family: "Raleway-Regular";
          line-height: 25.6px;
          font-weight: 600;
          font-size: 30px;
          line-height: 27px;
          margin-bottom: 0;
        }
        p {
          margin-top: 16px;
          display: flex;
          align-items: center;
          font-family: "Raleway-Regular";
          line-height: 25.6px;
          font-weight: 400;
          font-size: 30px;
          line-height: 27px;
        }
      }
      .cart__priceM {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        h1 {
          font-size: 24px;
          font-family: "Raleway-Regular";
          font-weight: 500;
        }
      }
    }
    .cart__sectionSpecial {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .cart__productS3 {
      display: flex;

      img {
        width: 185px;
        height: auto;
        object-fit: contain;
      }
    }
    .cart__productS2 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      button {
        cursor: pointer;
        :hover {
          background-color: whitesmoke;
          color: #1d1f22;
        }
        border: none;
        background-color: #ffffff;
        font-size: 18px;
      }
      .cart__NO {
        display: flex;
        justify-content: center;
        font-weight: 600;
        font-style: "Raleway-Regular";
        font-size: 24px;
      }
    }
    .main__sizes {
      display: flex;
      flex-direction: row;

      margin-left: 0;
    }
  }
  .sizes {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border: 1px solid #1d1f22;
    margin-right: 8px;
    :hover {
      background-color: #1d1f22;
      color: #ffffff;
    }
    button {
      width: 45px;
      height: 45px;
      font-size: 25px;
    }

    p {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: normal;
    }
  }
`;
function Cart({ cart, addtocart, removefromcart, valuta }) {
  const [totalitems, settotalitems] = useState(0);
  const [totalprice, settotalprice] = useState(0);
  const [getValue, setgetValue] = useState(valuta);
  useEffect(() => {
    setgetValue(valuta.value);
  }, [valuta]);
  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.prices[getValue]?.amount;
    });
    settotalprice(price);
    settotalitems(items);
  }, [getValue, cart, totalitems, totalprice, settotalitems, settotalprice]);

  return (
    <Maincartstyles>
      <div>
        {cart.map((item) => {
          return (
            <div key={item.id} className="cart__product">
              <div className="cart__productS1">
                <div className="cart__titleM">
                  <h3>{item.name}</h3>
                  <p>{item.id}</p>
                </div>
                <div className="cart__priceM">
                  <h1>
                    {valuta.value === 0 ? "$" : valuta.value === 1 ? "£" : "¥"}
                    {item.qty * item.prices[getValue]?.amount}
                  </h1>
                </div>

                <div className="main__sizes">
                  {item.attributes[0].items.map((item) => {
                    return (
                      <div key={item.id} className="sizes">
                        <p>{item.id}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="cart__sectionSpecial">
                <div className="cart__productS2">
                  <div className="sizes">
                    <button onClick={() => addtocart(item.id)}>+</button>
                  </div>
                  <p className="cart__NO">{item.qty}</p>
                  <div className="sizes">
                    <button onClick={() => removefromcart(item.id)}>-</button>
                  </div>
                </div>
                <div className="cart__productS3">
                  <img src={item.gallery[0]} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Maincartstyles>
  );
}

const mapStateTopProps = (state) => {
  return {
    cart: state.allProducts.cart,
    valuta: state.allProducts.curency,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    addtocart: (id) => dispatch(addtocart(id)),
    removefromcart: (id) => dispatch(removefromcart(id)),
  };
};

export default connect(mapStateTopProps, mapDispatchProps)(Cart);
