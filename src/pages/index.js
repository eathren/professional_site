import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Bio from "../components/Bio"
import ProjectsBar from "../components/ProjectsBar"
import BlogBar from "../components/BlogBar"

const indexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Nolan Braman`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Bio />
      <ProjectsBar />
      <BlogBar />
    </Layout>
  )
}

export default indexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
        timeToRead
      }
    }
  }
`
