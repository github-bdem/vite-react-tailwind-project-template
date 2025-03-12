import React from "react";
import {
    counterReducer,
    initialCounterState,
    CounterContext,
} from "./CounterContext";

const CounterContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [state, dispatch] = React.useReducer(
        counterReducer,
        initialCounterState,
    );

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterContextProvider;
