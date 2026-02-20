import React from 'react';

const ExperienceCard = ({ icon: Icon, title, subtitle, timeline, bulletPoints }) => {
  return (
    <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md flex items-center p-6 space-x-6 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
      <div className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full p-4 shadow-lg">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-blue-600 dark:text-cyan-400 font-semibold mb-1">{subtitle}</p>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">{timeline}</span>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
