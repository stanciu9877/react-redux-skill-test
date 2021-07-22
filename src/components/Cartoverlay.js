import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { connect } from "react-redux";
import { addtocart, removefromcart } from "../redux/actions/productsActions";
import { Link } from "react-router-dom";
const Cartstyles = styled.div`
  .cart__main {
    z-index: 2;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 325px;
    height: auto;
    top: 78px;
    right: 87px;
    background-color: #ffffff;
    .cart__title {
      display: flex;
      flex-direction: row;

      height: 26px;
      margin-left: 16px;
      margin-right: 15px;
      margin-top: 8px;
      margin-bottom: 2px;
      .cart__title1 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        font-size: 16px;
        position: absolute;
        width: 118px;
        height: 26px;
        p {
          font-weight: 500;
        }
      }
      .cart__close {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 25px;
        height: 25px;
        right: 14px;
        top: 15px;

        cursor: pointer;
      }
    }
    .cart__product {
      display: flex;
      height: 137px;
      width: 293px;
      margin-top: 21px;
      margin-left: 16px;
      margin-bottom: 21px;
      flex-direction: row;

      .cart__productS1 {
        .cart__titleM {
          display: flex;
          height: 52px;
          width: 136px;
          margin-top: 2px;
          margin-left: 0px;

          p {
            display: flex;
            align-items: center;
            font-family: "Raleway-Regular";
            line-height: 25.6px;
            font-weight: 300;
            font-size: 16px;
          }
        }
        .cart__priceM {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 26px;
          margin-bottom: 27px;
          margin-top: 5px;

          h1 {
            font-size: 16px;
            font-family: "Raleway-Regular";
            font-weight: 400;
          }
        }
      }
      .cart__productS3 {
        display: flex;
        margin-right: 0px;
        margin-top: 0px;
        width: 105px;
        height: 137px;

        img {
          width: 105px;
          height: auto;
          object-fit: contain;
        }
      }
      .cart__productS2 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 18px;
        margin-right: 10px;
        height: 137px;
        width: 24px;
        button {
          cursor: pointer;
          :hover {
            background-color: whitesmoke;
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
          font-size: 16px;
        }
      }
      .main__sizes {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .sizes {
          cursor: pointer;
          display: flex;
          height: 24px;
          width: fit-content;
          :hover {
            background-color: #1d1f22;
            color: #ffffff;
          }
        }
        margin-left: 0;
      }
    }
    .sizes {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border: 1px solid #1d1f22;
      margin-right: 8px;

      p {
        font-family: "Source Sans Pro", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: normal;
      }
    }
    .cart__total {
      display: flex;
      width: 289px;
      height: 28px;
      flex-direction: row;
      margin-top: 21px;

      justify-content: space-between;
      margin-left: 16px;
      .total__title {
        display: flex;
        height: 19px;
        width: 55px;
        margin-top: 9px;
        align-items: center;

        font-weight: 600;
      }
      .price__strong {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-weight: 600;
        width: 95px;
        height: 26px;
        margin-right: 0px;
        margin-top: 0px;
      }
    }
    .overlay__btns {
      display: flex;
      margin-bottom: 20px;
      margin-top: 35px;
      width: 292px;

      margin-left: 13px;
      height: 43px;
      button {
        display: flex;
        width: 140px;
        align-items: center;
        justify-content: center;
      }
      .view__bag {
        display: flex;
        width: 140px;
        margin-right: 12px;
        text-decoration: none;
        button {
          background: #ffffff;
          border: 1px solid #1d1f22;
          box-sizing: border-box;
          font-weight: 600;
          line-height: 16.8px;
          align-items: center;
          :hover {
            background: whitesmoke;
          }
        }
      }
      .Check__out {
        background: #5ece7b;
        border: none;
        font-weight: 500;
        font-size: 14px;
        line-height: 120%;
        color: #ffffff;
      }
    }
  }
`;
function Cartoverlay({ cart, addtocart, removefromcart, valuta }) {
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
      price += item.qty * item.prices[getValue].amount;
    });
    settotalprice(price);
    settotalitems(items);
  }, [getValue, cart, totalitems, totalprice, settotalitems, settotalprice]);

  return (
    <Cartstyles>
      <div className="cart__main">
        <div className="cart__title">
          <div className="cart__title1">
            <p>
              <strong>My Bag,</strong> {totalitems} items
            </p>
          </div>
          <div className="cart__close">
            <MdClose />
          </div>
        </div>
        {cart.map((item) => {
          return (
            <div key={item.id} className="cart__product">
              <div className="cart__productS1">
                <div className="cart__titleM">
                  <p>{item.name}</p>
                </div>
                <div className="cart__priceM">
                  <h1>
                    {valuta.value === 0 ? "$" : valuta.value === 1 ? "£" : "¥"}
                    {item.qty * item.prices[getValue].amount}
                  </h1>
                </div>

                <div className="main__sizes">
                  {item.attributes[0].items.slice(2).map((item) => {
                    return (
                      <div key={item.id} className="sizes">
                        <p>{item.id}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
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
          );
        })}

        <div className="cart__total">
          <div className="total__title">
            <p>Total</p>
          </div>
          <div className="price__total">
            <p className="price__strong">
              {valuta.value === 0 ? "$" : valuta.value === 1 ? "£" : "¥"}
              {totalprice}
            </p>
          </div>
        </div>
        <div className="overlay__btns">
          <Link to="/cart" className="view__bag">
            <button>VIEW BAG</button>
          </Link>

          <button className="Check__out">CHECK OUT</button>
        </div>
      </div>
    </Cartstyles>
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

export default connect(mapStateTopProps, mapDispatchProps)(Cartoverlay);
