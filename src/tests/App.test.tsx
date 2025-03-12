import { vi, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
    afterEach(() => {
        vi.clearAllMocks();
    });
    it("should render the basic components onto the page and render it in a basic state", async () => {
        render(<App />);
        const titleObject = await screen.findByText(
            "Vite React Tailwind Project Template",
        );
        expect(titleObject).toBeVisible();

        const images = await screen.findAllByAltText(/item-/);
        expect(images.length).toBe(1);

        const addItemButton = await screen.findByText("Add Item");
        expect(addItemButton).toBeVisible();

        const removeItemButton = await screen.findByText("Remove Item");
        expect(removeItemButton).toBeVisible();
    });
});
