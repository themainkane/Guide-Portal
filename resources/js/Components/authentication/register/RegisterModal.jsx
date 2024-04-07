import Modal from "../../Modal/Modal";

import React, { useState } from "react";
import axios from "axios";
import useToggle from "../../Helpers/useToggle";
import SuccessModal from "./SuccessModal";

export default function RegisterModal({
    toggleIsRegisterOpen,
    isRegisterOpen,
}) {
    const [isSuccessOpen, toggleIsSuccessOpen] = useToggle(false);
    const [userDetails, setuserDetails] = useState({
        email: "",
        name: "",
        username: "",
        password: "",
        password_confirmation: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setuserDetails((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({});
        // *****Finish handle submit***

        try {
            const response = await axios.post("/register", userDetails);
            toggleIsRegisterOpen(!isRegisterOpen);
            toggleIsSuccessOpen(!isSuccessOpen);
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.log(
                    "VALIDATION FAILED:",
                    error.response.data.errors,
                    setErrors(error.response.data.errors)
                );
            } else {
                console.log("ERROR", error);
                setErrors({ general: ["An unexpected error occurred."] });
            }
        }
    };

    return (
        <>
            {/* {isSuccessOpen && (
                <SuccessModal toggleIsSuccessOpen={toggleIsSuccessOpen} />
            )} */}
            <Modal handleDismiss={toggleIsRegisterOpen}>
                <div className="register">
                    <h1 className="register__title">Register</h1>
                    <form
                        className="register__form"
                        action="/register"
                        method="post"
                        onSubmit={handleSubmit}
                    >
                        <label className="register__form-label" htmlFor="name">
                            Name
                        </label>
                        <br />
                        <input
                            className="register__form-input"
                            type="text"
                            name="name"
                            id="name"
                            value={userDetails.name}
                            onChange={handleChange}
                        />
                        <br />
                        <label className="register__form-label" htmlFor="email">
                            email
                        </label>
                        <br />
                        <input
                            className="register__form-input"
                            type="email"
                            name="email"
                            id="email"
                            value={userDetails.email}
                            onChange={handleChange}
                        />
                        <br />
                        {errors.email ? (
                            <div className="errors">
                                {errors.email.map((error, i) => (
                                    <div key={i} className="error">
                                        {error}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            ""
                        )}
                        <br />

                        <label
                            className="register__form-label"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <br />
                        <input
                            className="register__form-input"
                            type="text"
                            name="username"
                            id="username"
                            value={userDetails.username}
                            onChange={handleChange}
                        />
                        <br />
                        <label
                            className="register__form-label"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <br />
                        <input
                            className="register__form-input"
                            type="password"
                            name="password"
                            id="password"
                            value={userDetails.password}
                            onChange={handleChange}
                        />
                        <br />
                        {errors.password ? (
                            <div className="errors">
                                {errors.password.map((error, i) => (
                                    <div key={i} className="error">
                                        {error}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            ""
                        )}
                        <label
                            className="register__form-label"
                            htmlFor="password"
                        >
                            Confirm Password
                        </label>
                        <br />
                        <input
                            className="register__form-input"
                            type="password"
                            name="password_confirmation"
                            id="password_confirmation"
                            value={userDetails.password_confirmation}
                            onChange={handleChange}
                        />
                        <br />
                        {errors.password_confirmation ? (
                            <div className="errors">
                                {errors.password_confirmation.map(
                                    (error, i) => (
                                        <div key={i} className="error">
                                            {error}
                                        </div>
                                    )
                                )}
                            </div>
                        ) : (
                            ""
                        )}
                        <button className="submit-button">Register</button>
                    </form>
                </div>
            </Modal>
        </>
    );
}
