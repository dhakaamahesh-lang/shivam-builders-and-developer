import { notFound } from "next/navigation";
import { projects } from "@/components/helper/projects";
import ProjectDetailsClient from "@/components/projects/project-details";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: Props) => {
  const { id } = await params;

  const project = projects.find((item) => item.slug === id);

  if (!project) return notFound();
  return <ProjectDetailsClient project={project} />;
};

export default page;
