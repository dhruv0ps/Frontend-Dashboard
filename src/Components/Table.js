import React from 'react';
import CustomPieChart from './CustomPieChart';

const Table = () => {
    const clients = [
        { name: "New Hussein Client", email: "client@hussein.com", phone: "3213412789", id: 2 },
        { name: "HORUMAR 2", email: "john@john", phone: "23456", id: 2 },
        { name: "ISRAAC 1", email: "test@test.com", phone: "98263547892", id: 1 },
        { name: "GARSOOR 1", email: "rich@gmail.com", phone: "9800981969", id: 1 },
        { name: "BARWAAQO", email: "tata@gmail.com", phone: "9800000000", id: 1 },
        { name: "MGOBALKA MDUUG", email: "mdg@gmailcom", phone: "078554444", id: 1 }
    ];

    return (
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="rounded-lg shadow-lg p-4 bg-white md:w-2/3">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Top Clients</h2>
                    <a href="#" className="text-pink-600 font-semibold">View All Clients</a>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Phone</th>
                                <th className="px-4 py-2">ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-2">{client.name}</td>
                                    <td className="px-4 py-2">{client.email}</td>
                                    <td className="px-4 py-2">{client.phone}</td>
                                    <td className="px-4 py-2">{client.id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="">
                <h2 className="text-xl font-semibold mb-4">Client Distribution</h2>
                <CustomPieChart />
            </div>
        </div>
    );
};

export default Table;
