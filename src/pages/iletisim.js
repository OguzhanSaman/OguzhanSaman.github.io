import ContactDetails from "@/components/Contact/ContactDetails";
import ContactPage from "@/components/Contact/ContactPage";
import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";
import ContactOne from "@/components/Contact/ContactOne";


const Contact = () => {
  return (
    <Layout pageTitle="İletişim">
      <Header />
      <PageHeader title="İletişim" />
      <ContactDetails />
      <ContactPage isTitleTwo />
    
    </Layout>
  );
};

export default Contact;
