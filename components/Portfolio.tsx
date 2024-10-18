"use client";
import { Data } from "@/data";
import { useMenuStore } from "@/hooks/useMenuStore";
import React, { useMemo } from "react";
import { IconCloudDemo } from "./IconCloudDemo";

function getClassName(active: boolean) {
  if (!active) {
    return "";
  }
  return "active";
}

export function Portfolio({ projets }: { projets: Data["projets"] }) {
  const { getClassNameMenu } = useMenuStore();
  const [categorieSelected, setCategorie] = React.useState("all");
  const categories = useMemo(() => {
    const fProjets: string[] = [];
    projets.map((projet) => {
      if (!fProjets.includes(projet.categorie)) {
        fProjets.push(projet.categorie);
      }
    });
    return fProjets;
  }, []);
  const fProjets = useMemo(() => {
    return projets.filter((projet) =>
      categorieSelected === "all"
        ? true
        : projet.categorie === categorieSelected
    );
  }, [categorieSelected]);
  return (
    <article className={getClassNameMenu("Projets")} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projets</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button
              className={getClassName(categorieSelected === "all")}
              onClick={() => setCategorie("all")}
              data-filter-btn
            >
              All
            </button>
          </li>
          {categories.map((categorie) => {
            return (
              <li key={categorie} className="filter-item">
                <button
                  className={getClassName(categorie === categorieSelected)}
                  onClick={() => setCategorie(categorie)}
                  data-filter-btn
                >
                  {categorie}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>
            <div className="select-icon">
              {/* <ion-icon name="chevron-down" /> */}
            </div>
          </button>
          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>
            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>
            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>
            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          {fProjets.map((projet) => {
            return (
              <li
                key={projet.name}
                className="project-item active"
                data-filter-item
                data-category="web development"
              >
                <a href={projet.url}>
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      {/* <ion-icon name="eye-outline" /> */}
                    </div>
                    <img src={projet.img} alt={projet.name} loading="lazy" />
                  </figure>
                  <h3 className="project-title">{projet.name}</h3>
                  <p className="project-category">{projet.description}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
      <IconCloudDemo />
    </article>
  );
}
