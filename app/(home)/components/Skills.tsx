import React from "react";

interface Skill {
  image: string;
  name: string;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

const skillsData: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
      },

      {
        name: "Next.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
      },
      {
        name: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
      },
      {
        name: "CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
      },
      {
        name: "TypeScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
      },
      {
        name: "Material UI",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
      },
      {
        name: "Tawilwind CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
      }
    ]
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
      },

      {
        name: "Django",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
      },
      {
        name: "Flask",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
      },
      {
        name: "GraphQL",
        image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
      },
      {
        name: "Redis",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png"
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
      }
    ]
  },
  {
    title: "Data Analysis",
    skills: [
      {
        name: "Python",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
      },
      {
        name: "R",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg"
      },
      {
        name: "Matplotlib",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"
      },
      {
        name: "Pandas",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
      },
      {
        name: "Numpy",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
      },
      {
        name: "Excel",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg"
      },
      {
        name: "Selenium",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg"
      },
      {
        name: "Beautiful Soup",
        image:
          "https://www.svgrepo.com/show/92618/soup.svg"
      }
    ]
  },
  {
    title: "Machine Learning",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
      },
      {
        name: "Tenserflow",
        image:
          "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png"
      },
      {
        name: "Keras",
        image:
          "https://miro.medium.com/v2/resize:fit:600/1*DKu_54iqz6C-p6ndo7rO3g.png"
      },
      {
        name: "Jupyter",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg"
      },
      {
        name: "Google Colab",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg"
      },
      {
        name: "scikit-learn",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png"
      },
      {
        name: "PyTorch",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
      },
      {
        name: "Hugging Face",
        image: "https://img.icons8.com/fluency/48/hugging-face_app.png"
      }
    ]
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
      },
      {
        name: "GitHub",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
      },
      {
        name: "VS Code",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
      },
      {
        name: "Postman",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
      },
      {
        name: "Figma",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
      },
      {
        name: "Pycharm",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg"
      },
      {
        name: "UNIX / Linux",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
      },
      {
        name: "OpenCV",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg"
      },
      {
        name: "Java",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
      },
      {
        name: "C",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
      },
      {
        name: "Jira",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg"
      }
    ]
  }
];
const Skills: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-8xl mx-auto">
      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl mt-16 mb-4 w-full text-center text-primary dark:text-dark-primary">
        Skills
      </h2>

      <div className="w-full mt-8 flex flex-wrap justify-center gap-8">
        {skillsData.map((skillGroup, index) => (
          <div
            key={index}
            className="w-full max-w-md bg-tertiary dark:bg-custom-transparent shadow-custom rounded-lg p-6 md:max-w-lg lg:p-8 opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-primary dark:text-dark-secondary text-center mb-6">
              {skillGroup.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {skillGroup.skills.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="text-sm font-medium text-primary dark:text-dark-quaternary rounded-lg px-4 py-2 flex items-center gap-2"
                >
                  <img src={item.image} alt={item.name} className="w-6 h-6" />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
