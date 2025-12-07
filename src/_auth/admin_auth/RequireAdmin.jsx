// src/RequireAdmin.jsx
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getCurrent, isAdminLoggedIn } from "./admin_auth";

export default function RequireAdmin({ children }) {
    const [checking, setChecking] = useState(true);
    const [allowed, setAllowed] = useState(false);
    const location = useLocation();

    useEffect(() => {
        async function check() {
            try {
                const user = await getCurrent()
                if (!user) {
                    setAllowed(false);
                    return;
                }
                const admin = await isAdminLoggedIn(user.$id);
                setAllowed(admin);
            } catch (err) {
                console.error(err);
                setAllowed(false);
            } finally {
                setChecking(false);
            }
        }

        check();
    }, []);

    if (checking) return <div>Checking admin access...</div>;

    if (!allowed) {
        return (
            <Navigate
                to="/admin/auth"
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}
