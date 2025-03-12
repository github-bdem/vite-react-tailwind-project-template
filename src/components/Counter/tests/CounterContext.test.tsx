import { vi, describe, it } from "vitest";
import {
    CounterAction,
    counterReducer,
    minimumCountValue,
    maximumCountValue,
    useCounterContext,
} from "../CounterContext";

vi.mock("react", () => {
    return { default: { createContext: vi.fn(), useContext: () => undefined } };
});

describe("useCounterContext", () => {
    afterEach(() => {
        vi.clearAllMocks();
    });
    it("should throw an error if context is not available", () => {
        expect(useCounterContext).toThrow(Error);
        expect(useCounterContext).toThrow(
            "useCounterContext must be used within a CounterContextProvider",
        );
    });
});

describe.concurrent("counterReducer", () => {
    it("should return state if an invalid action is passed", () => {
        const mockState = {
            count: 1,
        };

        const mockActionType = "THIS DOESN'T EXIST" as CounterAction;

        const mockAction = {
            type: mockActionType,
        };

        const modifiedState = counterReducer(mockState, mockAction);
        expect(modifiedState.count).toBe(1);
    });
    it("should increment state.count when provided with CounterAction.INCREMENT_COUNT", () => {
        const mockState = {
            count: 1,
        };

        const mockActionType = CounterAction.INCREMENT_COUNT;

        const mockAction = {
            type: mockActionType,
        };

        const modifiedState = counterReducer(mockState, mockAction);
        expect(modifiedState.count).toBe(2);
    });

    it("should not increment state.count when state.count is at maximumCountValue", () => {
        const mockState = {
            count: maximumCountValue,
        };

        const mockActionType = CounterAction.INCREMENT_COUNT;

        const mockAction = {
            type: mockActionType,
        };

        const modifiedState = counterReducer(mockState, mockAction);
        expect(modifiedState.count).toBe(maximumCountValue);
    });

    it("should decrement state.count when provided with CounterAction.DECREMENT_COUNT", () => {
        const mockState = {
            count: 2,
        };

        const mockActionType = CounterAction.DECREMENT_COUNT;

        const mockAction = {
            type: mockActionType,
        };

        const modifiedState = counterReducer(mockState, mockAction);
        expect(modifiedState.count).toBe(1);
    });

    it("should not decrement state.count when state.count is at minimumCountValue", () => {
        const mockState = {
            count: minimumCountValue,
        };

        const mockActionType = CounterAction.DECREMENT_COUNT;

        const mockAction = {
            type: mockActionType,
        };

        const modifiedState = counterReducer(mockState, mockAction);
        expect(modifiedState.count).toBe(minimumCountValue);
    });
});
