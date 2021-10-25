import { nanoid } from 'nanoid';
import React from 'react';

// HEAD DATA
export const headData = {
  title: 'Henry Thomasson Mispelaere | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'I am Henry Thomasson Mispelaere, a fullstack JavaScript developer and these are some of my projects', // e.g: Welcome to my website
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
  img: 'about.jpg',
  paragraphOne: 'My name is Henry Thomasson Mispelaere and I am a software developer based in Uppsala, Sweden.',
  paragraphTwo: `I've always been interested in both tech and the creative arts and web development lets me do both. In 2020 I started learning JavaScript and in 2021 I joined the </salt> bootcamp.`,
  paragraphThree: `In my free time I enjoy video games and baking, which goes well with my drive to finish tasks I've started and enjoy the fruits of my labour.`,
  resume: '', // if no resume, the button will not show up
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
    info: 'Fullstack app to help you pick what character to play in the video-game World of Warcraft. Made using the official Battle.net API, ExpressJS backend and React frontend. Filters through the options based on user selections.',
    info2: '',
    url: '',
    repo: 'https://github.com/Owlpig/WoW-character-picker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio.png',
    title: 'Portfolio',
    info: 'This portfolio page. Built with Gatsby and gatsby templates, but remade into an MPA. React add-ons and Bootstrap for styling. Deployed with Netlify.',
    info2: '',
    url: '',
    repo: 'https://github.com/Owlpig/portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'disney.png',
    title: 'Disney+ Clone',
    info: 'Clone of Disney+, built with React, Redux, Firebase and Styled components. Based off',
    link: 'https://www.youtube.com/watch?v=R_OERlafbmw',
    info2: 'YouTube tutorial with some refactoring.',
    url: 'https://disney-clone-c999a.web.app/',
    repo: 'https://github.com/Owlpig/disney-plus-clone', // if no repo, the button will not show up
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