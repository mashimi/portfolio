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
  paragraphOne: 'Blockchain Developer from Tanzania to Berlin, Develop a full range of Web Design Services. Crypto bots, NFTs, Node setup, Smart contracts, Data services and more.  Specialize in Decentralized Web Applications (DAPP, WEB3.0, IPFS, DLT)  design services for small to medium businesses',
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
    info: 'Decentralized Finance (DeFi)? Yield farming is a way to make more crypto with your crypto. It involves you lending your funds to others through the magic of computer programs called smart contracts. In return for your service, you earn fees in the form of crypto.',
    info2: 'Ethereum Dapp on Rinkeby test net ASK FOR SOURCE CODE',
    url: 'https://www.greedygorillaz.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dappvideo.png',
    title: 'Dapp Video',
    info: 'Decentralized Video censorship-resistant  Platform ',
    info2: 'Ethereum blockchain and IPFS Technology try out on Rinkeby Test net',
    url: 'https://www.dappvideo.com/',
    repo: 'https://github.com/mashimi/DecentralizedVideo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'supplychain.png',
    title: ' Supply chain project',
    info: 'Blockchain can enable more transparent and accurate end-to-end tracking in the supply chain: Organizations can digitize physical assets and create a decentralized immutable record of all transactions, making it possible to track assets from production to delivery or use by end user.',
    info2: 'IS NOT LIVE FOR NOW',
    url: '',
    repo: 'https://github.com/mashimi/supplychain', // if no repo, the button will not show up
  },
   {
    id: nanoid(),
    img: 'mydex.png',
    title: 'Decentralized Exchange (DEX)',
    info: 'A decentralized exchange (DEX) is a cryptocurrency exchange which operates in a decentralized way, i.e., without a central authority. Decentralized exchanges allow peer-to-peer trading of cryptocurrencies.',
    info2: 'ASK FOR SOURCE CODE',
    url: '',
    repo: '', // if no repo, the button will not show up
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
