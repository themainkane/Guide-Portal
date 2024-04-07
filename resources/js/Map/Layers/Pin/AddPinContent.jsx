export default function AddPinContent({ coordinates }) {
    // const handleClick = () => {
    //     toggleIsMyFormModalOpen(!isMyFormModalOpen);
    // };

    return (
        <>
            <div className="pop-up">
                <h3>
                    [{coordinates[0]}, {coordinates[1]}]
                </h3>
                <button>Create a pin</button>
                {/* {user ? (
                    <button>Create a pin</button>
                ) : (
                    <button>
                        <a href="/log-in">Log in</a>
                    </button>
                )} */}
            </div>
        </>
    );
}
