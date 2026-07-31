"use client";

import { useEffect, useState } from "react";
import { getMembers } from "@/lib/members";
import DataTable from "@/components/ui/DataTable";
import Modal from "@/components/ui/Modal";

export default function MembersPage() {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

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
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Members</h1>
                    <p className="text-gray-500">
                        Manage club members.
                    </p>
                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
                >
                    + New Member
                </button>
            </div>

            <div className="overflow-x-auto rounded-lg border">
                <DataTable
                    columns={columns}
                    data={members}
                    emptyMessage="No members found."
                />
            </div>
            <Modal
                open={open}
                title="New Member"
                onClose={() => setOpen(false)}
            >
                <p>This is the member form.</p>
            </Modal>
        </div>
    );
}