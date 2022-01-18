import { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Component, memo, useEffect, useState } from "react";
import { Background } from "./background";
import { FixedTop } from "./fixed-top";
import s from "./pixi.module.scss";

export const PixiComponent = memo(({ heroAnimation = false }: any) => {
  useEffect(() => {
    if (document.getElementById("pixi-bg")) {
      document.getElementById("pixi-bg")?.remove();
    }
    const c1 = document.createElement("canvas");
    c1.id = "pixi-bg";
    new Background(c1);

    // fixed
    if (document.getElementById("pixi-top")) {
      document.getElementById("pixi-top")?.remove();
    }
    const c2 = document.createElement("canvas");
    c2.id = "pixi-top";
    if (heroAnimation) {
      const fixedTop = new FixedTop(c2);
    }

    return () => {
      const cans = document.getElementsByTagName("canvas");

      for (let index = 0; index < cans.length; index++) {
        const element = cans[index];
        element.remove();
      }
    };
  }, []);

  return <></>;
});

export default PixiComponent;
