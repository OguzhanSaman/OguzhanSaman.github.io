import ContactPage from "@/components/Contact/ContactPage";
import FAQsPage from "@/components/FAQsPage/FAQsPage";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";

const Faq = () => {
  return (
    <Layout pageTitle="FAQS">
      <Header />
      <PageHeader title="Sıkça Sorulan Sorular" />
      <FAQsPage />
      <ContactPage />
    </Layout>
  );
};

export default Faq;
