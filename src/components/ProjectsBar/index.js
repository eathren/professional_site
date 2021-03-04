import * as React from "react"
import { useEffect } from "react"
import "./styles.scss"

import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import Grid from "@material-ui/core/Grid"
import Fab from "@material-ui/core/Fab"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MoreVertIcon from "@material-ui/icons/MoreVert"

import LinkIcon from "@material-ui/icons/Link"
import GitHubIcon from "@material-ui/icons/GitHub"

import SolistsImage from "../Images/SolistsImage"
import SortPath from "../Images/SortPath"

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}))

function ImageBlock(image) {
  return <div>{image}</div>
}

const ProjectsBar = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState([])

  useEffect(() => {
    const n = projects.length
    const tempArray = []
    for (let i = 0; i < n; i++) {
      tempArray.push(false)
    }
    setExpanded(tempArray)
  }, [])

  function handleExpandClick(i) {
    const tempArray = [...expanded]
    tempArray[i] = !tempArray[i]
    setExpanded(tempArray)
  }

  const projects = [
    {
      name: "Solists",
      url: "https://www.solists.com",
      keywords: ["Django", "Python", "Heroku", "Sendgrid"],
      description:
        "An online job board aggregator and promotional system for companies and clients.",
      image_url: SolistsImage,
      image_rel: "../../images/solists.png",
      github: "",
    },
    {
      name: "SortPath",
      url: "https://www.sortpath.dev",
      keywords: ["React.js", "JavaScript", "Sass / CSS3", "Netlify"],
      description:
        "A visual, interactable tool for algorithms sorting methods as well as a maze-drawing and solving system for path of least resistance. ",
      image_url: SortPath,
      image_rel: "../../images/sortpath.png",

      github: "https://github.com/eathren/algo_showcase",
    },
  ]

  return (
    <>
      <h1> Projects</h1>
      <Grid container direction="row" justify="center" alignItems="flex-start">
        {projects.map((project, i) => (
          <>
            <Grid item xs={12} sm={12} md={6} spacing={3} key={i}>
              <div className="project-container">
                <Card className="projects-card">
                  <CardActionArea
                    className="project-img"
                    onClick={() => handleExpandClick(i)}
                  >
                    {/* There has to be a better way to get the gatsby fuzzy 
                    load here than a conditional render.  */}
                    {project.image_url == SolistsImage ? (
                      <SolistsImage />
                    ) : (
                      <SortPath />
                    )}
                  </CardActionArea>
                  <CardActions disableSpacing>
                    <IconButton href={project.url} aria-label="site link">
                      <LinkIcon />
                    </IconButton>
                    {project.github ? (
                      <IconButton
                        href={project.github}
                        aria-label="github link"
                      >
                        <GitHubIcon />
                      </IconButton>
                    ) : (
                      <> </>
                    )}
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded[i],
                      })}
                      onClick={() => handleExpandClick(i)}
                      aria-expanded={expanded[i]}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>

                  <Collapse in={expanded[i]} timeout="auto" unmountOnExit>
                    <CardContent>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <p>{project.keywords.join(", ")}</p>
                    </CardContent>
                  </Collapse>
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
