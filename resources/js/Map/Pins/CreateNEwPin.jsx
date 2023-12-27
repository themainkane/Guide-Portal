import React, { useState } from "react";
import axios from "axios";

export default function CreateNewPin({ coordinates, onClose }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        active: true,
    });

    const handleInputChange = (e) => {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Form Data:", formData);
            console.log("Coordinates:", coordinates);
            // Make an API request to save the pin data
            const response = await axios.post("/api/pins/store", {
                ...formData,
                longitude: coordinates[0],
                latitude: coordinates[1],
            });

            console.log("Pin created successfully:", response.data);
            onClose();
        } catch (error) {
            console.error("Error creating pin:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
                Description:
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
                Active:
                <input
                    type="checkbox"
                    name="active"
                    checked={formData.active}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">Save Pin</button>
        </form>
    );
}
