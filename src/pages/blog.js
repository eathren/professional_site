import React from "react"
import { Link } from "gatsby"
import BlogBar from "../components/BlogBar"
import Layout from "../components/Layout"
import SEO from "../components/seo"
const BlogPage = () => {
  return (
    <>
      <SEO title="All posts" />
      <Layout>
        <BlogBar />
      </Layout>
    </>
  )
}

export default BlogPage
