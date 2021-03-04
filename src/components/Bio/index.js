import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Grid from "@material-ui/core/Grid"
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
    <div className="">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <StaticImage
            src="../../images/profile-pic.png"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Profile Pic"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            style={{
              marginBottom: `1.45rem`,
              maxHeight: "60px",
              maxWidth: "60px",
              borderRadius: "100%",
            }}
          />
        </Grid>
        <Grid item>
          {author?.name && (
            <p>
              Personal blog and portfolio by{" "}
              <a href={social.linkedin}>{author.name}</a> <br />{" "}
              {author?.summary || null}
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

export default Bio
