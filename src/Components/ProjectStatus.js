import React from 'react';

const ProjectStatus = () => {
    const projectStatusCounts = {
        totalProjects: 10,
        onHold: 2,
        finished: 5,
        pending: 1,
        inProgress: 2,
        cancelled: 0,
    };

    const statusIcon = (
        <svg className="h-10 w-12 text-pink-600  bg-pink-300 border-2 rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
        </svg>
    );

    return (
        <div className="flex flex-wrap p-4">
            {Object.entries(projectStatusCounts).map(([status, count]) => (
                <div key={status} className="w-1/2 p-2">
                    <div className="rounded-lg shadow-lg p-4 bg-white flex flex-col items-center">
                        <h3 className="text-lg font-semibold capitalize mb-2 mr-48">{status.replace(/([A-Z])/g, ' $1')}</h3>
                        <div className="flex items-center text-2xl font-bold ">
                            
                            <span className='mr-44'>{count}</span>
                          {statusIcon}
                           
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectStatus;
