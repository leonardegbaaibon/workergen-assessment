"use client";

import React, { useState, ChangeEvent, JSX } from 'react';

// Define the type for a user object
interface User {
    name: string;
    topic: string;
    statusReason: string;
    createdOn: string;
}

export default function UserTable(): JSX.Element {
    const [users, setUsers] = useState<User[]>([
        { name: "John Doe", topic: "Product Upgrade", statusReason: "In Progress", createdOn: "12/12/2024" },
        { name: "Jane Smith", topic: "Service Contract", statusReason: "Pending", createdOn: "10/10/2024" },
        { name: "Alice Johnson", topic: "New Lead Inquiry", statusReason: "Completed", createdOn: "08/08/2024" },
        { name: "Bob Brown", topic: "Bug Fixes", statusReason: "Completed", createdOn: "06/06/2024" },
        { name: "Charlie Davis", topic: "Feature Request", statusReason: "In Progress", createdOn: "05/05/2024" },
        { name: "Emily Green", topic: "Customer Feedback", statusReason: "Pending", createdOn: "04/04/2024" },
        { name: "David Harris", topic: "Product Upgrade", statusReason: "In Progress", createdOn: "03/03/2024" },
        { name: "Grace Lee", topic: "Service Contract", statusReason: "Pending", createdOn: "02/02/2024" },
        { name: "Henry Miller", topic: "New Lead Inquiry", statusReason: "Completed", createdOn: "01/01/2024" },
        { name: "Ivy Walker", topic: "Bug Fixes", statusReason: "Completed", createdOn: "12/12/2023" },
    ]);

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, userName: string) => {
        if (e.target.checked) {
            setSelectedUsers(prev => [...prev, userName]);
        } else {
            setSelectedUsers(prev => prev.filter(name => name !== userName));
        }
    };

    return (
        <div className="bg-white shadow-md rounded-[2px] border mt-10 border-gray-200 overflow-x-auto">
            <div className="mb-4">
                <input
                    type="text"
                    className="text-[12px] w-[30vh] lg:w-[60vh] h-[4vh] m-2 p-2 border-2 border-indigo-300 rounded-md"
                    placeholder="Sort, filter, and search with copilot"
                    value={searchTerm}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full table-fixed min-w-[200%] lg:min-w-0 bg-white">
                    <thead>
                        <tr className="text-gray-600 uppercase text-[12px] font-medium text-left">
                            <th className="p-3 border-b border-gray-200 whitespace-nowrap ">Select</th>
                            <th className="p-3 border-b border-gray-200 whitespace-nowrap ">Name</th>
                            <th className="p-3 border-b border-gray-200 whitespace-nowrap ">Topic</th>
                            <th className="p-3 border-b border-gray-200 whitespace-nowrap ">Status Reason</th>
                            <th className="p-3 border-b border-gray-200 whitespace-nowrap ">Created On</th>
                        </tr>
                    </thead>
                    <tbody className="text-[12px] text-gray-700 w-full">
                        {filteredUsers.map((user, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="p-3 border-b border-gray-200 whitespace-nowrap w-3/12">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        onChange={(e) => handleCheckboxChange(e, user.name)}
                                        checked={selectedUsers.includes(user.name)}
                                    />
                                </td>
                                <td className="p-3 border-b border-gray-200 whitespace-nowrap w-3/12">{user.name}</td>
                                <td className="p-3 border-b border-gray-200 whitespace-nowrap w-3/12">{user.topic}</td>
                                <td className={`p-3 border-b border-gray-200 whitespace-nowrap w-6/12 ${user.statusReason === "Completed" ? "text-green-600" : user.statusReason === "Pending" ? "text-red-600" : "text-blue-600"}`}>
                                    {user.statusReason}
                                </td>
                                <td className="p-3 border-b border-gray-200 whitespace-nowrap w-3/12">{user.createdOn}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
