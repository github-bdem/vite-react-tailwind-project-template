import { vi, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterContext } from "../CounterContext";
import AdjustCountButtons from "../AdjustCountButtons";

const user = userEvent.setup();

const dispatchMock = vi.fn();

const renderButtonsWithProvider = () => {
    render(
        <CounterContext.Provider
            value={{ state: { count: 1 }, dispatch: dispatchMock }}
        >
            <AdjustCountButtons />
        </CounterContext.Provider>,
    );
};

describe("AdjustCountButtons", () => {
    afterEach(() => {
        vi.clearAllMocks();
    });
    it("should dispatch an increment count action when the add item button is clicked", async () => {
        renderButtonsWithProvider();
        const addItemButton = await screen.findByText("Add Item");
        await user.click(addItemButton);
        expect(dispatchMock).toHaveBeenCalledWith({
            type: "INCREMENT_COUNT",
        });
    });
    it("should dispatch an decrement count action when the remove item button is clicked", async () => {
        renderButtonsWithProvider();
        const removeItemButton = await screen.findByText("Remove Item");
        await user.click(removeItemButton);
        expect(dispatchMock).toHaveBeenCalledWith({
            type: "DECREMENT_COUNT",
        });
    });
});
