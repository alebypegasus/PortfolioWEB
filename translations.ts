export type Language = 'pt' | 'en';

export interface CoverPageTexts {
  name: string;
  title: string;
  roles: string[];
  exportPdf: string;
}

export interface AboutPageTexts {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}

export interface ResumePageTexts {
  title: string;
  experience: {
    title: string;
    jobs: {
      role: string;
      company: string;
      period: string;
      tasks: string[];
    }[];
  };
  education: {
    title: string;
    course: string;
    institution: string;
    period: string;
  };
  skills: {
    title: string;
    sections: {
      title: string;
      skills: { name: string; level: number }[];
    }[];
  };
}

export interface ProjectsPageTexts {
    title: string;
    projects: {
        title: string;
        description: string;
        tags: string[];
        link: string;
    }[];
}

export interface HackintoshPageTexts {
  title: string;
  p1: string;
  p2: string;
  p3: string;
}

export interface OperatingSystemsPageTexts {
  title: string;
  p1: string;
  desktopTitle: string;
  desktopSystems: string[];
  mobileTitle: string;
  mobileSystems: string[];
}

export interface NoctoriunsDesignPageTexts {
  title: string;
  p1: string;
  p2: string;
  servicesTitle: string;
  services: {
    title: string;
    description: string;
  }[];
  galleryTitle: string;
}


export interface TestimonialsPageTexts {
    title: string;
    testimonials: {
        quote: string;
        name: string;
        role: string;
    }[];
    disclaimer: string;
}

export interface ContactPageTexts {
    title: string;
    subtitle: string;
    socialTitle: string;
    socials: {
        linkedIn: string;
        github: string;
        whatsapp: string;
        email: string;
        instagram: string;
        facebook: string;
        threads: string;
        x: string;
    };
    form: {
        title: string;
        namePlaceholder: string;
        phonePlaceholder: string;
        emailPlaceholder: string;
        subjectPlaceholder: string;
        messagePlaceholder: string;
        submitButton: string;
        submitAlert: string;
    };
}

export interface ThemeSwitcherTexts {
  light: string;
  dark: string;
  system: string;
}

export interface NavigationTexts {
    prev: string;
    next: string;
    goToStart: string;
}

export interface DockTexts {
  exportPdf: string;
}

export interface PageTitleTexts {
    title: string;
    icon: string;
}

type Translations = {
  [key in Language]: {
    cover: CoverPageTexts;
    about: AboutPageTexts;
    resume: ResumePageTexts;
    projects: ProjectsPageTexts;
    hackintosh: HackintoshPageTexts;
    operatingSystems: OperatingSystemsPageTexts;
    noctoriunsDesign: NoctoriunsDesignPageTexts;
    testimonials: TestimonialsPageTexts;
    contact: ContactPageTexts;
    themeSwitcher: ThemeSwitcherTexts;
    navigation: NavigationTexts;
    dock: DockTexts;
    pageTitles: {
        cover: PageTitleTexts,
        about: PageTitleTexts,
        resume: PageTitleTexts,
        projects: PageTitleTexts,
        hackintosh: PageTitleTexts,
        operatingSystems: PageTitleTexts,
        testimonials: PageTitleTexts,
        noctoriunsDesign: PageTitleTexts,
        contact: PageTitleTexts,
    }
  };
};

export const translations: Translations = {
  pt: {
    pageTitles: {
        cover: { title: "Capa", icon: "HomeIcon" },
        about: { title: "Minha História", icon: "AboutIcon" },
        resume: { title: "Currículo", icon: "ResumeIcon" },
        projects: { title: "Projetos", icon: "ProjectsIcon" },
        hackintosh: { title: "Hackintosh", icon: "HackintoshIcon" },
        operatingSystems: { title: "Sistemas Operacionais", icon: "OSIcon" },
        testimonials: { title: "Depoimentos", icon: "TestimonialsIcon" },
        noctoriunsDesign: { title: "Noctoriuns Design", icon: "NoctoriunsIcon" },
        contact: { title: "Contato", icon: "ContactIcon" },
    },
    dock: {
      exportPdf: "Exportar para PDF"
    },
    cover: {
      name: 'Alessandro Ramos de Oliveira',
      title: 'Portfólio e Currículo',
      roles: ['DESIGN GRÁFICO', 'TI', 'FRONTEND'],
      exportPdf: 'Exportar para PDF',
    },
    about: {
      title: 'Minha História',
      p1: 'Desde sempre, fui apaixonado por tecnologia e design, uma dualidade que me guiou por caminhos profissionais inesperados e gratificantes.',
      p2: 'Minha jornada começou com o Design Gráfico, onde aprendi a importância da comunicação visual e da estética. Mais tarde, mergulhei no mundo da TI, resolvendo problemas complexos e garantindo que a tecnologia funcionasse para as pessoas.',
      p3: 'Hoje, uno essas duas paixões no desenvolvimento Frontend, criando interfaces que não são apenas bonitas, mas também funcionais, intuitivas e acessíveis. Atualmente, estou expandindo meus horizontes estudando desenvolvimento Backend para me tornar um profissional ainda mais completo.',
      p4: 'A busca por soluções criativas, seja em um layout visualmente impactante ou em um código limpo e performático, é o que me move diariamente.',
    },
    resume: {
      title: 'Currículo',
      experience: {
        title: 'Experiência Profissional',
        jobs: [
          {
            role: 'Desenvolvedor Frontend',
            company: 'Empresa Fictícia',
            period: 'Jan 2022 - Presente',
            tasks: [
              'Desenvolvimento e manutenção de interfaces web com React e TypeScript.',
              'Colaboração com equipes de UI/UX para criar experiências de usuário fluidas.',
              'Otimização de performance e responsividade de aplicações.',
            ],
          },
          {
            role: 'Analista de Suporte de TI',
            company: 'Outra Empresa',
            period: 'Jun 2020 - Dez 2021',
            tasks: [
              'Suporte técnico para hardware e software.',
              'Gerenciamento de redes e infraestrutura.',
            ],
          },
        ],
      },
      education: {
        title: 'Educação',
        course: 'Análise e Desenvolvimento de Sistemas',
        institution: 'Universidade Exemplo',
        period: '2019 - 2021',
      },
      skills: {
        title: 'Habilidades Técnicas',
        sections: [
          { title: 'Frontend', skills: [
              { name: 'React', level: 90 },
              { name: 'TypeScript', level: 85 },
              { name: 'JavaScript (ES6+)', level: 95 },
              { name: 'Tailwind CSS', level: 90 },
              { name: 'HTML5', level: 98 },
              { name: 'CSS3', level: 95 }
            ]
          },
          { title: 'Design', skills: [
              { name: 'Figma', level: 95 },
              { name: 'Adobe Photoshop', level: 80 },
              { name: 'Adobe Illustrator', level: 75 }
            ]
          },
          { title: 'Backend (Estudando)', skills: [
              { name: 'Node.js', level: 60 },
              { name: 'Express', level: 55 },
              { name: 'SQL', level: 65 }
            ]
          },
        ],
      },
    },
    projects: {
        title: "Projetos & Criações",
        projects: [
            { title: 'Website Corporativo', description: 'Redesign completo do site institucional da Empresa X, com foco em UX e performance.', tags: ['React', 'TailwindCSS', 'Figma'], link: '#' },
            { title: 'App de Tarefas', description: 'Aplicação web para gerenciamento de tarefas pessoais com uma interface limpa e intuitiva.', tags: ['TypeScript', 'Vite', 'Frontend'], link: '#' },
            { title: 'Identidade Visual', description: 'Criação de logotipo e identidade visual para uma startup de tecnologia.', tags: ['Illustrator', 'Design', 'Branding'], link: '#' },
            { title: 'Dashboard Analítico', description: 'Painel de visualização de dados para monitoramento de métricas de vendas.', tags: ['Frontend', 'Charts', 'UI/UX'], link: '#' },
            { title: 'Blog Pessoal', description: 'Desenvolvimento de um blog com sistema de gerenciamento de conteúdo simples.', tags: ['JavaScript', 'HTML5', 'CSS3'], link: '#' },
            { title: 'Sistema de E-commerce', description: 'Interface para uma loja virtual, com carrinho de compras e integração de pagamentos.', tags: ['React', 'API', 'Frontend'], link: '#' },
        ]
    },
    hackintosh: {
      title: "O Universo Hackintosh",
      p1: "Uma das minhas grandes paixões no mundo da tecnologia é o 'Hackintosh'. O termo refere-se à instalação do macOS da Apple em computadores que não são fabricados pela própria Apple. É um desafio que combina profundo conhecimento de hardware e software.",
      p2: "Dedico tempo estudando a compatibilidade de componentes, configurando bootloaders e ajustando kexts (drivers) para criar sistemas estáveis e performáticos. Cada projeto é um quebra-cabeça único que me ensinou muito sobre a arquitetura de sistemas operacionais e a importância da sinergia entre hardware e software.",
      p3: "Essa prática não apenas me permite ter a experiência do macOS em hardware customizado, mas também aprofunda minha capacidade de resolver problemas complexos, uma habilidade essencial no desenvolvimento de software."
    },
    operatingSystems: {
      title: "Sistemas Operacionais",
      p1: "Minha experiência e curiosidade se estendem por uma vasta gama de sistemas operacionais, tanto para desktops quanto para dispositivos móveis. Acredito que conhecer diferentes ecossistemas me torna um desenvolvedor mais versátil e consciente das diversas plataformas onde meu código pode rodar.",
      desktopTitle: "Sistemas de Desktop",
      desktopSystems: ["Windows", "macOS", "Ubuntu", "Manjaro", "Linux Mint", "ChromeOS"],
      mobileTitle: "Sistemas Móveis",
      mobileSystems: ["iOS", "Android"],
    },
    noctoriunsDesign: {
      title: "Noctoriuns Design",
      p1: "Noctoriuns Design nasceu da minha paixão por criar experiências digitais que são ao mesmo tempo belas e intuitivas. O nome, inspirado no cosmos, reflete nossa filosofia: explorar o universo infinito da criatividade para entregar soluções de design que brilham.",
      p2: "Desde o início, nosso foco tem sido a fusão de arte e tecnologia. Acreditamos que um bom design não é apenas sobre estética, mas sobre resolver problemas, contar histórias e construir conexões duradouras entre marcas e seus públicos.",
      servicesTitle: "Nossos Serviços",
      services: [
        { title: "Identidade Visual", description: "Criamos logotipos, paletas de cores e guias de estilo que definem a essência da sua marca." },
        { title: "UI/UX Design", description: "Projetamos interfaces para web e mobile focadas na usabilidade e em uma experiência de usuário memorável." },
        { title: "Desenvolvimento Web", description: "Transformamos designs em websites e aplicações web responsivas, performáticas e modernas." },
      ],
      galleryTitle: "Galeria de Inspiração",
    },
    testimonials: {
        title: "O Que Dizem Sobre Mim",
        testimonials: [
            {
              quote: "Alessandro tem uma incrível capacidade de traduzir ideias complexas em interfaces bonitas e funcionais. Sua atenção aos detalhes é impecável.",
              name: "Jane Doe",
              role: "Gerente de Produto, Empresa Fictícia"
            },
            {
              quote: "Trabalhar com o Alessandro foi uma experiência fantástica. Ele é proativo, comunicativo e entregou um resultado que superou todas as nossas expectativas.",
              name: "John Smith",
              role: "CEO, Startup Exemplo"
            },
            {
                quote: "Além de sua competência técnica em Frontend, a dedicação que Alessandro demonstra nos estudos de Backend é inspiradora. Um profissional completo.",
                name: "Maria Garcia",
                role: "Líder de Engenharia, Outra Empresa"
            }
        ],
        disclaimer: "*Estes são depoimentos modelo para demonstração."
    },
    contact: {
        title: "Vamos Conversar",
        subtitle: "Estou sempre aberto a novos projetos, colaborações e desafios. Se você tem uma ideia ou oportunidade, adoraria ouvir sobre ela.",
        socialTitle: "Conecte-se Comigo",
        socials: {
            linkedIn: "Rede profissional e carreira",
            github: "Projetos, código e colaboração",
            whatsapp: "Contato rápido e direto",
            email: "Para propostas e assuntos formais",
            instagram: "Conteúdo visual e bastidores",
            facebook: "Página profissional e novidades",
            threads: "Conversas e atualizações rápidas",
            x: "Opiniões e notícias do setor"
        },
        form: {
            title: "Ou envie uma mensagem",
            namePlaceholder: "Seu nome",
            phonePlaceholder: "Seu telefone",
            emailPlaceholder: "Seu e-mail",
            subjectPlaceholder: "Assunto",
            messagePlaceholder: "Sua mensagem...",
            submitButton: "Enviar Mensagem",
            submitAlert: "Obrigado! Sua mensagem foi enviada. Entrarei em contato em breve."
        }
    },
    themeSwitcher: {
        light: 'Claro (Dia)',
        dark: 'Escuro (Noite)',
        system: 'Automático (Sistema)',
    },
    navigation: {
        prev: 'Página Anterior',
        next: 'Próxima Página',
        goToStart: 'Voltar ao Início',
    },
  },
  en: {
    pageTitles: {
        cover: { title: "Cover", icon: "HomeIcon" },
        about: { title: "My Story", icon: "AboutIcon" },
        resume: { title: "Resume", icon: "ResumeIcon" },
        projects: { title: "Projects", icon: "ProjectsIcon" },
        hackintosh: { title: "Hackintosh", icon: "HackintoshIcon" },
        operatingSystems: { title: "Operating Systems", icon: "OSIcon" },
        testimonials: { title: "Testimonials", icon: "TestimonialsIcon" },
        noctoriunsDesign: { title: "Noctoriuns Design", icon: "NoctoriunsIcon" },
        contact: { title: "Contact", icon: "ContactIcon" },
    },
    dock: {
      exportPdf: "Export to PDF"
    },
    cover: {
      name: 'Alessandro Ramos de Oliveira',
      title: 'Portfolio and Resume',
      roles: ['GRAPHIC DESIGN', 'IT', 'FRONTEND'],
      exportPdf: 'Export to PDF',
    },
    about: {
      title: 'My Story',
      p1: 'I have always been passionate about technology and design, a duality that has guided me through unexpected and rewarding professional paths.',
      p2: 'My journey began with Graphic Design, where I learned the importance of visual communication and aesthetics. Later, I delved into the world of IT, solving complex problems and ensuring technology worked for people.',
      p3: "Today, I merge these two passions in Frontend development, creating interfaces that are not only beautiful but also functional, intuitive, and accessible. I am currently expanding my horizons by studying Backend development to become an even more complete professional.",
      p4: 'The search for creative solutions, whether in a visually striking layout or in clean, high-performing code, is what drives me daily.',
    },
    resume: {
      title: 'Resume',
      experience: {
        title: 'Professional Experience',
        jobs: [
          {
            role: 'Frontend Developer',
            company: 'Fictional Company',
            period: 'Jan 2022 - Present',
            tasks: [
              'Developing and maintaining web interfaces with React and TypeScript.',
              'Collaborating with UI/UX teams to create seamless user experiences.',
              'Optimizing applications for performance and responsiveness.',
            ],
          },
          {
            role: 'IT Support Analyst',
            company: 'Another Company',
            period: 'Jun 2020 - Dec 2021',
            tasks: [
              'Providing technical support for hardware and software.',
              'Managing networks and infrastructure.',
            ],
          },
        ],
      },
      education: {
        title: 'Education',
        course: 'Analysis and Systems Development',
        institution: 'Example University',
        period: '2019 - 2021',
      },
      skills: {
        title: 'Technical Skills',
        sections: [
          { title: 'Frontend', skills: [
              { name: 'React', level: 90 },
              { name: 'TypeScript', level: 85 },
              { name: 'JavaScript (ES6+)', level: 95 },
              { name: 'Tailwind CSS', level: 90 },
              { name: 'HTML5', level: 98 },
              { name: 'CSS3', level: 95 }
            ]
          },
          { title: 'Design', skills: [
              { name: 'Figma', level: 95 },
              { name: 'Adobe Photoshop', level: 80 },
              { name: 'Adobe Illustrator', level: 75 }
            ]
          },
          { title: 'Backend (Studying)', skills: [
              { name: 'Node.js', level: 60 },
              { name: 'Express', level: 55 },
              { name: 'SQL', level: 65 }
            ]
          },
        ],
      },
    },
    projects: {
        title: "Projects & Creations",
        projects: [
            { title: 'Corporate Website', description: 'Complete redesign of Company X\'s institutional website, focusing on UX and performance.', tags: ['React', 'TailwindCSS', 'Figma'], link: '#' },
            { title: 'Task App', description: 'Web application for personal task management with a clean and intuitive interface.', tags: ['TypeScript', 'Vite', 'Frontend'], link: '#' },
            { title: 'Visual Identity', description: 'Logo and visual identity creation for a tech startup.', tags: ['Illustrator', 'Design', 'Branding'], link: '#' },
            { title: 'Analytics Dashboard', description: 'Data visualization panel for monitoring sales metrics.', tags: ['Frontend', 'Charts', 'UI/UX'], link: '#' },
            { title: 'Personal Blog', description: 'Development of a blog with a simple content management system.', tags: ['JavaScript', 'HTML5', 'CSS3'], link: '#' },
            { title: 'E-commerce System', description: 'Interface for an online store, with a shopping cart and payment integration.', tags: ['React', 'API', 'Frontend'], link: '#' },
        ]
    },
     hackintosh: {
      title: "The Hackintosh Universe",
      p1: "One of my great passions in the world of technology is 'Hackintosh'. The term refers to installing Apple's macOS on computers not manufactured by Apple itself. It's a challenge that combines deep knowledge of hardware and software.",
      p2: "I dedicate time to studying component compatibility, configuring bootloaders, and adjusting kexts (drivers) to create stable and high-performing systems. Each project is a unique puzzle that has taught me a great deal about operating system architecture and the importance of synergy between hardware and software.",
      p3: "This practice not only allows me to have the macOS experience on custom hardware but also deepens my ability to solve complex problems, an essential skill in software development."
    },
    operatingSystems: {
      title: "Operating Systems",
      p1: "My experience and curiosity extend across a wide range of operating systems, for both desktops and mobile devices. I believe that knowing different ecosystems makes me a more versatile developer, aware of the various platforms where my code might run.",
      desktopTitle: "Desktop Systems",
      desktopSystems: ["Windows", "macOS", "Ubuntu", "Manjaro", "Linux Mint", "ChromeOS"],
      mobileTitle: "Mobile Systems",
      mobileSystems: ["iOS", "Android"],
    },
    noctoriunsDesign: {
      title: "Noctoriuns Design",
      p1: "Noctoriuns Design was born from my passion for creating digital experiences that are both beautiful and intuitive. The name, inspired by the cosmos, reflects our philosophy: exploring the infinite universe of creativity to deliver design solutions that shine.",
      p2: "From the beginning, our focus has been on the fusion of art and technology. We believe that good design is not just about aesthetics, but about solving problems, telling stories, and building lasting connections between brands and their audiences.",
      servicesTitle: "Our Services",
      services: [
        { title: "Visual Identity", description: "We create logos, color palettes, and style guides that define the essence of your brand." },
        { title: "UI/UX Design", description: "We design interfaces for web and mobile focused on usability and a memorable user experience." },
        { title: "Web Development", description: "We transform designs into responsive, high-performing, and modern websites and web applications." },
      ],
      galleryTitle: "Inspiration Gallery",
    },
    testimonials: {
        title: "What They Say About Me",
        testimonials: [
            {
              quote: "Alessandro has an incredible ability to translate complex ideas into beautiful and functional interfaces. His attention to detail is impeccable.",
              name: "Jane Doe",
              role: "Product Manager, Fictional Company"
            },
            {
              quote: "Working with Alessandro was a fantastic experience. He is proactive, communicative, and delivered a result that exceeded all our expectations.",
              name: "John Smith",
              role: "CEO, Example Startup"
            },
            {
                quote: "Besides his technical competence in Frontend, Alessandro's dedication to his Backend studies is inspiring. A well-rounded professional.",
                name: "Maria Garcia",
                role: "Engineering Lead, Another Company"
            }
        ],
        disclaimer: "*These are sample testimonials for demonstration purposes."
    },
    contact: {
        title: "Let's Talk",
        subtitle: "I'm always open to new projects, collaborations, and challenges. If you have an idea or an opportunity, I'd love to hear about it.",
        socialTitle: "Connect With Me",
        socials: {
            linkedIn: "Professional network & career",
            github: "Projects, code & collaboration",
            whatsapp: "For quick & direct contact",
            email: "For proposals & formal matters",
            instagram: "Visual content & behind the scenes",
            facebook: "Professional page & news",
            threads: "Conversations & quick updates",
            x: "Insights & industry news"
        },
        form: {
            title: "Or send a message",
            namePlaceholder: "Your name",
            phonePlaceholder: "Your phone",
            emailPlaceholder: "Your e-mail",
            subjectPlaceholder: "Subject",
            messagePlaceholder: "Your message...",
            submitButton: "Send Message",
            submitAlert: "Thank you! Your message has been sent. I will get in touch soon."
        }
    },
    themeSwitcher: {
        light: 'Light (Day)',
        dark: 'Dark (Night)',
        system: 'Automatic (System)',
    },
    navigation: {
        prev: 'Previous Page',
        next: 'Next Page',
        goToStart: 'Back to Start',
    },
  },
};