import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter.value);
	const isShow = useSelector(state => state.counter.isShow);

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const increaseHandler = () => {
		dispatch(counterActions.increase(5));
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.showCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{isShow && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={decrementHandler}>decrement</button>
				<button onClick={increaseHandler}>increment by 5</button>
				<button onClick={incrementHandler}>increment</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;

// class Counter extends Component {
// 	incrementHandle() {
// 		this.props.increment();
// 	}
// 	decrementHandle() {
// 		this.props.decrement();
// 	}
// 	toggleCounterHandle() {}
// 	render() {
// 		return (
// 			<main className={classes.counter}>
// 				<h1>Redux Counter</h1>
// 				<div className={classes.value}>{this.props.counter}</div>
// 				<div>
// 					<button onClick={this.decrementHandle.bind(this)}>decrement</button>
// 					<button onClick={this.incrementHandle.bind(this)}>increment</button>
// 				</div>
// 				<button onClick={this.toggleCounterHandle.bind(this)}>Toggle Counter</button>
// 			</main>
// 		);
// 	}
// }
//
// const mapStateToProps = state => {
// 	return {
// 		counter: state.counter,
// 	};
// };
//
// const mapDispatchToProps = dispatch => {
// 	return {
// 		increment: () => dispatch({ type: 'increment' }),
// 		decrement: () => dispatch({ type: 'decrement' }),
// 	};
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
