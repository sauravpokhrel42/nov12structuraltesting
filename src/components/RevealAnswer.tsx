import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [answerVisible, setanswerVisible] = useState<boolean>(false);

    function toggleVisibility() {
        if (answerVisible) {
            setanswerVisible(false);
        } else {
            setanswerVisible(true);
        }
    }

    /*
    function unusedFunction() {
        let x = 0;
        if (answerVisible) {
            x = 1;
        }
    }
    */

    return (
        <div>
            Answer: {answerVisible && 42}
            <span>
                <Button onClick={toggleVisibility}>
                    Toggle Answer Visibility
                </Button>
            </span>
        </div>
    );
    // const [answerHintVisible, setanswerHintVisible] = useState<boolean>(false);
    // {answerHintVisible ? "here is the hint" : ""}
}
