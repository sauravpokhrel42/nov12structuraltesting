import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [answerVisible, setanswerVisible] = useState<boolean>(false);
    const [answerHintVisible, setanswerHintVisible] = useState<boolean>(false);

    function toggleVisibility() {
        if (answerVisible) {
            setanswerVisible(false);
        } else {
            setanswerVisible(true);
        }
    }

    function toggleHint() {
        if (answerHintVisible) {
            setanswerHintVisible(false);
        } else {
            setanswerHintVisible(true);
        }
    }

    return (
        <div>
            Answer: {answerVisible && 42}
            {answerHintVisible ? "the hint" : ""}
            <span>
                <Button onClick={toggleVisibility}>
                    Toggle Answer Visibility
                </Button>
            </span>
            <span>
                <Button onClick={toggleHint}>Toggle Hint Visibility</Button>
            </span>
        </div>
    );
}
