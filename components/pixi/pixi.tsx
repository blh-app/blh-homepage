import { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Component, useEffect, useState } from "react";
import { Background } from "./background";
import s from "./pixi.module.scss";

export const PixiComponent = () => {
  const [bg, setBg] = useState<Background>();

  useEffect(() => {
    const background = new Background();
    setBg(background);
  }, []);

  return <canvas className={s.pixi} id="pixi"></canvas>;
};

export default PixiComponent;
