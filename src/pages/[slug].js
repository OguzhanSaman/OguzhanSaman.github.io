import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout/Layout';
import NewsDetailsPage from '@/components/NewsSection/NewsDetailsPage';
import Header from "@/components/Header/Header";
import PageHeader from "@/components/Reuseable/PageHeader";
import { newsSidebar } from "@/data/newsSection"; // Import the newsSidebar object

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const newsItem = newsSidebar.newses.find(item => item.slug === slug);
  if (newsItem.title.length > 70) {
    return (
      <Layout pageTitle="Blog Post">
        <Header />
        <PageHeader title="Blog Detay" />
        <NewsDetailsPage slug={slug} />
      </Layout>
    );
  } else {
    return (
      <Layout pageTitle="Blog Post">
        <Header />
        <PageHeader title={newsItem.title} />
        <NewsDetailsPage slug={slug} />
      </Layout>
    );
  }
};

export default BlogPost;
