import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect, useState, useCallback } from "react";
import axios from "axios";
import MapContext from "../context/MapContext";
import AddSkyLayer from "../Map/AddSkyLayer";
import "./Map.scss";
import CreateNewPin from "./Pins/CreateNewPin";
import Modal from "../Components/Modal/Modal";

export default function Map() {
    const mapContainer = useRef(null);
    const [map, setMap] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [pinCoordinates, setPinCoordinates] = useState(null);
    const [pins, setPins] = useState([]);
    const [pinData, setPinData] = useState(null);
    const [viewPinModalOpen, setViewPinModalOpen] = useState(false);

    const handleDoubleClick = useCallback((event) => {
        console.log("Double click event triggered");
        const coordinates = event.lngLat.toArray();
        setPinCoordinates(coordinates);
        setModalOpen(true);
    }, []);

    useEffect(() => {
        if (!map) {
            mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
            const newMap = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/themainkane/clou0eblx00un01o46rwmb8f4",
                center: [-21.947319849998348, 64.15502843984042],
                zoom: 11,
                pitch: 70,
                maxBounds: [
                    [-24.396308, 63.394966],
                    [-13.499584, 66.536591],
                ],
            });

            newMap.on("load", function () {
                console.log("Map loaded, setting up dblclick event");
                newMap.doubleClickZoom.disable();
                newMap.on("dblclick", handleDoubleClick);
                setMap(newMap);
            });
        }

        return () => {
            if (map) {
                console.log("Detaching dblclick event listener");
                map.off("dblclick", handleDoubleClick);
                console.log("dblclick event listener detached");
                map.remove();
            }
        };
    }, [map, handleDoubleClick]);

    useEffect(() => {
        const fetchPins = async () => {
            try {
                const response = await axios.get("/api/pins");
                setPins(response.data);
            } catch (error) {
                console.error("Error fetching pins:", error);
            }
        };

        fetchPins();
    }, []);
    const handlePinClick = (pin) => {
        setPinData(pin);
        setViewPinModalOpen(true); // Open the view pin modal
        setModalOpen(false); // Ensure the create pin modal is closed
    };

    useEffect(() => {
        if (map && pins.length > 0) {
            pins.forEach((pin) => {
                const marker = new mapboxgl.Marker()
                    .setLngLat([pin.longitude, pin.latitude])
                    .addTo(map);

                marker
                    .getElement()
                    .addEventListener("click", () => handlePinClick(pin));
            });
        }
    }, [map, pins]);

    const handleModalDismiss = () => {
        setModalOpen(false);
        setPinCoordinates(null);
    };

    return (
        <MapContext.Provider value={{ map }}>
            <div className="map" ref={mapContainer} />
            {map && <AddSkyLayer />}
            {modalOpen && (
                <Modal handleDismiss={handleModalDismiss}>
                    <CreateNewPin
                        coordinates={pinCoordinates}
                        onClose={handleModalDismiss}
                    />
                </Modal>
            )}
            {viewPinModalOpen && pinData && (
                <Modal handleDismiss={() => setViewPinModalOpen(false)}>
                    <div className="pin-information-modalBox">
                        <h3 className="pin-information-modalBox-title">
                            {pinData.title}
                        </h3>
                        <p className="pin-information-modalBox-description">
                            {pinData.description}
                        </p>
                    </div>
                </Modal>
            )}
        </MapContext.Provider>
    );
}
