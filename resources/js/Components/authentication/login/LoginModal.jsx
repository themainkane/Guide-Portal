import useToggle from "../../Helpers/use-toggle";
import Modal from "../../Modal/Modal";

export default function LoginModal() {
    const [isModalOpen, toggleIsModalOpen] = useToggle(false);

    return (
        <>
            {isModalOpen && (
                <Modal handleDismiss={toggleIsModalOpen}>
                    <h1>Login</h1>
                    <form action="#">
                        <label htmlFor="username">Username</label>
                        <input type="text" />
                        <label htmlFor="password">Password</label>
                        <input type="text" />
                    </form>
                </Modal>
            )}
            <button onClick={toggleIsModalOpen}>Login</button>
        </>
    );
}
