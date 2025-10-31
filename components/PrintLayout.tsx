import React from 'react';

interface PrintLayoutProps {
  pages: React.ReactElement[];
}

const PrintLayout: React.FC<PrintLayoutProps> = ({ pages }) => {
  return (
    <div className="print-container">
      {pages.map((Page, index) => (
        <section key={index} className="print-page bg-white dark:bg-black">
          {Page}
        </section>
      ))}
    </div>
  );
};

export default PrintLayout;
