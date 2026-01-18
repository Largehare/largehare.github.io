export const siteConfig = {
  name: "Rexin Cheng",
  title: "AI Researcher & Full Stack Engineer",
  description: "Master of IT Graduate (UNSW) and Software Engineer with 3 years of experience across AI research and commercial development.",
  accentColor: "#1d4ed8",
  linkUnavailableText:  "Not available publicly",
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
    "PyTorch",
    "TensorFlow",
    "Flask",
    "RAG",
    "LLMs",
    "MLOps",
    "CI/CD",
    "React",
    "Kubernetes",
    "SQL",
    "..."
  ],

  experience: [
    {
      company: "MISE SYSTEMS PTY LTD",
      title: "Full-Stack Software Engineer",
      dateRange: "May 2025 - Present",
      description: [
        "Modernized a service marketplace facing <strong>bot abuse</strong> on <strong>authentication/verification</strong> flows and high infrastructure costs.",
        "Led full-stack delivery across backend (<strong>Python/Flask</strong>) and iOS (<strong>Swift</strong>), building AI-driven <strong>Semantic Search</strong>/<strong>RAG</strong> and map discovery (<strong>GMSMapView</strong>). Orchestrated <strong>Azure</strong> → <strong>DigitalOcean Kubernetes</strong> migration and <strong>Helm</strong>-based <strong>CI/CD</strong>, and shipped a secure <strong>Stripe</strong> payments stack plus multi-layer bot protection (<strong>Firebase App Check</strong> + <strong>reCAPTCHA</strong>).",
        "Eliminated automated authentication abuse (0 reported verification incidents), reduced infrastructure costs by <strong>60%+</strong>, and cut deployment time by <strong>~50%</strong> across <strong>160+ commits</strong>.",
      ],
      linknote: "Not a",
      images: ["experience/mise1.png", "experience/mise2.png", "experience/mise3.png"],
    },
    {
      company: "Multimodal Art Projection Research Community",
      title: "Research Assistant",
      dateRange: "Sep 2023 - Jan 2024",
      description: [
        "Analog dynamic range compressors (DRCs) are essential in audio production but challenging to simulate digitally because they operate nonlinearly over long time scales. Prior deep learning models often suffered from artifacts, high parameter counts, or non-causal architectures that prevented real-time use.",
        "As a core researcher and co-author, I helped develop a realistic digital model of the <strong>Teletronix LA-2A</strong> with a causal, parameter-efficient design for real-time CPU performance. I implemented evaluation metrics (MAE, MSE, ESR+DC, multi-STFT, LUFS, FAD), designed a <strong>webMUSHRA</strong> study (17 responses across 11 passages), and contributed to the <strong>S4/S4D</strong> state-space architecture and arXiv authorship.",
        "The model achieves real-time inference on a single Apple M1 Max CPU core (buffer sizes >256 samples), matches or exceeds prior TCN/LSTM perceptual quality with a <strong>causal formulation</strong> and <strong>fewer parameters</strong> (8.2k–18.9k vs. 26k–51k), and shows no significant subjective difference from the analog reference.",
      ],
      // linkNote: "Please refer to publications section",
      link: "https://arxiv.org/abs/2403.16331",
    },
    {
      company: "DiDi Global Inc.",
      title: "Algorithm Engineer",
      dateRange: "Mar 2023 - Oct 2023",
      description: [
        "Worked in automotive audio & AI to improve in-cabin acoustics and <strong>occupant monitoring</strong> under challenging vehicle conditions. ",
        "Built a differentiable <strong>deep-learning equalization</strong> pipeline (TensorFlow/Python) to optimize IIR filters, and developed STFT-based <strong>occupant detection & localization</strong> with clustering for seat/zone estimation.",
        "Delivered <strong>+10% occupancy accuracy</strong> and near-flat response in test cabins, contributing to a <strong>patent audio framework</strong> and smoother cross-team validation.",
      ],
      images: ["experience/my-didi.jpeg", "experience/didi1.jpeg" , "experience/didi2.jpeg" ],
    },
  ],

  projects: [
    {
      name: "On the Role of LLM Rewriting and Synthetic Data Generation in Cross-Domain Adverse Drug Event Linking",
      description: [
        "As lead researcher, I aimed to improve cross-domain robustness in mapping informal ADE mentions to <strong>MedDRA</strong>, comparing <strong>rewrite-then-retrieve</strong> inference with synthetic-data fine-tuning.",
        "Built a multi-domain benchmark by unifying CADEC, TAC-2017, and PsyTAR; designed a Llama-3-Med42 + SapBERT rewrite-then-retrieve pipeline; optimized prompts with <strong>DSPy</strong>; generated <strong>75k synthetic pairs</strong> with GPT-4/Llama-3.",
        "Achieved best overall performance with <strong>54.7% Acc@1</strong> using a 1:3 human-to-synthetic mix; found inference-time rewriting harms accuracy (granularity drift/type shift), validating training-time augmentation.",
      ],
      skills: ["LLMs", "DSPy", "NLP", "Python", "SapBERT"],
      images: ["projects/LLM1.png"],
      linkNote: "Internal research,  release pending",
    },
    {
      name: "Metaverse Holographic AI Partner",
      description: [
        "Developed a cross-platform holographic <strong>AI Partner</strong> to address the lack of emotional companionship in existing AI products by integrating 3D rendering with intelligent human-computer interaction. Served as the <strong>Software Development Lead</strong> at Beijing University of Posts and Telecommunications.",
        "<strong>Unity System Integration</strong> and <strong>Real-time Action Recognition</strong>: built core modules (AI dressing system, motion-capture rhythm games) for Android/Web, and implemented a high-accuracy engine using <strong>BlazePose + EfficientGCN</strong>, enabling <strong>CPU-side</strong> real-time detection of <strong>20+ daily gestures</strong>. Integrated <strong>JD IoT</strong> with <strong>Azure/Tencent Cloud</strong> to offload computation for low-latency mobile interaction.",
        "Won <strong>First Prize</strong> in the 11th National Mobile Internet Innovation Competition and <strong>First Place</strong> in the Beijing College Students' Innovation Competition. Co-founded <strong>Beijing Zhiban Intelligent Technology Co., Ltd.</strong> and featured at the 15th National Undergraduate Innovation Conference.",
      ],
      skills: ["Unity", "C#", "Python", "Computer Vision"],
      images: ["projects/metaverse1.jpg", "projects/metaverse2.jpg", "projects/metaverse3.png"],
      // linkNote: "Internal codebase",
      link: "https://www.dropbox.com/scl/fi/ddu07d8g9sekk2xorxp3f/metaverse-ppt.pdf?rlkey=9mibrzi28npzai4kp53ijo3pt&st=jjflcec6&dl=0",
    },
  ],
  publications: [
    {
      title: "Modeling Analog Dynamic Range Compressors using Deep Learning and State-space Models",
      authors: "Yin, H.; Cheng, G. (Rexin); Steinmetz, C.J.; Yuan, R.; Stern, R.M.; Dannenberg, R.B.",
      venue: "arXiv, 2024",
      link: "https://arxiv.org/pdf/2403.16331",
      images: ["pubs/model.png", "pubs/speed-ratio.png", "pubs/subjective.png"],
    },
    {
      title: "Example-Driven Movable Structure Transfer of 3D Models",
      authors: "Fan Zhang; Gang Cheng (Rexin); Keyi Wang; Yang Liu; Fengquan Zhang; Qiang Fu",
      venue: "China Virtual Reality Conference (ChinaVR), 2022",
      link: "https://www.aconf.cn/conf_183281/abstract/35.html",
      // images: ["pubs/img1.jpg", "pubs/img2.jpg", "pubs/img3.jpg"],
      // linkNote: "Conference proceedings link only",
    },
  ],
  education: [
    {
      school: "University of New South Wales",
      degree: "Master of Information Technology (AI Major)",
      dateRange: "2024 - 2026",
      achievements: [
        "Weighted Average Mark (WAM): 84.6/100",
        "Specialized in Deep Learning, Machine Learning and NLP",
      ],
    },
    {
      school: "Beijing University of Posts and Telecommunications",
      degree: "Bachelor of Engineering (Digital Media Technology)",
      dateRange: "2019 - 2023",
      achievements: [
        "WAM: 87.5/100",
        "National Scholarship",
      ],
      description:
        "BUPT is a premier university specialising in IT, whose graduates are highly sought after by major US (eg. Google, Microsoft, Amazon, Apple) and Chinese companies (eg. Bytedance, Alibaba, Tencent). Surveys by LinkedIn ranked BUPT among the Top 6 Chinese universities based on the number of alumni working in those companies.",
    },
  ],
  referees: [
    {
      name: "Dr. Aditya Joshi",
      affiliation: "University of New South Wales",
      email: "aditya.joshi@unsw.edu.au",
      linkedin: "https://www.linkedin.com/in/aditya-joshi-phd/",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQFFbk1pKin4aQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724710792654?e=1770249600&v=beta&t=vb89PvVvNOyf6rL6KzCzCtO9G4fY6IHfxjIBhqkMsAQ",
    },
    {
      name: "Dr. Xiang Dai",
      affiliation: "CSIRO Data61",
      email: "dai.dai@data61.csiro.au",
      linkedin: "https://www.linkedin.com/in/xiang-dai-427a4310a/",
      avatar: "https://media.licdn.com/dms/image/v2/C5603AQEnRXZlzil0cQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1520204806951?e=1770249600&v=beta&t=9VE7yU-EZke-TOXiaf6_iUmdLFyFFfgVXeSUEYdbDfc",
    },
     {
      name: "Moses Savea",
      affiliation: "Mise Systems",
      email: "saveamoses@gmail.com",
      linkedin: "https://www.linkedin.com/in/moses-savea-65552524a/",
      avatar: "https://media.licdn.com/dms/image/v2/D5635AQGh0Me_ugzt5w/profile-framedphoto-shrink_800_800/B56ZWsjZFeGUAo-/0/1742356714135?e=1769223600&v=beta&t=vAscZnQUXJYEP87jqJK8-rCIabNyx7GWvZKXcj6oggI",
    },
  ],
};