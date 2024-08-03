import {
    AmbitLogo,
    BarepapersLogo,
    BimLogo,
    CDGOLogo,
    ClevertechLogo,
    ConsultlyLogo,
    EvercastLogo,
    Howdy,
    JarockiMeLogo,
    JojoMobileLogo,
    Minimal,
    MobileVikingsLogo,
    MonitoLogo,
    NSNLogo,
    ParabolLogo,
    TastyCloudLogo,
    YearProgressLogo,
    TRLogo,
    ENLogo
} from "@/images/logos";
import {GitHubIcon, LinkedInIcon, XIcon} from "@/components/icons";

export const RESUME_DATA = {
    name: "Bilal İŞLER",
    initials: "BJ",
    location: "İstanbul, Türkiye",
    locationLink: "https://maps.app.goo.gl/tis1YULRc8xtVqNGA",
    about:
        "Senior Software Engineer",
    summary:
        "I'm a Software Developer which pay attention of Clean Code, Design Patterns and SOLID, KISS, DRY Principles",

    avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
    personalWebsiteUrl: "https://jarocki.me",
    contact: {
        email: "isler.bilal03@gmail.com",
        tel: "+90 538 767 2037",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/bilalisler",
                icon: GitHubIcon,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/bilalisler",
                icon: LinkedInIcon,
            }
        ],
    },
    education: [
        {
            school: "Sakarya University",
            degree: "Bachelor's Degree in Computer engineering | 3.00/4.00",
            start: "2014",
            end: "2019",
        },
    ],
    work: [
        {
            company: "Getir",
            link: "https://getir.com/",
            badges: ["On-Site"],
            title: "Senior Backend Engineer",
            logo: ConsultlyLogo,
            start: "01.2024",
            end: null,
            description:
                "At Getir, I've contributed to developing scalable back-end systems designed to handle high traffic. Our databases operate on a cluster architecture to ensure robustness and efficiency. We prioritize design patterns and clean code, following best practices in every aspect of development. Using Scrum methodology, we ensure agile and iterative progress. Additionally, we incorporate unit and integration tests to maintain the highest quality in our software development processes",
            techStack: [
                "Node.js",
                "GoLang",
                "MongoDB",
                "RabbitMQ",
                "Docker",
                "Micro-services",
                "NewRelic",
                "Unit Test",
            ],
        },
        {
            company: "Kamion.co",
            link: "https://kamion.co",
            badges: ["Hybird"],
            title: "Senior Backend Engineer",
            logo: ConsultlyLogo,
            start: "08.2023",
            end: "01.2024",
            description:
                "At Kamion, I contributed to the development of a platform that enhances supply chain efficiency and visibility. Using technologies such as Next.js, PHP Laravel, Node.js, and Docker, I was responsible for optimizing system performance and setting up development environments in line with best practices.",
            techStack: [
                "PHP Laravel",
                "Next.js",
                "PostgreSQL",
                "Node.js",
                "Docker",
            ],
        },
        {
            company: "Freelance",
            link: "",
            badges: ["Remote"],
            title: "Senior Backend Engineer",
            logo: ConsultlyLogo,
            start: "04.2023",
            end: "08.2023",
            description:
                "",
            techStack: [
                "PHP (Laravel 9+)",
                "Vue.js",
                "PostgreSQL",
                "Docker",
            ],
        },
        {
            company: "Tatildükkanı.com",
            link: "https://www.tatildukkani.com/",
            badges: ["Hybird"],
            title: "Senior Backend Engineer",
            logo: ConsultlyLogo,
            start: "12.2022",
            end: "05.2023",
            description:
                "I've contributed to developing e-commerce infrastructure of application of tatildukkani.com",
            techStack: [
                "PHP Laravel",
                "Next.js",
                "PostgreSQL",
                "Node.js",
                "Docker",
            ],
        },
        {
            company: "PATH Product & Software House",
            link: "https://path.com.tr/",
            badges: ["Remote"],
            title: "Senior Backend Engineer",
            logo: ConsultlyLogo,
            start: "09.2019",
            end: "12.2022",
            description:
                "At Path, which provides consultancy services and develops various projects for its clients, I developed an ERP application to manage the processes of sports clubs.",
            techStack: [
                "PHP (Symfony 4+)",
                "Node.JS",
                "Vue.js",
                "React-Native",
                "Docker",
                "MySQL",
                "Memcache",
                "Elasticsearch",
                "RabbitMQ",
                "jQuery",
                "Node.js",
                "HTML",
                "CSS",
            ],
        },
        {
            company: "Intercity Rent a Car",
            link: "https://intercitypark.com/",
            badges: ["On-Site"],
            title: "Full Stack Software Developer",
            logo: ConsultlyLogo,
            start: "05.2019",
            end: "09.2019",
            description:
                "At IntercityPark, I supported the development and enhancement of existing systems, contributing to the company's ongoing technological growth and improvement",
            techStack: [
                "PHP (Laravel 4)",
                "Oracle DB",
                "jQuery",
                "Node.js",
                "HTML",
                "CSS",
            ],
        },
        {
            company: "Enuygun",
            link: "https://www.enuygun.com/",
            badges: ["On-Site"],
            title: "Backend Engineer",
            logo: ConsultlyLogo,
            start: "02.2016",
            end: "05.2019",
            description:
                "At enuygun.com, I worked on the back-end development for various pages, including credit, account, GSM, flight tickets, admin, information, and insurance. My contributions helped enhance the functionality and efficiency of these critical sections of the platform.",
            techStack: [
                "PHP (Symfony 3+)",
                "Node.js",
                "Elasticsearch",
                "MySQL",
                "MongoDB",
                "Memcache",
                "jQuery",
                "Node.js",
                "HTML",
                "CSS",
            ],
        }
    ],
    languages: [
        {
            name: "English",
            icon: TRLogo,
        },
         {
            name: "English",
            icon: ENLogo,
        }
    ],
    skills: [
        "PHP",
        "Node.JS",
        "GoLang",

        "MongoDB",
        "MySQL",
        "Elasticsearch",
        "Redis",
        "Memcache",

        "RabbitMQ",


        "React-Native",

        "JavaScript",
        "Vue.js",
        "jQuery",
        "HTML",
        "CSS",

        "Testing",

        "Docker",
        "CI/CD",
        "Nginx",

        "MacOS",
        "Linux",
    ],
    projects: [
        {
            title: "E-commerce Microservices",
            techStack: [
                "PHP (Laravel)",
                "GoLang (Fiber)",
                "Node.js (Fastify, Express)"
            ],
            description: "This project is a microservices-based architecture for an online shopping platform. It features various services, including authentication, product management, order processing etc... Each service is implemented using a different programming language like GoLang, PHP, Node.JS",
            logo: EvercastLogo,
            link: {
                label: "github.com",
                href: "https://github.com/bilalisler/shopping-microservice",
            },
        },
        {
            title: "Booking App",
            techStack: [
                "PHP (Symfony 6)",
                "MySQL",
                "Docker",
                "Elasticsearch",
                "Kibana",
                "Nginx",
                "Redis",
            ],
            description:
                "",
            logo: ParabolLogo,
            link: {
                label: "github.com",
                href: "https://github.com/bilalisler/room-reservation",
            },
        },
        {
            title: "Shopping App",
            techStack: [
                "PHP (Symfony 5)",
                "MariaDB",
                "Docker",
                "Nginx",
                "Unit Test",
            ],
            description:
                "",
            logo: EvercastLogo,
            link: {
                label: "github.com",
                href: "https://github.com/bilalisler/shopping-cart-symfony-53-php-8",
            },
        },
        // {
        //   title: "Blog App",
        //   techStack: [
        //     "Lead Frontend Developer",
        //     "TypeScript",
        //     "React",
        //     "Node.js",
        //     "GraphQL",
        //   ],
        //   description:
        //     "Creative collaboration platform that combines video conferencing and HD media streaming",
        //   logo: EvercastLogo,
        //   link: {
        //     label: "evercast.us",
        //     href: "https://www.evercast.us/",
        //   },
        // },
    ],
} as const;
