"use client";
import { Data } from "@/data";
import { useMenuStore } from "@/hooks/useMenuStore";

export function Resume({ educations, experiences, skills }: Data["resume"]) {
  const { getClassNameMenu } = useMenuStore();
  return (
    <article className={getClassNameMenu("Resume")} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            {/* <ion-icon name="book-outline" /> */}
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {educations.map((education) => {
            return (
              <li key={education.name} className="timeline-item">
                <h4 className="h4 timeline-item-title">{education.name}</h4>
                <span>{education.date}</span>
                <p className="timeline-text">{education.description}</p>
              </li>
            );
          })}
        </ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            {/* <ion-icon name="book-outline" /> */}
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {experiences.map((experience) => {
            return (
              <li key={experience.name} className="timeline-item">
                <h4 className="h4 timeline-item-title">{experience.name}</h4>
                <span>{experience.date}</span>
                <p className="timeline-text">{experience.description}</p>
              </li>
            );
          })}
        </ol>
      </section>
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {skills.map((skill) => {
            return (
              <li key={skill.name} className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">{skill.name}</h5>
                  <data value={skill.level}>{skill.level}%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{
                      width: `${skill.level}%`,
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}
