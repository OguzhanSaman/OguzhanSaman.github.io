import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServicesOne from "@/components/ServicesSection/ServicesOne";
import React from "react";

const Services = () => {
  return (
    <Layout pageTitle="Çalışma Alanlarımız" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Çalışma Alanlarımız" title="Çalışma Alanlarımız" />
      <ServicesOne hideTitle />
    </Layout>
  );
};

export default Services;
