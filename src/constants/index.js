import { iFlood,  build_dev, Jblas,infoman, DICT, gl, embem, Cnx , eunivate, puyobay, princeTech} from "../assets/images";
import {
    contact,
    mongoDB,
    express,
    firebase,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    php,
    bootstrap,
    sql,
    nodejs,
    wordpress,
    react,
    sass,
    tailwindcss,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: mongoDB,
        name: "mongoDB",
        type: "Non Relational Database",
    },
    {
        imageUrl: wordpress,
        name: "wordpress",
        type: "Content Management System",  
    },
    {
        imageUrl: express,
        name: "express",
        type: "Backend",
    },
    {
        imageUrl: firebase,
        name: "firebase",
        type: "Database",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "sql",
        type: "Database",
    },
    {
        imageUrl: php,
        name: "php",
        type: "backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Customer Service Representative",
        company_name: "Concentrix",
        icon: Cnx,
        iconBg: "#accbe1",
        date: "November 2024 - January 2025",
        points: [
            "Supportinng Customer with their order issues",
            "Handle Global Selling Ecommerce Account",
            "Esccalate unfamiliar issues to higher departments",
            "Engaged with customers to better understand needs and deliver excellent service."
        ],
    },


    {
        title: "Web Developer",
        company_name: "Freelance",
        icon: build_dev,
        iconBg: "#accbe1",
        date: "February 2024 - August 2024",
        points: [
            "Created plans and communicated deadlines to complete projects on time.",
            "Produced content for websites and social media channels to enhance brand visibility.",
            "Collaborated with team members to achieve target results.",
            "Engaged with customers to better understand needs and deliver excellent service."
        ],
    },

    {
        title: "Software Tester and Network Support Technician (Intern)",
        company_name: "Information Managers Inc. (Infoman)",
        icon: infoman,
        iconBg: "#accbe1",
        date: "April 2024 - August 2024",
        points: [   
            "Wrote detailed test scenarios and cases, accurately logging errors and defects in comprehensive test reports.",
            "Conducted quality testing on projects and issues according to strict processes and timescales.",
            "Monitored network performance, identified bottlenecks, and implemented enhancements to improve speed and reliability.",
            "Maintained up-to-date documentation of network configurations, changes, and inventory for compliance and troubleshooting purposes.",
            "Troubleshot and resolved network issues, minimising downtime and maintaining productivity across all departments.",
            "Installed and configured network hardware, including routers, switches, and firewalls, to support company operations."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Codedrin',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aldrin-rosales-8b277b228/',
    }
];

export const projects = [
    {
        iconUrl: iFlood,
        theme: 'btn-back-blue',
        name: 'iFlood',
        description: 'Developed IoT-based Web Flood Monitoring system with SMS notification that aims to monitor flood status, temperature, humidiy and wind speed of the flood prone areas.',
        link: 'https://iflood.online/?fbclid=IwAR1vMhweouX54ltEUrFWGQHZ_vhKFm7FTxYTxsENFlGfv2A-mg_OUZlTaqY',
    },
    {
        iconUrl: Jblas,
        theme: 'btn-back-blue',
        name: 'JBLAS',
        description: 'Developed a responsive Booking Management System Website for Home Renivations and Repair Services',
        link: 'https://jblashomerenovation.shop/',
    },
    {
        iconUrl: embem,
        theme: 'btn-back-blue',
        name: 'Embem',
        description: 'Developed a IoT base Coin Operated Vending machine Web Application',
        link: 'https://embem-webapp.netlify.app/',
    },
    {
        iconUrl: eunivate,
        theme: 'btn-back-blue',
        name: 'eunivate',
        description: 'Developed a Project management tool system',
        link: 'https://www.eunivate.com/',
    },
    {
        iconUrl: puyobay,
        theme: 'btn-back-blue',
        name: 'Puyobay',
        description: 'Developed a rental and booking management system for aprtment and house',
        link: 'https://www.puyobay.com/',
    },    {
        iconUrl: princeTech,
        theme: 'btn-back-blue',
        name: 'princeTech',
        description: 'Developed wordpress UI design for corporate business',
        link: 'https://aldrin609.wordpress.com/?_gl=1*roum6s*_gcl_au*MTI3MDA5ODI0Mi4xNzM2MzIzMjgw',
    }
];


export const certifications = [
    {
        title: "Front-end Development HTML",
        sub_title: "Through this course, I gained valuable insights and lessons that have shaped my understanding of HTML, the foundation of web development.",
        issuer: "Great Learning Academy",
        company_name: "Great Learning Academy" ,
        icon: gl,
        iconBg: "#accbe1",
        date: "March 2024 - present",
        points: [
            "Understanding HTML's Features as the backbone of web development, providing structure and organization to web pages. I learned about its features, including its ability to incorporate various media types, create interactive elements, and ensure accessibility for all users.",
            "Mastering HTML Editing Through hands-on exercises and projects, I honed my skills in using HTML editors effectively. These tools, such as Visual Studio Code and Sublime Text, provided essential features like syntax highlighting and code completion, enhancing my coding efficiency.Outlined the various features of HTML",
            "Grasping the HTML Skeleton Learning to build an HTML skeleton was fundamental. It taught me the essential elements of an HTML document, including the doctype declaration, <html>, <head>, and <body> tags. Understanding this structure laid the groundwork for creating fully functional web pages.",
            "Harnessing Comments for Clarity that plays a crucial role in code documentation. Through incorporating comments strategically within my HTML code, I could provide explanations, document code segments, and improve collaboration with teammates.",
            "Embracing HTML Elements and Tags HTML elements are the building blocks of web pages, and mastering them was pivotal. From headings and paragraphs to images and links, each element serves a specific purpose in creating rich and engaging content.",
            "Utilizing Basic Tags Effectively Basic HTML tags are the bread and butter of web development. Understanding their usage, such as <h1> for headings and <p> for paragraphs, enabled me to structure content effectively and maintain semantic markup.",
            "Harnessing the Power of Attributes that provides additional information and functionality to HTML elements. Learning to use attributes like href, src, and class allowed me to enhance the behavior and appearance of elements, making my web pages more dynamic and interactive."
        ],
    },
    {
        title: "Principles of Web Development and Introduction to HTML",
        sub_title: "This course is designed to start your journey in web development and design, no matter how little experience or technical knowledge you currently have. There is so much to explore on the web and if you are the typical internet user, you probably visit several websites every day, whether for business, entertainment, or education. But have you ever wondered how these websites actually work? How are they built? How do browsers, computers, and mobile devices interact with the web? What skills are necessary to build a website?",
        issuer: "Department of Information And Communications Technology",
        company_name: "Republic of the Philippines | Department of Information And Communications Technology" ,
        icon: DICT,
        iconBg: "#accbe1",
        date: "March 2024 - present",
        points: [
            "Recognize the definition of web development and website development life cycle",
            "Analyze HTML and HTML5 and its purposes",
            "Demonstrate skills in reading and writing in HTML5 documents."
        ],
    },
];