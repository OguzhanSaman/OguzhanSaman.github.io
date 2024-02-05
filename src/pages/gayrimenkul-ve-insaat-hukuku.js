import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { auditMarketing } from "@/data/servicesSection";
import React from "react";

const { title } = auditMarketing;

const AuditMarketing = () => {
  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page="Detaylar"
        title={title}
        parent="Çalışma Alanları"
        parentHref="/hizmetler"
      />
      <ServiceDetails service={auditMarketing} />
    </Layout>
  );
};

export default AuditMarketing;
