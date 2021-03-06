function Bola(context) {
    this.context = context;
    this.x = 0;
    this.y = 0;
    this.velocidadeX = 0;
    this.velocidadeY = 0;
    this.cor = 'black';
    this.raio = 10;
}

Bola.prototype = {
    atualizar: function () {
        this.x += this.velocidadeX;
        this.y += this.velocidadeY;
    },
    desenhar: function () {
        this.context.save();
        this.context.fillStyle = this.cor;
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, false);
        this.context.fill();
        this.context.restore();
    }
}