import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { TeamMember } from '../../data/team';

interface TeamMemberCardProps {
  member: TeamMember;
  variant?: 'compact' | 'full';
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  variant = 'compact'
}) => {
  const { id, name, title, specialization, bio, education, imageUrl } = member;

  if (variant === 'compact') {
    return (
      <Card hoverEffect className="h-full flex flex-col overflow-hidden">
        <div className="relative h-72 overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
          />
        </div>
        <div className="p-5 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-indigo-700 dark:text-indigo-400 font-medium text-sm mb-2">{title}</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{specialization}</p>
          <Link
            to={`/team/${id}`}
            className="text-indigo-800 font-medium text-sm inline-flex items-center hover:text-indigo-600"
          >
            View Profile
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <div className="lg:flex gap-8">
      <div className="lg:w-1/3 mb-6 lg:mb-0">
        <Card className="overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            loading="lazy"
            className="w-full aspect-[3/4] object-cover object-center"
          />
        </Card>
      </div>
      <div className="lg:w-2/3">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{name}</h2>
        <p className="text-indigo-700 dark:text-indigo-400 font-medium mb-4">{title}</p>
        <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Specialization</h3>
          <p className="text-gray-700 dark:text-gray-300">{specialization}</p>
        </div>
        <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Biography</h3>
          <p className="text-gray-700 dark:text-gray-300">{bio}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Education</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;