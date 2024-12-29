import moment from "moment";

// Companies
const CHRYSOS = {
    "name": "Chrysos Corporation",
    "url": "https://chrysoscorp.com/",
};
const MAPTEK = {
    "name": "Maptek",
    "url": "https://www.maptek.com/",
};
const DIT = {
    "name": "Department for Infrastructure and Transport",
    "url": "http://dit.sa.gov.au/",
};
const UOA = {
    "name": "University of Adelaide",
    "url": "https://www.adelaide.edu.au/",
};

// Experience
export const EXP = [ 
    {
        "startDate": "2024-07-29",
        "endDate": moment().format("YYYY-MM-DD"),
        "company": CHRYSOS,
        "position": "Associate Software Engineer",
        "description": "",
    },
    {
        "endDate": "2024-12-31",
        "company": UOA,
        "position": "Completed Bachelor of Computer Science",
        "description": "",
    },
    {
        "startDate": "2024-04-22",
        "endDate": "2024-06-28",
        "company": CHRYSOS,
        "position": "Software Engineer Intern",
        "description": "",
    },
    {
        "startDate": "2023-11-20",
        "endDate": "2024-02-16",
        "company": MAPTEK,
        "position": "Software Engineer Intern",
        "description": "",
    },
    {
        "startDate": "2022-12-19",
        "endDate": "2023-02-24",
        "company": DIT,
        "position": "IT Intern",
        "description": "",
    },
    {
        "endDate": "2022-02-28",
        "company": UOA,
        "position": "Started Bachelor of Computer Science",
        "description": "",
    },
];