// Content for the CUR E-Portfolio sections.
// Sourced from Cara's resume (Aug 2026) and confirmed lab details.

// The "pages" of the folder — hero is the cover underneath everything else,
// these are the tabbed pages stacked on top of it in scroll order.
export const pageTabs = [
  {
    id: 'about',
    label: 'About',
    color: 'var(--paper)',
    text: 'var(--ink)',
    eyebrow: 'About',
    title: 'Computer Science Student & Data-Driven Researcher',
  },
  {
    id: 'research',
    label: 'Research',
    color: 'var(--pink)',
    text: 'var(--ink)',
    eyebrow: 'Research Project',
    title: 'Methamphetamine Use Disorder & GLP-1',
  },
  {
    id: 'education',
    label: 'Education',
    color: 'var(--babyblue)',
    text: 'var(--ink)',
    eyebrow: 'Education',
    title: 'Bachelor of Science in Computer Science',
  },
  {
    id: 'resume',
    label: 'Resume',
    color: 'var(--finale)',
    text: 'var(--cream)',
    eyebrow: 'Resume / CV',
    title: 'Download the full CV',
  },
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
  summary:
    'My research sits at the intersection of neuroscience and data science, working with the ' +
    "Khoshbouei Neuroscience Lab to understand recovery and relapse patterns in individuals with " +
    "methamphetamine use disorder. Using the National Institutes of Health's All of Us Research " +
    'Program database, I query and clean cohort data from over 800,000 patient records, isolating ' +
    'a study cohort of 7,000+ individuals with methamphetamine and GLP-1 history to build a ' +
    'predictive recovery and relapse model in Python (pandas, NumPy, scikit-learn). In parallel, I ' +
    "analyze brain imaging data across the lab's projects, creating heatmaps and regression lines " +
    'in Matplotlib and Seaborn to visualize regional infection concentrations, and present findings ' +
    'to the lab team on a regular basis.',
  links: [{ label: 'All of Us Research Program', url: 'https://www.researchallofus.org' }],
};

export const academics = {
  major: 'Bachelor of Science in Computer Science',
  school: 'University of Florida, Honors College',
  gpa: '3.88 / 4.0',
  grad: 'Expected May 2027',
  courses: [
    'Human-Computer Interaction',
    'Machine Learning',
    'Circuits 1',
    'Prompt Engineering',
    'Data Structures & Algorithms',
    'Operating Systems',
    'Databases & Information Systems',
    'Signals and Systems',
    'Algorithm Design',
  ],
  distinctions: [
    { text: 'Honors College, University of Florida' },
    { text: 'IBM Design Thinking Practitioner Certification' },
    {
      text: 'AI Scholar, University of Florida 2026',
      url: 'https://ai.ufl.edu/news-archive/news/scholars-2026/',
    },
  ],
  involvement: [
    {
      id: 'swe',
      title: 'Society of Women Engineers (SWE)',
      sub: ['Team Tech Project Lead (2025–26)'],
      detail:
        'Led multi-disciplinary development in partnership with CACI to build a machine ' +
        'learning web application that optimizes flight paths between airports, returning ' +
        "the optimal route with >80% accuracy in under 1 minute — now leads SWE's Team " +
        'Tech projects as Project Lead.',
      image: 'swe',
    },
    {
      id: 'wicse',
      title: 'Women in Computer Science & Engineering (WiCSE)',
      sub: ['Corporate Mentorship & Project (2025)'],
      detail:
        'Building a web application through the AMEX x WiCSE Corporate Mentorship Program ' +
        'that analyzes nutrition labels using Gemini Vision for OCR and Gemini Pro for ' +
        'ingredient analysis, storing results in SQLite for fast lookups across 6 dietary filters.',
    },
    {
      id: 'khoshbouei-lab',
      title: 'Khoshbouei Research Lab',
      sub: [],
      detail:
        'Processes 800,000+ patient records from the All of Us database to build a ' +
        'predictive relapse model, and creates heatmaps and regression analyses of brain ' +
        'imaging data to map regional concentrations.',
    },
    {
      id: 'dreamteam',
      title: 'Dream Team Engineering (DTE)',
      sub: ['Speech & Language Development (2025–26)', 'Research Liaison (2026–Present)'],
      detail:
        'Developed Python scripts using NLTK and spaCy to parse child speech transcripts ' +
        'and automatically apply SALT speech formatting, helping researchers more ' +
        'efficiently identify child speech disorders.',
      image: 'dreamteam',
    },
    {
      id: 'ieee-sps',
      title: 'IEEE Signal Processing Society',
      sub: [],
      detail:
        'Active member of the IEEE Signal Processing Society, engaging with signal ' +
        'processing research and professional development within the field.',
    },
    {
      id: 'venus',
      title: 'Venus A Cappella',
      sub: ['Creative Director (2025)', 'Music Director (2026–Present)'],
      detail:
        "Served as Creative Director in 2025, shaping the group's artistic direction and " +
        'performance repertoire, and now leads as Music Director, directing arrangements ' +
        'and rehearsals.',
    },
  ],
};

export const skills = {
  languagesTools: ['Python', 'C++', 'MATLAB', 'HTML & CSS', 'SQL', 'JavaScript', 'Figma', 'Gemini Enterprise Platform', 'Microsoft Power Platform'],
  libraries: ['Matplotlib', 'Seaborn', 'Scikit-learn', 'Pandas', 'NumPy', 'React', 'Flask'],
  careerInterests: ['Machine Learning', 'Signal Processing', 'Data Science'],
  topSkills: [
    { id: 'python', label: 'Python' },
    { id: 'data-viz', label: 'Data Visualization' },
    { id: 'data-cleaning', label: 'Data Cleaning & Analysis' },
    { id: 'project-management', label: 'Project Management (Agile/Scrum/Waterfall)' },
    { id: 'ux-ui', label: 'UX/UI (Design Thinking)' },
  ],
};

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// The Education page's Skills section shows every skill from both the
// curated Top Skills and the full Resume skill list, deduped by label
// (Top Skills wins so its id — and any skillLinks entry — is kept).
const topSkillLabels = new Set(skills.topSkills.map((s) => s.label.toLowerCase()));
export const allSkills = [
  ...skills.topSkills,
  ...[...skills.languagesTools, ...skills.libraries]
    .filter((label) => !topSkillLabels.has(label.toLowerCase()))
    .map((label) => ({ id: slugify(label), label })),
];

// Which Involvement entries light up when a skill pill is clicked.
export const skillLinks = {
  python: ['dreamteam', 'khoshbouei-lab'],
  'data-viz': ['khoshbouei-lab'],
  'data-cleaning': ['khoshbouei-lab'],
  'project-management': ['swe'],
  'ux-ui': ['swe'],
  matplotlib: ['khoshbouei-lab'],
  seaborn: ['khoshbouei-lab'],
  pandas: ['khoshbouei-lab'],
  numpy: ['khoshbouei-lab'],
  'scikit-learn': ['khoshbouei-lab'],
  sql: ['wicse'],
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
    org: 'UF Computer Science Department',
    role: 'Undergraduate Teaching Assistant',
    location: 'Gainesville, FL',
    date: 'August – December 2024',
    bullets: [
      'Instructed and mentored 30+ students in weekly discussion sessions, strengthening their understanding of procedural and object-oriented programming through hands-on debugging support.',
      'Created supplemental instructional materials — coding review sheets and practice problems — to prepare 700+ students for exams and reinforce core concepts.',
    ],
  },
];

export const resumeFileUrl = `${import.meta.env.BASE_URL}resume/Cara_Kulhanjian_Resume.pdf`;
