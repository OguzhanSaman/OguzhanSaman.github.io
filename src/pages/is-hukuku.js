import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { marketingRules } from "@/data/servicesSection";
import React from "react";

const { title } = marketingRules;

const MarketingRules = () => {
  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page="Detaylar"
        title={title}
        parent="Çalışma Alanları"
        parentHref="/calisma-alanlarimiz"
      />
      <ServiceDetails service={marketingRules} />
    </Layout>
  );
};

export default MarketingRules;
