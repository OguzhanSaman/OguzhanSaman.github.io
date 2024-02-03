import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsSection/NewsDetailsPage";
import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";

const BlogDetails = () => {
  return (
    <Layout pageTitle="Blog Detay" footerClassName="site-footer-three">
      <Header />
      <PageHeader title="Blog Detay" />
      <NewsDetailsPage />
    </Layout>
  );
};

export default BlogDetails;
