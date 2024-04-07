// called in PinDetails.jsx where event listener for pins are called.
export default function cursorStyle(map, element) {
    map.on("mouseenter", element, () => {
        map.getCanvas().style.cursor = "pointer";
    });

    map.on("mouseleave", element, () => {
        map.getCanvas().style.cursor = "";
    });
}
