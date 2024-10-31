// Main code file
import * as skillIcons from '../public/svg/skills/index.js';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();

  const skillMap = {
    docker: skillIcons.docker,
    git: skillIcons.git,
    gitlab: skillIcons.gitLab,
    github: skillIcons.gitHub,
    kubernetes: skillIcons.kubernetes,
    terraform: skillIcons.terraform,
    helm: skillIcons.helm,
    grafana: skillIcons.grafana,
    prometheus: skillIcons.prometheus,

    // Cloud Providers
    aws: skillIcons.aws,
    azure: skillIcons.azure,

    // AI/Machine Learning
    'scikit-learn': skillIcons.scikit,
    tensorflow: skillIcons.tensorflow,
    pytorch: skillIcons.pytorch,
    numpy: skillIcons.numpy,
    opencv: skillIcons.opencv,
    'apache spark': skillIcons.apacheSpark, // Adjust names to match your skillIcons
    'apache airflow': skillIcons.apacheAirflow,
    databricks: skillIcons.databricks,
    hadoop: skillIcons.apacheHadoop,

    // Web Development
    html: skillIcons.html,
    css: skillIcons.css,
    javascript: skillIcons.javascript,
    typescript: skillIcons.typescript,
    react: skillIcons.react,
    angular: skillIcons.angular,
    bootstrap: skillIcons.bootstrap,
    tailwind: skillIcons.tailwind,
    nodejs: skillIcons.nodejs,
    express: skillIcons.express,
    flask: skillIcons.flask,
    spring: skillIcons.spring,
    vitejs: skillIcons.vitejs,
    wordpress: skillIcons.wordpress,

    // Databases
    mongodb: skillIcons.mongoDB,
    mysql: skillIcons.mysql,
    postgresql: skillIcons.postgresql,

    // Testing
    cucumber: skillIcons.cucumber,
    junit: skillIcons.junit,
    selenium: skillIcons.selenium,
    postman: skillIcons.postman,
    sonarqube: skillIcons.sonarqube,
    mocha: skillIcons.mocha,

    // Programming Languages
    python: skillIcons.python,
    java: skillIcons.java,
    c: skillIcons.c,
    'c++': skillIcons.cplusplus, // Adjusted to match skill naming
    'c#': skillIcons.csharp,
  };

  return skillMap[skillID] || null;
};
