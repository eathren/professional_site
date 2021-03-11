import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Link from "@material-ui/core/Link"
import IconButton from "@material-ui/core/IconButton"
import Grid from "@material-ui/core/Grid"
import GitHubIcon from "@material-ui/icons/GitHub"
import MailIcon from "@material-ui/icons/Mail"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

import "./main.scss"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio-center">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <StaticImage
          src="../../images/profile-pic.png"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Profile Pic"
          width={50}
          quality={95}
          layout="constrained"
          formats={["AUTO", "WEBP", "AVIF"]}
          style={{
            marginBottom: `1.45rem`,
            maxHeight: "60px",
            maxWidth: "60px",
            borderRadius: "100%",
          }}
        />
        <div className="bio-text">

          {author?.name && (
            <p>
              Personal blog  by{" "}
              <Link href={social.linkedin}>{author.name}</Link> <br />{" "}
              {author?.summary || null}
            </p>
          )}
        </div>
      </Grid>
      {/* <IconButton className="icon-button" href="https://github.com/eathren">
            <GitHubIcon className="icon-color" />
          </IconButton>
          <IconButton
            className="icon-button"
            href="https://www.linkedin.com/in/nolanbraman/"
          >
            <LinkedInIcon className="icon-color" />
          </IconButton> */}
    </div>
  )
}

export default Bio
