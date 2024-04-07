import mapboxgl from "mapbox-gl";
import React, { useEffect, useState, useCallback, useContext } from "react";
import { createRoot } from "react-dom/client";
import MapContext from "../../../context/MapContext";
import cursorStyle from "../../cursorStyle";
import PinDetailsContent from "./PinDetailsContent";

export default function ShowPinDetails() {
    const { map } = useContext(MapContext);

    const [details, setDetails] = useState({
        longitude: null,
        latitude: null,
        title: "",
        slug: "",
        severity: "",
        severity_id: "",
        category_id: null,
        description: "",
        id: "",
        images: "",
    });

    const handleClick = useCallback(
        (e) => {
            const pinProperties = e.features[0].properties;
            const coordinates = e.features[0].geometry.coordinates.slice();
            console.log(pinProperties);

            const newDetails = {
                ...details,
                longitude: coordinates[0],
                latitude: coordinates[1],
                title: pinProperties.title,
                slug: pinProperties.slug,
                severity: pinProperties.severity,
                severity_id: pinProperties.severity_id,
                type_id: pinProperties.type_id,
                description: pinProperties.description,
                id: pinProperties.id,
                images: pinProperties.images,
            };

            const placeHolder = document.createElement("div");
            placeHolder.className = "pop-up";
            const popUpRoot = createRoot(placeHolder);
            popUpRoot.render(<PinDetailsContent details={newDetails} />);
            const myPopUp = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: true,
            })
                .setDOMContent(placeHolder)
                .setLngLat(coordinates)
                .addTo(map);

            myPopUp.on("close", () => {
                if (myPopUp.isOpen()) {
                    myPopUp.remove();
                }
            });

            setDetails(newDetails);
        },
        [details, map]
    );

    const displayPopUp = (element) => {
        map.on("click", element, handleClick);
        console.log(details);
        return () => {
            map.off("click", element, handleClick);
        };
    };

    useEffect(() => {
        displayPopUp("hazard");
        displayPopUp("interp");
    }, [map, details, handleClick]);

    cursorStyle(map, "hazard");
    cursorStyle(map, "interp");
    return null;
}
