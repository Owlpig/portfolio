import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'streamcompass.png',
    title: 'StreamCompass',
    info: 'MVP fullstack app for a streaming service search engine. Includes authorisation and login-functionality, searching by keyword, and CRUD operations for favourites and reviews. Built in ReactJS with an ExpressJS backend and MongoDB database. ',
    info2: '',
    url: '',
    repo: 'https://github.com/Owlpig/final-project-StreamCompass', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'characterpicker.png',
    title: 'Character Picker',
    info: 'Fullstack app to help you pick your video-game character. Filters through options based on user selections.',
    info2: '',
    url: '',
    repo: 'https://github.com/Owlpig/WoW-character-picker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio.png',
    title: 'Portfolio',
    info: 'This portfolio page. Built with Gatsby and deployed with Netlify.',
    info2: '',
    url: '',
    repo: 'https://github.com/Owlpig/portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo.png',
    title: 'ToDo List',
    info: 'React frontend app for a simple todo-list. Add, mark as done or delete todos.',
    info2: '',
    url: '',
    repo: 'https://github.com/Owlpig/todo-react', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'henry.mispelaere@appliedtechnology.se',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};