import React from "react";

const minimumCountValue = 1;
const maximumCountValue = 9;

interface State {
    count: number;
}

enum CounterAction {
    INCREMENT_COUNT = "INCREMENT_COUNT",
    DECREMENT_COUNT = "DECREMENT_COUNT",
}

interface Action {
    type: CounterAction.INCREMENT_COUNT | CounterAction.DECREMENT_COUNT;
    payload?: {
        count?: number;
    };
}

const counterReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case CounterAction.DECREMENT_COUNT: {
            const newCountValue =
                state.count - 1 < minimumCountValue
                    ? minimumCountValue
                    : state.count - 1;
            return {
                ...state,
                count: newCountValue,
            };
        }
        case CounterAction.INCREMENT_COUNT: {
            const newCountValue =
                state.count + 1 > maximumCountValue
                    ? maximumCountValue
                    : state.count + 1;
            return {
                ...state,
                count: newCountValue,
            };
        }
        default:
            return state;
    }
};

interface ContextProps {
    state: State;
    dispatch: React.Dispatch<Action>;
}

const initialCount = 1;

const initialCounterState = {
    count: initialCount,
};

const CounterContext = React.createContext<ContextProps>({} as ContextProps);

const useCounterContext = () => {
    const context = React.useContext(CounterContext);
    if (!context) {
        throw new Error(
            "useCounterContext must be used within a CounterContextProvider",
        );
    }
    return context;
};

export {
    useCounterContext,
    initialCounterState,
    counterReducer,
    CounterContext,
    CounterAction,
    minimumCountValue,
    maximumCountValue,
};
