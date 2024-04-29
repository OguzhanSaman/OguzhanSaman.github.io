import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { yabancilarVeVatandaslikHukuku } from "@/data/servicesSection"; // Rename the imported variable
import React from "react";

const { title } = yabancilarVeVatandaslikHukuku; // Use the renamed variable

const yabancilarVeVatandaslikHukukuPage = () => { // Rename the function
  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page="Detaylar"
        title={title}
        parent="Çalışma Alanları"
        parentHref="/calisma-alanlarimiz"
      />
      <ServiceDetails service={yabancilarVeVatandaslikHukuku} />
    </Layout>
  );
};

export default yabancilarVeVatandaslikHukukuPage; // Update the export
