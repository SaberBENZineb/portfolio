export const projectsCategories = ['All', 'Web', 'IA', "Devops","Data Engineering"]
export const projectsData = [
    {
        id: 1,
        name: 'Solar System',
        description: "The Solar System Visualizer project is an interactive application that allows users to explore the characteristics of planets in our solar system. It includes an automated CI/CD pipeline on GitLab for testing, containerization, and deployment to a Kubernetes cluster on Azure, incorporating security analyses through secret detection and container scanning. Docker ensures consistent environment packaging while sensitive configurations are securely managed. Additionally, monitoring is implemented using Grafana and Prometheus, offering real-time insights into application performance. This project highlights my expertise in CI/CD automation, container orchestration, web application development, and monitoring solutions.",
        tools: ['GitLab CI/CD', 'Docker', 'Kubernetes', 'Node.js', 'MongoDB', 'Mocha', "Grafana", "Prometheus"],
        code: '',
        demo: '',
        image: "ayla",
        categorie: ["Devops"]
    },
    {
        id: 2,
        name: 'CRYPTO',
        description: 'Developed a cryptocurrency analysis tool using the MERN stack and Flask, featuring interactive visualizations for various cryptocurrencies created with Chart.js. While the tool provides insights into market trends and price fluctuations for all cryptocurrencies, it specifically employs an LSTM (Long Short-Term Memory) model to predict future Bitcoin prices based on historical data. Additionally, the application includes a dedicated section for news related to the cryptocurrency market, keeping users informed of the latest developments. This comprehensive tool enables users to analyze trends effectively and make informed investment decisions.',
        tools: ['React', 'Bootstrap', 'Express', 'Flask', 'LSTM'],
        code: '',
        demo: '',
        image: "realEstate",
        categorie: ["Web", "IA"]
    },
    {
        id: 3,
        name: 'API Data Pipeline',
        description: "Developed a data extraction pipeline from an API using Apache Airflow, where I created a Directed Acyclic Graph (DAG) that queries the API every hour for real-time data collection. I integrated Apache Kafka to facilitate seamless data streaming between Apache Airflow and Apache Spark, enabling efficient processing of the extracted data. The data is transformed and analyzed using Apache Spark, which allows for quick handling of large datasets. I utilized Apache Cassandra for storing the processed data, ensuring high availability and fast access for future analytics.",
        tools: ['Apache Airflow', 'Apache Kafka', 'Apache Spark', 'Apache Cassandra'],
        code: '',
        demo: '',
        image: "ayla",
        categorie: ["Data Engineering"]
    }, 
    {
        id: 4,
        name: 'RECRUT',
        description: "A recruitment web platform designed to leverage NLP for analyzing and matching candidates' CVs with job opportunities. Developed using the MARN stack and Flask, this application automatically collects job listings from various sources through web scraping, offering a diverse array of opportunities. Candidates can conveniently apply directly to these listings on the platform. Furthermore, an intelligent recommendation system evaluates and ranks candidates based on their alignment with the job descriptions provided by recruiters. This approach significantly improves the recruitment process's efficiency by facilitating the selection of the best-fit candidates.",
        tools: ['Express', 'Node.js', "Flask", 'MongoDB', 'TypeScript', 'React', "Tailwindcss", "Spacy", "NLTK", "ML", "Web Scraping"],
        role: '',
        code: '',
        demo: '',
        image: "travel",
        categorie: ["Web", "IA"]
    },
    {
        id: 5,
        name: 'MP4-MP3',
        description: "Developed an MP4 to MP3 converter utilizing a microservices architecture, implementing Docker for containerization and Kubernetes for orchestration to ensure high availability and scalability. Each service handles specific tasks related to the conversion process, with RabbitMQ facilitating efficient communication between microservices for asynchronous task management. The application features a RESTful API built with Flask, allowing users to easily submit MP4 files for conversion and receive the resulting MP3 files. This architecture ensures fast conversion speeds and reliable performance, even under heavy load, while enhancing my skills in modern application development and deployment practices.",
        tools: ['Docker', 'Kubernetes', 'RabbitMQ', 'Flask', 'MongoDB', 'Mysql'],
        code: '',
        demo: '',
        image: "ayla",
        categorie: ["Devops"]
    },
    {
        id: 6,
        name: 'Netflix',
        description: "This project is a Netflix clone that emulates the streaming platform's user experience with a sleek, responsive interface for browsing and streaming content. Built for rapid development, it emphasizes high code quality and security throughout its lifecycle. The application includes monitoring features to gain insights into user engagement and system performance. Stakeholders are kept informed throughout the process, ensuring clear communication and transparency.",
        tools: ['Docker', 'Kubernetes','Jenkins','Trivy','ArgoCD', "Grafana", "Prometheus","ViteJs"],
        code: '',
        demo: '',
        image: "ayla",
        categorie: ["Devops"]
    },
];