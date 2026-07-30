const API_URL =
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8787/api/v1";

export async function api(path, options = {}) {
    const response = await fetch(`${API_URL}${path}`, {
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        ...options,
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Request failed");
    }

    return data;
}