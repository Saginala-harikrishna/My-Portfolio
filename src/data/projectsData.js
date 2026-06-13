const projectsData = [
  {
    id: 1,
    slug: "offline-studio-text-conversion",
    category: "AI & ML",
    title: "Offline Studio Text Conversion",
    subtitle: "DRDO Internship Project",
    status: "Completed",
    organization: "DRDO",
    shortDescription:
      "Offline transcription platform with live streaming, speaker diarization, and document export capabilities.",

    about:
      "Offline Studio Text Conversion is a desktop application developed during my internship at DRDO. The system allows users to upload audio or video files and convert them into text completely offline. It supports live transcription, speaker diarization for multiple speakers, and exporting transcripts as PDF or text files.",

    features: [
      "Audio Upload & Transcription",
      "Video Upload & Transcription",
      "Live Streaming Transcription",
      "Speaker Diarization",
      "PDF Export",
      "Text Export",
      "Offline Processing"
    ],

    techStack: [
      "Python",
      "PySide6",
      "OpenAI",
      "Fast Whisper",
      "PyAnnote",
      "HuggingFace"
    ],

    learnings: [
      "Offline AI deployment",
      "Dependency management",
      "Environment isolation",
      "Security-focused development",
      "Large-scale system integration"
    ],

screenshots: [
  "/projects/offline-studio/1.png",
  "/projects/offline-studio/2.png",
  "/projects/offline-studio/3.png"
],







    github: "",
    demo: "#",
    video: "#"
  },

  {
    id: 2,
    slug: "ai-clinical-assistant",
    category: "AI & ML",
    title: "AI Clinical Assistant",
    subtitle: "Healthcare AI Chatbot",
    status: "Completed",
    organization: "Personal Project",

    shortDescription:
      "Healthcare-focused AI chatbot powered by RAG, memory preservation, and real-time streaming responses.",

    about:
      "AI Clinical Assistant is an intelligent healthcare chatbot that provides answers to health-related queries. The system uses Retrieval-Augmented Generation (RAG) to improve accuracy and maintains chat history and memory for contextual conversations. Responses are streamed in real time similar to ChatGPT.",

    features: [
      "RAG Implementation",
      "Context Preservation",
      "Conversation Memory",
      "Real-Time Streaming",
      "Healthcare Domain Restriction",
      "Token Usage Tracking",
      "Chat History Management"
    ],

    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "FastAPI",
      "SQLite",
      "RAG"
    ],

    learnings: [
      "Prompt engineering",
      "Vector retrieval systems",
      "Streaming AI responses",
      "Memory management in chatbots"
    ],


    screenshots: [
  "/projects/ai-clinical-assistant/1.png",
  "/projects/ai-clinical-assistant/2.png",
  "/projects/ai-clinical-assistant/3.png"
],

    github: "https://github.com/Saginala-harikrishna/clinical-ai-assistant",
    demo: "#",
    video: "#"
  },

  {
    id: 3,
    slug: "college-sentiment-analysis",
    category: "AI & ML",
    title: "College Sentiment Analysis",
    subtitle: "Event Feedback Intelligence System",
    status: "Completed",
    organization: "Academic Project",

    shortDescription:
      "Machine learning system for analyzing student feedback and extracting actionable event insights.",

    about:
      "This project collects student feedback from a three-day college event and performs sentiment analysis to identify strengths, weaknesses, and improvement opportunities. The insights help organizers enhance future events based on participant opinions.",

    features: [
      "Sentiment Analysis",
      "Feedback Collection",
      "Insight Generation",
      "Visualization Dashboard",
      "Data-Driven Recommendations"
    ],

    techStack: [
      "Python",
      "Streamlit",
      "Machine Learning",
      "Pandas",
      "Scikit-Learn"
    ],

    learnings: [
      "NLP fundamentals",
      "Data preprocessing",
      "Sentiment classification",
      "Dashboard development"
    ],

    github: "https://github.com/Saginala-harikrishna/college-event-sentiment-analysis",
    demo: "#",
    video: "#"
  },

  {
    id: 4,
    slug: "edupdf",
    category: "Web Development",
    title: "EduPDF",
    subtitle: "Client Project",
    status: "Completed",
    organization: "Freelance Client",

    shortDescription:
      "Role-based PDF platform with payment integration and branch-wise content access.",

    about:
      "EduPDF is a paid educational PDF platform where students can access academic materials based on their branch and year. The system includes role-based authentication, PDF management, and Razorpay payment integration.",

    features: [
      "Role-Based Authentication",
      "PDF Upload & Management",
      "Payment Integration",
      "Branch-Wise Access Control",
      "Year-Wise Content Organization",
      "Admin Dashboard"
    ],

    techStack: [
      "HTML",
      "CSS",
      "Firebase",
      "Supabase",
      "Razorpay"
    ],

    learnings: [
      "Client communication",
      "Payment gateway integration",
      "Access control systems",
      "Production deployment"
    ],

    github: "https://github.com/Saginala-harikrishna/edu-pdf-portal",
    demo: "#",
    video: "#"
  },

  {
    id: 5,
    slug: "college-store-management-system",
    category: "Web Development",
    title: "College Store Management System",
    subtitle: "Digital Campus Store Solution",
    status: "Completed",
    organization: "Academic Project",

    shortDescription:
      "A role-based digital solution for managing campus store purchases, balances, and student accounts.",

    about:
      "Developed to replace manual store operations in college. Students can track balances, purchase history, and account details, while administrators manage inventory and transactions digitally.",

    features: [
      "Role-Based Authentication",
      "Inventory Management",
      "Student Account Tracking",
      "Purchase History",
      "Email Notifications",
      "Digital Billing"
    ],

    techStack: [
      "React",
      "CSS",
      "MySQL"
    ],

    learnings: [
      "Database design",
      "Role management",
      "Transaction workflows",
      "User experience optimization"
    ],

    github: "https://github.com/Saginala-harikrishna/college_students_store_project",
    demo: "#",
    video: "#"
  },

  {
    id: 6,
    slug: "educycle",
    category: "Web Development",
    title: "EduCycle",
    subtitle: "Student Marketplace Platform",
    status: "Completed",
    organization: "Personal Project",

    shortDescription:
      "Marketplace platform helping students buy, sell, and donate academic essentials.",

    about:
      "EduCycle connects senior and junior students by enabling the exchange of academic materials such as calculators, drafting tools, lab equipment, and books.",

    features: [
      "Product Listings",
      "Image Upload",
      "Buy & Sell Workflow",
      "Donation System",
      "Student Communication"
    ],

    techStack: [
      "React",
      "JavaScript",
      "MySQL"
    ],

    learnings: [
      "Marketplace workflows",
      "Product lifecycle management",
      "Community-focused design"
    ],

    github: "https://github.com/Saginala-harikrishna/EduCycle",
    demo: "#",
    video: "#"
  },

  {
    id: 7,
    slug: "student-helper",
    category: "Web Development",
    title: "Student Helper",
    subtitle: "Campus Assistance Platform",
    status: "Completed",
    organization: "Personal Project",

    shortDescription:
      "A mini OLX-style platform connecting students inside and outside the campus.",

    about:
      "Students outside campus can assist students inside campus by purchasing requested items and earning extra income. The platform improves convenience and communication within the student community.",

    features: [
      "Student Matching",
      "Availability Tracking",
      "Contact Integration",
      "Task Requests",
      "Community Collaboration"
    ],

    techStack: [
      "React",
      "JavaScript",
      "MySQL"
    ],

    learnings: [
      "Problem-driven development",
      "Community platform design",
      "User interaction systems"
    ],

    github: "https://github.com/Saginala-harikrishna/HostelHelper",
    demo: "#",
    video: "#"
  },

  {
    id: 8,
    slug: "python-telegram-bot",
    category: "Automation",
    title: "Python Telegram Bot",
    subtitle: "Daily Learning Automation",
    status: "Completed",
    organization: "Personal Project",

    shortDescription:
      "Automated Telegram bot delivering daily Python questions and answers.",

    about:
      "Every day at 6 AM a Python question is posted automatically, and the answer is delivered at 6 PM using automated workflows.",

    features: [
      "Scheduled Posting",
      "Automated Answer Publishing",
      "Telegram Integration",
      "Daily Learning Workflow"
    ],

    techStack: [
      "Python",
      "n8n",
      "Telegram API"
    ],

    learnings: [
      "Workflow automation",
      "Scheduling systems",
      "Bot integrations"
    ],

    github: "",
    demo: "#",
    video: "#"
  },

  {
    id: 9,
    slug: "gate-question-automation",
    category: "Automation",
    title: "GATE Question Automation",
    subtitle: "Daily Exam Practice Generator",
    status: "Completed",
    organization: "Experimental Project",

    shortDescription:
      "AI-powered automation that generates and publishes daily GATE-level questions.",

    about:
      "Automatically generates GATE-style questions every morning and publishes solutions in the evening, helping students build a consistent practice routine.",

    features: [
      "AI Question Generation",
      "Automated Publishing",
      "Answer Scheduling",
      "Daily Practice Workflow"
    ],

    techStack: [
      "n8n",
      "OpenRouter",
      "HuggingFace",
      "AI Models"
    ],

    learnings: [
      "AI workflow orchestration",
      "Content generation systems",
      "Automation design"
    ],

    github: "",
    demo: "#",
    video: "#"
  },

  {
    id: 10,
    slug: "daily-quote-image-generator",
    category: "Automation",
    title: "Daily Quote Image Generator",
    subtitle: "Content Automation System",
    status: "Completed",
    organization: "Experimental Project",

    shortDescription:
      "Automated workflow generating motivational quote images every day.",

    about:
      "Uses automation workflows to generate a new quote and corresponding image daily without manual intervention.",

    features: [
      "Image Generation",
      "Quote Generation",
      "Automated Scheduling",
      "Content Publishing"
    ],

    techStack: [
      "n8n",
      "AI Image Models",
      "Automation Tools"
    ],

    learnings: [
      "Content automation",
      "Generative AI workflows",
      "Scheduled execution"
    ],

    github: "",
    demo: "#",
    video: "#"
  },

  {
    id: 11,
    slug: "student-schedule-app",
    category: "Mobile Apps",
    title: "Student Schedule",
    subtitle: "Task Planning Mobile Application",
    status: "Completed",
    organization: "Client Project",

    shortDescription:
      "Mobile application for managing schedules, tasks, deadlines, and subtopics.",

    about:
      "Developed for a friend who wanted a structured way to manage daily activities, study plans, and long-term goals. The application supports task tracking and nested subtopics.",

    features: [
      "Task Management",
      "Date Range Planning",
      "Subtopic Organization",
      "Progress Tracking",
      "Checklist Support"
    ],

    techStack: [
      "Android Development",
      "kotlin",
      "SQLite"
    ],

    learnings: [
      "Mobile UI design",
      "Task workflow implementation",
      "User productivity systems"
    ],

    github: "https://github.com/Saginala-harikrishna/schedule-student",
    demo: "#",
    video: "#"
  },
  
{
  id: 12,

  slug: "gesture-gaming-hub",

  category: "AI & ML",

  title: "Gesture Gaming Hub",

  subtitle: "AI-Powered Gesture Controlled Gaming System",

  status: "Completed",

  organization: "College Fest Project",

  shortDescription:
    "Interactive gesture-based gaming platform that enables users to play games using real-time hand movements without a keyboard or mouse.",

  about:
    "Gesture Gaming Hub is an AI-powered gaming system built using Computer Vision and Hand Tracking technologies. The platform allows players to control games entirely through air gestures, creating a touchless gaming experience. The project features multiple gesture-controlled games including Fruit Ninja and Car Racing, along with player registration, leaderboard management, and gameplay recording. It was successfully demonstrated during our college fest, attracting significant student engagement through its interactive AI-driven gameplay.",

  features: [
    "Real-Time Hand Tracking",
    "Gesture Fruit Ninja",
    "Gesture Car Racing",
    "AI Gesture Recognition",
    "Leaderboard Management",
    "Player Registration System",
    "Gameplay Recording",
    "Score Tracking System",
    "Multi-Game Launcher",
    "Touchless Gaming Experience"
  ],

  techStack: [
    "Python",
    "OpenCV",
    "MediaPipe",
    "NumPy",
    "Pygame",
    "CustomTkinter",
    "FFmpeg",
    "Computer Vision",
    "Hand Tracking"
  ],

  learnings: [
    "Computer Vision Fundamentals",
    "Real-Time Hand Tracking Systems",
    "Gesture Recognition Techniques",
    "Game Development with Pygame",
    "Performance Optimization for Real-Time Applications",
    "Leaderboard and Player Management Systems",
    "Video Recording and Processing",
    "Interactive User Experience Design"
  ],

  github: "https://github.com/Saginala-harikrishna/gesture-fruit-ninja",

  demo: "#",

  video: "#"
},




];

export default projectsData;