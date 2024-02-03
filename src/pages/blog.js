import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import BlogPagination from "@/components/NewsSection/BlogPagination";
import NewsOne from "@/components/NewsSection/NewsOne";
import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";

const Blog = () => {
  return (
    <Layout pageTitle="Blog" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Blog" title="Haberler ve Yayınlar" />
      <NewsOne className="news-page" hideTitle>
      </NewsOne>
    </Layout>
  );
};

export default Blog;
