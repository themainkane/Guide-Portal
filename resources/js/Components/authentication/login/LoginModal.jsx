import { useContext, useState } from "react";
import useToggle from "../../Helpers/useToggle";
import Modal from "../../Modal/Modal";
import RegisterModal from "../register/RegisterModal";
import axios from "axios";
import UserContext from "../../../context/userContext";

export default function LoginModal() {
    const [isLoginOpen, toggleIsLoginOpen] = useToggle(false);
    const [isRegisterOpen, toggleIsRegisterOpen] = useToggle(false);
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const { user, setUser } = useContext(UserContext);

    const doubleToggle = () => {
        toggleIsLoginOpen();
        toggleIsRegisterOpen();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/login", values);
            console.log(response);
            if (response.status === 200) {
                setUser(response.data.user);
                console.log("User set succesfully");
            }
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.log("VALIDATION FAILED:", error.response.data.errors);
                setErrors(error.response.data.errors);
            } else {
                console.log("ERROR", error);
                setErrors({ general: ["An unexpected error occurred."] });
            }
        }
    };

    const handleChange = (e) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });
    };

    return (
        <>
            {isLoginOpen && (
                <Modal handleDismiss={toggleIsLoginOpen}>
                    <div className="login">
                        <h1 className="login__title">Login</h1>
                        <form
                            action="/login"
                            method="post"
                            onSubmit={handleSubmit}
                            className="login__form"
                        >
                            <label
                                className="login__form-label"
                                htmlFor="username"
                            >
                                Email
                            </label>
                            <input
                                className="login__form-input"
                                type="email"
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <label
                                className="login__form-label"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="login__form-input"
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            <button type="submit">Login</button>
                        </form>
                        <button onClick={doubleToggle}>Register</button>
                    </div>
                </Modal>
            )}
            {isRegisterOpen && (
                <RegisterModal
                    toggleIsRegisterOpen={toggleIsRegisterOpen}
                    isRegisterOpen={isRegisterOpen}
                />
            )}
            <button onClick={toggleIsLoginOpen}>Login</button>
        </>
    );
}
