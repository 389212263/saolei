cc.Class({
    extends: cc.Component,

    properties: {
        number:cc.RichText,
        mine:cc.Node,
    },

    initMine:function (target) {
        this.idx=target.idx;
        this.game=target.game;
        this.state=target.state;
        var width=target.width;
        this.node.width=width;
        this.node.height=width;
        this.arr=target.arr;
        this.lineNumber=target.lineNumber;
        this.columnNumber=target.columnNumber;
        
        switch(this.state){
            case -1:this.mine.active=true;break;
            case 0: break;
            case 1: this.number.string='<color=#572AA8>1</color>';
                    break;
            case 2: this.number.string='<color=#E75909>2</color>';
                    break;
            case 3: this.number.string='<color=#180707>3</color>';
                    break;
            case 4: this.number.string='<color=#0700A5>4</color>';
                    break;
            case 5: this.number.string='<color=#00ff00>5</color>';
                    break;
            case 6: this.number.string='<color=#00ff00>6</color>';
                    break;
            case 7: this.number.string='<color=#00ff00>7</color>';
                    break;
            case 8: this.number.string='<color=#00ff00>8</color>';
                    break;
        };
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
