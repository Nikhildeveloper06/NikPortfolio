import {
    logo,
    backend,
    creator,
    mobile,
    web,
    github,
    menu,
    close,
    css,
    gearXpert,
    project2,
    project3,
    mysql,
    express,
    aws,
    mui,

    gsap,
    framer,
    figma,
    git,
    html,
    javascript,
    mongodb,
    nodejs,
    reactjs,
    redux,
    tailwind,
    threejs,
    firstTestimonial,
    secondTestimonial,
    thirdTestimonial,
} from '../assets'


// Importng logos seperate
import project from "../assets/project.png"
import NIC from "../assets/NIC.png"
import jsonfor from "../assets/jsonfor.png"
import landing from "../assets/landing1.png"
import webguard from "../assets/company/webguard-removebg-preview.png";
import bharatintern from "../assets/company/bharatintern-removebg-preview.png"
import robust from "../assets/company/robust-removebg-preview.png"
import { color } from 'framer-motion';


export const navLinks = [


    {
        id: "about",
        title: "About",

    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Full-Stack Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Ui UX Designer",
        icon: creator,
    },
];

const technologies = [{
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "gsap",
        icon: gsap,
    },
    {
        name: "framer",
        icon: framer,
    },


    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Material Ui",
        icon: mui,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express Js",
        icon: express,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "MySql",
        icon: mysql,
    },

    {
        name: "git",
        icon: git,
    },


];

const experiences = [{
        title: "Full-Stack Developer Intern",
        company_name: "WebGuard Info Solutions",
        icon: webguard,
        iconBg: "#383E56",
        date: "July 2024 – October 2024",
        points: [
            "Developed scalable applications and secure authentication systems.",
            "Created full-stack features using the MERN stack.",
            "Improved application performance by optimizing API interactions.",
        ],
    },
    {
        title: "Web Developer Intern",
        company_name: "Bharat Intern",
        icon: bharatintern,
        iconBg: "#E6DEDD",
        date: "June 2023",
        points: [
            "Built responsive web applications with optimized database performance.",
            "Enhanced user experience and improved website load time.",
            "Worked with frontend libraries like Bootstrap and Tailwind.",
        ],
    },
    {
        title: "Full-Stack Web Developer Intern",
        company_name: "Robust Results Pvt. Ltd.",
        icon: robust,
        iconBg: "#383E56",
        date: "September 2022 – November 2022",
        points: [
            "Engineered RESTful APIs and implemented JWT authentication.",
            "Developed secure login systems using encryption protocols.",
            "Collaborated with backend team to integrate MySQL databases.",
        ],
    },
];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
        name: "MD Mustaqeem",
        designation: "Ecommerce",
        company: "QuickMart",
        image: firstTestimonial,
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
        name: "Abdul Raheman",
        designation: "Ecommerce Business",
        company: "justbuyz",
        image: secondTestimonial,
    },
    {
        testimonial: "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "James Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: thirdTestimonial,
    },
];

const projects = [{
        name: "Escape Artists",
        description: "Escape Artists is a modern Tours & Travels web platform crafted to streamline trip planning and booking. The website features an intuitive UI, destination filtering, Google Maps integration, and secure payment options. It delivers a seamless, user-friendly experience for travelers exploring their next adventure.",
        tags: [{
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "white-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },

        ],
        image: project,
        source_code_link: "https://github.com/Nikhildeveloper06/Nature-Experience-Tours",
    },
    {
        name: "NIC Ice Cream",
        description: "A vibrant and responsive e-commerce website for NIC Ice Cream, showcasing their wide range of flavors and products. Designed with a clean UI, intuitive navigation, and online ordering functionality, the platform enhances customer engagement and simplifies the purchase process.",
        tags: [{
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "Gsap",
                color: "pink-text-gradient",
            },
            {
                name: "Javascript",
                color: "orange-text-gradient"
            }
        ],
        image: NIC,
        source_code_link: "https://github.com/Nikhildeveloper06/NIC-Ice-cream-Website",
    },
    {
        name: "Landing Page",
        description: "eveloped a responsive landing page for a clothing brand, showcasing modern UI design and product highlights to enhance brand presence.",
        tags: [{
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "white-text-gradient",
            },

        ],
        image: landing,
        source_code_link: "https://github.com/Nikhildeveloper06/Practice-Front-end-Project-",
    },

    {
        name: "JSON Formatter",
        description: "Built a lightweight JSON Formatter tool that validates and beautifies raw JSON input for improved readability and debugging.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "white-text-gradient",
            },
            {
                name: "reactjs",
                color: "white-text-gradient",
            },
            {
                name: "html",
                color: "white-text-gradient",
            },



        ],
        image: jsonfor,
        source_code_link: "",
    },
];

export { services, technologies, experiences, testimonials, projects };