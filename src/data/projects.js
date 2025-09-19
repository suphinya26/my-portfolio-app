// src/data/projects.js
// import agriImage from '../assets/agricultural-marketplace.png';
// import coffeeImage from '../assets/coffee-shop-management.png';
// import checkinImage from '../assets/checkin-checkout.png';

export const projects = [
  {
    id: 1,
    title: "Agricultural E - Marketplace Platform",
    role: "Full-stack Developer, UI/UX Designer",
    description: "A web application for trading agricultural products with auction functionality.",
    tools: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Figma", "Postman"],
    image: "https://via.placeholder.com/600x400.png?text=Agricultural+E-Marketplace",
    details: {
      overview: "This thesis project was a web application aimed at connecting farmers and buyers. My role was to develop the entire platform, from the front-end user interface to the back-end logic, including the database management.",
      process: "I began by designing the user flow and wireframes in Figma. The front-end was built with React.js for a dynamic user experience. For the backend, I used Node.js and Express.js to create the API endpoints. PostgreSQL with Prisma ORM was used for database management.",
      features: [
        "Developed Frontend with React.js and Tailwind CSS",
        "Built Backend using Node.js and Express.js",
        "Managed database with PostgreSQL and Prisma ORM",
        "Designed and developed key features: product search, shopping cart, ordering, auction system, multi-role user system",
        "Tested backend APIs using Postman"
      ],
      learned: "I learned how to manage a full-stack project from start to finish. I gained practical experience in working with different technologies and integrating them to build a functional application."
    }
  },
  {
    id: 2,
    title: "Coffee Shop Management System",
    role: "UI/UX Designer",
    description: "A prototype system for coffee shop management. Designed the UI/UX using Figma.",
    tools: ["Figma"],
    image: "https://via.placeholder.com/600x400.png?text=Coffee+Shop+Management",
    details: {
      overview: "This mini-project was a prototype for a coffee shop management system. My primary role was to design the user interface and user experience to create an intuitive system for baristas and managers.",
      process: "I started with user research to understand the needs of coffee shop staff. I then created user personas and user flows before designing the wireframes and high-fidelity mockups in Figma.",
      features: [
        "Designed UI/UX using Figma"
      ],
      learned: "This project taught me the importance of user-centered design and how to translate user needs into a functional and visually appealing interface."
    }
  },
  {
    id: 3,
    title: "Check-in/Check-out Website",
    role: "Full-stack Developer",
    description: "A web application for employee check-in and check-out.",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "PHP", "MySQL"],
    image: "https://via.placeholder.com/600x400.png?text=Check-in/Check-out+Website",
    details: {
      overview: "A web application for employees to record their check-in and check-out times. The system was built from scratch using PHP and MySQL.",
      process: "I developed the front-end using HTML, CSS, JavaScript, and Bootstrap 5. The back-end logic was written in PHP to handle user authentication and data storage in a MySQL database.",
      features: [
        "Developed Frontend with HTML, CSS, JavaScript, and Bootstrap 5",
        "Built Backend with PHP and MySQL for data storage"
      ],
      learned: "This project was a great introduction to web development fundamentals, including front-end design, back-end logic, and database management."
    }
  }
];