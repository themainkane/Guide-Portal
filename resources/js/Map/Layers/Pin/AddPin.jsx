import mapboxgl from "mapbox-gl";
import "./addPin.scss";
import React, { useEffect, useCallback, useContext } from "react";
import { createRoot } from "react-dom/client";
import AddPinContent from "./AddPinContent";
import MapContext from "../../../context/MapContext";

export default function AddPin() {
    const { map } = useContext(MapContext);

    const handleDblClick = useCallback(
        (e) => {
            const coordinates = [
                e.lngLat.lng.toFixed(6),
                e.lngLat.lat.toFixed(6),
            ];

            const placeHolder = document.createElement("div");
            placeHolder.className = "pop-up";
            const popUpRoot = createRoot(placeHolder);
            popUpRoot.render(<AddPinContent coordinates={coordinates} />); // origionally attempting to useState, which was not updated intime to be used directly. Const instead.
            new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: true,
            })
                .setDOMContent(placeHolder)
                .setLngLat([e.lngLat.lng.toFixed(6), e.lngLat.lat.toFixed(6)])
                .addTo(map);
        },
        [map]
    );

    useEffect(() => {
        map.doubleClickZoom.disable();
        map.on("dblclick", handleDblClick);
        return () => {
            map.off("dblclick", handleDblClick);
        };
    }, [map]);

    return null; //will later return modal with details of pin or CRUD form
}
