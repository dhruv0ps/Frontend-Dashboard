import React from 'react';

const ProjectTable = () => {
    const projects = [
        { title: "Project A", dateStarted: "2023-01-15", deadline: "2023-06-30", leader: "Alice", completion: "100%", priority: "Medium" },
        { title: "Project B", dateStarted: "2023-02-20", deadline: "2023-07-15", leader: "Bob", completion: "60%", priority: "Urgent" },
        { title: "Project C", dateStarted: "2023-03-10", deadline: "2023-08-01", leader: "Charlie", completion: "100%", priority: "Urgent" },
        { title: "Project D", dateStarted: "2023-04-05", deadline: "2023-09-20", leader: "David", completion: "90%", priority: "High" },
    ];

    return (
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
            <div className="rounded-lg shadow-lg p-4 bg-white w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Project Overview</h2>
                    <a href="#" className="text-pink-600 font-semibold">View All Projects</a>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2">Project Title</th>
                                <th className="px-4 py-2">Date Started</th>
                                <th className="px-4 py-2">Deadline</th>
                                <th className="px-4 py-2">Leader</th>
                                <th className="px-4 py-2">Completion</th>
                                <th className="px-4 py-2">Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border-b">{project.title}</td>
                                    <td className="px-4 py-2 border-b">{project.dateStarted}</td>
                                    <td className="px-4 py-2 border-b">{project.deadline}</td>
                                    <td className="px-4 py-2 border-b">{project.leader}</td>
                                    <td className="px-4 py-2 border-b">
                                        <div className="w-full bg-neutral-200 dark:bg-neutral-600">
                                            <div
                                                className={`p-0.5 text-center text-xs font-medium leading-none text-primary-100`}
                                                style={{
                                                    width: project.completion,
                                                    backgroundColor: project.completion === "100%" ? 'lightgreen' : 'lightgrey',
                                                }}
                                            >
                                                {project.completion}
                                            </div>
                                        </div>
                                    </td>
                                    <td className={`px-4 py-2 ml-14 mt-2  border-b flex items-center justify-center ${project.priority === 'Urgent' || project.priority === 'High' ? 'bg-red-500 text-white w-16 h-10' : project.priority === 'Medium' ? 'bg-yellow-400 text-black w-16 h-10' : ''}`}>
                                        {project.priority}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProjectTable;
