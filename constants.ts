import { Project, Experience, Education, SkillCategory, Certification } from './types';

export const HERO_ROLES = [
  "Machine Learning Engineer",
  "Data Scientist",
  "AI Engineer"
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Machine Learning",
    skills: ["Scikit-learn", "XGBoost", "LightGBM", "Random Forest", "Bayesian Methods", "Clustering"]
  },
  {
    category: "Deep Learning",
    skills: ["PyTorch", "TensorFlow", "Keras", "CNNs", "RNNs/LSTMs", "Transformers (BERT, GPT)"]
  },
  {
    category: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Statistical Analysis", "A/B Testing"]
  },
  {
    category: "MLOps & Cloud",
    skills: ["Docker", "Kubernetes", "AWS (SageMaker, Lambda)", "MLflow", "Airflow", "CI/CD Pipelines"]
  },
  {
    category: "Languages",
    skills: ["Python", "SQL", "R", "C++", "JavaScript/TypeScript", "Bash"]
  },
  {
    category: "Tools",
    skills: ["Git", "Jupyter", "VS Code", "Tableau", "PowerBI", "Hugging Face"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Predictive Maintenance System",
    description: "An end-to-end IoT sensor anomaly detection system for industrial manufacturing equipment.",
    techStack: ["Python", "PyTorch", "AWS IoT", "Docker"],
    contributions: [
      "Reduced equipment downtime by 24% using LSTM autoencoders.",
      "Processed 1TB+ of time-series sensor data utilizing Apache Spark.",
      "Deployed real-time inference API on AWS Lambda with <100ms latency."
    ],
    liveLink: "https://example.com/demo",
    githubLink: "https://github.com/example/repo"
  },
  {
    id: "p2",
    title: "Semantic Search Engine for Legal Docs",
    description: "NLP-powered search tool enabling lawyers to query thousands of contracts using natural language.",
    techStack: ["Hugging Face", "Elasticsearch", "FastAPI", "React"],
    contributions: [
      "Fine-tuned BERT models on domain-specific legal corpora to improve retrieval accuracy by 40%.",
      "Implemented vector similarity search using FAISS for sub-second query resolution.",
      "Designed a clean UI for document highlighting and summarization."
    ],
    liveLink: "https://example.com/demo",
    githubLink: "https://github.com/example/repo"
  },
  {
    id: "p3",
    title: "Retail Customer Churn Predictor",
    description: "A robust classification pipeline to identify high-risk customers and suggest retention strategies.",
    techStack: ["XGBoost", "SQL", "Flask", "Scikit-learn"],
    contributions: [
      "Engineered 50+ features from transactional and demographic data.",
      "Achieved 0.89 AUC-ROC, outperforming existing legacy models.",
      "Integrated model predictions into the CRM dashboard for marketing teams."
    ],
    liveLink: "https://example.com/demo",
    githubLink: "https://github.com/example/repo"
  },
  {
    id: "p4",
    title: "Computer Vision QC Assistant",
    description: "Automated visual inspection system for identifying defects in manufacturing assembly lines.",
    techStack: ["OpenCV", "YOLOv8", "TensorFlow Lite", "Edge TPU"],
    contributions: [
      "Trained a custom object detection model achieving 98.5% precision.",
      "Optimized model quantization for deployment on edge devices.",
      "Built a real-time alerting system for defect thresholds."
    ],
    liveLink: "https://example.com/demo",
    githubLink: "https://github.com/example/repo"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "e1",
    role: "Senior Data Scientist",
    company: "Innovate AI Solutions",
    period: "2021 — Present",
    achievements: [
      "Lead a team of 4 data scientists to develop generative AI solutions for enterprise clients.",
      "Architected a recommendation engine increasing user engagement by 15% for a major e-commerce platform.",
      "Reduced model training costs by 30% through infrastructure optimization on AWS."
    ]
  },
  {
    id: "e2",
    role: "Machine Learning Engineer",
    company: "DataSphere Analytics",
    period: "2019 — 2021",
    achievements: [
      "Developed and deployed fraud detection models processing 1M+ transactions daily.",
      "Collaborated with backend engineers to integrate ML pipelines into microservices architecture.",
      "Automated data cleaning workflows reducing manual preprocessing time by 60%."
    ]
  },
  {
    id: "e3",
    role: "Data Analyst Intern",
    company: "FinTech Corp",
    period: "2018 — 2019",
    achievements: [
      "Performed exploratory data analysis on credit risk data to identify key default indicators.",
      "Created interactive dashboards in Tableau for executive reporting.",
      "Assisted in the migration of on-premise SQL databases to the cloud."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    degree: "M.S. in Computer Science (AI Specialization)",
    institution: "Tech University of Technology",
    period: "2017 — 2019",
    description: "Focus on Deep Learning, Reinforcement Learning, and Computer Vision. Thesis on GANs."
  },
  {
    id: "edu2",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "State Institute of Engineering",
    period: "2013 — 2017",
    description: "Graduated with Distinction. Lead of the University Robotics Club."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "c1",
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023",
    link: "#"
  },
  {
    id: "c2",
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2022",
    link: "#"
  },
  {
    id: "c3",
    name: "Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2021",
    link: "#"
  }
];