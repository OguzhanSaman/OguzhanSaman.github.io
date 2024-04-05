// pages/[slug].js

import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout/Layout';
import NewsDetailsPage from '@/components/NewsSection/NewsDetailsPage';
import Header from "@/components/Header/Header";
import PageHeader from "@/components/Reuseable/PageHeader";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;


  return (
    <Layout pageTitle="Blog Post">
      <Header />
      <PageHeader title="Blog Detay" />
      <NewsDetailsPage slug={slug} />
    </Layout>
  );
};

export default BlogPost;
