import { Application, Graphics, Ticker } from "pixi.js";
import { runInThisContext } from "vm";
import { randomInteger } from "./helper";

export class Background {
  private app: Application;
  private ticker: Ticker = new Ticker();

  public constructor() {
    console.log(document?.getElementById("pixi"));
    this.app = new Application({
      resizeTo: window,
      preserveDrawingBuffer: true,
      view: document?.getElementById("pixi") as HTMLCanvasElement,
      backgroundAlpha: 1,
      antialias: true,
      autoDensity: true,
      resolution: 2,
      transparent: true,
    });

    this.init();

    this.keybinds();
  }

  init() {
    document.body.appendChild(this.app.view);

    this.ticker.start();
    this.app.stage.interactive = true;

    var timesPerSecond = 5; // how many times to fire the event per second
    var wait = false;

    this.app.stage.on("mousemove", (e: any) => {
      const { x, y } = e.data.global;

      if (!wait) {
        // fire the event
        this.spawnCirle(e.data.global as { x: number; y: number });
        setTimeout(() => {
          this.spawnCirle(e.data.global as { x: number; y: number });
        }, 50);
        setTimeout(() => {
          this.spawnCirle(e.data.global as { x: number; y: number });
        }, 100);

        new Array(10).fill(0).map((a, i) => {
          setTimeout(() => {
            this.spawnClick(e.data.global);
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
      randomInteger(2, 20),
      randomInteger(2, 20),
      randomInteger(2, 20)
    );
    gr.lineStyle(2, 0xff0000); //(thickness, color)
    let spawnVariation = 70;
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
    let spawnVariation = 70;
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

  keybinds() {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode == 32) {
        console.log("spacebar");
        event.preventDefault();
      }
    });
  }
}
