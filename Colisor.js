function Colisor() {
    this.sprites = [];
}

Colisor.prototype = {
    novoSprite: function (sprite) {
        this.sprites.push(sprite);
    },
    processar: function () {
        for (var sprite1 of this.sprites) {
            for (var sprite2 of this.sprites) {
                if (sprite1 == sprite2) continue;
                this.testarColisao(sprite1, sprite2);
            }
        }
    },
    testarColisao: function (sprite1, sprite2) {
        var rets1 = sprite1.retangulosColisao();
        var rets2 = sprite2.retangulosColisao();
        colisoes:
        for (var ret1 of rets1) {
            for (var ret2 of rets2) {
                if (this.retangulosColidem(ret1, ret2)) {
                    sprite1.colidiuCom(sprite2);
                    sprite2.colidiuCom(sprite1);
                    break colisoes;
                }
            }
        }
    },
    retangulosColidem: function (ret1, ret2) {
        return (ret1.x + ret1.largura) > ret2.x &&
            ret1.x < (ret2.x + ret2.largura) &&
            (ret1.y + ret1.altura) > ret2.y &&
            ret1.y < (ret2.y + ret2.altura);
    }
}