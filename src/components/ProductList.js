import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Product from "./Product";
import { loadcurrentitem } from "../redux/actions/productsActions";
import { connect } from "react-redux";

const ProdStyles = styled.div`
  .home {
    display: flex;
    flex-wrap: wrap;
    z-index: 1;
    background-color: #ffffff;
  }
  .prod__title {
    margin-top: 80px;
    margin-left: 101px;
    font-family: "Raleway-Regular";
    font-size: 42px;
    margin-bottom: 103px;
  }
  .prod__items {
    display: flex;
    margin-right: 40px;
    margin-left: 0;
    margin-bottom: 103px;
  }
  .prod__itemms {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 100px;
    margin-right: 60px;
  }
  .bg__dark {
    filter: brightness(57%);
  }
`;

function ProductList({ variable, products, filteritems, loadcurrentitem }) {
  const [Data, setData] = useState([]);

  useEffect(() => {
    async function fetchprod() {
      const datagrab = await filteritems;
      setData(datagrab);
    }
    fetchprod();
  }, [products, filteritems]);

  return (
    <ProdStyles>
      <div className={variable ? "home bg__dark" : "home"}>
        <div className="prod__title">
          <p>Category name</p>
        </div>
        <div className="prod__itemms">
          {Data?.map((object) => {
            return (
              <div key={object.id} className="prod__items">
                <Product item={object} />
              </div>
            );
          })}
        </div>
      </div>
    </ProdStyles>
  );
}

const mapStateToProps = (state) => {
  return {
    filteritems: state.allProducts.filtereditems,
    products: state.allProducts.products,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    loadcurrentitem: (products, category) =>
      dispatch(loadcurrentitem(products, category)),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ProductList);
