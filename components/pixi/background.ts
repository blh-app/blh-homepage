import { Application, Graphics, Ticker, autoDetectRenderer } from "pixi.js";
import { runInThisContext } from "vm";
import { randomInteger } from "./helper";

export class Background {
  private app: Application;
  private ticker: Ticker = Ticker.shared;
  private interval: any;

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
    document.body.appendChild(this.app.view);

    this.ticker.start();
    this.app.stage.interactive = true;

    var timesPerSecond = 15; // how many times to fire the event per second
    var wait = false;

    this.app.stage.on("mousemove", (e: any) => {
      if (this.interval) {
        clearInterval(this.interval);
      }

      const { x, y } = e.data.global;

      if (!wait) {
        // fire the event

        new Array(5).fill(0).map((a, i) => {
          setTimeout(() => {
            this.spawnCirle(e.data.global);
          }, 10 * i);
        });

        // stop any further events
        wait = true;
        // after a fraction of a second, allow events again
        setTimeout(function () {
          wait = false;
        }, 1000 / timesPerSecond);
      }
    });
  }

  spawnCirle({ x, y }: { x: number; y: number }) {
    const gr = new Graphics();
    gr.beginFill(0xffffff);
    gr.drawCircle(
      randomInteger(1, 5),
      randomInteger(1, 5),
      randomInteger(1, 5)
    );
    gr.lineStyle(2, 0xff0000); //(thickness, color)
    let spawnVariation = 10;
    gr.y = y + randomInteger(-spawnVariation, spawnVariation) + 10;
    gr.x = x + randomInteger(-spawnVariation, spawnVariation) + 10;
    gr.endFill();
    this.app.stage.addChild(gr);

    const time = 300;
    let counter = 0;

    let randSpeed = randomInteger(0, 50) / 100;

    let randAlpha = randomInteger(5, 10) / 1000;

    gr.alpha = 0.7;

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
    this.app.stage.alpha = 0;
    this.app.stop();
  }
  show() {
    this.app.stage.alpha = 1;
    this.app.start();
  }
}
