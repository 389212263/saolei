cc.Class({
    extends: cc.Component,

    properties: {
        width:0,
        lineNumber:0,
        columnNumber:0,
    },

    // use this for initialization
    onLoad: function () {
        var ctx = this.getComponent(cc.Graphics);
        for(let i=0;i<this.lineNumber+1;i++){
            ctx.moveTo(-this.width*this.lineNumber/2,this.width*this.columnNumber/2-this.width*i);
            ctx.lineTo(this.width*this.lineNumber/2,this.width*this.columnNumber/2-this.width*i);
        };
        for(let i=0;i<this.columnNumber+1;i++){
            ctx.moveTo(-this.width*this.lineNumber/2+this.width*i,this.width*this.columnNumber/2);
            ctx.lineTo(-this.width*this.lineNumber/2+this.width*i,-this.width*this.columnNumber/2);
        };
        ctx.stroke();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
