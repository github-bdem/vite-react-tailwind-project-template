import { CounterAction, useCounterContext } from "./CounterContext";

function AdjustCountButtons() {
    const { dispatch } = useCounterContext();

    const addCount = () => {
        dispatch({
            type: CounterAction.INCREMENT_COUNT,
        });
    };

    const removeCount = () => {
        dispatch({
            type: CounterAction.DECREMENT_COUNT,
        });
    };

    return (
        <div className="join">
            <button className="btn join-item btn-accent" onClick={removeCount}>
                Remove Item
            </button>
            <button className="btn join-item btn-accent" onClick={addCount}>
                Add Item
            </button>
        </div>
    );
}

export default AdjustCountButtons;
