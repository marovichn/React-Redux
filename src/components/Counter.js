import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.con.counter);
  const hidden = useSelector((state) => state.con.hidden);

  const toggleCounterHandler = () => {
    dispatch(counterActions.hide());
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementHandlerByFive = () => {
    dispatch(counterActions.increase({ amount: 5 }));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!hidden && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementHandlerByFive}>Increment 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
/* 
class Counter extends Component {
  constructor() {
    super();
  }

  incrementHandler() {
    this.props.IN();
  }
  decrementHandler() {
    this.props.DE();
  }
  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
} */

/* 
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    IN: () => {
      dispatch({ type: "IN" });
    },
    DE: () => {
      dispatch({ type: "DE" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); */
