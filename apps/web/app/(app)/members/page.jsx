"use client";

import { useEffect, useState } from "react";
import { getMembers } from "@/lib/members";
import DataTable from "@/components/ui/DataTable";

export default function MembersPage() {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMembers() {
            try {
                const response = await getMembers();
                setMembers(response.data);
            } finally {
                setLoading(false);
            }
        }

        loadMembers();
    }, []);

    if (loading) {
        return <div>Loading members...</div>;
    }

    const columns = [
        {
            key: "fullName",
            label: "Name",
            render: (member) =>
                member.fullName ?? member.firstName ?? member.name,
        },
        {
            key: "email",
            label: "Email",
        },
        {
            key: "role",
            label: "Role",
        },
    ];
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Members</h1>
                <p className="text-gray-500">
                    Manage club members.
                </p>
            </div>

            <div className="overflow-x-auto rounded-lg border">
                <DataTable
                    columns={columns}
                    data={members}
                    emptyMessage="No members found."
                />
            </div>
        </div>
    );
}