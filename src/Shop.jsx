import { useDispatch } from "react-redux";
import { action } from "./state";
import { bindActionCreators } from "redux";
const Shop = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(action, dispatch);
  return (
    <div>
      <h1>Deposit / Withdraw Money </h1>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          actions.withdrawMoney(100);
        }}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          actions.depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
