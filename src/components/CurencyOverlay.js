import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { setCurrency } from "../redux/actions/productsActions";

const CurenctyOver = styled.div`
  .curr__main {
    z-index: 3;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 114px;
    height: 169px;
    top: 65px;
    right: 78px;
    background-color: #ffffff;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    .curr__value {
      display: flex;
      width: 59px;
      height: 29px;
      cursor: pointer;
      :hover {
        background-color: whitesmoke;
      }
      margin-top: 20px;
      margin-left: 20px;
      font-weight: 500;
      font-size: 18px;
      line-height: 28.8px;
    }
  }
`;

function CurencyOverlay({ setCurrency }) {
  return (
    <CurenctyOver>
      <div className="curr__main">
        <label
          onClick={() => setCurrency(0)}
          className="curr__value"
          htmlFor=""
        >
          $ USD
        </label>
        <label
          onClick={() => setCurrency(1)}
          className="curr__value"
          htmlFor=""
        >
          £ GBP
        </label>
        <label
          onClick={() => setCurrency(3)}
          className="curr__value"
          htmlFor=""
        >
          ¥ JPY
        </label>
      </div>
    </CurenctyOver>
  );
}
const mapDispatchProps = (dispatch) => {
  return {
    setCurrency: (value) => dispatch(setCurrency(value)),
  };
};
export default connect(null, mapDispatchProps)(CurencyOverlay);
