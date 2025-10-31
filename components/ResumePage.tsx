import React from 'react';
import { ResumePageTexts } from '../translations';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)';

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
                    backgroundColor: isDark ? 'rgba(30, 30, 30, 0.8)' : 'rgba(240, 242, 245, 0.8)',
                    borderColor: gridColor,
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)',
                  }}
                  labelStyle={{ color: strokeColor }}
                  itemStyle={{ color: strokeColor }}
                />
              <Radar name="Proficiência" dataKey="level" stroke="#0a84ff" fill="#0a84ff" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </Section>
    </div>
  );
};

export default ResumePage;