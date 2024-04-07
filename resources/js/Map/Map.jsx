import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect, useState } from "react";
import MapContext from "../context/MapContext";
import AddSkyLayer from "../Map/AddSkyLayer";
import { AddLayerComponent } from "./Layers/AddLayerComponent";
import "./Map.scss";
import AddPin from "./Layers/Pin/AddPin";

export default function Map() {
    const mapContainer = useRef(null);
    const [map, setMap] = useState(null); // // useState to manage the map instance

    useEffect(() => {
        mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/themainkane/clou0eblx00un01o46rwmb8f4",
            center: [-21.947319849998348, 64.15502843984042],
            zoom: 11,
            pitch: 70,
            maxBounds: [
                // bounds for Iceland
                [-24.396308, 63.394966], // Southwest coordinates
                [-13.499584, 66.536591], // Northeast coordinates
            ],
        });
        setMap(map); // // Update state with the created map instance

        //Get Layer was tested here

        // Clean up function **called only when the component unmounts.
        return () => map.remove();
    }, []);

    return (
        // set the map context to the value of the map state and & ".Provide" to all children of Map.
        <MapContext.Provider value={{ map }}>
            <div className="map" ref={mapContainer} />
            {map && <AddSkyLayer />}
            {map && (
                <AddLayerComponent
                    endpoint="/api/hazard-layer"
                    source="hazard"
                    image="exclamation"
                    imageSize={0.3}
                />
            )}
            {map && (
                <AddLayerComponent
                    endpoint="/api/interp-layer"
                    source="interp"
                    image="information"
                    imageSize={3.5}
                />
            )}
            {map && <AddPin />}
        </MapContext.Provider>
    );
}
