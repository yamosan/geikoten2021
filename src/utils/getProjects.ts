import projects from "@/data/projects.json";
import type { Project } from "@/models/Project";

const PROJECTS = projects as Project[];

export function getProjects(): Project[] {
  return PROJECTS;
}

export function getProjectById(id: number): Project {
  return PROJECTS.find((project) => project.id === id);
}

export function findProject(callback: (project: Project) => boolean): Project {
  return PROJECTS.find(callback);
}
