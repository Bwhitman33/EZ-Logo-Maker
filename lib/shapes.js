class shapes {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.svgReq = null;
    }

    colorSelect(color) {
        this.color = color;

        if (this.svgReq) {
            this.svgReq.setAttribute('fill', this.color);
        }
    }
    render() {}
}

class Circle extends shapes {
    render() {
        const circleContent = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
        return circleContent;
    }
}

class Square extends shapes {
    render() {
      const squareContent = `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`
      return squareContent;
    }
  }
  
class Triangle extends shapes {
    render() {
        const triangleContent = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
        return triangleContent;
    }
}

module.exports = {Triangle, Circle, Square};