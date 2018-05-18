function Animacao(context) {
    this.context = context;
    this.sprites = [];
    this.ligado = false;
}

Animacao.prototype = {
    novoSprite: function (sprite) {
        this.sprites.push(sprite);
    },
    ligar: function () {
        this.ligado = true;
        this.proximoFrame();
    },
    desligar: function () {
        this.ligado = false;
    },
    proximoFrame: function () {
        if (this.ligado) {
            this.limparTela();
            for (var i in this.sprites) {
                this.sprites[i].atualizar();
            }
            for (var i in this.sprites) {
                this.sprites[i].desenhar();
            }
            var animacao = this;
            requestAnimationFrame(function () {
                animacao.proximoFrame();
            });
        }
        return;
    },
    limparTela: function () {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
}