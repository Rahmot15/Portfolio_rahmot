export interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
  mainTechnologyStack: string[];
  briefDescription: string;
  liveProjectLink: string;
  githubRepositoryLinkClientSide: string;
  githubRepositoryLinkServerSide: string;
  challengesFaced: string[];
  potentialImprovements: string[];
  futurePlans: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "BazarIo",
    category: "Full Stack",
    image: "/image1.png",
    mainTechnologyStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe API",
      "JWT Authentication",
      "Tailwind CSS",
    ],
    briefDescription:
      "This is a comprehensive e-commerce platform designed to showcase a modern online shopping system, from Browse products to secure payments and order management I developed this application using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrated several modern technologies to create a robust and user-friendly experience.",
    liveProjectLink: "https://bazario-auth-23e7d.web.app",
    githubRepositoryLinkClientSide:
      "https://github.com/Rahmot15/E-Commers-BazarIo-Project-client-side.git",
    githubRepositoryLinkServerSide:
      "https://github.com/Rahmot15/E-Commers-BazarIo-Project-server-side.git",
    challengesFaced: [
      "Implementing secure payment processing with Stripe API",
      "Managing complex state for shopping cart across multiple components",
      "Optimizing database queries for better performance",
      "Handling real-time inventory updates",
      "Implementing responsive design for all device sizes",
    ],
    potentialImprovements: [
      "Add real-time chat support for customer service",
      "Implement advanced product filtering and search",
      "Add wishlist and comparison features",
      "Integrate with multiple payment gateways",
      "Implement AI-powered product recommendations",
      "Add progressive web app (PWA) capabilities",
    ],
    futurePlans: [
      "Mobile app development using React Native",
      "Implementation of machine learning for personalized recommendations",
      "Multi-vendor marketplace functionality",
      "Advanced analytics dashboard for sellers",
    ],
  },
  {
    id: 2,
    name: "BookStacker",
    category: "Full Stack",
    image: "/image2.png",
    mainTechnologyStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
      "React Router",
    ],
    briefDescription:
      "A virtual bookshelf web app that lets users browse, add, edit, delete books, and write reviews with star ratings. Features user authentication and a responsive design.",
    liveProjectLink: "https://bookshelf-client-auth.web.app",
    githubRepositoryLinkClientSide:
      "https://github.com/Rahmot15/Bookshelf-Project-client-side.git",
    githubRepositoryLinkServerSide:
      "https://github.com/Rahmot15/Bookshelf-Project-server-side.git",
    challengesFaced: [
      "Implementing secure user authentication with JWT",
      "Creating a seamless book CRUD interface",
      "Building a star rating and review system",
      "Managing MongoDB data structure and relationships",
      "Ensuring responsive design across devices",
    ],
    potentialImprovements: [
      "Add user profiles with customization",
      "Include book recommendation engine",
      "Implement social sharing of book reviews",
      "Add pagination and sorting for books and reviews",
      "Enable real-time updates using WebSockets",
    ],
    futurePlans: [
      "Mobile app version using React Native",
      "Integration with external book APIs (Google Books, Open Library)",
      "Advanced search and filter options",
      "Community features like forums and book clubs",
    ],
  },
  {
    id: 3,
    name: "Plants",
    category: "Full Stack",
    image: "/image3.png",
    mainTechnologyStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
      "React Router",
    ],
    briefDescription:
      "A full-stack Plants web app for managing plant information, user authentication, and CRUD operations with role-based access control and responsive UI.",
    liveProjectLink: "https://plants-auth-client.web.app",
    githubRepositoryLinkClientSide:
      "https://github.com/Rahmot15/Plant-Care-Tracker-client-side.git",
    githubRepositoryLinkServerSide:
      "https://github.com/Rahmot15/Plant-Care-Tracker-server-side.git",
    challengesFaced: [
      "Implementing role-based user authentication and authorization",
      "Designing responsive and user-friendly plant listing and detail pages",
      "Handling CRUD operations with proper validation",
      "Managing image uploads and storage",
      "Ensuring secure API endpoints with JWT",
    ],
    potentialImprovements: [
      "Add advanced search and filtering for plants",
      "Implement user profiles with plant favorites and watchlists",
      "Add comment and review system for plants",
      "Integrate social media sharing for plant details",
      "Optimize performance and SEO",
    ],
    futurePlans: [
      "Mobile app version with push notifications",
      "Integration with IoT devices for plant monitoring",
      "AI-based plant disease detection and care suggestions",
      "Multi-language support",
      "Offline mode and PWA support",
    ],
  },
];

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  availability: string;
}

export const contactInfo: ContactInfo = {
  email: "mdrahmatulla666@gmail.com",
  phone: "+8801616658465",
  whatsapp: "+8801616658465",
  location: "Rajshahi, Dhaka, Bangladesh",
  availability: "Open to full‑time roles",
};
