import React from "react";

interface Skills {
  "React Js": string;
  "Next Js": string;
  HTML: string;
  CSS: string;
  JavaScript: string;
  TypeScript: string;
  "Material UI": string;
  "Tailwind CSS": string;
  "Node Js": string;
  Django: string;
  Flask: string;
  GraphQL: string;
  Redis: string;
  MySQL: string;
  Postgresql: string;
  MongoDB: string;
  Firebase: string;
  Python: string;
  R: string;
  Matplotlib: string;
  Pandas: string;
  Numpy: string;
  Excel: string;
  Tensorflow: string;
  Keras: string;
  Jupyter: string;
  "Google Colab": string;
  "scikit-learn": string;
  PyTorch: string;
  Git: string;
  GitHub: string;
  Docker: string;
  "VS Code": string;
  Postman: string;
  Figma: string;
  Pycharm: string;
  "UNIX / Linux": string;
  OpenCV: string;
  Java: string;
  C: string;
  Jira: string;
  SQLite: string;
}

const allSkills = {
  "React Js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next Js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  JavaScript:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
  "Material UI":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Node Js": "https://nodejs.org/static/images/logo.svg",
  Django:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  Flask:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  GraphQL: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  Redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  MySQL:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  Postgresql: "https://www.postgresql.org/media/img/about/press/elephant.png",
  MongoDB:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  Firebase: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  Python:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  R: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg",
  Matplotlib:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
  Pandas:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  Numpy:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  Excel:
    "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
  Tensorflow:
    "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png",
  Keras:
    "https://miro.medium.com/v2/resize:fit:600/1*DKu_54iqz6C-p6ndo7rO3g.png",
  Jupyter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg",
  "Google Colab":
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
  "scikit-learn":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",
  PyTorch:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  Docker:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  Postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  Figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  Pycharm:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg",
  "UNIX / Linux":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  OpenCV:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  Jira: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
  SQLite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
};
interface TechnologyListProps {
  technologies: string[];
}

const TechnologyList: React.FC<TechnologyListProps> = ({ technologies }) => {
  if (!technologies) {
    console.error("TechnologyList received undefined 'technologies' prop");
    return <div>No technologies available</div>;
  }
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-4">
      {technologies.map((tech, index) => {
        const techIcon = allSkills[tech as keyof Skills]; // TypeScript knows `tech` is a key of `Skills`
        return techIcon ? (
          <div
            key={index}
            className="group relative flex justify-center items-center"
          >
            <img src={techIcon} alt={tech} className="w-10 h-10" />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded hidden group-hover:block">
              {tech}
            </span>
          </div>
        ) : (
          <div key={index}>Missing Icon for {tech}</div> // Handle missing icons gracefully
        );
      })}
    </div>
  );
};

export default TechnologyList;
