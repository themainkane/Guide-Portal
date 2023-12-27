// import axios from "axios";

// const getIconName = (pin) => {
//     switch (pin.category_id) {
//         case 1:
//             return "nameOfOurImg";
//         case 2:
//             return "nameOfOurImg";
//         default:
//             return "default-icon";
//     }
// };

// export const getPins = async () => {
//     try {
//         const response = await axios.get("/api/pins");
//         const data = response.data;

//         const pins = data.map((item) => ({
//             type: "Feature",
//             geometry: {
//                 type: "Point",
//                 coordinates: [item.longitude, item.latitude],
//             },
//             properties: {
//                 id: item.id,
//                 title: item.title,
//                 slug: item.slug,
//                 icon: getIconName(item),
//             },
//         }));
//         return pins;
//     } catch (error) {
//         console.error("Error fetching pins:", error);
//         return [];
//     }
// };
