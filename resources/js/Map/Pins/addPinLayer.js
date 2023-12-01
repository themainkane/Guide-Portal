import { getPins } from "./getPins";

export const addPinLayer = async (map, layerId, layerType) => {
    try {
        const pinsData = await getPins();
        const geojson = {
            type: "FeatureCollection",
            features: pinsData,
        };

        if (map.getSource(layerId)) {
            map.getSource(layerId).setData(geojson);
        } else {
            map.addSource(layerId, {
                type: "geojson",
                data: geojson,
            });
        }

        if (map.getLayer(layerId)) {
            map.removeLayer(layerId);
        }

        map.addLayer({
            id: layerId,
            type: layerType,
            source: layerId,
            layout: {
                "icon-image": ["get", "icon"],
                "icon-size": 0.3,
            },
        });
    } catch (error) {
        console.error("Error adding pin layer", error);
    }
};
