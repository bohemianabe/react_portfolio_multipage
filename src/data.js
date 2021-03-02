import OTJLogo from './img/OTJArchitectsLogo.jpg'
import BerlitzLogo from './img/berlitzLogo.png'
import SuiteSolutionLogo from './img/suiteSolutionLogo.jpg'
import CIMALogo from './img/CIMALogo.jpg'
import AAOPLogo from './img/AAOPLogo.png'
import Graphs from './img/dataCollage.png'
import SoftwareLogos from './img/softwareLogos.png'
import Codes from './img/languageCollage.png'
import RULogo from './img/RULogo.jpg'
import pythonCoding from './img/pythonCoding.jpg'

export function personalData() {
    return [
        {
            name: "Abel Garrido",
            education: "Radford Univerity",
            personal: "Hello, and welcome to my site. I'm a college graduate in the field of Communication with several years of experience in the accounting industry. Please scroll down to learn more about my experiences and qualifications that I hope to bring to my next employer.",
            personal2: "I'm looking to continue my accounting adventure with the new skills of coding I have attained this past year after being laid off due to the global pandemic. I've taken this time to learn how to build a website to better advertise my capabilities, but more importantly how to analyze data with python. Exploring data can you tell you a lot about whatever you're researching. Once you have threaded that needle out of the haystack it can be very exciting to see where it leads you. Python is a powerful tool to better understand your company's financial health, and having been in finance for several years now I can see how coding is changing the game. Please check out my blog on data analysis, and visualization with python on my page at Medium.",
            personalImage: pythonCoding,
            skills: [
                {
                skill: 'B.S. in Communiction',
                blurb: "2007 graduate in the field of communication. An indispensful skill in the corporate world where communication can often be a projects source of success or failure.",
                picture: RULogo,
                id: 1
                },
                {
                skill: 'Data Analysis',
                blurb: "Expert analysis using python. Data can tell a story impartially, and often the one you didn't know you needed to hear.",
                picture: Graphs,
                id: 2
                },
                {
                skill: 'Coding Languages',
                blurb: "Languages like HTML, CSS, and JS can take the information gained, and aptly communicate it through custom websites.",
                picture: Codes,
                id: 3
                },
                {
                skill: 'Deltek - SQL database - MS Office',
                blurb: "Hire me and I'll bring my past experience with Deltek software. One of the most widely used in government industries, SQL database, and MS office.",
                picture: SoftwareLogos,
                id: 4
                },
            ]
        }
    ]
}

export function workData (){
    return[
        {
            job: "Account Coordinator",
            company: "OTJ Architects LLC",
            datesEmployed: "September 2018 - March 2020",
            companyLogo: OTJLogo,
            companyDescription: "Headquartered in Washington, D.C., OTJ Architects is a premier architecture and design firm that partners with clients in the commercial real estate, corporate, government, arts, culture, and entertainment, life sciences, science and technology, as well as nonprofit sectors to create environments where individuals excel and organizations thrive.",
            responsibilities: [
                "Administed government contract requirement, verified compliance, monthly invoicing, and monitoring progress/status of project.", 
                "Weekly detailed a/r reports tailored for each studio. Status of collections, and forecasting.", 
                "Duties included crossovers into a/p responsibilities, and working with vendors to reconcile payments.",
                "Working in tandem with marketing department over contract proposals."
            ],
            reference: {
                name: "Bilqis Ferguson",
                title: "Admin Manager",
                contact: "(202) 621-1323"
            },
            id: 0,
        },
        {
            job: "Accounting Specialist",
            company: "Suite Solutions LLC",
            datesEmployed: "July 2015 - September 2018",
            companyLogo: SuiteSolutionLogo,
            companyDescription: "Suite Solutions is a temporary and corporate housing provider catering to large corporate moves, government deployments, disaster victims, or families who are in between homes. Their fully furnished, and accessorized apartments are designed to make their cliente feel right at home.",
            responsibilities: [
                "Disseminated regular invoices to clients, as well as weekly collections.", 
                "Daily bank deposits and office research reports, as well as outreach to vendors on billing discrepancies. After researching suspecious charges I was able to collect some 300k+ in over billing for our company.",
                "Tax research and collection."
                ],
            reference: {
                name: "James Brown",
                title: "Office Manager",
                contact: "(703) 448-0505"
            },
            id: 1,
        },
        {
            job: "English Instructor",
            company: "Berlitz",
            datesEmployed: "January 2013 - January 2015",
            companyLogo: BerlitzLogo,
            companyDescription: "Berlitz Corporation is a Japanese-owned language education, and leadership training company which is based in Princeton, New Jersey. The company was founded in 1878 by Maximilian Berlitz in Providence, Rhode Island in the United States. Berlitz Corporation is now a member of the Benesse Group, a Japanese company, with more than 547 company-owned, and franchised locations in more than 70 countries.",
            responsibilities: [
                "Teaching adult professionals in the field of banking, accounting, government and business how to conduct lectures, and business conversations in English.", 
                "Preparing daily classroom materials.",
                ],
            reference: {
                name: "n/a",
                title: "n/a",
                contact: "n/a"
            },
            id: 2,
        },
        {
            job: "Accounting Analyst",
            company: "CIMA Incorporated",
            datesEmployed: "2008 - 2012",
            companyLogo: CIMALogo,
            companyDescription: "Established in 1949 CIMA is one of the largest property/casualty and employee benefits brokers in the United States with customers nationwide. CIMA has access to all major insurers, in both U. S. and international markets. Their XS/Group, Inc. wholesale facility works with agents, and brokers to place business in both the admitted and the excess/surplus markets. CIMA's customers range from small, nonprofit social service agencies to large corporations, and national associations and other organizations that offer insurance programs as a benefit of membership.",
            responsibilities: [
                "Managed and coordinated revenue accounts and generated invoices for professional services.",
                "Investigated and resolved financial account discrepancies in coordination with multiple departments for large revenue accounts. ",
                "Reviewed and processed expense reports, Accounts Payable, Accounts Receivable, General Ledger and Financial Reports.",
            ],
            reference: {
                name: "Vicki Brooks",
                title: "Department Supervisor",
                contact: "(703) 994-9313"
            },
            id: 3,
        },
        {
            job: "Accounting Clerk",
            company: "Academy of Orthotist & Prosthetist",
            datesEmployed: "2007 - 2008",
            companyLogo: AAOPLogo,
            companyDescription: "The American Academy of Orthotists and Prosthetists is dedicated to promoting professionalism and advancing the standards of patient care through education, literature, research, advocacy, and collaboration.",
            responsibilities: [
                "Organized and presented advanced financial materials and reports in trade specific Accounting software.",
                "Generated and reviewed reports for Accounts Payable, Accounts Receivable and Overhead Expense.",
                "Reviewed and processed sub consultant vendor invoices and coordinated professional association dues and annuities.",
                "Examined and complied with government and professional association guidelines regarding government sponsored grants.",
                "Researched and executed additional tasks as deemed necessary.",
            ],
            reference: {
                name: "n/a",
                title: "n/a",
                contact: "n/a"
            },
            id: 4,

        }
    ]
}

