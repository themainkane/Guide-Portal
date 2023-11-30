
import React, { useContext, useEffect } from "react";
import MapContext from "../context/MapContext";

export default function AddSkyLayer() {
    const { map } = useContext(MapContext);

    useEffect(() => {
        // Function to add the sky layer
        const addSkyLayer = () => {
            if (map && !map.getLayer("sky")) {
                map.addLayer({
                    id: "sky",
                    type: "sky",
                    paint: {
                        "sky-type": "atmosphere",
                        "sky-atmosphere-sun": [0.0, 90.0],
                        "sky-atmosphere-sun-intensity": 15,
                    },
                });
            }
        };

        // Check if the map is loaded, if not, add the sky layer upon load
        if (map) {
            if (map.isStyleLoaded()) {
                addSkyLayer();
            } else {
                map.on("load", addSkyLayer);
            }
        }

        // Cleanup function
        return () => {
            if (map) {
                map.off("load", addSkyLayer);
                if (map.getLayer("sky")) {
                    map.removeLayer("sky");
                }
            }
        };
    }, [map]);

    return null; // This component does not render anything
}
