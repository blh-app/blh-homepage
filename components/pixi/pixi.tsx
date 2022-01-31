import { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Component, memo, useEffect, useState } from "react";
import { Background } from "./background";
import { FixedTop } from "./fixed-top";
import "./pixi.module.scss";

let background: Background;
let fixedTop: FixedTop;

export const PixiComponent = memo(({ heroAnimation = false }: any) => {
  useEffect(() => {
    if (!background) {
      background = new Background(
        document.getElementById("pixi-bg") as HTMLCanvasElement
      );
    }

    if (!fixedTop) {
      fixedTop = new FixedTop(
        document.getElementById("pixi-top") as HTMLCanvasElement
      );
    }

    if (heroAnimation && fixedTop.isVisible == false) {
      fixedTop.show();
    }

    if (!heroAnimation && fixedTop.isVisible == true) {
      fixedTop.hide();
    }
  }, []);

  return (
    <>
      <canvas id="pixi-bg"></canvas>
      <canvas id="pixi-top"></canvas>
    </>
  );
});

export default PixiComponent;
