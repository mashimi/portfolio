import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
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
  img: 'me.jpg',
  paragraphOne: 'I offer a full range of Web Design Services. Blogs, forums, online stores, multimedia, search engine optimization services and more. I specialize in Decentralized website design services for small to medium businesses',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://app.luminpdf.com/viewer/5fc8f6941482ab001af65481', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'DeFi Project',
    info: 'This is DeFi project is run on Rinkeby Test net',
    info2: '',
    url: 'https://www.greedygorillaz.com/',
    repo: 'https://github.com/mashimi/mashimiswap', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dappvideo.png',
    title: 'Dapp Video',
    info: 'Decentralized Video Platform on the Etherium blockchain test net',
    info2: '',
    url: 'https://www.dappvideo.com/',
    repo: 'https://github.com/mashimi/DecentralizedVideo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'supplychain.png',
    title: ' Supply chain project',
    info: 'Blockchain supply chain project',
    info2: '',
    url: '',
    repo: 'https://github.com/mashimi/supplychain', // if no repo, the button will not show up
  },
   {
    id: nanoid(),
    img: 'mydex.png',
    title: 'Decentralize Exchange',
    info: 'Decentralize Exchange project New Project still develop',
    info2: '',
    url: '',
    repo: 'https://github.com/mashimi/supplychain', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'lmashimi@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/leonardmashimi',
    },
   
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/leonardmashimi1/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mashimi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
