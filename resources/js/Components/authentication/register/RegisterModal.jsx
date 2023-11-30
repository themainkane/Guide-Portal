import Modal from "../../Modal/Modal";

export default function RegisterModal({ toggleIsRegisterOpen }) {
    return (
        <>
            <Modal handleDismiss={toggleIsRegisterOpen}>
                <h1>Register</h1>
                <form action="#">
                    <label htmlFor="fullnamee">Full Name</label>
                    <input type="text" />
                    <label htmlFor="email"></label>
                    <input type="email" />
                    <label htmlFor="username">Username</label>
                    <input type="text" />
                    <label htmlFor="password">Password</label>
                    <input type="text" />
                    <label htmlFor="password">Confirm Password</label>
                    <input type="text" />
                    <button type="submit">Register</button>
                </form>
            </Modal>
        </>
    );
}
