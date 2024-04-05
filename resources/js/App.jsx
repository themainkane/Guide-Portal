import React from "react";
import { useState, useEffect } from "react";
import Map from "./Map/Map.jsx";
import LoginModal from "./Components/authentication/login/LoginModal.jsx";
import UserContext from "./context/userContext.js";
import RegisterModal from "./Components/authentication/register/RegisterModal.jsx";
import { User } from "react-feather";

export default function App() {
    // State for the main content of the app
    const [content, setContent] = useState("");

    // State for user authentication status
    const [user, setUser] = useState(null);

    // Function to load user authentication status from the server
    // and update the user state accordingly
    //  "/api/user" is where the application is fetching data from
    const loadUserStatus = async () => {
        const response = await fetch("/api/user", {
            headers: {
                Accept: "application/json",
            },
        });

        const data = await response.json();

        // we check if the user is authorized based on the response
        if (!(data.unauthorized || false)) {
            setUser(data);
        } else {
            setUser(false); // false - user not logged in
        }
    };
    // Effect hook to load user status when the component mounts
    useEffect(() => {
        if (user === null) {
            // load user status anytime user is null, i.e. we don't know their status
            loadUserStatus();
        }
    }, [user]);
    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                <Map />
                <LoginModal />
            </UserContext.Provider>
        </>
    );
}
