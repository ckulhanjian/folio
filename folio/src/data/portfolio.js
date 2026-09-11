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
    id: 'education',
    label: 'Education',
    color: 'var(--babyblue)',
    text: 'var(--ink)',
    eyebrow: 'Education',
    title: 'Bachelor of Science in Computer Science',
  },
  {
    id: 'projects',
    label: 'Projects',
    color: 'var(--sage)',
    text: 'var(--ink)',
    eyebrow: 'Projects',
    title: 'Selected Projects',
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
  keyFindings: [
    'Isolated a 7,000+ person study cohort from 800,000+ All of Us patient records with a history of methamphetamine use and GLP-1 exposure.',
    'Built a predictive model in Python (pandas, NumPy, scikit-learn) to flag recovery vs. relapse risk from cohort features.',
    'Mapped regional concentrations in brain imaging data with heatmaps and regression analysis in Matplotlib and Seaborn.',
    'Findings presented to the Khoshbouei Neuroscience Lab team on a recurring basis to guide the next round of analysis.',
  ],
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
        'SWE is a national society supporting women in engineering; the UF chapter runs a ' +
        'Team Tech program that pairs student teams with industry sponsors on real-world ' +
        "projects. I joined as a member in 2024 and now lead SWE's Team Tech program as " +
        'Project Lead.',
      image: 'swe',
      link: 'https://uf.swe.org/',
    },
    {
      id: 'wicse',
      title: 'Women in Computer Science & Engineering (WiCSE)',
      sub: ['Corporate Mentorship Program (2025)'],
      detail:
        "WiCSE is UF's student organization supporting and empowering women in computer " +
        "science and engineering through mentorship, professional development, and " +
        "community events. I've been an active member since 2023, and in 2025 joined the " +
        'AMEX x WiCSE Corporate Mentorship Program as a mentee.',
      link: 'https://ufwicse.com/',
    },
    {
      id: 'khoshbouei-lab',
      title: 'Khoshbouei Research Lab',
      sub: [],
      detail:
        'The Khoshbouei Lab studies dopamine transmission and its role in neurological and ' +
        'neuropsychiatric disease. I joined as an undergraduate researcher in February 2026, ' +
        'working at the intersection of neuroscience and data science.',
      link: 'http://www.khoshboueilab.org/',
    },
    {
      id: 'dreamteam',
      title: 'Dream Team Engineering (DTE)',
      sub: ['Speech & Language Development (2025–26)', 'Research Liaison (2026–Present)'],
      detail:
        'Dream Team Engineering is a UF student organization that builds assistive medical ' +
        'devices and software for patients at UF Health Shands. I joined the Speech & ' +
        'Language Development team in 2025 and now serve as a Research Liaison connecting ' +
        'the software and research branches.',
      image: 'dreamteam',
      link: 'https://www.dreamteameng.org/',
    },
    {
      id: 'venus',
      title: 'Venus A Cappella',
      sub: ['Creative Director (2025)', 'Music Director (2026–Present)'],
      detail:
        'Venus A Cappella is a UF student a cappella group built around original ' +
        "arrangements and live performance. I joined in 2024, served as Creative Director " +
        "in 2025 shaping the group's artistic direction, and now serve as Music Director " +
        'leading rehearsals and arrangements.',
      link: 'https://www.instagram.com/venusacappella/',
    },
  ],
};

export const skills = {
  languagesTools: ['Python', 'C++', 'MATLAB', 'HTML & CSS', 'SQL', 'JavaScript', 'Figma', 'Gemini Enterprise Platform', 'Microsoft Power Platform'],
  libraries: ['Matplotlib', 'Seaborn', 'Scikit-learn', 'Pandas', 'NumPy', 'React', 'Flask'],
  careerInterests: ['Machine Learning', 'Signal Processing', 'Data Science'],
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

// The Education page's timeline — one entry per academic year, each a
// short list of everything that happened that year. Ordered oldest
// (freshman) to newest (senior); Coursework.jsx renders this bottom
// (old) to top (new) along its diagonal line.
export const timeline = [
  {
    id: 'freshman',
    label: 'Freshman Year',
    range: '2023 – 2024',
    events: [
      'WiCSE Member — Winghacks Committee',
      'SWE Member',
    ],
  },
  {
    id: 'sophomore',
    label: 'Sophomore Year',
    range: '2024 – 2025',
    events: [
      'SWE Team Tech Design Team — Backend Member',
      'Programming Teaching Assistant',
      'SWE Council',
      'Joined Venus A Cappella',
    ],
  },
  {
    id: 'junior',
    label: 'Junior Year',
    range: '2025 – 2026',
    events: [
      'Team Tech Chair — Leading Design Team for SWE',
      'Joined Dream Team Engineering',
      'Started Neuroscience Research',
      'Creative Director for Venus',
      'Arthrex Internship',
      'Grace Hopper Conference',
    ],
  },
  {
    id: 'senior',
    label: 'Senior Year',
    range: '2026 – 2027',
    events: [
      'IEEE Signal Processing Society',
      'AI Scholar (GLP-1 & Meth Research)',
      'Music Director for Venus',
      'SWE Conference',
    ],
  },
];

// Each project's image is GitHub's own auto-generated social preview
// card for that repo (opengraph.githubassets.com) — a real, live image
// specific to the repo with no local asset needed.
const ogImage = (owner, repo) => `https://opengraph.githubassets.com/1/${owner}/${repo}`;

export const projects = [
  {
    id: 'nutrition-scanner',
    icon: '🍎',
    title: 'Nutrition Label Scanner',
    tagline: 'AMEX x WiCSE Corporate Mentorship Program',
    tech: ['Python', 'Gemini Vision', 'Gemini Pro', 'SQLite'],
    repoUrl: 'https://github.com/ckulhanjian/nutrition-scanner',
    image: ogImage('ckulhanjian', 'nutrition-scanner'),
    summary: 'A web app that scans a nutrition label and flags ingredients against dietary filters.',
    description: [
      'Built as part of the AMEX x WiCSE Corporate Mentorship Program, this web application ' +
        'analyzes nutrition labels using Gemini Vision for optical character recognition and ' +
        'Gemini Pro to interpret the extracted ingredient list.',
      'Results are stored in SQLite for fast repeat lookups, and the app checks each label ' +
        'against 6 different dietary filters, making it easier for users to spot allergens or ' +
        'ingredients they need to avoid at a glance.',
    ],
  },
  {
    id: 'covid-xray-ml',
    icon: '🩻',
    title: 'COVID-19 X-Ray Classification',
    tagline: 'CIS4930 — Introduction to Machine Learning, Final Project',
    tech: ['Python', 'Jupyter', 'scikit-learn'],
    repoUrl: 'https://github.com/danielgeorge922/cis4930-intro-to-ml-final-project',
    image: ogImage('danielgeorge922', 'cis4930-intro-to-ml-final-project'),
    summary: 'A team final project classifying chest X-rays for COVID-19 using a Kaggle imaging dataset.',
    description: [
      'A team final project for Introduction to Machine Learning, built around Kaggle\'s ' +
        'COVID X-Ray dataset. The pipeline automates dataset download and preprocessing, with ' +
        'Jupyter notebooks handling exploration, model training, and evaluation.',
      'Focused on translating a real diagnostic imaging problem into a working classification ' +
        'pipeline end-to-end, from raw image data to a trained, evaluated model.',
    ],
  },
  {
    id: 'cns-candidiasis',
    icon: '🦠',
    title: 'Monocyte Dynamics in CNS Candidiasis',
    tagline: 'Khoshbouei Neuroscience Lab — Undergraduate Research',
    tech: ['Python', 'Matplotlib', 'Seaborn', 'Statistical Analysis'],
    repoUrl: 'https://github.com/ckulhanjian/Khoshbouei-monocyte_cns_candidiasis',
    image: ogImage('ckulhanjian', 'Khoshbouei-monocyte_cns_candidiasis'),
    summary: 'Correlating fungal burden and immune cell infiltration across brain regions during CNS infection.',
    description: [
      'A research analysis, mentored by Leah Phan alongside fellow researchers Devon Borg and ' +
        'Sabrina Campos under PI Dr. Habibeh Khoshbouei, investigating neuroimmune responses ' +
        'during central nervous system candidiasis infections.',
      'Generates correlation scatter plots and heatmaps examining the relationship between ' +
        'fungal burden and immune cell (monocyte) infiltration across different brain regions, ' +
        'organized around original, cleaned, and generated-visualization datasets.',
    ],
  },
  {
    id: 'teamtech',
    icon: '✈️',
    title: 'Team Tech Project 2025–26',
    tagline: 'Society of Women Engineers (SWE) — Team Tech',
    tech: ['JavaScript', 'Node.js', 'Machine Learning'],
    repoUrl: 'https://github.com/ufswe/teamtech25-26',
    image: ogImage('ufswe', 'teamtech25-26'),
    summary: 'A machine learning web app, built with SWE, that optimizes flight paths between airports.',
    description: [
      'Built in partnership with CACI as SWE\'s Team Tech project, this full-stack web ' +
        'application uses machine learning to optimize flight paths between airports, ' +
        'returning the optimal route with >80% accuracy in under 1 minute.',
      'Coordinated as Project Lead using Kanban-based task tracking and a hybrid ' +
        'Agile–Waterfall methodology across a multi-disciplinary team to keep development on ' +
        'schedule.',
    ],
  },
  {
    id: 'sld',
    icon: '💬',
    title: 'Speech Language Development (SLD)',
    tagline: 'UF Dream Team Engineering',
    tech: ['Python', 'NLTK', 'spaCy'],
    repoUrl: 'https://github.com/DreamTeamSE/SLD',
    image: ogImage('DreamTeamSE', 'SLD'),
    summary: 'Parses child speech transcripts and automatically applies SALT speech formatting.',
    description: [
      'Built with UF Dream Team Engineering\'s Speech Language Development team, this project ' +
        'uses Python scripts with NLTK and spaCy to parse child speech transcripts and ' +
        'automatically apply SALT speech formatting.',
      'The automated formatting helps researchers more efficiently identify child speech ' +
        'disorders, cutting down on the manual transcription work a speech-language study ' +
        'would otherwise require.',
    ],
  },
  {
    id: 'spiceitup',
    icon: '📖',
    title: 'SpiceItUp',
    tagline: 'Personal Project',
    tech: ['React Native', 'TypeScript', 'Firebase', 'NativeWind'],
    repoUrl: 'https://github.com/KopikoCappu/spiceitup',
    image: ogImage('KopikoCappu', 'spiceitup'),
    summary: 'A React Native recipe app for browsing, saving, and organizing recipes.',
    description: [
      'A mobile recipe app built with React Native and Expo, using Firebase for ' +
        'authentication and data storage and NativeWind for styling.',
      'Includes a seeded recipe library and a personal recipe store, letting users browse, ' +
        'save, and organize recipes from a phone.',
    ],
  },
];

export const resumeFileUrl = `${import.meta.env.BASE_URL}resume/Cara_Kulhanjian_Resume.pdf`;
