import { useDispatch } from "react-redux";
import { action } from "./state";
const Shop = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Deposit / Withdraw Money </h1>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          dispatch(action.withdrawMoney(100));
        }}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          dispatch(action.depositMoney(200));
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
