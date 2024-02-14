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

  // Check if slug is undefined or null, then redirect to 404 page
  if (!slug) {
    if (typeof window !== 'undefined') {
      router.push('/404'); // Redirect to your custom 404 page
    }
    return null; // Return null to avoid rendering anything
  }

  return (
    <Layout pageTitle="Blog Post">
      <Header />
      <PageHeader title="Blog Detay" />
      <NewsDetailsPage slug={slug} />
    </Layout>
  );
};

export default BlogPost;
