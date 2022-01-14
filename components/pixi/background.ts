import * as Pixi from "pixi.js";

export class Background {
    private app: Pixi.Application; 
  
    public constructor() {
      console.log(document?.getElementById("pixi"))
      this.app = new Pixi.Application({
        // resizeTo: window,
        // preserveDrawingBuffer: true,
        // view: document?.getElementById("pixi") as HTMLCanvasElement
      });
   
    }
  
    init() { 
      document.body.appendChild(this.app.view);
  
      // ? for dev only
      this.app.renderer.plugins.interaction.on("pointerup", (e: any) => {
        const x = e.data.global.x;
        const y = e.data.global.y;
        console.log("Click Postion:", x, y);
      });
    }
   
    keybinds() {
      document.addEventListener("keydown", (event) => {
        if (event.keyCode == 32) {
            console.log("spacebar")
           event.preventDefault();
        }
      });
    }
  }