"use client";
import { create } from "zustand";

interface MenuState {
  actived: string;
  activedAll: boolean;
  activeMenu: (menu: string) => void;
  activeAllMenu: () => void;
  disableAllMenu: () => void;
  isActived: (menu: string) => boolean;
  getClassNameMenu: (menu: string) => string;
}

export const useMenuStore = create<MenuState>()((set, get) => ({
  actived: "About",
  activedAll: false,
  activeMenu: (menu) => set(() => ({ actived: menu })),
  isActived: (menu) => get().actived === menu,
  getClassNameMenu: (menu) =>
    get().actived === menu || get().activedAll
      ? `${menu.toLowerCase()} active`
      : `${menu.toLowerCase()}`,
  activeAllMenu() {
    set({ activedAll: true });
  },
  disableAllMenu() {
    set({ activedAll: false });
  },
}));

const data = {
  info: {
    firstname: "RABETSY",
    lastName: "Rolio",
    img: "https://avatars.githubusercontent.com/u/71975597?v=4",
    email: "rabetsyrolio@gmail.com",
    phone: "+261 32 80 715 12",
    location: "Madagascar, Antananarivo, Lot ivl 258 Ambodin'isotry",
    gps: "",
    profile: {
      facebook: "",
      x: "",
      instagram: "",
      linkedin: "",
      github: "",
    },
  },
  about: {
    aboutMe:
      "Développeur Full-Stack passionné avec 5 ans d'expérience dans la conception et le développement d'applications web. Compétent en JavaScript, React, Node.js, et TypeScript. Toujours curieux d'apprendre et de résoudre des problèmes complexes avec des solutions efficaces.",
    iDo: [
      {
        title: "Web Development",
        description:
          "High-quality development of sites at the professional level.",
        img: "",
      },
      {
        title: "Mobile Apps",
        description:
          "Professional development of applications for iOS and Android.",
        img: "",
      },
    ],
    testomonials: [
      {
        name: "Daniel Lewis",
        date: "14 June, 2021",
        comment:
          "WAROL52 was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
        img: "",
      },
      {
        name: "Daniel Lewis 2",
        date: "14 June, 2021",
        comment:
          "WAROL52 was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
        img: "",
      },
      {
        name: "Daniel Lewis 3",
        date: "14 June, 2021",
        comment:
          "WAROL52 was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
        img: "",
      },
    ],
    client: [
      {
        name: "Esti",
        img: "",
        url: "",
      },
      {
        name: "Madagascar National Parks",
        img: "",
        url: "",
      },
    ],
  },
  resume: {
    education: [
      {
        name: "Lycée Jacques Rabemananjara",
        date: "2017 - 2019",
        logo: "",
        description: "",
        url: "",
      },
      {
        name: "Université Privée Hay",
        date: "2020 - 2022",
        logo: "",
        description: "",
        url: "",
      },
      {
        name: "42",
        date: "2024 - ",
        logo: "",
        description: "",
        url: "",
      },
    ],
    experience: [
      {
        name: "Esti",
        date: "05/2021 - 11/2021",
        logo: "",
        description: "",
        url: "",
      },
      {
        name: "Madagascar National Parks",
        date: "2022 - 2024",
        logo: "",
        description: "",
        url: "",
      },
      {
        name: "freelance",
        date: "02/2024 - ",
        logo: "",
        description: "",
        url: "",
      },
    ],
    Skills: [
      {
        name: "nextjs",
        logo: "",
        description: "",
        level: "",
      },
      {
        name: "nestjs",
        logo: "",
        description: "",
        level: "",
      },
      {
        name: "adonis",
        logo: "",
        description: "",
        level: "",
      },
    ],
  },
  porfolio: [
    {
      name: "",
      description: "",
      img: "",
      categorie: "",
    },
  ],
} as const;
