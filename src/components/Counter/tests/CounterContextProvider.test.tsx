import { vi, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import CounterContextProvider from "../CounterContextProvider";
import { useContext } from "react";
import { CounterContext } from "../CounterContext";

const MockChild = () => {
    const { state } = useContext(CounterContext);
    return (
        <>
            <div data-testid={`test-item-${state.count}`}>{state.count}</div>
        </>
    );
};

describe("CounterProvider", () => {
    afterEach(() => {
        vi.clearAllMocks();
    });
    it("should provide the context values to its children", async () => {
        render(
            <CounterContextProvider>
                <MockChild />
            </CounterContextProvider>,
        );

        const mockDiv = await screen.findByTestId("test-item-1");
        expect(mockDiv).toBeVisible();
    });
});
