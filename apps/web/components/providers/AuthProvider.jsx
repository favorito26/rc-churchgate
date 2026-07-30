"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { me } from "@/lib/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUser() {
            try {
                const response = await me();
                setUser(response.data);
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
            }
        }

        loadUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}