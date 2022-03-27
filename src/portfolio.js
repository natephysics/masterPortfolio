/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nathan Belmore's Portfolio",
  description:
    "A developer working at the intersection of math, physics, and machine learning.",
  og: {
    title: "Nathan Belmore's Portfolio",
    type: "website",
    url: "nate.physics.github.io",
  },
};

//Home Page
const greeting = {
  title: "Nathan Belmore",
  logo_name: "Nathan Belmore",
  nickname: "ML Developer & Physicist",
  subTitle:
    "A developer working at the intersection of math, physics, and machine learning to solve real world problems.",
  resumeLink:
    "https://drive.google.com/file/d/1hX1OIqSe4CVYd0luGC-2uIIV73cnDGto/view?usp=sharing",
  githubProfile: "https://github.com/natephysics?tab=repositories",
  portfolio_repository: "https://github.com/natephysics/",
};

const socialMediaLinks = [
  /* Social Media Links */

  {
    name: "Github",
    link: "https://github.com/natephysics/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nathan-belmore-2b7280223/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:nate.physics@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100008027265841",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "1️⃣ Developing highly scalable production ready models for various deep learning and statistical use cases.",
        "2️⃣ Research experience in Computer Vision and Signal Processing.",
        "3️⃣ Experience working on cutting-edge Machine Learning tools and methods such as Hydra framework for PyTorch, invariant convolutional kernels, Bayesian hyperparameter optimization, sanity checks, and code profiling and optimization.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "MLOps & HPC Compute",
      fileName: "CloudInfraImg",
      skills: [
        "3️⃣ Experience with several cloud platforms.",
        "4️⃣ Designed projects with multi-run support for HPC applications with spark and slurm.",
        "5️⃣ Developed an ML workflow with data version control and automatic experiment tracking.",
        "6️⃣ Backend developer with experience with multiple database types.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "GPU HPC",
          fontAwesomeClassname: "simple-icons:nvidia",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: {
            color: "#e25a1c",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "State-of-the-Art Research",
      fileName: "PhysicsImg",
      skills: [
        "7️⃣ Worked on the state-of-the-art in fusion plasma physics, the Wendelstein 7X experimental fusion reactor at the Max Planck Institute for Plasma Physics in Germany.",
        "8️⃣ Research intern with two different antimatter experiments. Alpha group at CERN in Geneva, Switzerland working on antimatter spectroscopy and APEX group in Germany working on antimatter pair plasmas.",
        "9️⃣ Two undergraduate research experiences: with the Cold Electron Research group and a summer Emilio Segrè internship, both at the University of California: Berkeley.",
      ],
      softwareSkills: [
        {
          skillName: "LabView",
          fontAwesomeClassname: "simple-icons:labview",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Wolfram Mathematica",
          fontAwesomeClassname: "simple-icons:wolfram",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Fusion Plasma Physics",
          fontAwesomeClassname: "simple-icons:atom",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:radiation",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Greifswald",
      subtitle: "M.Sc. in Physics",
      logo_path: "gw.png",
      alt_name: "University of Greifswald Logo",
      duration: "2018 - Now",
      descriptions: [
        "👨‍🔬 Developed a Python-based package used to train an ensemble of CNNs, facilitating the reconstruction of high-level plasma parameters like the rotational transform for the heat load image data taken from the Wendelstein 7-X fusion experiment. Extracting these parameters during operation is one of the steps necessary to developing a ML-based real time control system for the reactor.",
        "👨‍🔬 Actively involved in developing several data science solutions for the APEX group including projects that effectively counted peaks and automated data analysis. ",
        "Attended lectures:",
        "🖥️ Machine Learning",
        "🖥️ Features: Starting point for machine learning; Source for algebraic questions",
        "🖥️ Statistical Learning (audit)",
        "🖥️ Reinforcement Learning (audit)",
        "🧲 Computation Physics",
        "🧲 Many-Particle Theory",
        "🧲 Fusion Plasma Physics I",
        "🧲 Fusion Plasma Physics II",
        "🧲 Advanced Quantum Physics",
        "+ Others",
      ],
      website_link: "https://www.uni-greifswald.de/",
      color_code: "#FFBBAC60",
      header_img: "Greifswald_banner.jpg",
    },
    {
      title: "University of California: Berkeley",
      subtitle: "Double B.A. in Physics and Applied Mathematics",
      logo_path: "ucb.png",
      alt_name: "University of California: Berkeley Logo",
      duration: "2013 - 2016",
      descriptions: [
        "👨‍🔬 Alongside the Fajan/Wurtele Plasma Group at Berkeley, adapted software tools for analyzing the dipole and quadrupole moments in plasma, an important diagnostic that can be used as a non-destructive measure of the plasma shape, rotationaly speed, and even small deviations in magnetic field alignment. The tools were designed at CERN and had to be redeveloped to work our software control system, requiring extensive knowledge of both.",
        "👨‍🔬	Worked with the ALPHA antihydrogen experiment at CERN, in conjunction with a Ph.D. student, developed a CUDA accelerated temperature solver which fit the Levenberg-Marquardt algorithm to successively increasing sized data intervals, using the normalized log-likelihood to compare fits, and assessed the uncertainty measure. This automated a time intensive and error prone process and is still used today.",
        "Attended lectures:",
        "📖	MATH110 - Linear Algebra",
        "📖	MATH185 - Abstract Algebra",
        "📖	MATH55 - Discrete Mathematics",
        "📖	MATH128A - Numerical Analysis",
        "📖	MATH104 - Real Analysis",
        "📖 MATH189 Mathematical Methods for Quantum & Classical Mechanics",
        "🖥️ CS189 - Introduction to Machine Learning",
        "🖥️ DS100 - Principles and Techniques of Data Science (audited)",
        "🧲 PHY137A Quantum Mechanics I",
        "🧲 PHY137A Quantum Mechanics II",
        "🧲 PHY112 Statistical Thermal Physics",
        "🧲 PHY139 Theoretical Relativity",
        "+ Others",
      ],
      website_link: "https://www.berkeley.edu/",
      color_code: "#A9CCE370",
      header_img: "Berkeley_banner.jpg",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      details: [
        "✓ Neural Networks and Deep Learning",
        "✓ Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
        "✓ Structuring Machine Learning Projects",
        "✓ Convolutional Neural Networks",
        "✓ Sequence Models",
      ],
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/U2EPL96DR6LS",
      alt_name: "deeplearning.ai",
      complete: true,
      color_code: "#00000099",
    },
    {
      title: "ML on GCP (In Progress)",
      subtitle: "- GCP Training",
      details: [
        "◐ How Google does Machine Learning",
        "◌ Launching into Machine Learning",
        "◌ TensorFlow on Google Cloud",
        "◌ Feature Engineering",
        "◌ Machine Learning in the Enterprise",
      ],
      logo_path: "google_logo.png",
      certificate_link: "#education",
      alt_name: "Google",
      complete: false,
      color_code: "#0C9D5899",
    },
    {
      title: "Coursera Classes",
      subtitle: "General Classes",
      details: ["✓ Extract Text Data with Python and Regex"],
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/JHD2SX7P7RXH",
      alt_name: "Coursera",
      complete: true,
      color_code: "#0056d299",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship Roles",
  description:
    "My principle role in almost every physics related research position I've had has been akin to a data scientists or ML engineer working with physics data. Topics of interest include CNNs, GANs, CUDA accelerated development, non-linear least squares solvers, and experience with databases.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      default: "false",
      experiences: [
        {
          title: "Data Scientist",
          company: "Max Planck Institute for Plasma Physics",
          company_url: "https://www.ipp.mpg.de/en",
          logo_path: "IPP_logo.png",
          duration: "August 2018 - August 2020",
          location: "Greifswald, Germany",
          description:
            "The APEX group at the Max Planck Institute for Plasma Physics principle research focus is producing matter-antimatter pair plasmas. Actively involved in developing data science solutions, writing scalable code that effectively counted peaks in the data sets and automated data analysis. Wrote LaTeX formatted lecture notes for the fusions plasma physics graduate course used by the director at the Institute. Set up an Ubuntu server with a JupyterHub instance for the group that used a hub for data analysis, converting old code into Python",
          color: "#0077bd",
        },
        {
          title: "Freelance Backend Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freelance_logo.png",
          duration: "2007 - 2013",
          location: "Seattle, Washington",
          description:
            "Contracted as a freelance backend developer. Flushed out a proprietary CMS from a code library with a small team. During the development phase, mostly worked on tools for importing content from existing frameworks, extracting content from systems like WordPress, Drupal, various wikis, etc. ",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      default: "false",
      experiences: [
        {
          title: "Physics Research Intern",
          company: "CERN - ALPHA: Antihydrogen Laser Physics Apparatus",
          company_url: "https://alpha.web.cern.ch/",
          logo_path: "CERN_logo.png",
          duration: "May 2015 - Aug 2015",
          location: "Geneva, Switzerland",
          description:
            "Worked with the ALPHA experiment at CERN whose research focus is making spectroscopic and gravitational measurements of antimatter atoms. In conjunction with a Ph.D. student, developed a CUDA accelerated plasma temperature solver which takes in experimental data, fits the Levenberg-Marquardt algorithm to successively increasing sized data intervals, uses the normalized log-likelihood to compare fits, and provides the uncertainty measure. This automated the time intensive and error prone process of manually defining a small window between the noise floor and the saturated region of the signal, which has to be done for thousands of temperature measurements. The software is still used today.",
          color: "#1e59ae",
        },
        {
          title: "Emilio Segrè Intern",
          company: "University of California: Berkeley - Physics Department",
          company_url: "http://experimentationlab.berkeley.edu/SegreInternship",
          logo_path: "Berkeley_logo.png",
          duration: "May 2014 - Aug 2014",
          location: "Berkeley, California",
          description:
            "Worked on a series of experiments over the semester. Reprogrammed interlock systems, circuit analyzers, and programmable power supplies. Rebuilt and analyzed circuits, trapped atoms in a MOT, and helped design and teach two graduate electronic labs. The main project was centralizing two of the lab websites into a single CMS, which required creating a script to import the content of countless word documents into the database.",
          color: "#c4830f",
        },
      ],
    },
    // {
    //   title: "Research Projects",
    //   default: "false",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Coding Projects",
  description:
    "A portfolio of various machine learning and data science projects. Most projects are related to the physics research I've conducted in the fields of fusion plasma physics or antimatter research.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "nathan_hs.png",
    description:
      "I am currently looking for work in the field of machine learning engineering and development. Feel free to reach out if you have any questions, comments, or suggestions relating to ML development.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://ashutoshhathidara.wordpress.com",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Greifswald, Germany, 17489",
    subtitle: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/HxFBMW7JeLiKzRuy8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+49 174 6804697",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
