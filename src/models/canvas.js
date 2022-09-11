class Canvas {
  constructor(htmlCanvas, tileSize, heightOffset) {
    this.htmlCanvas = htmlCanvas;
    this.tileSize = tileSize;
    this.heightOffset = heightOffset;
    this.blocks = [];
  }

  draw() {
    ctx = this.htmlCanvas.getContext("2d");
    ctx.fillStyle = "brown";

    this.blocks.forEach((b, i) => {
      console.log("Found Block: " + i);
      x = this.tileSize * b.x;
      y = this.tileSize * b.y + b.height * b.heightOffset;
      console.log("Coords: " + x + " " + y);
      ctx.fillRect(x, y, this.tileSize, this.tileSize);
    });
  }

  add(block) {
    this.blocks.push(block);
  }
}
