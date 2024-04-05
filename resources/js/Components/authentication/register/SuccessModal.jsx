import Modal from "../../Modal/Modal";

export default function SuccessModal(toggleIsSuccessOpen) {
    return (
        <>
            <Modal handleDismiss={toggleIsSuccessOpen}>
                <p>Registration Complete. Welcome Username</p>
            </Modal>
        </>
    );
}
