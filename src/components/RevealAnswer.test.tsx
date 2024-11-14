import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { RevealAnswer } from "./RevealAnswer";

export function expectAnswerIsPresent(shouldBeThere: boolean): void {
    let answerText = screen.queryByText(/42/);
    if (shouldBeThere) expect(answerText).toBeInTheDocument();
    else expect(answerText).toBeNull();
}

describe("Reveal Answer", () => {
    beforeEach(() => {
        render(<RevealAnswer />);
    });

    test("Answer field is shown", () => {
        // We use `getByText` because the text MUST be there
        const answerFieldName = screen.getByText(/Answer:/i);
        expect(answerFieldName).toBeInTheDocument();
    });

    test("Answer is not initially shown", () => {
        expectAnswerIsPresent(false);
    });

    // Click "Toggle Answer Visibility" button

    test("There is a Toggle Answer Visibility button", () => {
        const toggleAnswerButton = screen.getByRole("button", {
            name: /Toggle Answer Visibility/i,
        });
        expect(toggleAnswerButton).toBeInTheDocument();
    });

    test("Click Toggle Answer Visibility button", async () => {
        const toggleAnswerButton = screen.getByRole("button", {
            name: /Toggle Answer Visibility/i,
        });
        await act(async () => {
            toggleAnswerButton.click();
        });
    });

    // Click Toggle Answer Visibility button, system shows answer
    test("Click Toggle Answer Visibility button, system shows answer", async () => {
        const toggleAnswerButton = screen.getByRole("button", {
            name: /Toggle Answer Visibility/i,
        });
        await act(async () => {
            toggleAnswerButton.click();
        });
        //system shows answer
        expectAnswerIsPresent(true);
    });

    // Click Toggle Answer Visibility button, system shows answer
    test("Click Toggle Answer Visibility button, click answer button again, system hides answer", async () => {
        const toggleAnswerButton = screen.getByRole("button", {
            name: /Toggle Answer Visibility/i,
        });
        await act(async () => {
            toggleAnswerButton.click();
        });
        await act(async () => {
            toggleAnswerButton.click();
        });

        //system hides answer
        expectAnswerIsPresent(false);

        // answer button still there
        // only testing this because this component changes visibility
        // so an easy bug would be hiding too much on the page
        expect(toggleAnswerButton).toBeVisible();
    });
});
