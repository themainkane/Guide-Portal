import { getLayer } from "./GetLayer";
import MapContext from "../../context/MapContext";
import { useContext } from "react";

export const AddLayer = async (endpoint, source, image) => {
    const { map } = useContext(MapContext);

    try {
        const layerData = await getLayer(endpoint);
        const geojson = {
            type: "FeatureCollection",
            features: layerData,
        };
        map.getSource(source)
            ? map.getSource(source).SetData(geojson)
            : map.addSource(source, {
                  type: "geojson",
                  data: geojson,
              });

        // check for existance of layer and remove, before re-adding
        if (map.getLayer(source)) {
            map.removeLayer(source);
        }

        map.addLayer({
            id: source,
            type: "symbol",
            source: source,
            layout: {
                "icon-image": image,
                "icon-size": 0.3,
            },
        });

        console.log(geojson);
    } catch (error) {
        console.error("Error fetching Hazards", error);
        return [];
    }
};
