// blog-details.js
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsSection/NewsDetailsPage";
import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";
import { useRouter } from "next/router";

const BlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query; // Get the slug from the URL query parameters

  return (
    <Layout pageTitle="Blog Detay" footerClassName="site-footer-three">
      <Header />
      <PageHeader title="Blog Detay" />
      <NewsDetailsPage slug={slug} />
    </Layout>
  );
};

export default BlogDetails;
