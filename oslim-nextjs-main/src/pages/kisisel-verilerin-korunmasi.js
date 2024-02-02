import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { consumerProduct as consumerProductData } from "@/data/servicesSection"; // Rename the imported variable
import React from "react";

const { title } = consumerProductData; // Use the renamed variable

const ConsumerProductPage = () => { // Rename the function
  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page="Detaylar"
        title={title}
        parent="Çalışma Alanları"
        parentHref="/hizmetler"
      />
      <ServiceDetails service={consumerProductData} />
    </Layout>
  );
};

export default ConsumerProductPage; // Update the export
