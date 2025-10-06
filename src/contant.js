import HealthcareImg from "./assets/industries/Healthcare.webp";
import RetailImg from "./assets/industries/E-commerce & Retail.webp";
import FintechImg from "./assets/industries/Fintech.webp";
import InsuranceImg from "./assets/industries/Insurance.webp";
import HospitalityImg from "./assets/industries/Hospitality.webp";
import ManufacturingImg from "./assets/industries/Manufacturing.webp";
import OnDemandImg from "./assets/industries/On Demand.jpg";
import FoodRestaurantImg from "./assets/industries/Food & Restaurant.webp";
import LogisticsImg from "./assets/industries/Logistics & Supply Chain.webp";
import EducationImg from "./assets/industries/Education.webp";
import GameImg from "./assets/industries/Game.webp";
import RealEstateImg from "./assets/industries/RealEstateImg.jpg";
import webDevIcon from "./assets/images/slider-item-webdev-icon.png";
import appDevIcon from "./assets/images/slider-item-appdev-icon.png";
import aiIcon from "./assets/images/slider-item-ai-icon.png";
import webDevCardImg from "./assets/images/slider-item-webdev.png";
import appDevCardImg from "./assets/images/slider-item-appdev.png";
import aiCardImg from "./assets/images/slider-item-ai.png";
// clients
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";

import service1 from "./assets/service1.png";
import service3 from "./assets/service3.png";
import service6 from "./assets/service6.png";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import BayutImg from "./assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "./assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "./assets/web-development-portfolio/flatiorn.png";
import MavenImg from "./assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "./assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "./assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "./assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "./assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "./assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "./assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "./assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "./assets/app-development-portfolio/namaz.png";
import PoteaImg from "./assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "./assets/app-development-portfolio/rentop bike and car.png";
// landingpage service iamge
import ecommerceIcon from "./assets/images/icons/online-shopping.png";
import socialMediaIcon from "./assets/images/icons/socialmedia.png";
import landingPageIcon from "./assets/images/icons/landing-page.png";
import customWebsiteIcon from "./assets/images/icons/software-development.png";
import iosDevelopmentIcon from "./assets/images/icons/ios-development.png";
import androidDevelopmentIcon from "./assets/images/icons/android-development.png";
import flutterDevelopmentIcon from "./assets/images/icons/flutter-development.png";
import hybridAppDevelopmentIcon from "./assets/images/icons/hybrid-app-development.png";

export const clientDetails = {
  phone: "+85293196658",
  whatsappbox: "5293196658",
  email: "aetherai.general@gmail.com",
  // email: "support@Aether AI.co",
  address: "India",
  instagram:
    "https://www.instagram.com/aetherai.tech?igsh=MTNhaWhjNnk2c2hiMw%3D%3D&utm_source=qr",
  facebook: "https://www.facebook.com/share/16dtxBC9ut/?mibextid=wwXIfr",
  linkedin: "https://www.linkedin.com/company/105964574/admin/dashboard/",
};

export const navItems = [
  {
    label: "[ LET'S TALK AI ]",
    path: "/",
    extraClasses: "text-white hover:text-blue-400",
  },
  { label: "Home", path: "/", extraClasses: "hover:text-blue-400 " },
  { label: "About", path: "/about-us", extraClasses: "hover:text-blue-400" },
  { label: "Services", path: "/services", extraClasses: "hover:text-blue-400" },
  // Uncomment the below links if needed
  // {
  //   label: "Industries",
  //   path: "/industries",
  //   extraClasses: "hover:text-blue-400",
  // },
  // {
  //   label: "Portfolio",
  //   path: "/portfolio",
  //   extraClasses: "hover:text-blue-400",
  // },
  // {
  //   label: "Blogs",
  //   path: "/blogs",
  //   extraClasses: "hover:text-blue-400",
  // },
  // { label: "PORTFOLIO", path: "/portfolio", extraClasses: "hover:text-blue-400" },
  // { label: "RESOURCES", path: "/resources", extraClasses: "hover:text-blue-400" },
  {
    label: "Contact Us",
    path: "/contact-us",
    extraClasses:
      "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700",
  },
];

export const allServices = [
  {
    id: 1,
    img: service1,
    title: "Web Development",
    link: "/services/web-development",
    description:
      "Your website is often the first interaction customers have with your business. Our Web Development services ensure that your website is engaging, user-friendly, and optimized for performance. From design to development and maintenance, we handle it all.",
    services: [
      {
        heading: "Custom Web Development",
        description:
          "We specialize in building unique, tailor-made websites that reflect your brand identity and meet your business objectives.",
      },
      {
        heading: "Mobile-Responsive Design",
        description:
          "We ensure your website adapts beautifully across all devices, ensuring users have a consistent and optimized experience whether they’re on mobile, tablet, or desktop.",
      },
      {
        heading: "E-Commerce Development",
        description:
          "If you want to take your business online, we offer powerful e-commerce solutions designed to handle high traffic, provide secure payment options, and enhance the shopping experience.",
      },
      {
        heading: "Content Management Systems (CMS)",
        description:
          "We empower you to take control of your content with an easy-to-use CMS, giving you the flexibility to update and manage your site independently.",
      },
      {
        heading: "Search Engine Optimization (SEO)",
        description:
          "Our websites are built with SEO in mind, improving your visibility on search engines and helping you reach more customers.",
      },
    ],
  },
  {
    id: 2,
    img: service1,
    title: "App Development",
    link: "/services/app-development",
    description:
      "Mobile and web apps are essential for engaging your audience and improving business operations. Our App Development team builds custom applications that are intuitive, scalable, and optimized for performance. Whether you’re developing a native mobile app, a cross-platform solution, or a web-based application, we have the tools and knowledge to make it happen.",
    services: [
      {
        heading: "iOS & Android Development",
        description:
          "Whether you’re building for iPhone, iPad, or Android devices, we create custom applications that deliver exceptional user experiences across platforms.",
      },
      {
        heading: "Cross-Platform Development",
        description:
          "We offer cross-platform solutions using frameworks like Flutter and React Native, providing high-quality apps for both iOS and Android while keeping development costs efficient.",
      },
      {
        heading: "UI/UX Design for Apps",
        description:
          "From the initial concept to the final design, our team creates intuitive interfaces that are easy to navigate and offer a smooth experience for your users.",
      },
      {
        heading: "App Maintenance & Updates",
        description:
          "We don’t just launch your app—we also offer ongoing maintenance and updates to keep your app running smoothly and up-to-date with the latest features.",
      },
      {
        heading: "Custom App Solutions",
        description:
          "If you have specific requirements, we’ll build a custom app that fits your unique business needs, integrating with other platforms and services as needed.",
      },
    ],
  },
  {
    id: 3,
    img: service6,
    title: "UI/UX Design",
    link: "/services/uiux-design",
    description:
      "The success of your digital product depends on its design. Our UI/UX Design services focus on creating user-centered designs that provide seamless experiences. We prioritize ease of use, visual appeal, and functionality to create products that users love.",

    services: [
      {
        heading: "User Research & Insights",
        description:
          "We begin with in-depth research to understand your target audience, their needs, behaviors, and challenges, ensuring that the design aligns with their expectations.",
      },
      {
        heading: "Wireframing & Prototyping",
        description:
          "We create wireframes and interactive prototypes to help visualize your product’s structure and flow before development begins, giving you a clear picture of the user journey.",
      },
      {
        heading: "UI Design",
        description:
          "Our team focuses on designing user interfaces that are not only visually stunning but also intuitive, making it easy for your users to interact with your product.",
      },
      {
        heading: "UX Strategy & Testing",
        description:
          "We continuously test and refine our designs through usability testing, ensuring your product delivers an exceptional experience at every touchpoint.",
      },
      {
        heading: "Branding & Design Systems",
        description:
          "We create consistent design systems and user interface guidelines that align with your brand identity, ensuring a cohesive and recognizable experience across all platforms.",
      },
    ],
  },
  {
    id: 4,
    img: service3,
    title: "Artificial Intelligence",
    link: "/services/artificial-intelligence",
    description:
      "Artificial Intelligence is transforming the way businesses operate by enhancing decision-making and automating processes. Our AI Development services focus on creating intelligent systems that can solve complex problems, optimize operations, and provide actionable insights.",

    services: [
      {
        heading: "Machine Learning Solutions",
        description:
          "We create intelligent systems that learn from your data, improving decision-making, automating processes, and enhancing your operations over time.",
      },
      {
        heading: "Natural Language Processing (NLP)",
        description:
          "We develop AI solutions that enable your systems to understand, interpret, and respond to human language, from chatbots to automated customer service.",
      },
      {
        heading: "Predictive Analytics",
        description:
          "By analyzing historical data, we build predictive models that help you anticipate trends, identify patterns, and make data-driven decisions.",
      },
      {
        heading: "AI Automation",
        description:
          "We design AI solutions that automate repetitive tasks, freeing up your team to focus on more strategic initiatives and improving efficiency across the board.",
      },
      {
        heading: "AI Calling Agency",
        description:
          "Our AI-driven calling solutions automate customer interactions, provide intelligent responses, and streamline call center operations for improved efficiency.",
      },
      {
        heading: "Custom AI Integrations",
        description:
          "We help integrate AI into your existing systems to enhance performance, improve user experiences, and drive business growth.",
      },
    ],
  },
  {
    id: 5,
    img: service3,
    title: "Blockchain Development",
    link: "/services/blockchain-development",
    description:
      "Blockchain technology is revolutionizing industries by offering secure, decentralized, and transparent systems. Our Blockchain Development services are designed to help businesses leverage the power of blockchain to enhance security, improve transparency, and optimize operations. Whether you're exploring blockchain for financial applications, smart contracts, or decentralized apps (dApps), we tailor solutions that fit your needs.",

    services: [
      {
        heading: "Custom Blockchain Solutions",
        description:
          "We design and build scalable blockchain solutions customized to your business needs.",
      },
      {
        heading: "Smart Contract Development",
        description:
          "We develop automated, self-executing smart contracts that streamline and secure business transactions.",
      },
      {
        heading: "Cryptocurrency Solutions",
        description:
          "From coin creation to wallet development, we build comprehensive cryptocurrency platforms.",
      },
      {
        heading: "Decentralized Application (dApp) Development",
        description:
          "We help you create transparent, decentralized apps for a range of industries.",
      },
      {
        heading: "Blockchain Consulting",
        description:
          "Our experts provide strategic advice to help you navigate the world of blockchain technology.",
      },
    ],
  },
  {
    id: 6,
    img: service3,
    title: "Game Development",
    link: "/services/game-development",
    description:
      "We specialize in developing highly engaging and immersive games that captivate audiences and deliver a rich user experience. Whether it’s a mobile game, a console title, or a next-generation VR/AR experience, our Game Development services cover every aspect of the creative process—from concept to launch.",

    services: [
      {
        heading: "Mobile Game Development",
        description:
          "We create interactive games for iOS and Android platforms, optimized for user experience and performance.",
      },
      {
        heading: "Console & PC Games",
        description:
          "Our team designs and develops high-quality, visually stunning games for popular gaming consoles and PCs.",
      },
      {
        heading: "2D & 3D Game Design",
        description:
          "We bring your vision to life with detailed 2D and 3D graphics that captivate players.",
      },
      {
        heading: "AR/VR Game Development",
        description:
          "We design interactive augmented and virtual reality games that offer groundbreaking experiences.",
      },
    ],
  },
  {
    id: 7,
    img: service3,
    title: "Robotic Process Automation (RPA)",
    link: "/services/robotic-process-automation",
    description:
      "Improve operational efficiency by automating repetitive, time-consuming tasks. Robotic Process Automation (RPA) can help your business streamline workflows, reduce errors, and enhance productivity. Our RPA solutions allow businesses to automate various tasks and optimize resource allocation.",

    services: [
      {
        heading: "RPA Strategy & Consultation",
        description:
          "We analyze your existing processes and provide tailored RPA strategies that align with your business goals.",
      },
      {
        heading: "RPA Implementation",
        description:
          "We develop and deploy RPA solutions that automate complex workflows and business processes.",
      },
      {
        heading: "Task Automation",
        description:
          "From data entry to invoice processing, we automate high-volume tasks to increase efficiency and reduce human error.",
      },
      {
        heading: "Post-Implementation Support",
        description:
          "We provide ongoing support and optimization to ensure your RPA solutions remain effective and efficient.",
      },
    ],
  },
  {
    id: 8,
    img: service3,
    title: "Machine Learning Services",
    link: "/services/machine-learning",
    description:
      "Harness the power of data with our Machine Learning (ML) services. Our team creates customized ML models that allow businesses to make data-driven decisions, optimize processes, and predict future trends.",

    services: [
      {
        heading: "Predictive Analytics",
        description:
          "We help you forecast customer behavior, market trends, and business outcomes to drive strategic decisions.",
      },
      {
        heading: "Data Classification & Clustering",
        description:
          "We analyze and categorize your data, helping uncover patterns and improve customer segmentation.",
      },
      {
        heading: "Custom ML Models",
        description:
          "We design machine learning models tailored to your specific business challenges and goals.",
      },
      {
        heading: "Data Visualization",
        description:
          "We turn complex datasets into easy-to-understand visual reports that help drive informed decisions.",
      },
      {
        heading: "Model Optimization",
        description:
          "We continuously monitor and refine your machine learning models to ensure peak performance.",
      },
    ],
  },
  {
    id: 9,
    img: service3,
    title: "Cloud Computing Services",
    link: "/services/cloud-computing",
    description:
      "Elevate your business with our Cloud Computing solutions. We offer scalable, secure, and cost-effective cloud services that allow businesses to enhance flexibility, reduce infrastructure costs, and improve performance.",

    services: [
      {
        heading: "Cloud Strategy & Consultation",
        description:
          "We assess your needs and develop a cloud strategy that aligns with your business goals.",
      },
      {
        heading: "Cloud Infrastructure Setup",
        description:
          "We build and manage cloud environments tailored to your business, including private, public, and hybrid cloud solutions.",
      },
      {
        heading: "Cloud Migration",
        description:
          "We manage seamless cloud migration of your data, applications, and workloads with minimal disruption.",
      },
      {
        heading: "Cloud Security",
        description:
          "We implement robust security measures to protect your data and ensure compliance with industry standards.",
      },
      {
        heading: "Cloud Management & Optimization",
        description:
          "We offer ongoing management, monitoring, and optimization to ensure your cloud infrastructure remains efficient and cost-effective.",
      },
    ],
  },
  {
    id: 10,
    img: service3,
    title: "Data Science Services ",
    link: "/services/data-science",
    description:
      "Turn your data into actionable insights with our Data Science services. We help businesses unlock the power of their data by applying advanced analytics, machine learning, and statistical techniques to uncover valuable trends and patterns.",

    services: [
      {
        heading: "Data Analytics",
        description:
          "We analyze your data to identify insights, trends, and opportunities for business growth.",
      },
      {
        heading: "Predictive Analytics",
        description:
          "We build models that predict future outcomes based on historical data, empowering you to make proactive decisions.",
      },
      {
        heading: "Big Data Solutions",
        description:
          "We help you process and analyze large volumes of data to uncover hidden insights.",
      },
      {
        heading: "Data Visualization",
        description:
          "We create visualizations that make complex data easy to understand and actionable.",
      },
      {
        heading: "Business Intelligence (BI)",
        description:
          "We build custom BI solutions that help you monitor performance and gain real-time insights into your business.",
      },
    ],
  },
  {
    id: 11,
    img: service3,
    title: "Natural Language Processing (NLP)",
    link: "/services/natural-language-processing",
    description:
      "Our Natural Language Processing (NLP) services use advanced AI techniques to enable machines to understand and interact with human language. We help businesses improve customer service, automate document processing, and gain insights from unstructured text.",

    services: [
      {
        heading: "Chatbots & Virtual Assistants",
        description:
          "We develop intelligent chatbots that can handle customer inquiries and automate support tasks.",
      },
      {
        heading: "Text Analytics & Sentiment Analysis",
        description:
          "We analyze text data to understand customer sentiment, extract key information, and uncover trends.",
      },
      {
        heading: "Speech Recognition",
        description:
          "Our systems convert spoken language into text, enabling voice-enabled applications and services.",
      },
      {
        heading: "Text Summarization & Translation",
        description:
          "We provide tools to summarize long texts or translate content across languages to make communication more efficient.",
      },
    ],
  },
  {
    id: 12,
    img: service3,
    title: "Cloud Migration Services",
    link: "/services/cloud-migration",
    description:
      "Move your business to the cloud with ease through our Cloud Migration services. We help businesses transition their data and applications to the cloud while minimizing risk and downtime. Our team ensures a smooth and secure migration process.",

    services: [
      {
        heading: "Cloud Assessment & Strategy",
        description:
          "We assess your infrastructure and design a tailored cloud migration plan.",
      },
      {
        heading: "Data & Application Migration",
        description:
          "We ensure a seamless transition of your data, applications, and systems to the cloud.",
      },
      {
        heading: "Cloud Integration",
        description:
          "We integrate cloud solutions with your existing infrastructure to create a hybrid environment.",
      },
      {
        heading: "Post-Migration Support",
        description:
          "We provide ongoing monitoring, support, and optimization to ensure your cloud systems are performing at their best.",
      },
    ],
  },
];

export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: HealthcareImg,
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "Retail",
    img: RetailImg,
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Fintech",
    img: FintechImg,
    desc: "Streamlining financial services with AI-driven fraud detection, automated customer support, and predictive analytics.",
  },
  {
    id: 4,
    title: "Insurance",
    img: InsuranceImg,
    desc: "Improving risk assessment, claims processing, and customer engagement through advanced analytics and AI solutions.",
  },
  {
    id: 5,
    title: "Hospitality",
    img: HospitalityImg,
    desc: "Enhancing guest experiences with smart booking systems, personalized services, and efficient resource management.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: ManufacturingImg,
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "Legal Services",
    img: OnDemandImg,
    desc: "Expert legal solutions in contract law, intellectual property, corporate governance, and dispute resolution, ensuring compliance and strategic advice for business growth.",
  },
  {
    id: 8,
    title: "Food & Restaurant",
    img: FoodRestaurantImg,
    desc: "Optimizing food services with smart inventory, personalized menus, and efficient order management solutions.",
  },
  {
    id: 9,
    title: "Logistics",
    img: LogisticsImg,
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: EducationImg,
    desc: "Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 11,
    title: "Game",
    img: GameImg,
    desc: "Elevating game development with AI-enhanced graphics, player behavior analytics, and immersive experiences.",
  },
  {
    id: 12,
    title: "Real Estate Services",
    img: RealEstateImg,
    desc: "Expert property management, investment guidance, and tailored solutions for buying, selling, and renting residential and commercial properties.",
  },
];

export const bestServices = [
  {
    id: 1,
    title: "Web & App Development",
    icon: appDevIcon,
    img: appDevCardImg,
    description:
      "AppGalaxy, a subsidiary of Aether AI, specializes in premium website and app development services. We work across platforms to deliver seamless digital experiences that scale new customer acquisition and retention for commerce brands.",
    link: "/services/web-app-development",
  },

  {
    id: 2,
    title: "Artificial Intelligence",
    icon: aiIcon,
    img: aiCardImg,
    description:
      "Let AI elevate your business, streamline operations, and open doors to new possibilities.",
    link: "/services/artificial-intelligence",
  },

  {
    id: 3,
    title: "AR & VR",
    icon: webDevIcon,
    img: webDevCardImg,
    description:
      "In order to scale new customer acquisition and retention commerce brands, we work across",
    link: "/services/ar-vr",
  },
  {
    id: 4,
    title: "Game Development",
    icon: aiIcon,
    img: aiCardImg,
    description:
      "Creating immersive and engaging experiences through innovative game development solutions.",
    link: "/services/game-development",
  },
];

export const testimonials = [
  {
    id: 1,
    img: "",
    name: "Sarah L.",
    title: "CEO, FinTech Solutions",
    description:
      "Partnering with Aether AI to implement a blockchain solution was one of the best decisions we've made. Their team not only brought deep technical knowledge but also provided a clear roadmap to improve our security and transparency. The results exceeded our expectations, and we’re now able to offer our clients a more reliable and secure service. We couldn’t be more pleased with their expertise.",
  },
  {
    id: 2,
    img: "",
    name: " John D.",
    title: "Founder, FunGames Studios",
    description:
      "We approached Aether AI to help us develop a mobile game, and their creativity and technical know-how were invaluable. They worked with us through every stage of the process, from concept to release, and the final product has been a huge hit with our users. Our app is receiving great reviews, and user engagement has skyrocketed. We couldn’t have asked for a better partner to bring our game vision to life.",
  },
  {
    id: 3,
    img: "",
    name: "Melissa T.",
    title: "Product Manager, HealthTech Innovations",
    description:
      "From the very beginning, Aether AI understood our needs and delivered a mobile app that perfectly matches our vision. They created a user-friendly, high-performance app that’s now helping us reach a broader audience. The app has been a huge success, and our user engagement continues to grow. We’re extremely happy with the results and would highly recommend them to anyone looking to develop an app.",
  },
  {
    id: 4,
    img: "",
    name: "David S.",
    title: "COO, Global Manufacturing Solutions",
    description:
      "We decided to implement robotic process automation (RPA) to streamline our operations, and Aether AI was instrumental in making that happen. They guided us through the process, helping us automate tasks that used to take up a lot of time and resources. Now, we’re seeing faster turnaround times, fewer errors, and overall improved efficiency. Their team truly understood our goals and provided a solution that has made a significant difference in our operations.",
  },
  {
    id: 5,
    img: "",
    name: "Linda H.",
    title: "Director of Operations, RetailTech Inc.",
    description:
      "The AI solutions we developed with Aether AI have completely transformed how we approach decision-making. Their team worked with us to implement machine learning and AI technologies that helped us automate tasks and analyze data more effectively. Thanks to their work, we can now make more informed and accurate decisions quickly, which has drastically improved our productivity.",
  },
  {
    id: 6,
    img: "",
    name: "Mark G.",
    title: "Head of Data Science, E-Commerce Enterprises",
    description:
      "Thanks to Aether AI, we’ve successfully integrated machine learning into our business processes. Their team helped us develop predictive models that have provided valuable insights into customer behavior, helping us enhance our marketing strategies and optimize our products. We’ve already seen an uptick in customer satisfaction and sales—something we attribute directly to the power of machine learning.",
  },
  {
    id: 7,
    img: "",
    name: "Rachel W.",
    title: "IT Director, Tech Solutions Inc.",
    description:
      "Moving to the cloud seemed like a daunting task, but Aether AI made it a smooth transition. Their team helped us migrate our infrastructure with minimal downtime, and we now have a flexible, scalable cloud setup that improves performance and security. Our operations are now more efficient, and the costs are significantly lower. We’re extremely satisfied with their cloud computing services and couldn’t ask for a better partner in this transition.",
  },
  {
    id: 8,
    img: "",
    name: "Victor P.",
    title: "Marketing Manager, Lifestyle Brands.",
    description:
      "We came to Aether AI for a website redesign, and they exceeded all expectations. They not only captured the essence of our brand but also created a user-friendly, visually appealing site that’s easy to navigate. Since launching, our website traffic has increased, and we've seen an uptick in conversions. Their attention to detail and commitment to delivering a top-notch product made the entire process a pleasure.",
  },
  {
    id: 9,
    img: "",
    name: "Julia N.",
    title: "Marketing Director, Digital Marketing Co.",
    description:
      "Working with Aether AI on our data analytics project was an incredible experience. Their data scientists helped us turn complex datasets into actionable insights that improved our decision-making. By analyzing trends and identifying key patterns in our data, they helped us tailor our business strategies in ways that have already shown positive results. We’re excited to continue collaborating with them on future projects.",
  },
  {
    id: 10,
    img: "",
    name: "James T.",
    title: "Customer Support Manager, Global Telecom.",
    description:
      "Thanks to Aether AI, we’ve been able to enhance our customer service with a custom-built chatbot that leverages Natural Language Processing. The result is faster response times, increased customer satisfaction, and a more efficient support team. The implementation process was seamless, and we’ve already seen measurable improvements in customer engagement and retention.",
  },
  {
    id: 11,
    img: "",
    name: "Christine F.",
    title: "CTO, Financial Services Group",
    description:
      "Aether AI helped us migrate our systems and applications to the cloud without any disruption to our business. Their team handled every aspect of the migration, from planning to execution, ensuring a smooth transition. Now, our cloud infrastructure is faster, more secure, and more scalable than ever before. The entire process was efficient, and we couldn’t be happier with the results.",
  },
  {
    id: 12,
    img: "",
    name: "Evan K.",
    title: "Product Owner, FinTech Solutions",
    description:
      "Moving to the cloud seemed like a daunting task, but Aether AI made it a smooth transition. Their team helped us migrate our infrastructure with minimal downtime, and we now have a flexible, scalable cloud setup that improves performance and security. Our operations are now more efficient, and the costs are significantly lower. We’re extremely satisfied with their cloud computing services and couldn’t ask for a better partner in this transition.",
  },
];

export const clients = [
  {
    id: 1,
    img: client1,
  },
  {
    id: 2,
    img: client2,
  },
  {
    id: 3,
    img: client3,
  },
  {
    id: 4,
    img: client4,
  },
];

export const faqItems = [
  {
    id: 1,
    question: "What services do you offer for Web Development?",
    answer: `We specialize in creating responsive, user-friendly, and high-performance websites. Our web development services include:
      - Custom Website Development
      - E-commerce Solutions
      - Content Management Systems (CMS)
      - Website Maintenance and Support
      - API Integration
    Whether you need a simple landing page or a complex web application, we’ve got you covered.`,
  },
  {
    id: 2,
    question: "Can you develop mobile apps for both iOS and Android?",
    answer: `Yes, we develop mobile apps for both iOS and Android platforms. Our mobile app development services include:
      - Native App Development
      - Cross-Platform App Development
      - App UI/UX Design
      - App Testing and Deployment
      - App Maintenance and Updates
    We ensure your app is scalable, secure, and delivers a seamless user experience.`,
  },
  {
    id: 3,
    question:
      "What are AI-Driven Solutions, and how can they benefit my business?",
    answer: `AI-Driven Solutions leverage artificial intelligence to automate processes, analyze data, and improve decision-making. Our AI services include:
      - Predictive Analytics
      - Natural Language Processing (NLP)
      - Machine Learning Models
      - AI-Powered Chatbots
      - Computer Vision
    These solutions can help you optimize operations, reduce costs, and enhance customer experiences.`,
  },
  {
    id: 4,
    question: "What does your UI/UX design process look like?",
    answer: `Our UI/UX design process focuses on creating intuitive and visually appealing interfaces. Here’s how we do it:
      - Research and Analysis
      - Wireframing and Prototyping
      - User Testing and Feedback
      - High-Fidelity Design
      - Iterative Improvements
    We ensure the final design aligns with your brand and provides an exceptional user experience.`,
  },
  {
    id: 5,
    question: "How long does it take to develop a website or mobile app?",
    answer: `The timeline depends on the complexity of the project. Typically:
      - Simple Website: 2–4 weeks
      - Complex Website: 6–12 weeks
      - Mobile App: 8–16 weeks
    We provide a detailed project timeline after understanding your requirements.`,
  },
  {
    id: 6,
    question: "Do you offer ongoing support for websites and apps?",
    answer: `Yes, we provide ongoing support for all our projects. This includes:
      - Regular Updates
      - Bug Fixes
      - Performance Optimization
      - Security Patches
    Our goal is to ensure your website or app remains functional and up-to-date.`,
  },
  {
    id: 7,
    question: "Can you redesign an existing website or app?",
    answer: `Absolutely! We specialize in redesigning websites and apps to improve functionality, aesthetics, and user experience. Whether it’s a minor update or a complete overhaul, we can help.`,
  },
  {
    id: 8,
    question: "What technologies do you use for Web Development?",
    answer: `We use a wide range of technologies, including:
      - Frontend: HTML, CSS, JavaScript, React, Angular, Vue.js
      - Backend: Node.js, Python, PHP, Ruby on Rails
      - Databases: MySQL, MongoDB, PostgreSQL
      - CMS: WordPress, Shopify, Drupal
    We choose the best tools based on your project requirements.`,
  },
  {
    id: 9,
    question: "How do you ensure the quality of your mobile apps?",
    answer: `We follow a rigorous quality assurance process, including:
      - Functional Testing
      - Performance Testing
      - Usability Testing
      - Security Testing
      - Beta Testing with Real Users
    This ensures your app is bug-free and delivers a smooth user experience.`,
  },
  {
    id: 10,
    question: "What industries do you serve for Web and Mobile Development?",
    answer: `We’ve worked with clients across various industries, including:
      - E-commerce
      - Healthcare
      - Education
      - Finance
      - Entertainment
    Our solutions are tailored to meet the unique needs of each industry.`,
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

// // web development services
// export const webDevelopmentServices = [
//   {
//     id: 1,
//     title: "E-commerce Websites",
//     icon: require("./assets/images/icons/online-shopping.png"),
//     // img: <CgWebsite />,
//     description:
//       "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
//   },
//   {
//     id: 2,
//     title: "Social Media Websites",
//     // img: <GoFileMedia />,
//     icon: require("./assets/images/icons/socialmedia.png"),
//     description:
//       "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
//   },
//   {
//     id: 3,
//     title: "Landing Websites",
//     // img: <TfiLayoutMediaRightAlt />,
//     icon: require("./assets/images/icons/landing-page.png"),
//     description:
//       "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
//   },
//   {
//     id: 4,
//     title: "Custom Websites",
//     // img: <MdOutlineDashboardCustomize />,
//     icon: require("./assets/images/icons/software-development.png"),
//     description:
//       "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
//   },
// ];

// // app development services
// export const appDevelopmentServices = [
//   {
//     id: 1,
//     title: "iOS App Development",
//     // img: <FaAppStoreIos />,
//     icon: require("./assets/images/icons/ios-development.png"),
//     description:
//       "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
//   },
//   {
//     id: 2,
//     title: "Android App Development",
//     // img: <IoLogoAndroid />,
//     icon: require("./assets/images/icons/android-development.png"),
//     description:
//       "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
//   },
//   {
//     id: 3,
//     title: "Flutter App Development",
//     // img: <SiFlutter />,
//     icon: require("./assets/images/icons/flutter-development.png"),
//     description:
//       "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
//   },
//   {
//     id: 4,
//     title: "Hybrid App Development",
//     // img: <TbDeviceMobileCode />,
//     icon: require("./assets/images/icons/hybrid-app-development.png"),
//     description:
//       "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
//   },
// ];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: ecommerceIcon,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: socialMediaIcon,
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: landingPageIcon,
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: customWebsiteIcon,
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: iosDevelopmentIcon,
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: androidDevelopmentIcon,
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: flutterDevelopmentIcon,
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: hybridAppDevelopmentIcon,
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];
