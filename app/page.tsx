import { Aside } from "../components/Aside";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Resume } from "../components/Resume";
import { Portfolio } from "../components/Portfolio";
import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";
import { data } from "@/data";

export default function Home() {
  return (
    <main>
      <Aside {...data.info} />
      <div className="main-content">
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
