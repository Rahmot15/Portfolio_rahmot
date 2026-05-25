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
    name: "Shibir",
    category: "Full Stack",
    image: "/shibir-client.png",
    mainTechnologyStack: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Better Auth",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    briefDescription:
      "A modern full-stack web application developed for digital reporting, syllabus tracking, and role-based organizational management.",
    liveProjectLink: "https://shibir-client.vercel.app/",
    githubRepositoryLinkClientSide:
      "https://github.com/Rahmot15/shibir-client-B6A5.git",
    githubRepositoryLinkServerSide:
      "https://github.com/Rahmot15/shibir-server-B6A5.git",
    challengesFaced: [
      "Implementing role-based access control and protected routes",
      "Managing complex reporting workflows for multiple user roles",
      "Designing scalable database schema using Prisma ORM",
      "Handling secure authentication and session management",
      "Optimizing responsive dashboard layouts for all devices",
    ],
    potentialImprovements: [
      "Add AI chatbot with RAG integration",
      "Implement real-time chat/support system using Socket.IO",
      "Add push notification system",
      "Improve analytics and reporting insights",
      "Add offline/PWA support",
    ],
    futurePlans: [
      "Online bookstore integration with SSLCommerz & Stripe",
      "Advanced admin analytics dashboard",
      "Real-time messaging and communication system",
      "Smart syllabus recommendation system",
      "Mobile app version using React Native",
    ],
  },
  {
    id: 2,
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
    id: 3,
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
