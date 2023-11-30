import React from "react";
import { X as Close } from "react-feather"; // React icons
import FocusLock from "react-focus-lock"; // user is locked to the last viewed component
import { RemoveScroll } from "react-remove-scroll"; // user is unable to scroll the contennt while Modal window is active

import "./Modal.scss";

export default function Modal({ handleDismiss, children }) {
    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === "Escape") {
                handleDismiss();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleDismiss]);

    return (
        <FocusLock>
            <RemoveScroll>
                <div className="wrapper">
                    <div className="overlay" onClick={handleDismiss} />
                    <div className="dialog">
                        <button className="closeBtn" onClick={handleDismiss}>
                            <Close />
                        </button>
                        {children}
                    </div>
                </div>
            </RemoveScroll>
        </FocusLock>
    );
}
