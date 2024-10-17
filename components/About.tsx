"use client";

import { Data } from "@/data";
import { useMenuStore } from "@/hooks/useMenuStore";

export function About({ aboutMe, iDo, testomonials, clients }: Data["about"]) {
  const { getClassNameMenu } = useMenuStore();
  return (
    <article className={getClassNameMenu("About")} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        {aboutMe.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </section>
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {iDo.map((imDoing) => {
            return (
              <li key={imDoing.title} className="service-item">
                <div className="service-icon-box">
                  <img src={imDoing.img} alt={imDoing.title} width={40} />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{imDoing.title}</h4>
                  <p className="service-item-text">{imDoing.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testomonials.map((testomonial) => {
            return (
              <li key={testomonial.name} className="testimonials-item">
                <div className="content-card" data-testimonials-item>
                  <figure className="testimonials-avatar-box">
                    <img
                      src={testomonial.img}
                      alt={testomonial.img}
                      width={60}
                      data-testimonials-avatar
                    />
                  </figure>
                  <h4
                    className="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    {testomonial.name}
                  </h4>
                  <div className="testimonials-text" data-testimonials-text>
                    <p>{testomonial.comment}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <div className="modal-container" data-modal-container>
        <div className="overlay" data-overlay />
        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn>
            {/* <ion-icon name="close-outline" /> */}
          </button>
          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img
                src="./assets/images/avatar-1.png"
                alt="Daniel lewis"
                width={80}
                data-modal-img
              />
            </figure>
            <img src="./assets/images/icon-quote.svg" alt="quote icon" />
          </div>
          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>
              Daniel lewis
            </h4>
            <time dateTime="2021-06-14">14 June, 2021</time>
            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {clients.map((client) => {
            return (
              <li key={client.name} className="clients-item">
                <a href={client.url} target="_blank">
                  <img src={client.img} alt={client.name} />
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}
