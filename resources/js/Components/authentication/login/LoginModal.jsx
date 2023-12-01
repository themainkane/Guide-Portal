import useToggle from "../../Helpers/use-toggle";
import Modal from "../../Modal/Modal";
import RegisterModal from "../register/RegisterModal";

export default function LoginModal() {
    const [isLoginOpen, toggleIsLoginOpen] = useToggle(false);
    const [isRegisterOpen, toggleIsRegisterOpen] = useToggle(false);

    const doubleToggle = () => {
        toggleIsLoginOpen();
        toggleIsRegisterOpen();
    };

    return (
        <>
            {isLoginOpen && (
                <Modal handleDismiss={toggleIsLoginOpen}>
                    <h1>Login</h1>
                    <form action="#">
                        <label htmlFor="username">Username</label>
                        <input type="text" />
                        <label htmlFor="password">Password</label>
                        <input type="text" />
                        <button type="submit">Login</button>
                    </form>
                    <button onClick={doubleToggle}>Register</button>
                </Modal>
            )}
            {isRegisterOpen && (
                <RegisterModal toggleIsRegisterOpen={toggleIsRegisterOpen} />
            )}
            <button onClick={toggleIsLoginOpen}>Login</button>
        </>
    );
}
