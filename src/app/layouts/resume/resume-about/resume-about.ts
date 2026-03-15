import { Component } from "@angular/core";

@Component({
  selector: "app-resume-about",
  imports: [],
  templateUrl: "./resume-about.html",
  styleUrls: ["./resume-about.scss"],
})
export class ResumeAbout {
about = [
  {
    name: "Angular",
    timer: "95%",
    exp: "8+ Years Experience",
  },
  {
    name: "TypeScript",
    timer: "90%",
    exp: "8+ Years Experience",
  },
  {
    name: "RxJS & State Management",
    timer: "85%",
    exp: "8+ Years Experience",
  },
  {
    name: "Frontend Architecture & Performance",
    timer: "90%",
    exp: "6+ Years Experience",
  },
];
}
