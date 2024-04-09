export default function PinDetailsContent({
    details,
    toggleIsDetailsModalOpen,
}) {
    const handleClick = () => {
        console.log("clicked");
        toggleIsDetailsModalOpen();
    };
    return (
        <>
            <h1>{details.title}</h1>
            <button className="more-details-button" onClick={handleClick}>
                More Details
            </button>
        </>
    );
}
