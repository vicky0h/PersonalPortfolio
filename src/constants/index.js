import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    meta,
    starbucks,
    tesla,
    shopify,
    dentalclinic,
    vacationbnb,
    expensetracker,
    sudoku,
    pomodoro,
    financialcalculator,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Project",
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full-stack Developer",
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
      name: "React JS",
      icon: reactjs,
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
      name: "MongoDB",
      icon: mongodb,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2019 - November 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  // const projects = [
  //   {
  //     name: "Dental Clinic",
  //     description:
  //       "Web-based platform that allows users to search, book, and manage dental appointments from various locations, providing a convenient and efficient solution for dental clinic booking needs.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "mongodb",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "tailwind",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: dentalclinic,
  //     source_code_link: "https://github.com/vicky0h/DentalClinic.git",
  //   },
  //   {
  //     name: "Vacationbnb",
  //     description:
  //       "Web application that enables users to search for and post short-term rentals for vacations, and locate available rentals based on location, number of guests and time duration of the stays.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "mongodb",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "tailwind",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: vacationbnb,
  //     source_code_link: "https://github.com/vicky0h/Vacationbnb.git",
  //   },
  //   {
  //     name: "Expense Tracker",
  //     description:
  //       "A web-based platform that allows user to record, track, and compare all incomes and expenditures so that the user can have a better understanding of his/her own financial standing for the given period.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "mongodb",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "styled-components css",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: expensetracker,
  //     source_code_link: "https://github.com/vicky0h/ExpenseTracker.git",
  //   },
  //   {
  //     name: "Sudoku",
  //     description:
  //       "A web-based sodoku game that enables user to select the difficulty level of the game, check whether the user is on the right track, and generate the solution.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "materialize css",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: sudoku,
  //     source_code_link: "https://github.com/vicky0h/Sudoku.git",
  //   },
  //   {
  //     name: "Pomodoro Timer",
  //     description:
  //       "A web-based productivity application that allows user to set the length of focus and break time. It helps the user to stay focused on a single task until the timer rings, and be more productive.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "materialize css",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: pomodoro,
  //     source_code_link: "https://github.com/vicky0h/Pomodoro.git",
  //   },
  //   {
  //     name: "Financial Calculator",
  //     description:
  //       "A web-based application that enables user to perform regular mathematical calculation as well as financial calculation such as present value, future value, internal rate of return, etc.",
  //     tags: [
  //       {
  //         name: "javascript",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "css",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: financialcalculator,
  //     source_code_link: "https://github.com/vicky0h/FinancialCalculator.git",
  //   },
  // ];

  const projects = [
    {
      name: "Dental Clinic",
      description:
        "Web-based platform that allows users to search, book, and manage dental appointments from various locations, providing a convenient and efficient solution for dental clinic booking needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: dentalclinic,
      source_code_link: "https://github.com/vicky0h/DentalClinic.git",
      live_demo_link: "https://dentalclinic-booking.netlify.app/",
    },
    {
      name: "Vacationbnb",
      description:
        "Web application that enables users to search for and post short-term rentals for vacations, and locate available rentals based on location, number of guests and time duration of the stays.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: vacationbnb,
      source_code_link: "https://github.com/vicky0h/Vacationbnb.git",
      live_demo_link: "https://vacationbnb.netlify.app/",
    },
    {
      name: "Expense Tracker",
      description:
        "A web-based platform that allows user to record, track, and compare all incomes and expenditures so that the user can have a better understanding of his/her own financial standing for the given period.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "styled-components css",
          color: "pink-text-gradient",
        },
      ],
      image: expensetracker,
      source_code_link: "https://github.com/vicky0h/ExpenseTracker.git",
      live_demo_link: "https://expandrev-tracker.netlify.app/",
    },
    {
      name: "Sudoku",
      description:
        "A web-based sodoku game that enables user to select the difficulty level of the game, check whether the user is on the right track, and generate the solution.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "materialize css",
          color: "pink-text-gradient",
        },
      ],
      image: sudoku,
      source_code_link: "https://github.com/vicky0h/Sudoku.git",
      live_demo_link: "https://vicky0h.github.io/Sudoku/",
    },
    {
      name: "Pomodoro Timer",
      description:
        "A web-based productivity application that allows user to set the length of focus and break time. It helps the user to stay focused on a single task until the timer rings, and be more productive.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "materialize css",
          color: "pink-text-gradient",
        },
      ],
      image: pomodoro,
      source_code_link: "https://github.com/vicky0h/Pomodoro.git",
      live_demo_link: "https://vicky0h.github.io/Pomodoro/",
    },
    {
      name: "Financial Calculator",
      description:
        "A web-based application that enables user to perform regular mathematical calculation as well as financial calculation such as present value, future value, internal rate of return, etc.",
      tags: [
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: financialcalculator,
      source_code_link: "https://github.com/vicky0h/FinancialCalculator.git",
      live_demo_link: "https://vicky0h.github.io/FinancialCalculator/",
    },
  ];

  export { services, technologies, experiences, projects };
