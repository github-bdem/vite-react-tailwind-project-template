import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { CounterContext } from "../CounterContext";
import Counter from "../Counter";

const renderCounterWithProvider = (numberOfItems: number) => {
    render(
        <CounterContext.Provider
            value={{ state: { count: numberOfItems }, dispatch: () => null }}
        >
            <Counter />
        </CounterContext.Provider>,
    );
};

describe("Counter", () => {
    it("should show state.count number of images", async () => {
        renderCounterWithProvider(5);
        const images = await screen.findAllByAltText(/item-/);
        expect(images.length).toBe(5);
    });
});
