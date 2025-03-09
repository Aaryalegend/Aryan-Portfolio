export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Anshul Patil',
    position: 'Leader in ACM Hackathon Project',
    img: 'assets/anshul.png',
    review:
      'Working with Aryan was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Ameya Unchagaonkar',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Aryan’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'Hemant Sharma',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Aryan. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Rucha Ikare',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Aryan was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Erawa Learn - An Interactive, Gamified E-learning Platform',
    desc: 'Erawa Learn is an engaging E-learning platform that gamifies the learning experience. It allows users to post and browse detailed interview experiences shared by seniors, enhancing preparation insights.',
    subdesc:
      'Built with Next.js, PostgreSQL, and Drizzle ORM, Erawa Learn ensures secure authentication through Clerk, distinguishing between user and admin roles to maintain data integrity and access control. Technologies: Next.js | PostgreSQL | Drizzle ORM | Neon DB | Clerk Auth | Restful API | Date: February 2024',
    href: 'https://hackathon-erawa.vercel.app/',
    texture: '/textures/project/erawalearn.mp4',
    logo: '/assets/e.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs-icon.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Neon Database',
        path: '/assets/neondb.svg',
      },
    ],
  },
  {
    title: 'HackBox - The Hackathons and Events Hosting Platform',
    desc: 'HackBox is a comprehensive platform for committees to host and manage hackathons and events. It provides an intuitive interface for event registration and an admin console for organizers.',
    subdesc:
      'Developed using the MERN stack, HackBox features an interactive UI with light and dark modes, email notifications for event reminders, and a fully responsive website. Technologies: MERN | React.js | Node.js | Express.js | MongoDB | Date: December 2024',
    href: '',
    texture: '/textures/project/HackBox.mp4',
    logo: '/assets/H-logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Node.Js',
        path: '/assets/nodejs.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongodb.svg',
      },
    ],
  },
  {
    title: 'TimeTune - A Dynamic Timetable App',
    desc: 'TimeTune is an intelligent scheduling app designed to reflect real-time academic schedule changes and notify students accordingly.',
    subdesc:
      'Developed in Java with Android Studio, TimeTune features a Material UI-based interface, real-time lecture swap permissions, and Firebase Cloud Messaging for instant notifications. Technologies: Java | Android Studio | Java XML | Firebase | Date: July 2024',
    href: '',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/ic_launcher.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/java.svg',
      },
      {
        id: 2,
        name: 'XML Design',
        path: 'assets/xml.svg',
      },
      {
        id: 3,
        name: 'Firebase Firestore',
        path: '/assets/firebase.svg',
      }
      // {
      //   id: 4,
      //   name: 'Framer Motion',
      //   path: '/assets/framer.png',
      // },
    ],
  },
  // {
  //   title: 'Horizon - Online Banking Platform',
  //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //   subdesc:
  //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
  //   texture: '/textures/project/project4.mp4',
  //   logo: '/assets/project-logo4.png',
  //   logoStyle: {
  //     backgroundColor: '#0E1F38',
  //     border: '0.2px solid #0E2D58',
  //     boxShadow: '0px 0px 60px 0px #2F67B64D',
  //   },
  //   spotlight: '/assets/spotlight4.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Codechef WCE Chapter',
    pos: 'Designer',
    duration: 'Apr 2024 - Present',
    title: "Pursued the creative design of posters, social media posts, and video editing. Mastered the art of Adobe Illustrator and Adobe After Effects. Managed the design of the Codechef WCE Chapter's events like WCPC Contests.",
    icon: '/assets/cwc.jpeg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'SAIT',
    pos: 'Editor',
    duration: 'Apr 2024 - Present',
    title: "Commanded the design principles, color theory, and typography. Mastered skills in Adobe After Effects. Served as management of Publicity Posters, Social Media Posts, and Video Editing.",
    icon: '/assets/sait.jpeg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'SAIT',
    pos: 'Asst. Art Director',
    duration: 'Aug 2023 - Mar 2024',
    title: "Learned the basics of design principles, color theory, and Canva like tools. Developed skills in Editing including Photoshop, After Effects. Mainly served assistance to the Art Director for posters making and Decoration creations across the Mega Events like TECHFUSION.",
    icon: '/assets/sait.jpeg',
    animation: 'salute',
  },
];
