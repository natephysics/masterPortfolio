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
        "2️⃣ Research experience in computer vision & CNNs, diffusion model, and signal processing.",
        "3️⃣ Experience working on cutting-edge machine learning tools and methods such as Hydra framework for PyTorch, invariant convolutional kernels, Bayesian hyperparameter optimization, sanity checks, ML error analysis, and code profiling and optimization.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
          logo_url: "https://www.tensorflow.org/",
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
          logo_url: "https://keras.io/",
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
          logo_url: "https://pytorch.org/",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
          logo_url: "https://www.anaconda.com/",
        },
      ],
    },
    {
      title: "MLOps & HPC Compute",
      fileName: "CloudInfraImg",
      skills: [
        "3️⃣ Experience with several cloud platforms. Currently working on AWS Certified ML Specialization.",
        "4️⃣ Designed projects with multi-run support for HPC applications with spark or dask.",
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
          logo_url: "https://aws.amazon.com/",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
          logo_url: "https://azure.microsoft.com/",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
          logo_url: "https://www.postgresql.org/",
        },
        {
          skillName: "GPU HPC",
          fontAwesomeClassname: "simple-icons:nvidia",
          style: {
            color: "#47A248",
          },
          logo_url: "https://developer.nvidia.com/cuda-zone",
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: {
            color: "#e25a1c",
          },
          logo_url: "https://spark.apache.org/",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
          logo_url: "https://www.docker.com/",
        },
      ],
    },
    {
      title: "State-of-the-Art Research",
      fileName: "PhysicsImg",
      skills: [
        "7️⃣ Worked on the state-of-the-art in fusion plasma physics, the Wendelstein 7X experimental fusion reactor at the Max Planck Institute for Plasma Physics in Germany.",
        "8️⃣ Research intern with two different antimatter experiments. Alpha group at CERN in Geneva, Switzerland working on antimatter spectroscopy and APEX group in Germany working on antimatter pair plasmas.",
        "9️⃣ Two undergraduate research experiences: with the Cold Electron Research Group and a summer Emilio Segrè internship, both at the University of California: Berkeley.",
      ],
      softwareSkills: [
        {
          skillName: "LabView",
          fontAwesomeClassname: "simple-icons:labview",
          style: {
            color: "#FF2BC2",
          },
          logo_url: "https://www.ni.com/de-de/shop/labview.html",
        },
        {
          skillName: "Wolfram Mathematica",
          fontAwesomeClassname: "simple-icons:wolfram",
          style: {
            color: "#F24E1E",
          },
          logo_url: "https://www.wolfram.com/",
        },
        {
          skillName: "Fusion Plasma Physics",
          fontAwesomeClassname: "simple-icons:atom",
          style: {
            color: "#FF7C00",
          },
          logo_url: "https://www.ipp.mpg.de/en",
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
      duration: "2018 - 2022",
      descriptions: [
        "I came to the University of Greifswald to work on my M.Sc. in Physics at the Max Planck Institute for Plasma physics. The main focus of my work is on the development of ML algorithms for the analysis and generation of data taken from the Wendelstein 7-X fusion experiment.",
        "👨‍🔬 Developed a Python-based package used to train an ensemble of CNNs, facilitating the reconstruction of high-level plasma parameters like the rotational transform for the heat load image data. Extracting these parameters during operation is one of the steps necessary to developing a ML-based real time control system for the reactor.",
        "👨‍🔬 Produced a diffusion model that generates a heat load image from a given plasma state. The model is tuned (like a PINN) using the previously mentioned CNN in the loss function to verify the generated heat load image preserves the physics of the plasma.",
        "👨‍🔬 Created several data science solutions for the APEX group including projects that effectively counted peaks and automated data analysis. ",
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
      color_code: "#FFFFFF60",
      header_img: "Greifswald_banner_2.jpg",
    },
    {
      title: "University of California: Berkeley",
      subtitle: "Double B.A. in Physics and Applied Mathematics",
      logo_path: "ucb.png",
      alt_name: "University of California: Berkeley Logo",
      duration: "2013 - 2016",
      descriptions: [
        "👨‍🔬 Alongside the Fajan/Wurtele Plasma Group at Berkeley, adapted software tools for analyzing the dipole and quadrupole moments in plasma, an important diagnostic that can be used as a non-destructive measure of the plasma shape, rotationaly speed, and even small deviations in magnetic field alignment. The tools were designed at CERN and had to be redeveloped to work our software control system, requiring extensive knowledge of both.",
        "👨‍🔬 Worked with the ALPHA antihydrogen experiment at CERN, in conjunction with a Ph.D. student, developed a CUDA accelerated temperature solver which fit the Levenberg-Marquardt algorithm to successively increasing sized data intervals, using the normalized log-likelihood to compare fits, and assessed the uncertainty measure. This automated a time intensive and error prone process and is still used today.",
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
      title: "TensorFlow: Advanced Techniques Specialization",
      subtitle: "- Laurence Moroney",
      details: [
        "◐ Custom Models, Layers, and Loss Functions with TensorFlow",
        "◌ Custom and Distributed Training with TensorFlow",
        "◌ Advanced Computer Vision with TensorFlow",
        "◌ Generative Deep Learning with TensorFlow",
      ],
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "",
      alt_name: "Deep Learning.AI",
      complete: false,
      color_code: "#0C9D5899",
    },
    {
      title: "AWS Certified Machine Learning Specialty",
      subtitle: "- Stephane Maarek",
      details: [
        "✓ Data Engineering",
        "◐ Exploratory Data Analysis",
        "◌ General Deep Learning and ML",
        "◌ Amazon SageMaker",
        "◌ High-Level ML Services",
        "◌ Lab Activity",
        "◌ ML Implementations and Operations",
      ],
      logo_path: "udemy_logo.png",
      certificate_link: "https://www.udemy.com/course/aws-machine-learning/",
      alt_name: "Coursera",
      complete: false,
      color_code: "#dda0dd99",
    },
    // {
    //   title: "Coursera Classes",
    //   subtitle: "General Classes",
    //   details: ["✓ Extract Text Data with Python and Regex"],
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/JHD2SX7P7RXH",
    //   alt_name: "Coursera",
    //   complete: true,
    //   color_code: "#0056d299",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship Roles",
  description:
    "I have worked with a variety of companies and organizations in the fields of machine learning, data science, mathematics, and physics.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      default: "false",
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TicketSwap",
          company_url: "https://ticketswap.com/",
          logo_path: "TicketSwap_logo.png",
          duration: "2022 - Current",
          location: "Amsterdam, Netherlands",
          description:
            "Single-handedly architected an advanced MLOps pipeline encompassing experiment tracking, model and artifact registry on S3, and data versioning & genealogy. Integrated functionalities such as compute management & orchestration, real-time monitoring, containerization, and designed API endpoints for seamless deployment. This robust pipeline expedited the model development and deployment workflow, offering tools for tracing and diagnosing issues with deployed models in real-time and achieving significant AWS cost savings through automated compute management. Concurrently, led the development of a Graph Neural Network (GNN) based fraud detection system, crafted statistical models, a neural forecasting package, and event matching strategies. These innovations enhanced fraud detection efficiency and pinpointed discrepancies in advertising allocations using LTV. Addressed and corrected an overestimation in a previous revenue forecast and unveiled new analytical pathways through event matching. To bolster infrastructure, established an on-site ML workstation optimized for hybrid development, resulting in a 2-year ROI and substantial reductions in AWS EC2 costs during prototyping and tuning stages.",
          color: "#00b6f0",
        },
        {
          title: "Data Scientist",
          company: "Max Planck Institute for Plasma Physics",
          company_url: "https://www.ipp.mpg.de/en",
          logo_path: "IPP_logo.png",
          duration: "2018 - 2020",
          location: "Greifswald, Germany",
          description:
            "The APEX group at the Max Planck Institute for Plasma Physics principle research focus is producing matter-antimatter pair plasmas. Actively involved in developing data science solutions, writing scalable code that effectively counted peaks in the data sets and automated data analysis. Wrote LaTeX formatted lecture notes for the fusions plasma physics graduate course used by the director at the Institute. Set up an Ubuntu server with a JupyterHub instance for the group that used a hub for data analysis, converting old code into Python",
          color: "#006c67",
        },
        {
          title: "Backend Developer, Project Manager",
          company: "Freelance Development",
          company_url: "https://www.linkedin.com/in/nathan-belmore-2b7280223/",
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
    //     }
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
