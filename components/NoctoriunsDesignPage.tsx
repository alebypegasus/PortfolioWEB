import React from 'react';
import { NoctoriunsDesignPageTexts } from '../translations';

interface NoctoriunsDesignPageProps {
  texts: NoctoriunsDesignPageTexts;
}

const NoctoriunsDesignPage: React.FC<NoctoriunsDesignPageProps> = ({ texts }) => {
  return (
    <div className="text-gray-900 dark:text-gray-50 animate-fade-in-up">
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white border-b-4 border-green-500 dark:border-green-400 pb-2 inline-block">
        {texts.title}
      </h2>
      <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-gray-900 dark:text-gray-200">
        <p>{texts.p1}</p>
        <p>{texts.p2}</p>
      </div>

      <div className="my-12">
        <h3 className="text-3xl font-bold text-black dark:text-white mb-6">{texts.servicesTitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {texts.services.map((service, index) => (
            <div key={index} className="p-6 bg-white/20 dark:bg-black/20 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h4 className="font-bold text-xl mb-2 text-black dark:text-white">{service.title}</h4>
              <p className="text-sm text-gray-800 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-black dark:text-white mb-6">{texts.galleryTitle}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-white/20 dark:bg-black/20 rounded-xl overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/noctoriuns${i}/300/300`} 
                alt={`Inspiração de design ${i}`} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoctoriunsDesignPage;