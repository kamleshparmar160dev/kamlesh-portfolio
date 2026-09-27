export const profile = {
  name: 'Kamlesh Parmar',
  title: 'Senior Full Stack Software Engineer',
  tagline: 'Building scalable web applications, APIs, mobile applications, AI-powered automation, and practical IoT solutions.',
  shortTagline: 'Full Stack · AI · Automation · APIs · IoT',
  location: 'Vadodara, Gujarat, India',
  email: 'kamleshparmar160.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kamlesh-parmar-2583b019',
  github: 'https://github.com/',
  experience: '9+ years',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'IoT Lab', href: '#iot-lab' },
  { label: 'AI', href: '#ai' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const aboutParagraphs = [
  "I am a Software Engineer with 9+ years of experience in full-stack development, specializing in frontend, backend, mobile applications, APIs, automation testing, and practical technology solutions.",
  "My professional experience includes building scalable web and mobile applications using React.js, React Native, Angular, Ionic, Node.js, Express, PHP, CakePHP, and CodeIgniter.",
  "I have worked across the complete application lifecycle — frontend development, backend/API development, third-party integrations, database integration, testing, debugging, migration of legacy applications, and production maintenance.",
  "Outside of professional software development, I enjoy building and experimenting with hardware projects using Arduino and ESP32, creating GPS tracking systems, developing IoT devices, designing 3D-printed enclosures, and exploring ways to combine software with physical systems.",
];

export const capabilities = [
  {
    icon: 'Layers',
    title: 'Full Stack Applications',
    description: 'Modern web and mobile applications using React, React Native, Angular, Ionic and Node.js.',
    items: ['React.js', 'React Native', 'Angular', 'Ionic', 'Node.js'],
  },
  {
    icon: 'Server',
    title: 'Backend & APIs',
    description: 'REST APIs, backend systems, integrations and real-time communication using Node.js and Express.',
    items: ['REST APIs', 'Node.js', 'Express.js', 'WebSocket', 'MQTT'],
  },
  {
    icon: 'Brain',
    title: 'AI & Automation',
    description: 'AI APIs, local LLMs, AI-assisted development and automated workflows.',
    items: ['AI APIs', 'Local LLMs', 'Ollama', 'Cursor', 'Claude Code'],
  },
  {
    icon: 'Radio',
    title: 'IoT & Connected Systems',
    description: 'GPS tracking, ESP32, cellular communication, MQTT, WebSockets and hardware integration.',
    items: ['ESP32', 'GPS Tracking', '4G Cellular', 'MQTT', 'WebSockets'],
  },
  {
    icon: 'HardDrive',
    title: 'Self-Hosted Infrastructure',
    description: 'Ubuntu, Docker, NAS, networking, DNS, reverse proxy and self-hosted applications.',
    items: ['Ubuntu', 'Docker', 'NAS', 'Caddy', 'HTTPS'],
  },
];

export const featuredProjects = [
  {
    name: 'Levrx Platform',
    tagline: 'Healthcare & Online Medicine Ordering',
    description: 'Healthcare and online medicine ordering platform consisting of web, mobile, and administrative applications.',
    technologies: ['React.js', 'React Native', 'Node.js', 'REST APIs'],
    features: [
      'Admin applications', 'Web applications', 'Mobile applications', 'Authentication',
      'API integration', 'Healthcare workflows', 'Mobile application development', 'Backend services',
    ],
    details: [
      'Passkey authentication', 'MFA flows', 'SSO flows', 'HealthEZ iframe authentication bridge',
      'DataDog user information integration', 'Biometric attendance integration',
      'API optimization and debugging', 'Mobile/web feature consistency',
    ],
    featured: true,
  },
  {
    name: 'WingsTrack',
    tagline: 'Location Tracking Platform',
    description: 'A location tracking platform designed to process and manage person-location information.',
    technologies: ['Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'REST APIs', 'GPS'],
    features: [
      'Backend API development', 'Location tracking APIs', 'Database integration',
      'Scheduled/cron operations', 'Notification workflows', 'SOS-related functionality',
      'Production server management',
    ],
    details: [
      'Location tracking', 'Person tracking', 'API services', 'Database management',
      'Notifications system', 'SOS functionality', 'Scheduled background jobs',
    ],
    featured: true,
  },
  {
    name: 'Sync',
    tagline: 'Legacy-to-Modern Migration',
    description: 'Migration of a subscription-based data platform from legacy AngularJS to modern Angular.',
    technologies: ['AngularJS', 'Angular', 'JavaScript', 'TypeScript'],
    features: [
      'Legacy application modernization', 'AngularJS to Angular migration',
      'Hybrid migration', 'Maintaining existing functionality',
      'Frontend architecture modernization', 'Component migration',
    ],
    details: [],
    featured: false,
  },
  {
    name: 'Kodinar Apps',
    tagline: 'GPS Vehicle & Employee Tracking',
    description: 'Employee and vehicle tracking application using GPS hardware and the JV200 GPS device protocol.',
    technologies: ['Node.js', 'Express.js', 'GPS', 'JV200 GPS Device'],
    features: [
      'Employee tracking', 'Vehicle tracking', 'GPS data processing',
      'Device communication', 'Location tracking', 'Backend APIs',
    ],
    details: ['JV200 communication protocol', 'GPS hardware integration'],
    featured: false,
  },
  {
    name: 'Expolyst',
    tagline: 'Exhibition & Indoor Navigation',
    description: 'Exhibition application providing event information, ticket booking, and indoor navigation using beacon technology.',
    technologies: ['Ionic', 'REST API', 'Node.js', 'WebSocket', 'MQTT', 'Beacon'],
    features: [
      'Exhibition information', 'Upcoming exhibitions', 'Ticket booking',
      'Indoor navigation', 'Beacon-based positioning', 'Real-time communication',
    ],
    details: ['WebSocket integration', 'MQTT messaging', 'Beacon technology for indoor positioning'],
    featured: false,
  },
  {
    name: 'Movie Magic',
    tagline: 'Cinema Schedules & Ticket Booking',
    description: 'Application for viewing cinema schedules and booking cinema tickets.',
    technologies: ['Ionic 3', 'SOAP API', 'REST API', 'Node.js', 'Express.js'],
    features: [
      'Movie schedules', 'Cinema information', 'Ticket booking',
      'SOAP API integration', 'REST API integration', 'Mobile application',
    ],
    details: [],
    featured: false,
  },
];

export const iotProjects = [
  {
    name: 'Portable GPS Tracker',
    icon: 'Navigation',
    description: 'A portable battery-powered GPS tracker designed to obtain GPS coordinates, connect to a cellular network and send location information to a server API.',
    technologies: ['XIAO ESP32-S3', 'CAPUF EC200U', 'GPS/GNSS', '4G / Jio', 'Arduino', 'LiPo Battery', '3D-Printed Enclosure'],
    features: [
      'GPS/GNSS location acquisition', 'Cellular 4G connectivity', 'API-based location transmission',
      'Device configuration', 'Battery monitoring', 'Portable battery operation',
      'GPS caching', 'Network status monitoring', 'SIM status monitoring', 'Custom 3D-printed enclosure',
    ],
    diagram: [
      { label: 'GPS / GNSS', icon: 'Satellite' },
      { label: 'EC200U 4G Modem', icon: 'Radio' },
      { label: 'XIAO ESP32-S3', icon: 'Cpu' },
      { label: 'REST API', icon: 'Cloud' },
      { label: 'Server', icon: 'Server' },
    ],
    sideNote: 'Battery Monitoring',
  },
  {
    name: 'Smart Lock / IoT Lock',
    icon: 'Lock',
    description: 'IoT-based electronic lock controller using an ESP32 microcontroller and a Node.js WebSocket backend.',
    technologies: ['XIAO ESP32-C6', 'Wi-Fi', 'WebSockets', 'Node.js', 'Arduino', 'Relay', 'Electronic Lock'],
    features: [
      'Wi-Fi connectivity', 'WebSocket communication', 'Remote lock control',
      'Device registration', 'Device authentication', 'Automatic locking',
      'Server communication', 'Relay-controlled electronic lock', 'Device reconnect logic',
      '24/7 reliability considerations',
    ],
    diagram: [
      { label: 'Node.js WebSocket Server', icon: 'Server' },
      { label: 'Wi-Fi Network', icon: 'Wifi' },
      { label: 'ESP32-C6 Controller', icon: 'Cpu' },
      { label: 'Relay', icon: 'ToggleRight' },
      { label: 'Electronic Lock', icon: 'Lock' },
    ],
    sideNote: null,
  },
  {
    name: 'Self-Hosted Home Server',
    icon: 'Server',
    description: 'Personal Linux-based server environment used for file storage, network services, media management and self-hosted applications.',
    technologies: ['Ubuntu', 'Linux', 'Docker', 'Docker Compose', 'Samba', 'DNS', 'Caddy', 'HTTPS', 'NAS'],
    features: [
      'Ubuntu server administration', 'Docker services', 'Network file sharing',
      'Samba NAS', 'Local DNS', 'HTTPS', 'Reverse proxy', 'Remote access',
      'Automatic service startup', 'Storage management', 'Self-hosted applications',
    ],
    diagram: null,
    sideNote: null,
  },
  {
    name: 'Immich Self-Hosted Photo Platform',
    icon: 'Image',
    description: 'Self-hosted photo and video backup platform using Immich for centralized personal media management.',
    technologies: ['Immich', 'Docker', 'Ubuntu', 'Linux', 'Caddy', 'HTTPS', 'NAS', 'External Storage'],
    features: [
      'Self-hosted photo backup', 'Photo and video management', 'Docker deployment',
      'Persistent storage', 'External SSD storage', 'Large media migration',
      'Network access', 'HTTPS', 'Reverse proxy', 'Automatic service startup',
      'Duplicate photo investigation', 'Photo similarity investigation',
    ],
    diagram: null,
    sideNote: null,
  },
  {
    name: '3D Printing / Hardware Experiments',
    icon: 'Box',
    description: 'Designing and manufacturing custom enclosures and prototypes using 3D printing and hardware experimentation.',
    technologies: ['Fusion 360', 'Ultimaker Cura', '3D Printing', 'Electronics', 'Robotics'],
    features: [
      'Custom 3D-printed enclosures', 'Hardware prototyping', 'Electronics experimentation',
      'Robotics exploration', 'Designing for IoT devices',
    ],
    diagram: null,
    sideNote: null,
  },
];

export const aiAreas = [
  { icon: 'Code', title: 'AI-Assisted Coding', description: 'Using AI to accelerate development, debugging, and code quality.' },
  { icon: 'Plug', title: 'AI APIs', description: 'Integrating AI APIs into applications for intelligent features.' },
  { icon: 'Brain', title: 'Local LLMs', description: 'Running local LLMs for privacy-preserving automation workflows.' },
  { icon: 'Terminal', title: 'Ollama', description: 'Self-hosted LLM runtime for local model experimentation.' },
  { icon: 'MousePointer', title: 'Cursor', description: 'AI-native IDE for accelerated development workflows.' },
  { icon: 'Sparkles', title: 'Claude Code', description: 'AI-powered CLI for code generation and automation.' },
  { icon: 'Gauge', title: 'Developer Productivity', description: 'Automating repetitive work to improve development velocity.' },
  { icon: 'Workflow', title: 'AI-Powered Automation', description: 'Automated code workflows, documentation generation, and code review assistance.' },
];

export const aiPositioning = 'Exploring how AI can be integrated into everyday software engineering to automate repetitive work, improve developer productivity, assist with debugging, and accelerate application development.';

export const experience = [
  {
    company: 'Logical Wings Infoweb Private Limited',
    location: 'Vadodara, Gujarat, India',
    duration: 'August 2022 – Present',
    role: 'Full Stack Developer / Senior Software Engineer',
    technologies: ['React.js', 'React Native', 'Node.js', 'REST APIs'],
    responsibilities: [
      'Full-stack web application development', 'React.js development', 'React Native development',
      'Node.js development', 'REST API development', 'Mobile application development',
      'Backend integration', 'Third-party API integrations', 'Application debugging and maintenance',
      'Code review', 'Technical collaboration', 'Production application development',
    ],
    workAreas: [
      'Levrx Platform', 'WingsTrack', 'Mobile healthcare applications',
      'Authentication and security flows', 'Passkey integration', 'API optimization',
      'DataDog integration', 'Biometric attendance integration', 'Application migrations',
      'IoT-related development',
    ],
    current: true,
  },
  {
    company: 'TenUp Software Services',
    location: 'Vadodara, Gujarat, India',
    duration: 'May 2022 – July 2022',
    role: 'Full Stack Developer',
    technologies: ['Angular', 'Node.js', 'REST APIs', 'JavaScript', 'TypeScript'],
    responsibilities: [
      'Full-stack application development', 'Angular frontend development',
      'Node.js backend development', 'API development and integration',
      'Application maintenance',
    ],
    workAreas: [],
    current: false,
  },
  {
    company: 'InfoDesk',
    location: 'Vadodara, Gujarat, India',
    duration: 'October 2019 – May 2022',
    role: 'Software Engineer 1',
    technologies: ['Ionic', 'Angular', 'JavaScript', 'REST APIs'],
    responsibilities: [
      'Hybrid mobile application development', 'Frontend development',
      'Backend/API development', 'REST API integration', 'Mobile application maintenance',
      'Application debugging', 'Feature development',
    ],
    workAreas: [],
    current: false,
  },
  {
    company: 'Proses Web Technologies Pvt. Ltd.',
    location: 'Vadodara, Gujarat, India',
    duration: 'April 2016 – October 2019',
    role: 'Full Stack / Hybrid Mobile Developer',
    technologies: ['Ionic', 'PHP', 'Node.js', 'CakePHP', 'CodeIgniter', 'REST APIs'],
    responsibilities: [
      'Full-stack web development', 'Hybrid mobile application development',
      'Backend development', 'API development', 'Mobile application integration',
      'Database-driven applications', 'Application maintenance',
    ],
    workAreas: [],
    current: false,
  },
];

export const skills = [
  {
    category: 'Frontend',
    icon: 'Monitor',
    items: ['React.js', 'React Native', 'Angular', 'AngularJS', 'Ionic', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'jQuery'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    items: ['Node.js', 'Express.js', 'PHP', 'CakePHP', 'CodeIgniter', 'REST APIs', 'SOAP APIs', 'API Integrations', 'WebSocket', 'MQTT'],
  },
  {
    category: 'Programming Languages',
    icon: 'Code',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'PHP', 'Python', 'MySQL'],
  },
  {
    category: 'Mobile',
    icon: 'Smartphone',
    items: ['React Native', 'Ionic', 'Hybrid Mobile Development', 'Mobile API Integration', 'Appium', 'Cucumber'],
  },
  {
    category: 'Testing & Automation',
    icon: 'TestTube',
    items: ['Appium', 'Cucumber', 'Automation Testing', 'Jenkins'],
  },
  {
    category: 'Development Tools',
    icon: 'Wrench',
    items: ['VS Code', 'SourceTree', 'Git', 'Sublime Text', 'PhpStorm', 'Jira', 'Jenkins', 'Bitbucket', 'WSL', 'PyCharm', 'Ollama', 'Fusion 360', 'Ultimaker Cura'],
  },
  {
    category: 'AI & Automation',
    icon: 'Brain',
    items: ['AI API Integration', 'AI-Assisted Development', 'AI-Powered Automation', 'Local LLMs', 'Ollama', 'Cursor', 'Claude Code', 'Developer Productivity', 'Automated Workflows'],
  },
  {
    category: 'IoT & Hardware',
    icon: 'Cpu',
    items: ['Arduino', 'ESP32', 'GPS', 'GPS Tracking', '4G Connectivity', 'MQTT', 'WebSockets', 'Electronics', 'Robotics', 'Sensors', 'IoT Automation', '3D Printing', 'Fusion 360', 'Ultimaker Cura'],
  },
  {
    category: 'Operating Systems',
    icon: 'Terminal',
    items: ['macOS', 'Windows', 'Ubuntu', 'CentOS', 'Linux Mint'],
  },
];

export const techJourney = [
  {
    year: '2016',
    title: 'Starting Out',
    items: ['PHP', 'Ionic', 'Hybrid Mobile'],
  },
  {
    year: '2019',
    title: 'Expanding',
    items: ['Angular', 'Ionic', 'Backend Development'],
  },
  {
    year: '2022',
    title: 'Full Stack',
    items: ['React', 'Node.js', 'Full Stack', 'Production Applications'],
  },
  {
    year: '2023+',
    title: 'Broadening',
    items: ['React Native', 'APIs', 'IoT', 'GPS', 'Automation'],
  },
  {
    year: 'Today',
    title: 'Engineering Lab',
    items: ['Full Stack Engineering', 'AI', 'Automation', 'Self-Hosted Infrastructure', 'IoT', 'Electronics', 'Robotics', '3D Printing'],
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications — MCA',
    institution: 'Parul Institute of Technology (GTU), Vadodara',
    year: '2014 – 2016',
  },
  {
    degree: 'Bachelor of Computer Applications — BCA',
    institution: 'Takshashila College (VNSGU), Vadodara',
    year: '2011 – 2014',
  },
  {
    degree: 'Higher Secondary — 12th',
    institution: 'Motnath Vidhyalaya (GSEB), Vadodara',
    year: '2011',
  },
  {
    degree: 'Secondary — 10th',
    institution: 'Shreemati C.M. Dhiya Sarvajanik High School (GSEB), Nimeta',
    year: '2009',
  },
];

export const engineeringInterests = [
  { icon: 'Code', title: 'Full Stack Development', description: 'Building modern web and mobile applications with scalable backend services.' },
  { icon: 'Brain', title: 'AI & Automation', description: 'Using AI and automation to improve software development and everyday workflows.' },
  { icon: 'Radio', title: 'IoT', description: 'Connecting software with physical devices, sensors and communication systems.' },
  { icon: 'Server', title: 'Infrastructure', description: 'Learning and experimenting with Linux, Docker, networking and self-hosted services.' },
  { icon: 'Bot', title: 'Robotics', description: 'Exploring physical computing and automated systems.' },
  { icon: 'Box', title: '3D Printing', description: 'Designing and manufacturing custom enclosures and prototypes.' },
];

export const engineeringPhilosophy = [
  {
    icon: 'Wrench',
    title: 'Build Practical Solutions',
    description: 'I prefer solutions that solve real problems rather than technology for its own sake.',
  },
  {
    icon: 'BookOpen',
    title: 'Keep Code Maintainable',
    description: 'Readable, maintainable and understandable code is important for long-term projects.',
  },
  {
    icon: 'FlaskConical',
    title: 'Learn by Building',
    description: 'Many of my technical interests come from building working prototypes and experimenting with real hardware and software.',
  },
  {
    icon: 'GitMerge',
    title: 'Combine Technologies',
    description: 'I enjoy combining different areas of technology — software, APIs, IoT, hardware, and automation — to create practical systems.',
  },
];
