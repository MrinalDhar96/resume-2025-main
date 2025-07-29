import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    titanic,
    git,
    docker,
    zinier,
    deloitte,
    ltimindtree,
    ticTacToe,
    threejs,
    lambda,
    postgre,
    photoBlog
} from "../assets";

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

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "AWS Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Data Analyst",
        icon: creator,
    },
];

const technologies = [
    {
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
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
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "PostgreSQL",
        icon: postgre,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "aws",
        icon: lambda,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Product Developer",
        company_name: "Zinier",
        icon: zinier,
        iconBg: "#E6DEDD",
        date: "Nov 2019 - Jul 2021",
        points: [
            "Building the Product from Scratch with Product Development Team starting from the Data Schema Level.",
            "Collaborating with the team to make a web and mobile based application in an optimal way.",
            "Working closely with the Platform Team (Front-End and Back-End Dev's) for building a sustainable web application powered with AI/ML.",
            "Participating in discussions on grooming and planning for each sprint for a particular release",
            "Unit Testing and applying the technician skills including JS and SQL for building the web applications.",
            "Following Best Practices for Web Development and keeping the code performance oriented."
        ],
    },
    {
        title: "Analyst - Cloud Engineering",
        company_name: "Deloitte",
        icon: deloitte,
        iconBg: "#E6DEDD",
        date: "Aug 2021 - Aug 2023",
        points: [
            "Collaborated with stakeholders, including business analysts, UX designers, and QA engineers, to maintain a cohesive workflow and deliver a user-centric product that meets the bank's specific needs.",
            "Implemented robust security measures to safeguard sensitive financial data and comply with industry regulations, earning the trust of the private bank and its corporate clients.",
            "Implementing Micro service architecture and cloud technologies to seamlessly integrate core banking functionalities, including payments, taxes, and bulk transactions.",
            "Creation of client facing APIs, CronJobs, background tasks working with product managers for holistic understanding and keep building the product.",
        ],
    },
    {
        title: "Senior Software Engineer",
        company_name: "LTIMindtree",
        icon: ltimindtree,
        iconBg: "#E6DEDD",
        date: "Aug 2023 - Present",
        points: [
            "I had the opportunity to work on an exciting project involving the testing of OpenAI's ChatGPT model, pushing the boundaries of AI-driven conversational interfaces.",
            "Designed and developed APIs for merchant onboarding using AWS Lambda, ensuring seamless integration with client systems.",
            "Implemented advanced security protocols using SSL with HMAC algorithm to enhance data protection and secure API communications.",
            "Developed a reusable SDK in TypeScript to enable rapid feature deployment across tablet-based field service applications.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Mrinal's backend development skills are exceptional.Highly recommend for any backend development role.",
        name: "Shankhadeep Das",
        designation: "Manager - Frontend Development",
        company: "Deloitte",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "Mrinal is an ideal combination of passion and hard-work, someone who never hesitates to go the extra mile.",
        name: "Garima Mangalhara",
        designation: "Environmental Sustainability",
        company: "TUI",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "Mrinal is very enthusiastic about learning new things, and making them a part of his work wherever possible.",
        name: "Rahul Anand",
        designation: "Senior Frontend Engineer",
        company: "shyftplan",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
        testimonial:
            "Mrinal has a positive outlook towards things, and his mindset to keep cracking lets him tackle any problem thrown his way.",
        name: "Sreenivas Viswanathan",
        designation: "Product Manager",
        company: "Cuculus",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Titanic Survival",
        description:
            "In this challenge, we build a predictive model that answers the question: “what sorts of people were more likely to survive?” using passenger data (i.e. name,age,fare,cabin etc).",
        tags: [
            {
                name: "pandas",
                color: "blue-text-gradient",
            },
            {
                name: "numpy",
                color: "green-text-gradient",
            },
            {
                name: "python",
                color: "pink-text-gradient",
            },
        ],
        image: titanic,
        source_code_link: "https://github.com/MrinalDhar96/Survival-on-Titanic-using-Logistic-Regression",
    },
    {
        name: "Tic Tac Toe",
        description:
            "It is a simple two-player game where users take turns marking spaces on a 3×3 grid using a text-based interface. The program checks for wins or draws after each move and displays the board state interactively.",
        tags: [
            {
                name: "python",
                color: "pink-text-gradient",
            },
        ],
        image: ticTacToe,
        source_code_link: "https://github.com/MrinalDhar96/Tic-Tac-Toe",
    },
    {
        name: "Photo Blog",
        description:
            "The blog contains different kind of news and also contains a photo gallery. The blog is made using HTML5 and CSS3. We have also used jQuery for some of the functionalities for the latest news.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "jquery",
                color: "pink-text-gradient",
            },
        ],
        image: photoBlog,
        source_code_link: "https://github.com/MrinalDhar96/MrinalDhar96-Photo-Blog-and-Written-Blog-using-HTML5-and-CSS3",
    },
];

export { services, technologies, experiences, testimonials, projects };