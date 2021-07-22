import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { addtocart } from "../redux/actions/productsActions";
const ProdDisp = styled.div`
  .disprod__main {
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    .images__row {
      display: flex;
      flex-direction: column;
      margin-left: 6rem;
      margin-top: 5rem;

      background-color: #ffffff;

      justify-content: flex-start;
      flex: 0.1;

      img {
        width: 10rem;
        height: auto;
        margin-bottom: 1.8rem;
        cursor: pointer;
        background-color: #ffffff;
      }
    }
    .hero__disp {
      display: flex;
      flex-direction: row;
      background-color: #ffff;
      flex: 0.9;
      margin-top: 2rem;
      .hero__dispImg {
        min-width: 38rem;

        background-color: #ffffff;
        margin-top: 3rem;
        margin-left: 1.5rem;
        margin-right: 6.25rem;
        img {
          height: auto;
          width: 38rem;
        }
      }
      .hero__desc {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        max-width: 18.25rem;
        background-color: #ffffff;

        .hero__t {
          margin-top: 2.8rem;
          font-size: 1.8rem;
          font-weight: 600;
          line-height: 1.6rem;
          text-transform: capitalize;
          background-color: #ffffff;
          margin-bottom: 0;
        }
        .hero__sD {
          display: flex;
          margin-top: 1rem;
          font-weight: 400;
          font-size: 1.8rem;
          line-height: 1.6rem;
          text-transform: capitalize;
        }
        .hero__sizesprice {
          margin-top: 2.6rem;
          font-weight: bolder;
          font-size: 1.125rem;
          line-height: 1.125rem;
        }
        .her__sizebuttons {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: row;
          margin-bottom: -0.1rem;

          .avabutton {
            width: 3.9rem;
            height: 2.8rem;
            margin-right: 0.75rem;
            background: #ffffff;
            border: 1px solid #1d1f22;
            box-sizing: border-box;
            font-family: "Segoe UI";
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.125rem;
            cursor: pointer;
            :hover {
              background-color: #1d1f22;
              color: #ffffff;
            }
          }
          .noSize {
            border: 1px solid #a6a6a6;
            color: #a6a6a6;
            width: 3.9rem;
            height: 2.8rem;
            margin-right: 0.75rem;
          }
        }
        .hero__pricetag {
          display: flex;
          margin-top: 0.625rem;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.125rem;
        }
        .hero__addtocart {
          display: flex;
          background-color: #5ece7b;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          color: #ffffff;
          height: 3.25rem;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.2rem;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          :hover {
            background-color: lightgreen;
          }
        }
        .hero__mdesc {
          height: 6.5rem;
          overflow: auto;
          margin-top: 2.5rem;
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.625rem;
        }
      }
    }
  }
  .dark__bg {
    filter: brightness(50%);
  }
`;

function ProductDisplayPage({ addtocart, variable, valuta }) {
  const location = useLocation();
  const { mainData } = location.state;
  const [mainimg, setmainimg] = useState("");
  const [gallery, setgallery] = useState(mainData.gallery);
  const [sizes, setsizes] = useState([]);

  useEffect(() => {
    setsizes(mainData.attributes[0].items);
    setgallery(gallery.slice(1));
  }, [mainData.attributes, gallery]);
  console.log(mainData);
  return (
    <ProdDisp>
      <div className={variable ? "disprod__main dark__bg" : "disprod__main"}>
        <div className="images__row">
          <img
            onClick={() => setmainimg(mainData.gallery[0])}
            className="fChild"
            src={mainData.gallery[0]}
            alt=""
          />
          {gallery.map((image, index) => {
            return (
              <img
                alt=""
                onClick={() => setmainimg(image)}
                key={index}
                src={image}
              />
            );
          })}
        </div>
        <div className="hero__disp">
          <div className="hero__dispImg">
            <img src={mainimg || mainData.gallery[0]} alt="" />
          </div>
          <div className="hero__desc">
            <p className="hero__t">{mainData.name}</p>
            <p className="hero__sD">{mainData.id}</p>
            <p className="hero__sizesprice">SIZE:</p>
            <div className="her__sizebuttons">
              {sizes.map((item) => {
                return (
                  <button className="avabutton" key={item.id}>
                    {item.id}
                  </button>
                );
              })}
            </div>
            <p className="hero__sizesprice">PRICE:</p>
            <p className="hero__pricetag">
              {valuta.value === 0 ? "$" : valuta.value === 1 ? "£" : "¥"}
              {mainData.prices[valuta.value].amount}
            </p>
            <button
              onClick={() => addtocart(mainData.id)}
              className="hero__addtocart"
            >
              Add to cart
            </button>
            <p className="hero__mdesc">{mainData.description}</p>
          </div>
        </div>
      </div>
    </ProdDisp>
  );
}

const mapDispatchProps = (dispatch) => {
  return {
    addtocart: (id) => dispatch(addtocart(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    valuta: state.allProducts.curency,
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ProductDisplayPage);
