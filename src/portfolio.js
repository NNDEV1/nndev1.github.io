/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import { SiPytorch, SiTensorflow, SiPython, SiSolidity, SiPandas, SiNumpy, SiReact, SiFlask, SiDjango, SiJava, SiJavascript, SiScikitlearn } from "react-icons/si";
import { FaAws, FaNode } from "react-icons/fa";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nalin",
  title: "Hi, I'm Nalin",
  subTitle: emoji(
    "A passionate Deep Learning Researcher and Solidity Dev 🚀 experience with building state of the art deep learning models and deploying smart contracts using various libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1eGGOp92uhH2ueQZNCOkhG-3JaGGL0ZcN/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/NNDEV1",
  linkedin: "https://www.linkedin.com/in/nalin-nagar/",
  gmail: "nalinnagar1@gmail.com",
  medium: "https://medium.com/@nalinnagar1",
  stackoverflow: "https://stackoverflow.com/users/12248034/ndev99",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Developer who wants to explore all kinds of new techonology",
  skills: [
    emoji(
      "⚡ Developed complex computer vision models and deployed them to solve real world problems"
    ),
    emoji("🚀 Worked with smart contracts and buying tokens using Solidity and Ethereum"),
    emoji(
      "⚡ Combined knowledge of blockchain and deep learning to create powerful applications such as DAOHQ"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: SiPython
    },
    {
      skillName: "solidity",
      fontAwesomeClassname: SiSolidity
    },
    {
      skillName: "java",
      fontAwesomeClassname: SiJava
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: SiJavascript
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: SiReact
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: SiPytorch
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: SiTensorflow
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: SiPandas
    },
    {
      skillName: "numpy",
      fontAwesomeClassname: SiNumpy
    },
    {
      skillName: "aws",
      fontAwesomeClassname: FaAws
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: SiScikitlearn
    },
    {
      skillName: "flask",
      fontAwesomeClassname: SiFlask
    },
    {
      skillName: "django",
      fontAwesomeClassname: SiDjango
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Enloe High School",
      logo: require("./assets/images/enloeLogo.jpeg"), //add enloe image
      subHeader: "High School Diploma",
      duration: "August 2020 - Current",
      desc: "Weighted GPA of 4.65 as a sophomore.",
      descBullets: [
        "Taking IB Computer Science and Physics C Mech. as a junior",
        "Board member of computer science club"
      ]
    },
    //{
      //schoolName: "Stanford University",
      //logo: require("./assets/images/stanfordLogo.png"),
      //subHeader: "Bachelor of Science in Computer Science",
      //duration: "September 2013 - April 2017",
      //desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    //}
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Deep Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Smart Contract Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Web Development",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Researcher",
      company: "NC State",
      companylogo: require("./assets/images/ncstateLogo.png"), //nc state logo image
      date: "February 2022 – Present",
      desc: "Deep learning researcher at NC State's ARoS labs",
      descBullets: [
        "Working on multi-class segmentation of agricultural images and weeds",
        "Trying to publish research on findings"
      ]
    },
    {
      role: "Data Analyst",
      company: "DAOHQ",
      companylogo: require("./assets/images/daohqLogo.jpeg"), //get image
      date: "February 2022 – Present",
      desc: "Data Analyst at a startup working on making DAOs available to everyone",
      descBullets: [
        "Working on displaying financial data on DAOs in a presentable manner",
        "Scraping different DAO data to add to databases since DAOHQ relies heavily on data"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Other Projects",
  subtitle: "Used new tech to help others build amazing projects",
  projects: [
    {
      image: require("./assets/images/daohqLogo.jpeg"), //insert
      projectName: "DAOHQ",
      projectDesc: "Startup focusing on making DAOs available to everyone, wallet connection available and token purchase in beta",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://daohq.co/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/qandmedicaidLogo.png"),
      projectName: "MedicalQandA",
      projectDesc: "Used deep learning to develop an app that could answer questions about medical images",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/NNDEV1/QandMedicAid"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Best Space App",
      subtitle:
        "Won the Best Space App prize at \"NextStep Hacks\" out of over 400 people",
      image: require("./assets/images/satelliteLogo.jpeg"),
      footerLink: [
        {
          name: "Project",
          url: "https://devpost.com/software/satellite-tip-detection"
        },
      ]
    },
    {
      title: "Best Use of GCP",
      subtitle:
        "Won the Best Use of GCP award at \"See You Later Hackulator\" out of over 250 people",
      image: require("./assets/images/easymlLogo.png"),
      footerLink: [
        {
          name: "View Project",
          url: "https://devpost.com/software/easyml-plfv14"
        }
      ]
    },

    {
      title: "1st Place",
      subtitle: "Won 1st place at a hackathon at Virginia Tech out of 150 other people",
      image: require("./assets/images/codlyLogo.png"), 
      footerLink: [
        {
          name: "View Project",
          url: "https://devpost.com/software/codly-b26d80"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With love for developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  /*blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],*/
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-9198859146",
  email_address: "nalinnagar1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "dao_hq", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
