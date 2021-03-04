import * as React from "react"
import "./styles.scss"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Fab from "@material-ui/core/Fab"

import LinkIcon from "@material-ui/icons/Link"
import GitHubIcon from "@material-ui/icons/GitHub"

import SolistsImage from "../../images/solists.png"
import SortPath from "../../images/sortpath.png"

const ProjectsImage = project => {
  return (
    <>
      <img src={project.image} className="project-image"></img>
      {console.log(project.image)}
    </>
  )
}

const ProjectsBar = () => {
  const projects = [
    {
      name: "Solists",
      url: "https://www.solists.com",
      keywords: ["Django", "Python", "Heroku", "Sendgrid"],
      description:
        "An online job board aggregator and promotional system for companies and clients.",
      image_url: SolistsImage,
      github: "",
    },
    {
      name: "SortPath",
      url: "https://www.sortpath.dev",
      keywords: ["React.js", "JavaScript", "Sass / CSS3", "Netlify"],
      description:
        "A visual, interactable tool for algorithms sorting methods as well as a maze-drawing and solving system for path of least resistance. ",
      image_url: SortPath,
      github: "https://github.com/eathren/algo_showcase",
    },
  ]

  // const projects = data.allProjectsJson.edges
  // console.log(projects)
  return (
    <>
      <h1> Projects</h1>
      <Grid container direction="row" justify="center" alignItems="center">
        {projects.map(project => (
          <>
            <Grid item xs={12} sm={12} md={6} spacing={3}>
              <div className="project-container">
                <Card className="projects-card">
                  <img src={project.image_url} className=""></img>
                  <CardContent>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>

                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="flex-start"
                      spacing={3}
                    >
                      <Grid item xs={8}>
                        <p>
                          <b> Stack:</b>
                          {project.keywords.join(", ")}
                        </p>
                      </Grid>
                      <Grid item xs={2}>
                        <Fab
                          color="primary"
                          href={project.url}
                          aria-label="github"
                        >
                          <LinkIcon />
                        </Fab>
                      </Grid>
                      <Grid item xs={2}>
                        <Fab
                          color="primary"
                          href={project.github}
                          aria-label="github"
                        >
                          <GitHubIcon />
                        </Fab>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  )
}

// export const query = graphql`
//   query projectQuery {
//     allProjectsJson {
//       edges {
//         node {
//           name
//           description
//           url
//           keywords
//           image_url
//         }
//       }
//     }
//   }
// `

export default ProjectsBar
