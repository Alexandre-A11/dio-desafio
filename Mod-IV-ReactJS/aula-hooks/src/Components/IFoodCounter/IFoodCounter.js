import React, { useEffect, useState } from "react";
import "../IFoodCounter/IFoodCounter.css";

export default function IFoodCounter() {
    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active"); // prettier-ignore

    useEffect(() => {
        document.getElementById("pay-value").innerHTML = 2.0 * value;
    }, [value]);

    function downValue() {
        if (value > 0) {
            setValue(value - 1);
        }

        if (value <= 1) {
            setButtonStyle("counter-button-minus-inactive");
        }
    }

    function upValue() {
        setValue(value + 1);
        setButtonStyle("counter-button-minus-active");
    }

    return (
        <div class="countex-wrapper">
            <button onClick={downValue} className={buttonStyle}>
                -
            </button>

            <p>{value}</p>

            <button onClick={upValue} className="counter-button-plus-active">
                +
            </button>

            <button id="pay-value">12,00</button>
        </div>
    );
}
