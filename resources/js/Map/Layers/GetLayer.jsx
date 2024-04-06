import axios from "axios";

export const GetLayer = async ({ endpoint }) => {
    try {
        const response = await axios.get(endpoint);
        const data = response.data;

        const pins = data.map((pin) => ({
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [pin.longitude, pin.latitude],
            },
            properties: {
                id: pin.id,
                title: pin.title,
                severity: pin.severity.name,
                severity_id: pin.severity_id,
                slug: pin.slug,
                description: pin.description,
                category_id: pin.category_id,
                creator_id: pin.creator_id,
                video: pin.video,
                images: pin.images,
                active: pin.active,
            },
        }));
        console.log(pins);
        return pins;
    } catch (error) {
        console.error("Error fetching pins:", error);
        return [];
    }
};
