import { projects } from "@/lib/data";
import ProjectDetailsClient from "./project-details-client";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailsPage({ params }: PageProps) {
  const { id } = params;
  const projectId = Number(id);
  const projectData = projects.find((p) => p.id === projectId);


  if (!projectData) {
    notFound();
  }


  return <ProjectDetailsClient projectData={projectData} />;
}
