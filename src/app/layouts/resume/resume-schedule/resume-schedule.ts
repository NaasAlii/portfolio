import { Component } from "@angular/core";

@Component({
  selector: "app-resume-schedule",
  imports: [],
  templateUrl: "./resume-schedule.html",
  styleUrls: ["./resume-schedule.scss"],
})
export class ResumeSchedule {
  schedule = [
    {
      name: "Enterprise HR Platform",
      img: "assets/images/resume/icon/icon-resume.png",
      description:
        "Large Angular application used for employee management, payroll processes, and analytics dashboards.",
    },
    {
      name: "Enterprise Application Modernization",
      img: "assets/images/resume/icon/icon-resume.png",
      description:
        "Refactored and modernized legacy front-end applications to modern Angular architecture improving performance and maintainability.",
      toTime: "08:00",
      endTime: "10:00",
    },
    {
      name: "Laurels Services Website",
      img: "assets/images/resume/icon/icon-resume.png",
      description:
        "Developed a professional WordPress website for Laurels Services to present their services and improve online visibility with a responsive and user-friendly design.",
      toTime: "08:00",
      endTime: "10:00",
    }
  ];
}
