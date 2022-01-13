import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header: NextPage = () => {
  const [activeLink, setActiveLink] = useState(0);

  const getActiveLink = (index: number) => {
    return activeLink == index ? "active" : "";
  };

  const onRedicrect = (index: number) => {
    setActiveLink(index);
  };

  return (
    <div className="header">
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent"
      >
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <h1 className="text-light">
              <a href="index.html">
                <span>BLH.APP</span>
              </a>
            </h1>
          </div>

          <nav id="navbar" className="navbar">
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
              <li onClick={() => onRedicrect(0)}>
                <Link href="/about">
                  <a className={`${getActiveLink(0)}`}>About</a>
                </Link>
              </li>
              <li onClick={() => onRedicrect(0)}>
                <Link href="/contact">
                  <a className={`${getActiveLink(0)}`}>Contact</a>
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
