// Content for the CUR E-Portfolio sections.
// Sourced from Cara's resume (Aug 2026) and confirmed lab details.

// The "pages" of the folder — hero is the cover underneath everything else,
// these are the tabbed pages stacked on top of it in scroll order.
export const pageTabs = [
  { id: 'about', label: 'About', color: 'var(--paper)', text: 'var(--ink)' },
  { id: 'research', label: 'Research', color: 'var(--pink)', text: 'var(--ink)' },
  { id: 'coursework', label: 'Coursework', color: 'var(--babyblue)', text: 'var(--ink)' },
  { id: 'resume', label: 'Resume', color: 'var(--finale)', text: 'var(--cream)' },
  { id: 'contact', label: 'Contact', color: 'var(--ink)', text: 'var(--paper)' },
];

export const profile = {
  name: 'Cara Kulhanjian',
  tagline: 'Computer Science Student & Data-Driven Researcher',
  location: 'Gainesville, FL',
  meta: 'University of Florida · Honors College · B.S. Computer Science, Class of 2027',
  bio:
    "I'm a Computer Science student at the University of Florida's Honors College, " +
    'combining hands-on software development with data-driven neuroscience research. ' +
    'My work spans predictive modeling on large public health datasets, full-stack ' +
    'engineering, and human-centered design.',
  email: 'carak143@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cara-kulhanjian/',
  github: 'https://github.com/ckulhanjian',
};

export const research = {
  title: 'Methamphetamine Use Disorder & GLP-1: A Predictive Recovery and Relapse Model',
  pi: 'Dr. Habibeh Khoshbouei',
  institution: 'Khoshbouei Neuroscience Lab, Department of Neuroscience, University of Florida College of Medicine',
  duration: 'February 2026 – Present (7+ months)',
  focus:
    'My research sits at the intersection of neuroscience and data science, working with the ' +
    "Khoshbouei Neuroscience Lab to understand recovery and relapse patterns in individuals with " +
    "methamphetamine use disorder. Using the National Institutes of Health's All of Us Research " +
    'Program database, I process patient-level health records at scale to study how GLP-1 medication ' +
    'history relates to substance use recovery outcomes. In parallel, I support the lab\'s brain imaging ' +
    'work, analyzing scan data to map which brain regions show the highest concentrations of fungal ' +
    'infection — research that informs the broader lab focus on the neurobiology of addiction.',
  responsibilities:
    'As an undergraduate researcher, I query and clean cohort data from over 800,000 patient records in ' +
    'the All of Us database, isolating a study cohort of 7,000+ individuals with methamphetamine and ' +
    'GLP-1 history to build a predictive recovery and relapse model in Python (pandas, NumPy, ' +
    'scikit-learn). I also analyze brain imaging data across multiple lab projects, creating heatmaps ' +
    'and regression lines in Matplotlib and Seaborn to visualize regional infection concentrations, and ' +
    'present findings to the lab team on a regular basis.',
  context:
    'This project uses de-identified data from the All of Us Research Program, an NIH initiative ' +
    'building one of the most diverse health databases in the world. Understanding links between ' +
    'metabolic medications like GLP-1 agonists and substance use recovery is an emerging area of ' +
    'addiction neuroscience with direct implications for treatment design.',
};

export const academics = {
  major: 'Bachelor of Science in Computer Science',
  school: 'University of Florida, Honors College',
  gpa: '3.88 / 4.0',
  grad: 'Expected May 2027',
  narrative:
    "My coursework is built around a specialization that bridges systems, intelligence, and design: " +
    'I pair core Computer Science requirements with electives in machine learning and human-computer ' +
    'interaction so I can build systems that are both technically sound and genuinely usable. Circuits ' +
    'coursework grounds my understanding of the hardware underneath the software I write, and a ' +
    'prompt engineering course reflects my growing focus on applied AI. Outside the classroom, I bring ' +
    'that same combination — data analysis, engineering, and design — into research and leadership roles.',
  courses: [
    'Human-Computer Interaction',
    'Machine Learning',
    'Circuits 1',
    'Prompt Engineering',
    'Data Structures & Algorithms',
    'Operating Systems',
    'Databases & Information Systems',
  ],
  distinctions: ['Honors College, University of Florida', 'IBM Design Thinking Practitioner Certification'],
  involvement: [
    'Society of Women Engineers (SWE) Design Team — Team Tech Project Manager',
    'UF Dream Team Engineering — Speech Language Development Team',
    'AMEX x UF WiCSE Corporate Mentorship Program',
  ],
};

export const skills = {
  languagesTools: ['Python', 'C++', 'HTML & CSS', 'SQL', 'JavaScript', 'Figma', 'Gemini Enterprise Platform', 'Microsoft Power Platform'],
  libraries: ['Matplotlib', 'Seaborn', 'Scikit-learn', 'Pandas', 'NumPy', 'React', 'Flask'],
};

export const experience = [
  {
    org: 'Arthrex Inc.',
    role: 'IT Project Analyst Intern',
    location: 'Naples, FL',
    date: 'May – August 2026',
    bullets: [
      'Drove end-to-end development of a SAP analytics dashboard, gathering requirements from stakeholders and prototyping a 7-report Figma interface.',
      'Developed a custom Power Apps solution to streamline registration and logistics for a recurring company event.',
    ],
  },
  {
    org: 'Khoshbouei Neuroscience Lab',
    role: 'Undergraduate Researcher',
    location: 'Gainesville, FL',
    date: 'February 2026 – Present',
    bullets: [
      'Processed 800,000+ patient records from the All of Us database, isolating a 7,000+ person cohort to build a predictive relapse model.',
      'Created heatmaps and regression analyses of brain imaging data to map regional infection concentrations.',
    ],
  },
  {
    org: 'Travel Wizards',
    role: 'Backend Developer Intern',
    location: 'Remote',
    date: 'July – August 2025',
    bullets: [
      'Automated invoice processing with Python (OS, PyMuPDF), cutting a 2-hour manual task to under 5 seconds.',
    ],
  },
];

export const resumeFileUrl = `${import.meta.env.BASE_URL}resume/Cara_Kulhanjian_Resume.pdf`;
