// lib/constants.ts
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiPostgresql,
  SiMariadb,
  SiLinux,
  SiDart,
  SiFlutter,
  SiFirebase,
  SiKotlin,
  SiSwift,
  SiDocker,
  SiPhp
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import type { IconType } from 'react-icons';

type Technology = {
  name: string;
  icon: IconType;
};

export const TECHNOLOGIES: Technology[] = [
  { name: 'Python', icon: SiPython },
  { name: 'Java', icon: FaJava },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MariaDB', icon: SiMariadb },
  { name: 'Linux', icon: SiLinux },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Dart', icon: SiDart },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'Swift', icon: SiSwift },
  { name: 'Docker', icon: SiDocker }
];

type ProjectLink = {
  icon: 'Github' | 'ExternalLink';
  label: string;
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  live_url: string;
  repo_url: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'Sistema de Gestión de Capacitaciones',
    description: 'Plataforma integral para administrar el ciclo completo de capacitaciones. Centraliza la gestión de sesiones (CRUD), registro de asistencia, materiales y evaluaciones. Utiliza una base de datos NoSQL para potenciar un dashboard de estadísticas y análisis de rendimiento.',
    technologies: ['ExpressJS', 'NodeJS', 'TypeScript', 'React', 'PostgreSQL', 'InfluxDB'],
    links: [
      { icon: 'Github', label: 'GitHub' },
      { icon: 'ExternalLink', label: 'Ver Demo' }
    ],
    live_url: 'https://youtube.com',
    repo_url: 'https://github.com/ggeldresp18/SistemaDeCapacitaciones-CRUD',
    image: './crud_capacitaciones.jpeg'
  },
  {
    title: 'SurveyCraft API - Sistema para Gestión de Encuestas',
    description: 'SurveyCraft API es una aplicación backend RESTful que permite crear, gestionar y responder encuestas de forma eficiente. Soporta preguntas múltiples por encuesta y almacenamiento de respuestas.',
    technologies: ['Spring Boot', 'Java', 'MariaDB'],
    links: [
      { icon: 'Github', label: 'GitHub' },
      { icon: 'ExternalLink', label: 'Ver Demo' }
    ],
    live_url: 'https://youtube.com',
    repo_url: 'https://github.com/ggeldresp18/SurveyCraft-API',
    image: './survey_api.jpeg'
  },
  {
    title: 'WebSite de la Revista Paradigma',
    description: 'Este repositorio contiene el desarrollo de la plataforma web oficial de la revista Paradigma. El proyecto está diseñado para ofrecer a los lectores y oyentes una experiencia de usuario moderna y accesible, centralizando todo nuestro contenido periodístico y episodios de podcast en un único lugar.',
    technologies: ['Flask', 'Python', 'MariaDB'],
    links: [
      { icon: 'Github', label: 'GitHub' },
      { icon: 'ExternalLink', label: 'Ver Demo' }
    ],
    live_url: 'https://youtube.com',
    repo_url: 'https://github.com/ggeldresp18/ParadigmaPodcast',
    image: './paradigma_podcast.jpeg'
  },
];


