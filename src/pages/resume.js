import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

import SEO from "../components/seo"

const ResumePage = () => {
  const data = {
    selectedTemplate: 8,
    headings: {
      projects: "Projects",
      education: "Education",
      work: "Work Experience",
      skills: "Technical Skills",
    },
    basics: {
      name: "Nolan Braman",
      location: {
        address: "Boston, MA",
      },
      github: "https://github.com/eathren",
      linkedin: "https://www.linkedin.com/in/nolanbraman/",
    },
    education: [
      {
        location: "Boston, MA",
        area: "Computer Science",
        studyType: "MS",
        startDate: "Jan 2021",
        endDate: " May 2023",
        gpa: "4.0",
        institution: "Northeastern University",
      },
      {
        institution: "University of Idaho",
        location: "Moscow, ID",
        studyType: "BS",
        area: "Chemistry",
        gpa: "2.80",
        startDate: "Aug 2011",
        endDate: "May 2016",
      },
    ],
    work: [
      {
        company: "OpenAnesthesia, LLC",
        startDate: "Dec 2018",
        endDate: "Jun 2020",
        highlights: [
          "Designed, built, and maintained client-facing software. ",
          "Developed a chat application that utilized Zoom's REST API using React, Node.js, Express, and Auth0.",
          "Created a cutting-edge gatsby.js/graphql driven experience from a legacy WP dictionary-like site, cutting load times from 30+ seconds to under 2.5 seconds for over 6000 items",
          "Built over a half-dozen WebApps, from implementing design to CI/CD best practices with multiple development and production environments.",
          "Worked with a team to create IARS360, a subscription-based system for CME content for anesthesiology-related articles for hospitals and doctors. ",
          "Took Adobe XD mockups and built a functional Program Director system, designed for doctors to assign problem sets and check on students in their systems. ",
          "Extended and maintained legacy systems and software.",
        ],
        position: "Software Engineer ",
        location: "Burlingame, CA (Remote)",
      },
      {
        highlights: [
          "Captain of a small crew and continuously expanding operation in Bristol Bay, Alaska",
          "Contract negotiation and quality control review of sockeye salmon harvest",
        ],
        company: "Team Revolution Fisheries",
        position: "Owner / Operator",
        location: "Bristol Bay, Alaska",
        startDate: "Aug 2011",
        endDate: "June 2019",
      },
    ],
    skills: [
      {
        name: "Languages:",
        keywords: [
          "Python",
          "JavaScript/HTML/CSS",
          "Sass",
          "Rust",
          "Bash",
          "PostgresQL",
          "Rust",
        ],
      },
      {
        keywords: ["React.js", "Gatsby.js", "Django ", "Node"],
        name: "Frameworks and Libraries",
      },
      {
        keywords: [
          "Git",
          "Linux",
          "AWS(Lambda)",
          "Zenhub",
          "Slack ",
          "Agile",
          "CI / CD",
        ],
        name: "Tools:",
      },
    ],
    projects: [
      {
        name: "Solists",
        url: "solists.com",
        keywords: ["Django", "Python", "Heroku", "Sendgrid"],
        description:
          "An online job board aggregator and promotional system for companies and clients.",
      },
      {
        keywords: ["React.js", "JavaScript", "Sass / CSS3", "Netlify"],
        name: "SortPath",
        description:
          "A visual, interactable tool for algorithms sorting methods as well as a maze-drawing and solving system for path of least resistance. ",
        url: "sortpath.dev",
      },
    ],
    sections: [
      "templates",
      "profile",
      "education",
      "work",
      "skills",
      "projects",
      "awards",
    ],
  }

  return (
    <Layout>
      <SEO title="Nolan Braman | Resume | About" />
      <h2>name: {data.basics.name}</h2>
      {/* <h2>skills:{data.skills}</h2> */}
      {data.skills.map(d => {})}

      {/* <p>{data.basics.name}</p> */}
      {/* <Link to="/">Go back to the homepage</Link> */}
    </Layout>
  )
}

export default ResumePage
