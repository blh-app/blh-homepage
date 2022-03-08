import { memo, useEffect } from "react";
import { Background } from "./background";
import { FixedTop } from "./fixed-top";
import "./pixi.module.scss";

let background: Background;
let fixedTop: FixedTop;

interface IProps {
  heroAnimation?: boolean;
}

const PixiComponent = memo(({ heroAnimation = false }: IProps) => {
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

PixiComponent.displayName = "PixiComponent";

export default PixiComponent;
