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
        repoUrl: string;
        liveUrl: string;
    }[];
    liveButtonText: string;
    repoButtonText: string;
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
  portfolioButtonText: string;
  portfolioLink: string;
}


export interface TestimonialsPageTexts {
    title: string;
    testimonials: {
        quote: string;
        name: string;
        role: string;
        imageUrl: string;
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
        errors: {
            nameRequired: string;
            phoneRequired: string;
            phoneInvalid: string;
            emailRequired: string;
            emailInvalid: string;
            subjectRequired: string;
            messageRequired: string;
        };
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

export interface SiriTexts {
    greeting: string;
    placeholder: string;
    suggestedQuestions: string[];
    systemPrompt: string;
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
    siri: SiriTexts;
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
    siri: {
        greeting: "Olá! Sou a assistente do Alessandro. Como posso ajudar? Você pode perguntar sobre a carreira, projetos ou habilidades dele.",
        placeholder: "Pergunte algo...",
        suggestedQuestions: [
            "Quais são as principais habilidades de Frontend do Alessandro?",
            "Me fale sobre a experiência profissional dele.",
            "Quais projetos ele já desenvolveu?",
        ],
        systemPrompt: "Você é um assistente de IA, chamado Siri, para o portfólio de Alessandro Ramos. Seu único propósito é responder a perguntas sobre ele, sua carreira, habilidades e projetos, com base estritamente nas informações fornecidas neste contexto. Não invente informações ou forneça links externos. Seja amigável, profissional e conciso. Use o contexto a seguir para formular todas as suas respostas. CONTEXTO: ",
    },
    cover: {
      name: 'Alessandro Ramos de Oliveira',
      title: 'Desenvolvedor Frontend & Designer',
      roles: ['DESIGN GRÁFICO', 'TI', 'FRONTEND'],
      exportPdf: 'Exportar para PDF',
    },
    about: {
      title: 'Minha História',
      p1: 'Desde jovem, sou fascinado por tecnologia e design. Essa paixão dupla me levou por uma jornada profissional rica e diversificada, começando como Designer Gráfico freelancer, onde explorei a comunicação visual e criei identidades para marcas.',
      p2: 'Buscando novos desafios, migrei para a área de TI, atuando como Analista de Suporte na B2W Digital. Lá, aprimorei minhas habilidades de resolução de problemas em um ambiente corporativo dinâmico, dando suporte a uma vasta gama de tecnologias e usuários.',
      p3: 'Hoje, encontrei no desenvolvimento Frontend a fusão perfeita de minhas paixões: a lógica da tecnologia com a criatividade do design. Utilizo meu background para construir interfaces que são não apenas esteticamente agradáveis, mas também funcionais, intuitivas e performáticas.',
      p4: 'Atualmente, estou cursando Análise e Desenvolvimento de Sistemas para aprofundar meus conhecimentos e me tornar um profissional cada vez mais completo, sempre em busca de criar as melhores experiências digitais possíveis.',
    },
    resume: {
      title: 'Currículo',
      experience: {
        title: 'Experiência Profissional',
        jobs: [
          {
            role: 'Analista de Suporte de TI Pleno',
            company: 'B2W Digital / Americanas S.A.',
            period: 'Maio 2021 - Presente',
            tasks: [
              'Suporte técnico especializado a mais de 2000 usuários em ambientes Windows e macOS.',
              'Manutenção de hardware, software e gerenciamento de ativos de TI.',
              'Apoio à infraestrutura de redes e sistemas para garantir a continuidade dos negócios.',
              'Resolução de incidentes e requisições através de sistemas de ITSM.',
            ],
          },
          {
            role: 'Designer Gráfico',
            company: 'Autônomo / Freelancer',
            period: 'Jan 2017 - Presente',
            tasks: [
              'Criação de identidade visual completa para pequenas e médias empresas.',
              'Desenvolvimento de logotipos, materiais de marketing e posts para mídias sociais.',
              'Consultoria de branding e comunicação visual para clientes de diversos setores.',
            ],
          },
        ],
      },
      education: {
        title: 'Formação Acadêmica',
        course: 'Análise e Desenvolvimento de Sistemas',
        institution: 'Universidade Estácio de Sá',
        period: '2023 - 2025 (Cursando)',
      },
      skills: {
        title: 'Habilidades Técnicas',
        sections: [
          { title: 'Frontend', skills: [
              { name: 'React', level: 85 },
              { name: 'Next.js', level: 75 },
              { name: 'TypeScript', level: 80 },
              { name: 'JavaScript (ES6+)', level: 90 },
              { name: 'Tailwind CSS', level: 95 },
              { name: 'HTML5 & CSS3', level: 98 }
            ]
          },
          { title: 'Design', skills: [
              { name: 'Figma', level: 95 },
              { name: 'Adobe Photoshop', level: 85 },
              { name: 'Adobe Illustrator', level: 80 },
              { name: 'Canva', level: 90 }
            ]
          },
          { title: 'TI e Outras', skills: [
              { name: 'Suporte de TI', level: 95 },
              { name: 'Manutenção de Hardware', level: 90 },
              { name: 'Git & GitHub', level: 80 },
              { name: 'SQL (Básico)', level: 60 }
            ]
          },
        ],
      },
    },
    projects: {
        title: "Projetos & Criações",
        liveButtonText: "Ver ao Vivo",
        repoButtonText: "Repositório",
        projects: [
            { title: 'Portfólio Pessoal Interativo', description: 'A versão atual deste portfólio, desenvolvido com uma interface inspirada no macOS para demonstrar minhas habilidades em Frontend e UI/UX.', tags: ['React', 'TypeScript', 'TailwindCSS'], repoUrl: 'https://github.com/alebypegasus/portfolio-macos', liveUrl: '#' },
            { title: 'Clone da Interface do Spotify', description: 'Um estudo prático de desenvolvimento de interfaces complexas, recriando a experiência visual do Spotify Web com foco em responsividade.', tags: ['Next.js', 'TailwindCSS', 'UI/UX'], repoUrl: 'https://github.com/alebypegasus/spotify-clone', liveUrl: 'https://spotify-clone-alebypegasus.vercel.app/' },
            { title: 'Noctoriuns Design', description: 'Projeto de branding e identidade visual para minha marca como designer freelancer, incluindo logo, paleta de cores e materiais de divulgação.', tags: ['Illustrator', 'Figma', 'Branding'], repoUrl: '#', liveUrl: '#' },
            { title: 'Sistema de Gerenciamento de Links', description: 'Uma aplicação web estilo "Linktree" para agrupar e compartilhar múltiplos links em uma única página, com design minimalista.', tags: ['React', 'Frontend', 'JavaScript'], repoUrl: '#', liveUrl: '#' },
            { title: 'Landing Page para Evento de TI', description: 'Página de captura de leads para um evento de tecnologia, otimizada para conversão e com design moderno.', tags: ['HTML5', 'CSS3', 'JavaScript'], repoUrl: '#', liveUrl: '#' },
            { title: 'Painel de Controle Simplificado', description: 'Protótipo de um dashboard para visualização de dados, explorando componentes de UI e bibliotecas de gráficos.', tags: ['Figma', 'UI Design', 'Protótipo'], repoUrl: '#', liveUrl: '#' },
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
      portfolioButtonText: "Ver Portfólio",
      portfolioLink: "#"
    },
    testimonials: {
        title: "O Que Dizem Sobre Mim",
        testimonials: [
            {
              quote: "Alessandro tem uma incrível capacidade de traduzir ideias complexas em interfaces bonitas e funcionais. Sua atenção aos detalhes é impecável.",
              name: "Juliana Costa",
              role: "Gerente de Produto, Tech Inova",
              imageUrl: "https://picsum.photos/seed/juliana/100/100"
            },
            {
              quote: "Trabalhar com o Alessandro foi fantástico. Ele é proativo, comunicativo e entregou um resultado que superou todas as nossas expectativas.",
              name: "Ricardo Gomes",
              role: "CEO, Startup Acelera",
              imageUrl: "https://picsum.photos/seed/ricardo/100/100"
            },
            {
                quote: "Além de sua competência técnica em Frontend, a dedicação que Alessandro demonstra nos estudos de Backend é inspiradora. Um profissional completo.",
                name: "Beatriz Lima",
                role: "Líder de Engenharia, Code Solutions",
                imageUrl: "https://picsum.photos/seed/beatriz/100/100"
            },
            {
                quote: "Sua habilidade em design UI/UX é de primeira linha. Ele transformou nosso aplicativo em algo que os usuários amam usar.",
                name: "Fernando Martins",
                role: "Fundador, App Criativo",
                imageUrl: "https://picsum.photos/seed/fernando/100/100"
            },
            {
                quote: "Como analista de suporte, ele era a pessoa a quem recorrer. Resolvia problemas com uma calma e eficiência impressionantes.",
                name: "Camila Dias",
                role: "Coordenadora de TI, Americanas S.A.",
                imageUrl: "https://picsum.photos/seed/camila/100/100"
            },
            {
                quote: "O rebranding que ele fez para nossa empresa foi um divisor de águas. Capturou nossa essência perfeitamente.",
                name: "Lucas Andrade",
                role: "Proprietário, Café Saboroso",
                imageUrl: "https://picsum.photos/seed/lucas/100/100"
            },
            {
                quote: "Ele não apenas escreve código limpo, mas também pensa holisticamente sobre a experiência do usuário. Um ativo valioso para qualquer equipe.",
                name: "Mariana Azevedo",
                role: "Desenvolvedora Sênior, Web Gigante",
                imageUrl: "https://picsum.photos/seed/mariana/100/100"
            },
            {
                quote: "Contratei Alessandro para um projeto freelancer de frontend e a qualidade foi excepcional. Recomendo fortemente.",
                name: "Gustavo Pereira",
                role: "Empreendedor Digital",
                imageUrl: "https://picsum.photos/seed/gustavo/100/100"
            },
            {
                quote: "Sempre disposto a aprender e a ensinar. Sua paixão por tecnologia é contagiante e eleva o nível da equipe.",
                name: "Sofia Ribeiro",
                role: "Colega de time, B2W Digital",
                imageUrl: "https://picsum.photos/seed/sofia/100/100"
            },
            {
                quote: "A interface do nosso sistema ficou muito mais intuitiva e moderna depois do trabalho de consultoria de UI/UX do Alessandro.",
                name: "Eduardo Carvalho",
                role: "Gerente de TI, Logística Eficiente",
                imageUrl: "https://picsum.photos/seed/eduardo/100/100"
            },
             {
                quote: "Rápido, eficiente e com um olho clínico para o design. O site que ele desenvolveu para nós tem recebido muitos elogios.",
                name: "Isabela Bastos",
                role: "Diretora de Arte, Agência Criativa",
                imageUrl: "https://picsum.photos/seed/isabela/100/100"
            },
            {
                quote: "Ele tem um talento especial para entender os requisitos do negócio e traduzi-los em soluções técnicas elegantes.",
                name: "Vinícius Neves",
                role: "Analista de Negócios",
                imageUrl: "https://picsum.photos/seed/vinicius/100/100"
            },
            {
                quote: "Um dos melhores designers com quem já colaborei. Suas ideias são sempre frescas e focadas no resultado.",
                name: "Larissa Moreira",
                role: "Especialista em Marketing",
                imageUrl: "https://picsum.photos/seed/larissa/100/100"
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
            submitAlert: "Obrigado! Sua mensagem foi enviada. Entrarei em contato em breve.",
            errors: {
                nameRequired: 'O nome é obrigatório.',
                phoneRequired: 'O telefone é obrigatório.',
                phoneInvalid: 'O número de telefone é inválido.',
                emailRequired: 'O e-mail é obrigatório.',
                emailInvalid: 'O formato do e-mail é inválido.',
                subjectRequired: 'O assunto é obrigatório.',
                messageRequired: 'A mensagem é obrigatória.',
            }
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
    siri: {
        greeting: "Hello! I'm Alessandro's assistant. How can I help you? You can ask about his career, projects, or skills.",
        placeholder: "Ask something...",
        suggestedQuestions: [
            "What are Alessandro's main Frontend skills?",
            "Tell me about his professional experience.",
            "What projects has he developed?",
        ],
        systemPrompt: "You are an AI assistant, named Siri, for Alessandro Ramos's portfolio. Your sole purpose is to answer questions about him, his career, skills, and projects, based strictly on the information provided in this context. Do not invent information or provide external links. Be friendly, professional, and concise. Use the following context to formulate all your answers. CONTEXT: ",
    },
    cover: {
      name: 'Alessandro Ramos de Oliveira',
      title: 'Frontend Developer & Designer',
      roles: ['GRAPHIC DESIGN', 'IT', 'FRONTEND'],
      exportPdf: 'Export to PDF',
    },
    about: {
      title: 'My Story',
      p1: 'Since I was young, I have been fascinated by technology and design. This dual passion has led me on a rich and diverse professional journey, starting as a freelance Graphic Designer, where I explored visual communication and created brand identities.',
      p2: 'Seeking new challenges, I moved into the IT field, working as an IT Support Analyst at B2W Digital. There, I honed my problem-solving skills in a dynamic corporate environment, supporting a wide range of technologies and users.',
      p3: "Today, in Frontend development, I have found the perfect fusion of my passions: the logic of technology with the creativity of design. I use my background to build interfaces that are not only aesthetically pleasing but also functional, intuitive, and high-performing.",
      p4: 'I am currently studying Analysis and Systems Development to deepen my knowledge and become an increasingly well-rounded professional, always striving to create the best possible digital experiences.',
    },
    resume: {
      title: 'Resume',
      experience: {
        title: 'Professional Experience',
        jobs: [
          {
            role: 'IT Support Analyst',
            company: 'B2W Digital / Americanas S.A.',
            period: 'May 2021 - Present',
            tasks: [
              'Specialized technical support for over 2000 users in Windows and macOS environments.',
              'Hardware and software maintenance, and IT asset management.',
              'Support for network infrastructure and systems to ensure business continuity.',
              'Resolution of incidents and requests through ITSM systems.',
            ],
          },
          {
            role: 'Graphic Designer',
            company: 'Self-employed / Freelancer',
            period: 'Jan 2017 - Present',
            tasks: [
              'Creation of complete visual identities for small and medium-sized businesses.',
              'Development of logos, marketing materials, and social media posts.',
              'Consulting on branding and visual communication for clients in various sectors.',
            ],
          },
        ],
      },
      education: {
        title: 'Education',
        course: 'Analysis and Systems Development',
        institution: 'Estácio de Sá University',
        period: '2023 - 2025 (Ongoing)',
      },
      skills: {
        title: 'Technical Skills',
        sections: [
          { title: 'Frontend', skills: [
              { name: 'React', level: 85 },
              { name: 'Next.js', level: 75 },
              { name: 'TypeScript', level: 80 },
              { name: 'JavaScript (ES6+)', level: 90 },
              { name: 'Tailwind CSS', level: 95 },
              { name: 'HTML5 & CSS3', level: 98 }
            ]
          },
          { title: 'Design', skills: [
              { name: 'Figma', level: 95 },
              { name: 'Adobe Photoshop', level: 85 },
              { name: 'Adobe Illustrator', level: 80 },
              { name: 'Canva', level: 90 }
            ]
          },
          { title: 'IT & Others', skills: [
              { name: 'IT Support', level: 95 },
              { name: 'Hardware Maintenance', level: 90 },
              { name: 'Git & GitHub', level: 80 },
              { name: 'SQL (Basic)', level: 60 }
            ]
          },
        ],
      },
    },
    projects: {
        title: "Projects & Creations",
        liveButtonText: "Live Demo",
        repoButtonText: "Repository",
        projects: [
            { title: 'Interactive Personal Portfolio', description: 'The current version of this portfolio, developed with a macOS-inspired interface to showcase my skills in Frontend and UI/UX.', tags: ['React', 'TypeScript', 'TailwindCSS'], repoUrl: 'https://github.com/alebypegasus/portfolio-macos', liveUrl: '#' },
            { title: 'Spotify UI Clone', description: 'A practical study of complex interface development, recreating the visual experience of Spotify Web with a focus on responsiveness.', tags: ['Next.js', 'TailwindCSS', 'UI/UX'], repoUrl: 'https://github.com/alebypegasus/spotify-clone', liveUrl: 'https://spotify-clone-alebypegasus.vercel.app/' },
            { title: 'Noctoriuns Design', description: 'Branding and visual identity project for my freelance designer brand, including logo, color palette, and promotional materials.', tags: ['Illustrator', 'Figma', 'Branding'], repoUrl: '#', liveUrl: '#' },
            { title: 'Link Management System', description: 'A "Linktree" style web application to group and share multiple links on a single page, with a minimalist design.', tags: ['React', 'Frontend', 'JavaScript'], repoUrl: '#', liveUrl: '#' },
            { title: 'Landing Page for IT Event', description: 'A lead capture page for a technology event, optimized for conversion with a modern design.', tags: ['HTML5', 'CSS3', 'JavaScript'], repoUrl: '#', liveUrl: '#' },
            { title: 'Simplified Dashboard', description: 'A prototype of a dashboard for data visualization, exploring UI components and chart libraries.', tags: ['Figma', 'UI Design', 'Prototype'], repoUrl: '#', liveUrl: '#' },
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
      portfolioButtonText: "View Portfolio",
      portfolioLink: "#"
    },
    testimonials: {
        title: "What They Say About Me",
        testimonials: [
            {
              quote: "Alessandro has an incredible ability to translate complex ideas into beautiful and functional interfaces. His attention to detail is impeccable.",
              name: "Jane Doe",
              role: "Product Manager, Tech Innovate",
              imageUrl: "https://picsum.photos/seed/jane/100/100"
            },
            {
              quote: "Working with Alessandro was a fantastic experience. He is proactive, communicative, and delivered a result that exceeded all our expectations.",
              name: "John Smith",
              role: "CEO, Example Startup",
              imageUrl: "https://picsum.photos/seed/john/100/100"
            },
            {
                quote: "Besides his technical competence in Frontend, Alessandro's dedication to his Backend studies is inspiring. A well-rounded professional.",
                name: "Maria Garcia",
                role: "Engineering Lead, Code Solutions",
                imageUrl: "https://picsum.photos/seed/maria/100/100"
            },
            {
                quote: "His UI/UX design skill is top-notch. He turned our app into something users love to engage with.",
                name: "Fernando Martins",
                role: "Founder, Creative App",
                imageUrl: "https://picsum.photos/seed/fernando-en/100/100"
            },
            {
                quote: "As a support analyst, he was the go-to person. He solved problems with impressive calm and efficiency.",
                name: "Camila Dias",
                role: "IT Coordinator, Americanas S.A.",
                imageUrl: "https://picsum.photos/seed/camila-en/100/100"
            },
            {
                quote: "The rebranding he did for our company was a game-changer. He captured our essence perfectly.",
                name: "Lucas Andrade",
                role: "Owner, Tasty Coffee Shop",
                imageUrl: "https://picsum.photos/seed/lucas-en/100/100"
            },
            {
                quote: "He not only writes clean code but also thinks holistically about the user experience. A valuable asset to any team.",
                name: "Mariana Azevedo",
                role: "Senior Developer, Web Giant",
                imageUrl: "https://picsum.photos/seed/mariana-en/100/100"
            },
            {
                quote: "I hired Alessandro for a freelance frontend project, and the quality was exceptional. Highly recommended.",
                name: "Gustavo Pereira",
                role: "Digital Entrepreneur",
                imageUrl: "https://picsum.photos/seed/gustavo-en/100/100"
            },
            {
                quote: "Always willing to learn and to teach. His passion for technology is contagious and raises the team's level.",
                name: "Sofia Ribeiro",
                role: "Teammate, B2W Digital",
                imageUrl: "https://picsum.photos/seed/sofia-en/100/100"
            },
            {
                quote: "Our system's interface became much more intuitive and modern after Alessandro's UI/UX consulting work.",
                name: "Eduardo Carvalho",
                role: "IT Manager, Efficient Logistics",
                imageUrl: "https://picsum.photos/seed/eduardo-en/100/100"
            },
            {
                quote: "Fast, efficient, and with a keen eye for design. The website he developed for us has received many compliments.",
                name: "Isabela Bastos",
                role: "Art Director, Creative Agency",
                imageUrl: "https://picsum.photos/seed/isabela-en/100/100"
            },
            {
                quote: "He has a special talent for understanding business requirements and translating them into elegant technical solutions.",
                name: "Vinícius Neves",
                role: "Business Analyst",
                imageUrl: "https://picsum.photos/seed/vinicius-en/100/100"
            },
            {
                quote: "One of the best designers I have ever collaborated with. His ideas are always fresh and result-oriented.",
                name: "Larissa Moreira",
                role: "Marketing Specialist",
                imageUrl: "https://picsum.photos/seed/larissa-en/100/100"
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
            threads: "Conversas & quick updates",
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
            submitAlert: "Thank you! Your message has been sent. I will get in touch soon.",
            errors: {
                nameRequired: 'Name is required.',
                phoneRequired: 'Phone is required.',
                phoneInvalid: 'Phone number is invalid.',
                emailRequired: 'Email is required.',
                emailInvalid: 'Email format is invalid.',
                subjectRequired: 'Subject is required.',
                messageRequired: 'Message is required.',
            }
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