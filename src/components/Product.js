import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import cartvector from "../assets/svg/cart__white.svg";

const ProdStyles = styled.div`
  .prod__item {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    width: 386px;
    height: 444px;
    background-color: #ffffff;
    :hover {
      .circle {
        visibility: visible;
      }
      box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
  }
  .prod__content {
    display: flex;

    flex-direction: column;
    align-items: flex-start;

    width: 354px;
    height: 58px;
    margin-bottom: 16px;
    margin-left: 16px;
    margin-top: 24px;
    padding: 0;
    .price {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 0;
      font-weight: 600;
      height: 29px;
      font-size: 18px;
      line-height: 28.8px;
      padding: 0;
      position: static;
    }
    .title {
      display: flex;
      align-items: center;
      height: 29px;
      font-size: 18px;
    }
  }

  .prod__image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 354px;
    height: 330px;
    align-self: stretch;

    margin-left: 16px;
    margin-top: 16px;
    img {
      width: auto;
      height: 330px;
    }
  }
  .circle {
    visibility: hidden;
    display: flex;
    position: absolute;
    right: 0;
    width: 52px;
    height: 52px;
    right: 31px;
    top: 320px;
    border-radius: 50%;
    :hover {
      background: lightgreen;
    }
    background: #5ece7b;
    justify-content: center;
    align-items: center;
  }
  .empty__cart {
    display: flex;

    width: 24px;
    height: 24px;
  }
`;
function Product(item) {
  const [img, setimg] = useState([]);
  const [mainData, setmainData] = useState({});

  useEffect(() => {
    setimg(item.item.gallery);
    setmainData(item.item);
  }, [item.item]);

  return (
    <ProdStyles>
      <article className="prod__item">
        <div className="prod__image">
          <img src={img[0]} alt="" />
        </div>
        <div className="prod__content">
          <div className="title">
            <p>{item.item.name}</p>
          </div>
          <div className="price">
            <p>${item.item.prices[0].amount}</p>
          </div>
          <Link to={{ pathname: "/pdp", state: { mainData } }}>
            <div className="circle">
              <img src={cartvector} alt="" className="empty__cart" />
            </div>
          </Link>
        </div>
      </article>
    </ProdStyles>
  );
}

export default Product;
