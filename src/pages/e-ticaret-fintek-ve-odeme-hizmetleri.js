import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { eTicaretFintekVeOdemeHizmetleri } from "@/data/servicesSection"; // Rename the imported variable
import React from "react";

const { title } = eTicaretFintekVeOdemeHizmetleri; // Use the renamed variable

const eTicaretFintekVeOdemeHizmetleriPage = () => { // Rename the function
  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page="Detaylar"
        title={title}
        parent="Çalışma Alanları"
        parentHref="/hizmetler"
      />
      <ServiceDetails service={eTicaretFintekVeOdemeHizmetleri} />
    </Layout>
  );
};

export default eTicaretFintekVeOdemeHizmetleriPage; // Update the export
