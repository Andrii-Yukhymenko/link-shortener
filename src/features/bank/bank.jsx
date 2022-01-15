import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMoney, addMoney} from "./bankSlice";

function Bank() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.bank.value);
  return (
    <>
      <h1>Банк</h1>
      <p>Ваш счет: {value}</p>
      <button onClick={() => dispatch(addMoney(5))}>Положить деньги</button>
      <button onClick={() => {
        dispatch(getMoney(5))
      }  }>Снять деньги</button>
    </>
  );
}

export default Bank;