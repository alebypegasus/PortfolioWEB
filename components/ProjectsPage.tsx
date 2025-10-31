import React from 'react';
import { ProjectsPageTexts } from '../translations';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, tags, link }) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white/30 dark:bg-black/30 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 h-full flex flex-col backdrop-blur-lg border border-white/20 dark:border-white/10"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h4 className="text-xl font-bold text-black dark:text-white">{title}</h4>
        <p className="mt-2 text-gray-800 dark:text-gray-300 text-sm flex-grow">{description}</p>
        <div className="mt-4">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-black/10 dark:bg-white/10 rounded-full px-3 py-1 text-xs font-semibold text-gray-900 dark:text-gray-200 mr-2 mb-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

interface ProjectsPageProps {
  texts: ProjectsPageTexts;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ texts }) => {
  const projects = texts.projects.map((p, i) => ({
    ...p,
    imageUrl: `https://picsum.photos/seed/proj${i+1}/400/300`,
  }));

  return (
    <div className="animate-fade-in-up h-full">
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-10">
        {texts.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
           <div
            key={index}
            className="project-card-animation"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;