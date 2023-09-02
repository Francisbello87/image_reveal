"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import { gsap } from "gsap/dist/gsap";

export default function Home() {
  useEffect(() => {
    if (projects && preview && previewImg) {
      let isInside = false;
      const bgPositions = {
        p1: "0 0",
        p2: "0 25%",
        p3: "0 50%",
        p4: "0 75%",
        p5: "0 100%",
      };
      const moveStuff = (e) => {
        const mouseInside = isMouseInsideContainer(e);

        if (mouseInside !== isInside) {
          isInside = mouseInside;
          if (isInside) {
            gsap.to(preview, { scale: 1 }, 0.3);
          } else {
            gsap.to(preview, { scale: 0 }, 0.3);
          }
        }
      };

      const moveProject = (e) => {
        const previewRect = preview.getBoundingClientRect();
        const offsetX = previewRect.width / 2;
        const offsetY = previewRect.height / 2;

        preview.style.left = e.pageX - offsetX + "px";
        preview.style.top = e.pageY - offsetY + "px";
      };

      const moveProjectImg = (project) => {
        const projectId = project.id;
        gsap.to(previewImg, 0.4, {
          backgroundPosition: bgPositions[projectId] || "0 0",
        });
      };

      const isMouseInsideContainer = (e) => {
        const containerRect = projects.getBoundingClientRect();
        return (
          e.pageX >= containerRect.left &&
          e.pageX <= containerRect.right &&
          e.pageY >= containerRect.top &&
          e.pageY <= containerRect.bottom
        );
      };

      window.addEventListener("mousemove", moveStuff);

      Array.from(projects.children).forEach((project) => {
        project.addEventListener("mousemove", moveProject);
        project.addEventListener(
          "mousemove",
          moveProjectImg.bind(null, project)
        );
      });
    }
  }, [preview, previewImg, projects]);

  return (
    <main className={styles.main}>
      <div className="preview">
        <div className="preview-img"></div>
      </div>
      <div className="container">
        <div className="projects">
          <div className="project" id="header">
            <div className="client">
              <p>Project</p>
            </div>
            <div className="location">
              <p>Location</p>
            </div>
            <div className="service">
              <p>Category</p>
            </div>
            <div className="year">
              <p>Year</p>
            </div>
          </div>
          <div className="project" id="p1">
            <div className="client">
              <p>Fabric</p>
            </div>
            <div className="location">
              <p>United Kingdom</p>
            </div>
            <div className="service">
              <p>Design</p>
            </div>
            <div className="year">
              <p>2023</p>
            </div>
          </div>
          <div className="project" id="p2">
            <div className="client">
              <p>XXVR</p>
            </div>
            <div className="location">
              <p>Hongkong</p>
            </div>
            <div className="service">
              <p>Branding</p>
            </div>
            <div className="year">
              <p>2021</p>
            </div>
          </div>
          <div className="project" id="p3">
            <div className="client">
              <p>Hunters</p>
            </div>
            <div className="location">
              <p>Amsterdam</p>
            </div>
            <div className="service">
              <p>Creative Dev</p>
            </div>
            <div className="year">
              <p>2018</p>
            </div>
          </div>
          <div className="project" id="p4">
            <div className="client">
              <p>Create Base</p>
            </div>
            <div className="location">
              <p>New Zealand</p>
            </div>
            <div className="service">
              <p>Marketing</p>
            </div>
            <div className="year">
              <p>2022</p>
            </div>
          </div>
          <div className="project" id="p5">
            <div className="client">
              <p>Reyknotes</p>
            </div>
            <div className="location">
              <p>Iceland</p>
            </div>
            <div className="service">
              <p>UIUX</p>
            </div>
            <div className="year">
              <p>2019</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
