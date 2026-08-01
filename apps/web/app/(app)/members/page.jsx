"use client";

import { useEffect, useState } from "react";
import { getMembers, createMember } from "@/lib/members";
import MemberForm from "@/components/members/MemberForm";
import DataTable from "@/components/ui/DataTable";
import Modal from "@/components/ui/Modal";

export default function MembersPage() {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

    const loadMembers = async () => {
        try {
            const response = await getMembers();
            setMembers(response.data);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateMember = async (data) => {
        try {
            await createMember(data);
            setOpen(false);
            await loadMembers();
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
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
                <MemberForm onSubmit={handleCreateMember} />
            </Modal>
        </div>
    );
}