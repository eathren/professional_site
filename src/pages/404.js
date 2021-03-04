import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import Container from "@material-ui/core/Container"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <Layout>
      <SEO title="404: Not Found" />
      <div
        className="page-404 "
        style={{
          paddingTop: "35vh",
          textAlign: "center",
        }}
      >
        <SEO title="404: Not found" />
        <Container maxWidth="md" className="container">
          <h1>404: NOT FOUND</h1>
          <p>(You went somewhere weird.) </p>

          <Button component={Link} to="/" variant="outlined" color="primary">
            Back to Home?
          </Button>
        </Container>
      </div>
    </Layout>
  </>
)

export default NotFoundPage
