import { useDispatch, useSelector } from "react-redux";
import { action } from "./state";
import { bindActionCreators } from "redux";
const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(action, dispatch);
  const balance = useSelector((state) => state.amount);
  return (
    <div>
      <h1>Deposit / Withdraw Money </h1>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        -
      </button>
      Updated Balance : {balance}
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
