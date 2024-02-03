import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsSidebar from "@/components/NewsSection/NewsSidebar";
import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";

const BlogSidebar = () => {
  return (
    <Layout pageTitle="Haberler ve Yayınlar" footerClassName="site-footer-three">
      <Header />
      <PageHeader title="Haberler ve Yayınlar" />
      <NewsSidebar />
    </Layout>
  );
};

export default BlogSidebar;
