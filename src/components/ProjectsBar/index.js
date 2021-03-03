import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./styles.scss"
import Card from "@material-ui/core/Card"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"

const ProjectsImage = project => {
  return (
    <>
      <img src={project.image} className="project-image"></img>
      {console.log(project.image)}
    </>
  )
}

const ProjectsBar = () => {
  const data = {
    projects: [
      {
        name: "Solists",
        url: "solists.com",
        keywords: ["Django", "Python", "Heroku", "Sendgrid"],
        description:
          "An online job board aggregator and promotional system for companies and clients.",
        image: "../../images/solists.png",
      },
      {
        keywords: ["React.js", "JavaScript", "Sass / CSS3", "Netlify"],
        name: "SortPath",
        description:
          "A visual, interactable tool for algorithms sorting methods as well as a maze-drawing and solving system for path of least resistance. ",
        url: "sortpath.dev",
        image: "../../images/sortpath.png",
      },
    ],
  }
  return (
    <div>
      <h1> Projects</h1>
      <Grid container direction="row" justify="center" alignItems="center">
        {data.projects.map(project => {
          const image = project.image

          return (
            <>
              <Grid project xs={12} sm={12} md={6}>
                <Card className="project-container">
                  <StaticImage
                    src="../../images/solists.png"
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Profile Pic"
                    width={300}
                    quality={95}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    style={
                      {
                        // marginBottom: `1.45rem`,
                        // maxHeight: "50px",
                        // maxWidth: "50px",
                        // borderRadius: "50%",
                      }
                    }
                  />
                  <h2> {project.name}</h2>
                  <p> {project.description}</p>
                </Card>
              </Grid>
            </>
          )
        })}
      </Grid>
    </div>
  )
}

export default ProjectsBar
