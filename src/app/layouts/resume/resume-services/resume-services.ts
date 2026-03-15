import { Component } from "@angular/core";

@Component({
  selector: "app-resume-services",
  imports: [],
  templateUrl: "./resume-services.html",
  styleUrls: ["./resume-services.scss"],
})
export class ResumeServices {
  service = [
    {
      img: "assets/images/resume/service-exprience/1.png",
      type: "Angular Application Development",
       description:
        "Design and build modern Angular applications with scalable architecture and clean code practices.",
      includes: [
        "Angular architecture setup",
        "Component-based UI development",
        "REST API integration",
        "Performance optimization"],
    },
    {
      img: "assets/images/resume/service-exprience/2.png",
      type: "Front-End Architecture",
      description:
        "Design scalable front-end systems for enterprise projects.",
      includes: [
        "Project architecture planning",
        "State management (NgRx / Signals)",
        "Performance optimization",
        "Code structure best practices"],
    },
    {
      img: "assets/images/resume/service-exprience/3.png",
      type: "Angular Performance Optimization",
      description:
        "Improve existing Angular applications by optimizing performance and scalability.",
      includes: [
        "Bundle size reduction",
        "Change detection optimization",
        "Lazy loading strategy",
        "Code refactoring"],

    },
    {
      img: "assets/images/resume/service-exprience/4.png",
      type: "API Integration & Frontend Development",
      description:
        "Integrate front-end applications with backend services and APIs.",
      includes: [
        "REST API integration",
        "Authentication systems",
        "Data management and caching",
        "Error handling and performance improvements"],
    },
  ];
}
