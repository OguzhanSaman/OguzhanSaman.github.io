import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { fikriVeSinaiMulkiyetHukuku} from "@/data/servicesSection"; // Rename the imported variable
import React from "react";

const { title } = fikriVeSinaiMulkiyetHukuku; // Use the renamed variable

const fikriVeSinaiMulkiyetHukukuPage = () => { // Rename the function
  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page="Detaylar"
        title={title}
        parent="Çalışma Alanları"
        parentHref="/hizmetler"
      />
      <ServiceDetails service={fikriVeSinaiMulkiyetHukuku} />
    </Layout>
  );
};

export default fikriVeSinaiMulkiyetHukukuPage; // Update the export
