import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "My Projects",
  description: "Showcasing my projects and skills",
};

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 90 },
];

const projects = [
  {
    title: "NordaTech Energy LTD",
    description:
      "NordaTech Energy LTD is a general energy contracting, outsourcing company, and solutions provider which offers innovative solutions to our customers with an overarching aim of outstanding deliverability. Key to our success is driven by our local and international partners who are committed to making positive impact in the energy industry.",
    link: "https://nordatech.com.ng/",
  },
  {
    title: "ESI",
    description:
      "ESI primary goal is to impact life through various programmes that deal specifically with women, children and youths. Programmes which add value to members of society and cause positive change in their lives.",
    link: "https://esi.com.ng/",
  },
  {
    title: "Bata Nigeria E-commerce",
    description:
      "To provide our customers with comfortable footwear that combines trendy fashion and sustainability through superior innovation, high quality, excellent customer service, and a commitment to environmental stewardship. .",
    link: "https://bata-frontend.vercel.app",
  },
];

function Projects() {
  return (
    <section className="container mx-auto p-5">
      <div className="border-b p-5 text-center max-w-full">
        <h1 className="text-4xl font-bold text-blue-600">My Projects</h1>
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-gray-700 mb-5">Projects</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border p-4 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-gray-700 mb-5">Skills</h2>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-lg font-medium text-gray-700">
                  {skill.name}
                </span>
                <span className="text-lg font-medium text-gray-700">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
