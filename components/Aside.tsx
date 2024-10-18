import { Data } from "@/data";
import HyperText from "./ui/hyper-text";

export type AsideProps = Data["info"];
export function Aside(info: AsideProps) {
  const fullName = `${info.firstname} ${info.lastName}`;
  return (
    <aside
      className="sidebar"
      // style={{ background: "transparent" }}
      data-sidebar
    >
      <div className="sidebar-info">
        <figure className="avatar-box ">
          <img
            className="h-auto max-w-full rounded-lg"
            src={info.img}
            alt={fullName}
            width={80}
          />
        </figure>
        <div className="info-content">
          <h1 className="name" title={fullName}>
            <HyperText className="" text={fullName} />
          </h1>
          <p className="title">{info.tag}</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          {/* <ion-icon name="chevron-down" /> */}
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="mail-outline" /> */}
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${info.email}`} className="contact-link">
                {info.email}
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="phone-portrait-outline" /> */}
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">
                {info.phone}
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="calendar-outline" /> */}
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime={info.birthday}>{info.birthday}</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="location-outline" /> */}
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{info.location}</address>
            </div>
          </li>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          {Object.entries(info.profile).map(([social, url]) => {
            return (
              <li key={social} className="social-item">
                <a href={url || "#"} className="social-link">
                  {/* <ion-icon name="logo-facebook" /> */}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
