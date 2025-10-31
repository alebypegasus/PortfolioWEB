import React, { useState } from 'react';
import { ResumePageTexts } from '../translations';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ChevronDownIcon from './icons/ChevronDownIcon';

type Theme = 'light' | 'dark' | 'system';

interface ResumePageProps {
  texts: ResumePageTexts;
  theme?: Theme;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8 p-6 bg-white/10 dark:bg-black/10 rounded-2xl border border-white/10">
    <h3 className="text-2xl font-bold border-b-2 border-gray-500/30 dark:border-gray-500/50 pb-2 mb-4 text-black dark:text-white">{title}</h3>
    {children}
  </div>
);


const ResumePage: React.FC<ResumePageProps> = ({ texts, theme = 'system' }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([texts.skills.sections[0].title]);

  // Combine all skills into one array for the chart
  const chartData = texts.skills.sections.flatMap(section =>
    section.skills.map(skill => ({
      subject: skill.name,
      level: skill.level,
      fullMark: 100,
    }))
  );

  // Determine colors based on theme
  const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const tickColor = isDark ? '#a0a0a0' : '#4a4a4a';
  const strokeColor = isDark ? '#f5f5f7' : '#1c1c1e';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)';
  const tooltipBg = isDark ? 'rgba(28, 28, 30, 0.6)' : 'rgba(255, 255, 255, 0.65)';
  const tooltipBorder = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';
  
  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
        prev.includes(title) 
            ? prev.filter(t => t !== title) 
            : [...prev, title]
    );
  };

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
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
              <PolarGrid stroke={gridColor} />
              <PolarAngleAxis dataKey="subject" tick={{ fill: tickColor, fontSize: 12, textAnchor: 'middle' }} />
              <Tooltip
                  contentStyle={{
                    backgroundColor: tooltipBg,
                    borderColor: tooltipBorder,
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                  labelStyle={{ color: strokeColor }}
                  itemStyle={{ color: strokeColor }}
                />
              <Radar name="Proficiência" dataKey="level" stroke="#0a84ff" fill="#0a84ff" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8 space-y-2">
            {texts.skills.sections.map((section, index) => {
                const isExpanded = expandedSections.includes(section.title);
                return (
                    <div key={index} className="bg-gray-500/5 dark:bg-white/5 rounded-xl border border-transparent dark:hover:border-white/10 hover:border-black/10 transition-colors duration-300">
                        <button 
                            onClick={() => toggleSection(section.title)}
                            className="w-full flex justify-between items-center p-4 text-left font-bold text-lg text-black dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75 rounded-lg"
                            aria-expanded={isExpanded}
                            aria-controls={`skill-section-${index}`}
                        >
                            <span>{section.title}</span>
                            <ChevronDownIcon className={`w-5 h-5 transform transition-transform duration-300 ${isExpanded ? 'rotate-0' : '-rotate-90'}`} />
                        </button>
                        <div 
                            id={`skill-section-${index}`}
                            className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                        >
                            <div className="overflow-hidden">
                                <ul className="px-4 pb-4 space-y-4">
                                    {section.skills.map((skill, skillIndex) => (
                                        <li key={skillIndex}>
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-sm font-medium text-gray-800 dark:text-gray-300">{skill.name}</span>
                                                <span className="text-xs font-mono text-gray-600 dark:text-gray-400">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-500/20 rounded-full h-2">
                                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
      </Section>
    </div>
  );
};

export default ResumePage;