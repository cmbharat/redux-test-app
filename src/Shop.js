import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      Buy Adidas
      {/* <button
        className="btn-primary"
        onClick={() => {
          dispatch(actionCreators.depositMoney(100));
        }}
      >
        +
      </button>
      Add this item to cart
      <button
        className="btn-primary"
        onClick={() => {
          dispatch(actionCreators.withdrawMoney(100));
        }}
      >
        - */}
      <button
        className="btn-primary"
        onClick={() => {
          depositMoney(100);
        }}
      >
        +
      </button>
      Add this item to cart
      <button
        className="btn-primary"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Shop;
