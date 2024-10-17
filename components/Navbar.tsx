"use client";
import { useMenuStore } from "@/hooks/useMenuStore";
import { useEffect } from "react";

export const menus = ["About", "Resume", "Projets", "Blog", "Contact"];

export function Navbar() {
  const { activeMenu, getClassNameMenu } = useMenuStore();
  useEffect(() => {
    activeMenu(String(menus.at(0)));
  }, []);
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {menus.map((menu) => {
          return (
            <li key={menu} className="navbar-item">
              <button
                onClick={() => activeMenu(menu)}
                className={`navbar-link  ${getClassNameMenu(menu)}`}
                data-nav-link
              >
                {menu}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
