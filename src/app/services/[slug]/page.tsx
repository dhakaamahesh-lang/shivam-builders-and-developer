import { services } from "@/components/helper/projects";
import ServiceDetailsClient from "@/components/service/service-details";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const ServicePage = async ({ params }: Props) => {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) return notFound();

  return <ServiceDetailsClient service={service} />;
};

export default ServicePage;
