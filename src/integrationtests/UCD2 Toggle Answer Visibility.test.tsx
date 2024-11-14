import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { RevealAnswer } from "../components/RevealAnswer";
import { expectAnswerIsPresent } from "../components/RevealAnswer.test";

describe("UCD2 Toggle Answer Visibility", () => {
    beforeEach(() => {
        render(<RevealAnswer />);
    });

    test("Precondition - answer is not shown", async () => {
        expectAnswerIsPresent(false);
    });

    // Click Toggle Answer Visibility button, system shows answer
    test("Click Toggle Answer Visibility button, shows answer, click answer button again, hides answer", async () => {
        const toggleAnswerButton = screen.getByRole("button", {
            name: /Toggle Answer Visibility/i,
        });

        // Postcondition:
        // The answer is shown if it was hidden
        expectAnswerIsPresent(false);
        await act(async () => {
            toggleAnswerButton.click();
        });
        expectAnswerIsPresent(true);

        //click answer button again
        expect(toggleAnswerButton).toBeVisible();
        await act(async () => {
            toggleAnswerButton.click();
        });

        // Postcondition:
        // The answer is hidden if it was shown
        expectAnswerIsPresent(false);
    });
});
