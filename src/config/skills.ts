import { Icons } from "@/components/common/icons";

export const skillIcons = {
  nextjs: Icons.nextjs,
  react: Icons.react,
  graphql: Icons.graphql,
  nestjs: Icons.nestjs,
  express: Icons.express,
  nodejs: Icons.nodejs,
  mongodb: Icons.mongodb,
  typescript: Icons.typescript,
  javascript: Icons.javascript,
  html5: Icons.html5,
  css3: Icons.css3,
  reactnative: Icons.react,
  angular: Icons.angular,
  redux: Icons.redux,
  socketio: Icons.socketio,
  mui: Icons.mui,
  tailwindcss: Icons.tailwindcss,
  aws: Icons.amazonaws,
  bootstrap: Icons.bootstrap,
  mysql: Icons.mysql,
  netlify: Icons.netlify,
  csharp: Icons.csharp,
  python: Icons.python,
  ai: Icons.ai,
  docker: Icons.docker,
  sass: Icons.css3,
  less: Icons.css3,
  figma: Icons.figma,
  photoshop: Icons.photoshop,
  azure: Icons.azure,
  google: Icons.google,
  linux: Icons.linux,
  windows: Icons.windows,
  nginx: Icons.nginx,
  apache: Icons.apache,
  jupyter: Icons.jupyter,
  powershell: Icons.laptop,
  // Add more as needed
};

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

// Helper to map icon string to Icons object
function getIconComponent(iconName: string) {
  if (!iconName) return undefined;
  return skillIcons[iconName];
}

// If you load skills from JSON, map icon string to component:
export function mapSkillsFromJson(skillsJson: any[]): skillsInterface[] {
  return skillsJson.map((skill) => ({
    ...skill,
    icon: typeof skill.icon === "string" ? getIconComponent(skill.icon) : skill.icon,
  }));
}

// Example usage if you import skills from JSON:
// import messages from "@/messages/en.json";
// export const skillsUnsorted = mapSkillsFromJson(messages.skillsUnsorted);

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: skillIcons.nextjs,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: skillIcons.react,
  },
  {
    name: "GraphQL",
    description:
      "Fetch data precisely with a powerful query language for APIs and runtime execution.",
    rating: 4,
    icon: skillIcons.graphql,
  },
  {
    name: "Nest.js",
    description:
      "Create scalable and modular applications with a progressive Node.js framework.",
    rating: 4,
    icon: skillIcons.nestjs,
  },
  {
    name: "express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    rating: 5,
    icon: skillIcons.express,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: skillIcons.nodejs,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: skillIcons.mongodb,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: skillIcons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: skillIcons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: skillIcons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: skillIcons.css3,
  },
  {
    name: "React Native",
    description:
      "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
    rating: 4,
    icon: skillIcons.reactnative,
  },
  {
    name: "Angular",
    description:
      "Build dynamic web apps with a TypeScript-based open-source framework by Google.",
    rating: 3,
    icon: skillIcons.angular,
  },
  {
    name: "Redux",
    description:
      "Manage app state effectively using a predictable and centralized state container.",
    rating: 4,
    icon: skillIcons.redux,
  },
  {
    name: "Socket.io",
    description:
      "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    rating: 3,
    icon: skillIcons.socketio,
  },
  {
    name: "Material UI",
    description:
      "Create stunning and responsive UIs with a popular React UI framework.",
    rating: 4,
    icon: skillIcons.mui,
  },

  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: skillIcons.tailwindcss,
  },
  {
    name: "AWS",
    description:
      "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 3,
    icon: skillIcons.aws,
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 2,
    icon: skillIcons.bootstrap,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 2,
    icon: skillIcons.mysql,
  },
  {
    name: "Netlify",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: skillIcons.netlify,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);
export const featuredSkills = skills.slice(0, 6);

export const validSkills = [
  "C#",
  "Python",
  "Node.js",
  "React",
  "Angular",
  "JavaScript",
  "TypeScript",
  "PHP",
  "SQL",
  "MySQL",
  "AI",
  "Docker",
  "Selenium",
  "TensorFlow",
  "PyTorch",
  "OpenCV",
  "Vue.js",
  "Tailwind CSS",
  "HTML 5",
  "CSS 3",
  "FastAPI",
  "Flask",
  "Django",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Scikit-learn",
  "Three.js",
  "Redux",
  "Next.js",
  "Express.js",
  "MongoDB",
  "AWS",
  "Azure",
  "Google Cloud",
  "Linux",
  "Ubuntu",
  "Apache",
  "Nginx",
  "Jupyter",
  "Shell Script",
  "PowerShell",
  "SASS",
  "Less",
  "Bootstrap",
  "Figma",
  "Photoshop"
] as const;

export type ValidSkills = typeof validSkills[number];