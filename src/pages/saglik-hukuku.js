import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { saglikHukuku } from "@/data/servicesSection"; // Rename the imported variable
import React from "react";

const { title } = saglikHukuku; // Use the renamed variable

const saglikHukukuPage = () => { // Rename the function
  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page="Detaylar"
        title={title}
        parent="Çalışma Alanları"
        parentHref="/calisma-alanlarimiz"
      />
      <ServiceDetails service={saglikHukuku} />
    </Layout>
  );
};

export default saglikHukukuPage; // Update the export
