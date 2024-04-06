import { getLayer } from "./GetLayer";
import MapContext from "../../context/MapContext";
import { useContext, useEffect } from "react";

export const AddLayerComponent = ({ endpoint, source, image }) => {
    const { map } = useContext(MapContext);

    useEffect(() => {
        const addLayer = async () => {
            try {
                const layerData = await getLayer(endpoint);
                const geojson = {
                    type: "FeatureCollection",
                    features: layerData,
                };
                map.getSource(source)
                    ? map.getSource(source).setData(geojson)
                    : map.addSource(source, {
                          type: "geojson",
                          data: geojson,
                      });

                // check for existence of layer and remove before re-adding
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
            }
        };

        addLayer(); //origionally whole component, but moved into use effect to allow for use of context and prevent using async on top level of component
    }, [map, endpoint, source, image]);

    return null; // Since this component only performs side effects, it doesn't need to render anything
};
