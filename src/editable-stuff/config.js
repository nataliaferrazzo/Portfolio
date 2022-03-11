// Navigation Bar SECTION
const navBar = {
  show: true,

};

// Main Body SECTION
const mainBody = {
  gradientColors: "#072242, #311052, #5d0cad, #0d0a61",
  firstName: "Natália",
  middleName: "Capra",
  lastName: "Ferrazzo",
  message: "Passionate about changing the world through technology.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nataliaferrazzo",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nataliaferrazzo/",
    }
  ],
};

const about = {
  show: true,
  heading: "About",
  imageLink: require("./Eu.jpeg"),
  imageSize: 375,
  message:
    "B. Sc. in Engineering Physics at Federal University of Rio Grande do Sul, currently in 8th semester, with expected graduation on December, 2022. I work as an Intern at IBM. I'm fascinated about Physics, Quantum Computing and Data Science. In my free time I like working on open source projects and learn about Applied Quantum Physics. 💜",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Git Projects",
  gitHubUsername: "nataliaferrazzo", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Certificate SECTION
const leadership = {
  show: false,
  heading: "Certificates and Badges",
  message:
    "Here are some of my leadership",
  images: [
    { 
      img: require("./Eu.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("./Eu.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

const certificates = {
  show: true,
  heading: "Certificates and Badges",
  data: [
    {
      image: require('../assets/badges/ESEF.png'),
      url: "https://www.efset.org/cert/fioTf1",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nataliaferrazzo/",
    }
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Professional Skills",
  hardSkills: [
    { name: "Python", value: 85 },
    { name: "SQL", value: 50 },
    { name: "Quantum Computing", value: 30 },
    { name: "ETL", value: 60 },
    { name: "JavaScript", value: 60 },
    { name: "React", value: 60 },
    { name: "HTML/CSS", value: 55 },
    { name: "Git", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 80 },
    { name: "Positivity", value: 100 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 95 },
    { name: "Organization", value: 100 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: false,
  heading: "Get In Touch",
  email: "nataliaferrazzo@hotmail.com",
};

const experiences = {
  show: true,
  heading: "Professional Experiences",
  data: [
    {
      role: 'Developer Intern',// Here Add Company Name
      companylogo: require('../assets/img/IBM.png'),
      date: 'Aug 2021 – Present',
    },
    {
      role: 'Assistant Data Scientist',
      companylogo: require('../assets/img/cadastra.png'),
      date: 'Nov 2020 – Aug 2021',
    },
  ]
}


// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, certificates };
