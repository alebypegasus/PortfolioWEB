import React from 'react';
import { ResumePageTexts } from '../translations';
import SkillIcon from './icons/SkillIcon';

interface ResumePageProps {
  texts: ResumePageTexts;
}

const SkillBadge: React.FC<{ skillName: string }> = ({ skillName }) => (
  <span className="inline-flex items-center bg-white/30 dark:bg-black/30 text-blue-900 dark:text-blue-300 text-sm font-semibold mr-2 mb-2 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-sm">
    <SkillIcon skillName={skillName} className="w-4 h-4 mr-2" />
    {skillName}
  </span>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8 p-6 bg-white/20 dark:bg-black/20 rounded-2xl border border-white/10 backdrop-blur-sm">
    <h3 className="text-2xl font-bold border-b-2 border-gray-500/30 dark:border-gray-500/50 pb-2 mb-4 text-black dark:text-white">{title}</h3>
    {children}
  </div>
);


const ResumePage: React.FC<ResumePageProps> = ({ texts }) => {
  return (
    <div className="text-gray-900 dark:text-gray-100 animate-fade-in-up">
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-10">
        {texts.title}
      </h2>
      
      <Section title={texts.experience.title}>
        <div className="space-y-6">
          {texts.experience.jobs.map((job, index) => (
            <div key={index}>
              <h4 className="text-xl font-bold text-black dark:text-white">{job.role}</h4>
              <p className="text-gray-700 dark:text-gray-400">{job.company} | {job.period}</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-800 dark:text-gray-300">
                {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title={texts.education.title}>
        <div>
          <h4 className="text-xl font-bold text-black dark:text-white">{texts.education.course}</h4>
          <p className="text-gray-700 dark:text-gray-400">{texts.education.institution} | {texts.education.period}</p>
        </div>
      </Section>
      
      <Section title={texts.skills.title}>
        {texts.skills.sections.map((section, index) => (
          <div key={index} className={index > 0 ? 'mt-4' : ''}>
            <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-200">{section.title}</h4>
            {section.skills.map((skill, i) => <SkillBadge key={i} skillName={skill} />)}
          </div>
        ))}
      </Section>
    </div>
  );
};

export default ResumePage;