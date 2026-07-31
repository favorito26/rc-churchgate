"use client";

import { useMemo, useState } from "react";

export default function DataTable({

    columns,
    data,
    emptyMessage = "No data found.",

}) {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const filteredData = useMemo(() => {
        if (!search) return data;

        const query = search.toLowerCase();

        return data.filter((row) =>
            columns.some((column) => {
                const value = column.render
                    ? column.render(row)
                    : row[column.key];

                return String(value ?? "")
                    .toLowerCase()
                    .includes(query);
            })
        );
    }, [search, data, columns]);

    const pageSize = 10;

    const totalPages = Math.max(
        1,
        Math.ceil(filteredData.length / pageSize)
    );

    const paginatedData = filteredData.slice(
        (page - 1) * pageSize,
        page * pageSize
    );

    return (
        <>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                    className="w-full rounded border px-3 py-2 md:w-80"
                />
            </div>
            <div className="overflow-x-auto rounded-lg border">
                <table className="min-w-full">
                    <thead className="border-b bg-gray-50">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className="px-4 py-3 text-left text-sm font-medium"
                                >
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="px-4 py-6 text-center text-gray-500"
                                >
                                    {emptyMessage}
                                </td>
                            </tr>
                        ) : (
                            paginatedData.map((row) => (
                                <tr key={row.id} className="border-b">
                                    {columns.map((column) => (
                                        <td key={column.key} className="px-4 py-3">
                                            {column.render
                                                ? column.render(row)
                                                : row[column.key]}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                    Showing {paginatedData.length} of {filteredData.length}
                </p>

                <div className="flex gap-2">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage((p) => p - 1)}
                        className="rounded border px-3 py-1 disabled:opacity-50"
                    >
                        Previous
                    </button>

                    <span className="px-2 py-1">
                        {page} / {totalPages}
                    </span>

                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage((p) => p + 1)}
                        className="rounded border px-3 py-1 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}