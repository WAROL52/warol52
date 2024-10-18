import { Aside } from "../components/Aside";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Resume } from "../components/Resume";
import { Portfolio } from "../components/Portfolio";
import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";
import { data } from "@/data";

export default function Home() {
  if (tabs) {
    console.log("tabs...");
  }
  return (
    <main>
      <Aside {...data.info} />
      <div className="main-content">
        {/* <TabsPage tabs={tabs} /> */}
        <Navbar />
        <About {...data.about} />
        <Resume {...data.resume} />
        <Portfolio projets={data.projets} />
        <Blog />
        <Contact />
      </div>
    </main>
  );
}
const tabs = [
  {
    title: "About",
    value: "About",
    content: <About {...data.about} />,
  },
  {
    title: "Resume",
    value: "Resume",
    content: <Resume {...data.resume} />,
  },
  {
    title: "Projets",
    value: "Projets",
    content: <Portfolio projets={data.projets} />,
  },
  {
    title: "Blog",
    value: "Blog",
    content: <Blog />,
  },
  {
    title: "Contact",
    value: "Contact",
    content: <Contact />,
  },
];
