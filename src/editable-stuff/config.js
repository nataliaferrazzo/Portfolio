// Navigation Bar SECTION
const navBar = {
  show: true,

};

// Main Body SECTION
const mainBody = {
  gradientColors: "#072242, #5d0cad, #311052, #0d0a61",
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
    },
    {
      image: "fa-envelope",
      url: "nataliaferrazzo@hotmail.com",
    }
  ],
};

const about = {
  show: true,
  heading: "About",
  imageLink: require("./Eu.jpeg"),
  imageSize: 300,
  message:
    "B. Sc. in Engineering Physics at Federal University of Rio Grande do Sul, currently in 9th semester, with expected graduation in October, 2022. I work as an Intern at IBM. I'm fascinated about Physics, Quantum Computing and Data Science. In my free time I like working on open source projects and learn about Applied Quantum Physics. 💜",
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
  gitHubUsername: "nataliaferrazzo",
  reposLength: 0,
  specificRepos: ["Solving-the-Travelling-Salesman-Problem-on-IBM-Quantum", "DataScience_Project", "ibm-quantum-spring-challenge-2022"],
  message: 'Please, note that these are repositories that I am or have been working on. They are not necessarily my own authority.',
};

const academic = {
  show: true,
  heading: "Academic Projects",
  message: "Please, note that these are just some assignments made for my B. Sc. Engineering Physics degree. None of them are cientific reports or articles.",
  data: [
    {
      title: 'Solving the Travelling Salesman Problem on IBM Quantum',
      subject: 'Quantum Computing',
      image: require('./projects/images/unigou.png'),
      message: 'In this article, the basic concepts of Quantum Computing were studied and applied to NP-hard Travelling Salesman problem. Through the tools provided by IBM Quantum and Qiskit initiative, it was able to implement it via Python libraries and Jupyter Notebook. The results were as computed for similar publications.',
      paper: require('./projects/quantum/UNIGOU.pdf')
    },
    {
      title: 'UNIGOU Remote Research Practice: A Scientific Training Course',
      subject: 'Quantum Computing',
      image: require('./projects/images/elaboracao.png'),
      message: 'The Czech-Brazilian Academic Cooperation Institute (INCBAC Institute) annually promotes the UNIGOU Remote program. Through the program, Brazilian undergraduate and master\'s students have the opportunity to work with Czech universities in the design and development of scientific research activities in their areas of expertise, identifying research gaps and proposing appropriate approaches and methods to fill the gap in the topic. In this work, Brno University proposed the initial topic “Quantum-Inspired Optimization Algorithms”. Therefore, a literature review was carried out to study the feasibility of designing and carrying out the research. We sought to identify scientific problems and gaps within the area of ​​Physical Engineering where the author could add scientific value. With that, the research topic was changed to “Solving the Traveling Salesman Problem on IBM Quantum®” and the elaboration of a new article proposal was developed.',
      paper: require('./projects/quantum/ELPEF.pdf')
    },
    {
      title: 'UNIGOU Remote Publication: A Research Paper Submission',
      subject: 'Quantum Computing',
      image: require('./projects/images/execucao.png'),
      message: 'Through the Institute of Czech-Brazilian Academic Cooperation (INCBAC Institute), the elaboration and development of an article was established proposing a new approach to the NP-hard mathematical problem of the Traveling Salesman. Using the IBM Quantum® environment, the problem was analyzed and described and its solution implemented and documented.',
      paper: require('./projects/quantum/EXPEF.pdf')
    },
    {
      title: 'Monte Carlo',
      subject: 'Numerical Methods',
      image: require('./projects/images/monte-carlo.png'),
      message: 'In this assignment, the Monte Carlo method was studied, discussed and applied together with Markov Chain to estimate Pi value.',
      paper: require('./projects/numerical/monte-carlo.pdf')
    },
    {
      title: 'Ginzburg-Landau Theory Applied to Anderson\'s Limit',
      subject: 'Physics',
      image: require('./projects/images/ginzburg-landau.png'),
      message: 'What is the minimum size of a superconductor? In this summer-vacation project, it was tried to answer this question by applying Ginzburg-Landau Theory and Numerical Methods.',
      paper: require('./projects/physics/ginzburg-landau.pdf')
    },
    {
      title: 'Photon Counting and Statistics',
      subject: 'Physics',
      image: require('./projects/images/photon-count.png'),
      message: 'A photodetector circuit was built implementing a reversed polarized LED connected to an Arduino protoboard. A statistical study was carried out on the counts.',
      paper: require('./projects/physics/photon-count.pdf')
    },
    {
      title: 'Wealth distribution agents model',
      subject: 'Numerical Methods',
      image: require('./projects/images/wealth-distribution.png'),
      message: 'In this report, we used Monte Carlo and studied the time evaluation for two models of systems: With social protection and without.',
      paper: require('./projects/numerical/wealth-distribution.pdf')
    },
    {
      title: 'Fitzhugh-Nagumo model for the action potential in neuron',
      subject: 'Numerical Methods',
      image: require('./projects/images/fitzhugh-nagumo.png'),
      message: 'We applied and studied FTCS, BTCS and Crank-Nicolson models to represent the physiological pulse of neurons',
      paper: require('./projects/numerical/fitzhugh-nagumo.pdf')
    },
    {
      title: 'Linear Regression',
      subject: 'Numerical Methods',
      image: require('./projects/images/linear-regression.png'),
      message: 'This assignment was implemented to find the best fit curve - with, at most, a second order equation - for the provided data.',
      paper: require('./projects/numerical/linear-regression.pdf')
    },
    {
      title: 'Radioisotope decay and attenuation',
      subject: 'Physics',
      image: require('./projects/images/radioisotope-decay.png'),
      message: 'In the present assignment, we analyzed experimentally the decay radiation of Technetium-99m and Cobalt-60 radioisotopes and their values ​​were compared to analytically calculated values.',
      paper: require('./projects/physics/radioisotope-decay.pdf')
    },
    {
      title: 'Quantum Information Teleportation',
      subject: 'Physics',
      image: require('./projects/images/quantum-information.png'),
      message: 'In this assignment, a brief discussion was made about the fundamentals of quantum information teleportation.',
      paper: require('./projects/quantum/quantum-information.pdf')
    },
    {
      title: 'Variation of the magnetic field generated by an iron-core coil of variable diameter',
      subject: 'Physics',
      image: require('./projects/images/magnetic-field-variation.png'),
      message: 'In this experiment, it was verified the theory in which the magnetic field should increase as the iron core of a coil increases, as well as if we increase the electric current that passes through it.',
      paper: require('./projects/physics/magnetic-field-variation.pdf')
    }
  ]
}


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

//para adicionar nova experiência adicionar aqui as principais infos e criar um arquivo .jsx para a nova url
const experiences = {
  show: true,
  heading: "Professional Experiences",
  data: [
    {
      role: 'Developer Intern',// Here Add Company Name
      companylogo: require('../assets/img/IBM.png'),
      date: 'Aug 2021 – Present',
      url: "/experience/IBM"
    },
    {
      role: 'Assistant Data Scientist',
      companylogo: require('../assets/img/cadastra.png'),
      date: 'Nov 2020 – Aug 2021',
      url: "/experience/cadastra"
    },
  ]
}

const ibm = {
  show: true,
  image: require('../assets/img/IBM.png')
}

const cadastra = {
  show: true,
  image: require('../assets/img/cadastra.png')
}

// para adicionar novo badge é necessário apenas adicionar as infos aqui
const badges = {
  show: true,
  heading: "Certificates and Badges",
  data: [
    {
      heading: 'English C2 - Proficient',
      company: 'EF Standard English Test',
      date: 'Issued in March 2021',
      logo: require('../assets/badges/ESEF.png'),
      url: "https://www.efset.org/cert/fioTf1"
    },
    {
      heading: 'Quantum Conversations',
      company: 'IBM',
      date: 'Issued in January 2022',
      logo: require('../assets/badges/Quantum_Conversations.png'),
      url: "https://www.credly.com/badges/867214af-e828-4529-8b3c-2e11231a8334/public_url"
    },
    {
      heading: 'AWS Cloud Practitioner Essentials',
      company: 'Amazon Web Services',
      date: 'Issued in December 2021',
      logo: require('../assets/badges/AWS.jpeg'),
      url: require("../assets/badges/AWS.pdf")
    },
    {
      heading: 'Watson Hands-On',
      company: 'IBM',
      date: 'Issued in September 2021',
      logo: require('../assets/badges/Watson-Assistant-Hands-On.png'),
      url: "https://www.credly.com/badges/e4ce6b23-ae0b-40ef-8bcf-b049363d759f/public_url"
    },
    {
      heading: 'Machine Learning Foundations',
      company: 'Udacity',
      date: 'Issued in August 2021',
      logo: require('../assets/badges/Udacity.png'),
      url: "https://confirm.udacity.com/MQ9EKKTF"
    },
    {
      heading: 'Python for Data Science',
      company: 'IBM',
      date: 'Issued in August 2021',
      logo: require('../assets/badges/Python_101_Data_Science.png'),
      url: "https://www.credly.com/badges/a3ff20b3-a374-4a1e-8685-8d7aa4f5e399/public_url"
    },
    {
      heading: 'Data Science Foundations',
      company: 'IBM',
      date: 'Issued in August 2021',
      logo: require('../assets/badges/Data_Sci_Found.png'),
      url: "https://www.credly.com/badges/d8ff49d0-5167-4922-b6cb-8859e7a6afba/public_url"
    },
    {
      heading: 'Data Science Tools',
      company: 'IBM',
      date: 'Issued in August 2021',
      logo: require('../assets/badges/Big_Data_Found.png'),
      url: "https://www.credly.com/badges/050addf6-31b6-4371-9261-0c9963fe9594/public_url"
    },
    {
      heading: 'Big Data Foundations',
      company: 'IBM',
      date: 'Issued in August 2021',
      logo: require('../assets/badges/Quantum_Conversations.png'),
      url: "https://www.credly.com/badges/b1f7d555-59d3-4253-8398-e4c7837100f9/public_url"
    },
    {
      heading: 'Docker Essentials',
      company: 'IBM',
      date: 'Issued in January 2022',
      logo: require('../assets/badges/Docker_Essentials.png'),
      url: "https://www.credly.com/badges/6d01de6e-a7ca-4f39-8161-52b246b36f50/public_url"
    },
    {
      heading: 'Watson Studio Essentials',
      company: 'IBM',
      date: 'Issued in October 2021',
      logo: require('../assets/badges/Watson_Studio_Essentials.png'),
      url: "https://www.credly.com/earner/earned/badge/35b268ce-b043-4745-934c-cbf5b7293336"
    },
    {
      heading: 'Enterprise Design Thinking - Practitioner',
      company: 'IBM',
      date: 'Issued in October 2021',
      logo: require('../assets/badges/Practitioner.png'),
      url: "https://www.credly.com/badges/b036c68c-af6e-4928-8e54-01d99edaad49/public_url"
    },
    {
      heading: 'Enterprise Design Thinking - Team Essentials',
      company: 'IBM',
      date: 'Issued in October 2021',
      logo: require('../assets/badges/Team_Essentials.png'),
      url: "https://www.credly.com/badges/b7ef6b04-37e0-4c07-82d1-c3e1d61ce52c/public_url"
    },
    {
      heading: 'The IBM Way',
      company: 'IBM',
      date: 'Issued in August 2021',
      logo: require('../assets/badges/the-ibm-way.png'),
      url: "https://www.credly.com/badges/72e94746-d8cc-4016-86a6-443a9d5065a2/public_url"
    },
    {
      heading: 'Agile Explorer',
      company: 'IBM',
      date: 'Issued in August 2021',
      logo: require('../assets/badges/ibm-agile-explorer.png'),
      url: "https://www.credly.com/badges/4624287e-b071-44ae-8c8f-935843be1a7a/public_url"
    },
    {
      heading: 'Garage Essentials',
      company: 'IBM',
      date: 'Issued in September 2021',
      logo: require('../assets/badges/ibm-garage-essentials.png'),
      url: "https://www.credly.com/badges/5e2d861a-3e4a-4efd-9c99-db511b12fcd2/public_url"
    },
    {
      heading: 'Watson Assistant Foundations',
      company: 'IBM',
      date: 'Issued in September 2021',
      logo: require('../assets/badges/watson-assistant-foundations.png'),
      url: "https://www.credly.com/badges/ecf64c38-b4e5-48bd-8ac7-24216cecfa09/public_url"
    },
    {
      heading: 'Watson Assistant Methodology',
      company: 'IBM',
      date: 'Issued in September 2021',
      logo: require('../assets/badges/watson-assistant-methodology.png'),
      url: "https://www.credly.com/badges/ba30cb59-a724-4ff8-a86f-3566c48a6e7c/public_url"
    },
    {
      heading: 'Watson Studio Dashboard Essentials',
      company: 'IBM',
      date: 'Issued in October 2021',
      logo: require('../assets/badges/ibm-watson-studio-dashboard-essentials.png'),
      url: "https://www.credly.com/badges/35f9789b-c22e-4c90-9978-4e2f0e81ace2/public_url"
    },
    {
      heading: 'Delivering Business Value',
      company: 'IBM',
      date: 'Issued in December 2021',
      logo: require('../assets/badges/ibm-consulting-delivering-business-value.png'),
      url: "https://www.credly.com/badges/775a5e71-7e6b-40b0-bb89-8fe7e21bf130/public_url"
    },
    {
      heading: 'Build Your Own Chatbot',
      company: 'IBM',
      date: 'Issued in October 2021',
      logo: require('../assets/badges/build-your-own-chatbot-level-1.png'),
      url: "https://www.credly.com/badges/fc37997d-e4d8-4b0d-b3b5-97d64014d7bb/public_url"
    },
    {
      heading: 'Javascript for Beginners',
      company: 'Udemy',
      date: 'Issued in March 2022',
      logo: require('../assets/badges/udemy.png'),
      url: "https://www.udemy.com/certificate/UC-0e948ed8-b725-499e-8edf-f757e7b5a08d/"
    },
    {
      heading: 'Modern Javascript',
      company: 'Udemy',
      date: 'Issued in February 2022',
      logo: require('../assets/badges/udemy.png'),
      url: "https://www.udemy.com/certificate/UC-8cb290f1-eaeb-4eb8-bf29-6df4097285cf/"
    },
    {
      heading: 'Node.js Developer',
      company: 'Udemy',
      date: 'Issued in March 2022',
      logo: require('../assets/badges/udemy.png'),
      url: "https://www.udemy.com/certificate/UC-e546567a-7993-4b50-b7d0-65bdc2af2c4b/"
    },
    {
      heading: 'Docker and Kubernetes',
      company: 'Udemy',
      date: 'Issued in December 2021',
      logo: require('../assets/badges/udemy.png'),
      url: "https://www.udemy.com/certificate/UC-47d96e19-fd7f-4e20-9710-987ec229ba18/"
    },
    {
      heading: 'Serveless Framework Bootcamp',
      company: 'Udemy',
      date: 'Issued in March 2022',
      logo: require('../assets/badges/udemy.png'),
      url: "https://www.udemy.com/certificate/UC-58b0350e-af21-47c5-8db6-33d045a6f00c"
    }
  ],
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, academic, repos, skills, leadership, getInTouch, experiences, badges, ibm, cadastra };
