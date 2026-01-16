export const siteConfig = {
  name: "Rexin Cheng",
  title: "AI Researcher & Full Stack Engineer",
  description: "Master of IT Graduate (UNSW) and Software Engineer with 3 years of experience across AI research and commercial development.",
  accentColor: "#1d4ed8",
  social: {
    email: "rexincheng@outlook.com",
    linkedin: "https://www.linkedin.com/in/rexin-cheng",
    github: "https://github.com/Largehare",
  },
  aboutMe:
    "Master of IT Graduate from UNSW Sydney and Software Engineer with 3 years of experience across AI research and commercial development. My expertise spans Machine Learning (LLM/NLP), Full-Stack Engineering (Python/Swift), and DevOps (Docker/Azure). I have a demonstrated ability to bridge the gap between complex AI research and production-ready software solutions in fast-paced environments like Didi and Mise Systems.",
  skills: [
    "Python",
    "Swift",
    "C/C++",
    "JavaScript",
    "PyTorch",
    "TensorFlow",
    "Flask",
    "Django",
    "React",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
  ],
 
  experience: [
    {
      company: "MISE SYSTEMS PTY LTD",
      title: "Full-Stack Software Engineer",
      dateRange: "May 2025 - Present",
      bullets: [
        "Led full-stack development of a service marketplace (Python/Flask, Swift), integrating AI-driven features like Semantic Search and RAG.",
        "Executed cloud migration from Azure to DigitalOcean, reducing infrastructure costs by 60%+ via optimized Docker/Kubernetes strategies.",
        "Engineered scalable backend systems handling Stripe payments and real-time data.",
        "Established automated CI/CD pipelines with Helm, reducing deployment time by about 50%.",
      ],
    },
    {
      company: "Multimodal Art Projection Research Community",
      title: "Research Assistant",
      dateRange: "Sep 2023 - Jan 2024",
      bullets: [
        "Implemented data-testing metrics for Deep Learning models in audio processing.",
        "Designed and distributed survey questionnaires to collect subjective data.",
        "Authored and published findings on arXiv.",
      ],
    },
    {
      company: "DiDi Global Inc.",
      title: "Algorithm Engineer",
      dateRange: "Mar 2023 - Oct 2023",
      bullets: [
        "Analyzed occupant detection data using Deep Learning to improve accuracy by 10%.",
        "Automated parameter adjustments for an audio equalizer using TensorFlow and Python.",
        "Collaborated with cross-functional teams to streamline testing and visualize performance metrics.",
      ],
    },
  ],

   projects: [
    {
      name: "Linking Adverse Drug Events using LLMs",
      description:
        "Developed a multi-domain benchmark for ADE corpora and architected a rewrite-then-retrieve pipeline combining LLM-based mention normalization with embedding-based retrieval.",
      link: "https://github.com/Largehare", // Placeholder link
      skills: ["LLMs", "DSPy", "NLP", "Python", "SapBERT"],
    },
    {
      name: "Metaverse Holographic AI Partner",
      description:
        "Led a team to develop a holographic AI app using Unity and Python. Gained rating as a 'national project' and chosen among the top 0.1% of projects at BUPT.",
      link: "https://github.com/Largehare", // Placeholder link
      skills: ["Unity", "C#", "Python", "Computer Vision"],
    },
  ],
  education: [
    {
      school: "University of New South Wales",
      degree: "Master of Information Technology (AI Major)",
      dateRange: "2024 - 2026",
      achievements: [
        "Weighted Average Mark (WAM): 84.6/100",
        "Specialized in Neural Networks, Machine Learning, and Computer Vision",
      ],
    },
    {
      school: "Beijing University of Posts and Telecommunications",
      degree: "Bachelor of Engineering (Digital Media Technology)",
      dateRange: "2019 - 2023",
      achievements: [
        "WAM: 87.5/100",
        "National Scholarship",
        "Selected for 15th National College Students Innovation & Entrepreneurship Annual Conference (Top 0.1%)",
      ],
    },
  ],
};