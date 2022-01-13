import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import s from "./header.module.scss";

const Header = () => {
  const [activeLink, setActiveLink] = useState(0);

  const getActiveLink = (index: number) => {
    return activeLink == index ? "active" : "";
  };

  const onRedicrect = (index: number) => {
    setActiveLink(index);
  };

  return (
    <div className={s.header}>
      <header className="container" data-aos="fade-up">
        <div className={s.logo}>
          <h1>
            <Link href="/">
              <a>BLH</a>
            </Link>
          </h1>
        </div>

        <nav id="navbar" className={s.navbar}>
          <ul>
            <li onClick={() => onRedicrect(0)}>
              <Link href="/">
                <a className={`${getActiveLink(0)}`}>Home</a>
              </Link>
            </li>
            <li onClick={() => onRedicrect(0)}>
              <Link href="/projects">
                <a className={`${getActiveLink(0)}`}>Projects</a>
              </Link>
            </li>
            <li onClick={() => onRedicrect(0)}>
              <Link href="/blog">
                <a className={`${getActiveLink(0)}`}>Blog</a>
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </header>
    </div>
  );
};

export default Header;
