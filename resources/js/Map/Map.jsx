import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect } from "react";
import "./Map.scss";

export default function Map() {
    const mapContainer = useRef(null);

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
        // Clean up function
        return () => map.remove();
    }, []);

    return <div className="map" ref={mapContainer} />;
}
