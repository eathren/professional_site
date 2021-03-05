import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Button from "@material-ui/core/Button"
// mui

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              timeToRead
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <segment title="Blog Bar">
        <h1> Blog</h1>
        <ol style={{ listStyle: `none` }}>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug

            return (
              <li key={node.fields.slug} style={{ marginBottom: "30px" }}>
                <article
                  className="node-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2 style={{ marginBottom: "5px" }}>
                      <Link to={node.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>
                      <span>{node.frontmatter.date} -</span>
                      <span> {node.timeToRead} min read</span>
                    </small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
        {/* <Link className="" to="/blog">
          <button className="button-blog"> All posts </button>
        </Link> */}
      </segment>
    )}
  />
)
