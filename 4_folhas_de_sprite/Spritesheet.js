function Spritesheet(imagem, context, linhas, colunas) {
    this.imagem = imagem;
    this.context = context;
    this.linhas = linhas;
    this.colunas = colunas;
    this.intervalo = 1;
    this.linha = 0;
    this.coluna = 0;
}
Spritesheet.prototype = {
    proximoQuadro: function () {
        var agora = new Date().getTime();
        if (!this.ultimoTempo) this.ultimoTempo = agora;
        if (agora - this.ultimoTempo < this.intervalo) return;

        if (this.coluna < this.colunas - 1) {
            this.coluna++;
        } else {
            this.coluna = 0;
        }

        this.ultimoTempo = agora;
    },
    desenhar: function (x, y) {
        var largura = this.imagem.width / this.colunas;
        var altura = this.imagem.height / this.linhas;

        this.context.drawImage(this.imagem, largura * this.coluna, altura * this.linha, largura, altura, x, y, largura, altura);
    }
}
