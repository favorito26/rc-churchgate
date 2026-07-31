"use client";

import { useState } from "react";

export default function MemberForm({
    initialValues = {},
    onSubmit,
}) {
    const [form, setForm] = useState({
        firstName: initialValues.firstName ?? "",
        lastName: initialValues.lastName ?? "",
        email: initialValues.email ?? "",
        password: "",
        role: initialValues.role ?? "member",
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(form);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="w-full rounded border p-2"
                required
            />

            <input
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="w-full rounded border p-2"
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded border p-2"
                required
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full rounded border p-2"
            />

            <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full rounded border p-2"
            >
                <option value="member">Member</option>
                <option value="admin">Admin</option>
            </select>

            <button
                type="submit"
                className="w-full rounded bg-black py-2 text-white"
            >
                Save Member
            </button>
        </form>
    );
}