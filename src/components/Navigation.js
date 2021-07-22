import React, { useEffect, useState } from "react";
import $ from "../assets/svg/$.svg";
import arrowvector from "../assets/svg/arrow.svg";
import yen from "../assets/svg/Yen_sign.svg.svg";
import Logo from "../assets/svg/Logo.svg";
import cartvector from "../assets/svg/cartvector.svg";
import pound from "../assets/svg/pound.svg";
import styled from "styled-components";
import Cartoverlay from "./Cartoverlay";
import CurencyOverlay from "./CurencyOverlay";
import { Link } from "react-router-dom";
import { loadcurrentitem } from "../redux/actions/productsActions";
import { connect } from "react-redux";

const NavStyles = styled.div`
  .Header {
    display: flex;
    flex-direction: row;
    height: 80px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    .Navigation {
      display: flex;
      flex-direction: row;
      padding-left: 101px;
      .nav__label {
        padding-right: 16px;
        padding-left: 16px;
        font-size: 16px;
        font-weight: 400;
        text-transform: uppercase;
        &:hover {
          border-bottom: 2px solid #5ece7b;
          color: #5ece7b;
          font-weight: 600;
        }
      }
    }
    .navbar__leftContainer {
      display: flex;
      flex-direction: row;
      padding-right: 101px;
      .navbar__group1 {
        display: flex;
        flex-direction: row;
        padding-right: 22px;
      }
      .navbar__dolar {
        padding-right: 10px;
        width: 12px;
        height: auto;
      }
    }
  }
  .navbar__cartVector {
    display: flex;
    position: relative;
  }
  .cart__dot {
    bottom: 10px;
    left: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    background-color: #1d1f22;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    p {
      color: white;
      font-weight: 600;
    }
  }
  .set__hidden {
    visibility: hidden;
  }
  .set__visible {
    visibility: visible;
  }
  .hidden__btn {
    background: transparent;
    border: none;
    font-size: 0;
    cursor: pointer;
  }
  .navbar__arrow {
    cursor: pointer;
  }
`;

function Navigation({ cart, globalbolean, valuta, loadcurrentitem, products }) {
  const [cartCount, setcartCount] = useState(0);
  const [cartT, setcartT] = useState(false);
  const [Curr, setCurr] = useState(false);

  useEffect(() => {
    loadcurrentitem(products, "");
  });

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setcartCount(count);
  }, [cart, cartCount]);

  return (
    <NavStyles>
      <nav className="Header">
        <div className="Navigation">
          <label
            onClick={(e) => loadcurrentitem(products, "clothes")}
            htmlFor=""
            className="nav__label"
          >
            <p>Clothes</p>
          </label>

          <label
            onClick={() => loadcurrentitem(products, "tech")}
            htmlFor=""
            className="nav__label"
          >
            <p>Tech</p>
          </label>
          <label htmlFor="" className="nav__label">
            <p>Kids</p>
          </label>
        </div>
        <Link to="/">
          <div className="navbar__logoContainer">
            <img src={Logo} alt="" className="navbar__logogroup" />
          </div>
        </Link>
        <div className="navbar__leftContainer">
          <div className="navbar__group1">
            <img
              src={valuta.value === 0 ? $ : valuta.value === 1 ? pound : yen}
              alt=""
              className="navbar__dolar"
            />
            <img
              onClick={() => setCurr(!Curr)}
              src={arrowvector}
              alt=""
              className="navbar__arrow"
            />
          </div>
          <div className="navbar__cartVector">
            <button
              className="hidden__btn"
              onClick={() => {
                setcartT(!cartT);
                globalbolean();
              }}
            >
              <img src={cartvector} alt="" className="navbar__cart" />
            </button>
            <div
              className={
                cartCount === 0 ? "set__hidden cart__dot" : "cart__dot"
              }
            >
              <p>{cartCount}</p>
            </div>
          </div>
        </div>
      </nav>
      <div className={cartT ? "set__visible" : "set__hidden"}>
        <Cartoverlay />
      </div>
      <div className={Curr ? "set__visible" : "set__hidden"}>
        <CurencyOverlay />
      </div>
    </NavStyles>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.allProducts.cart,
    valuta: state.allProducts.curency,
    products: state.allProducts.products,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    loadcurrentitem: (products, category) =>
      dispatch(loadcurrentitem(products, category)),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Navigation);
