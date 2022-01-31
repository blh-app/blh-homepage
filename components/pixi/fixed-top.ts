import { Application, Graphics, Ticker } from "pixi.js";
import { runInThisContext } from "vm";
import { randomInteger } from "./helper";

export class FixedTop {
  private app: Application;
  private ticker: Ticker = new Ticker();
  private interval: any;
  public isVisible: boolean = false;

  public constructor(canvas: HTMLCanvasElement) {
    this.app = new Application({
      resizeTo: window,
      view: canvas,
      backgroundAlpha: 1,
      antialias: true,
      autoDensity: true,
      resolution: 2,
      transparent: true,
    });

    this.init();
  }

  init() {
    this.isVisible = true;
    document.body.appendChild(this.app.view);

    this.ticker.start();
    this.app.stage.interactive = true;

    this.interval = setInterval(() => {
      const x = window.innerWidth / 2 - 100;
      const y = window.innerHeight / 2 - 100;

      new Array(Math.round(window.innerWidth / 100)).fill(0).map((a, i) => {
        setTimeout(() => {
          this.spawnCirle({ x, y });
        }, 10 * i);
      });

      new Array(Math.round(window.innerWidth / 100)).fill(0).map((a, i) => {
        setTimeout(() => {
          this.spawnClick({ x, y });
        }, 10 * i);
      });
    }, 200);
  }

  spawnCirle({ x, y }: { x: number; y: number }) {
    const gr = new Graphics();
    gr.beginFill(0xffffff);
    gr.drawCircle(
      randomInteger(2, 20),
      randomInteger(2, 20),
      randomInteger(2, 20)
    );
    gr.lineStyle(2, 0xff0000); //(thickness, color)
    let spawnVariation = window.innerWidth / 4;
    gr.y = y + randomInteger(-spawnVariation, spawnVariation);
    gr.x = x + randomInteger(-spawnVariation, spawnVariation);
    gr.endFill();
    this.app.stage.addChild(gr);

    const time = 300;
    let counter = 0;

    let randSpeed = randomInteger(0, 50) / 100;

    let randAlpha = randomInteger(5, 10) / 1000;

    const animation = () => {
      counter++;

      gr.x += 1 + randSpeed;
      gr.y += 1 + randSpeed;

      gr.alpha = gr.alpha - randAlpha;

      if (counter > time) {
        if (gr) {
          this.app.stage.removeChild(gr);
        }
        this.ticker.remove(animation);
      }
    };

    this.ticker.add(animation);
  }

  spawnClick({ x, y }: { x: number; y: number }) {
    const gr = new Graphics();
    gr.beginFill(0xffffff);
    gr.drawRect(0, 0, 2, randomInteger(20, 40));
    let spawnVariation = window.innerWidth / 2;
    gr.angle = -45 + randomInteger(0, 5);
    gr.y = y + randomInteger(-spawnVariation, spawnVariation);
    gr.x = x + randomInteger(-spawnVariation, spawnVariation);
    gr.endFill();
    this.app.stage.addChild(gr);

    const time = 300;
    let counter = 0;

    let randSpeed = randomInteger(0, 100) / 100;

    let randAlpha = randomInteger(5, 10) / 1000;

    const animation = () => {
      counter++;

      gr.x += 1 + randSpeed;
      gr.y += 1 + randSpeed;

      gr.alpha = gr.alpha - randAlpha;

      if (counter > time) {
        if (gr) {
          this.app.stage.removeChild(gr);
        }
        this.ticker.remove(animation);
      }
    };

    this.ticker.add(animation);
  }

  destroy() {
    this.app.destroy();
  }

  hide() {
    console.log("hide");
    this.app.stage.alpha = 0.5;
    clearInterval(this.interval);
    this.isVisible = false;
  }
  show() {
    this.app.stage.alpha = 1;
    this.app.start();
    this.init();
  }
}
