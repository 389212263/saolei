cc.Class({
    extends: cc.Component,

    properties: {
        mineTouched:cc.Node,
    },

    start:function(){
        var mine=this.node.parent.getComponent('mine');
        this.lineNumber=mine.lineNumber;
        this.columnNumber=mine.columnNumber;
        this.state=mine.state;
        this.idx=mine.idx;
    },

    onBtnClick:function(){
        if(this.node.parent.parent.getComponent('game').mark){
           this.node.parent.getChildByName('mark').active=!this.node.parent.getChildByName('mark').active;
        }else if(!this.node.parent.getChildByName('mark').active){
            this.node.active =false;
            if(this.state===-1){
              this.mineTouched.active=true;
              this.toggleHomeBtns();
            };
        };
    },

    toggleHomeBtns:function(){
        for(let i=0;i<this.lineNumber*this.columnNumber;i++){
            if(this.node.parent.parent.getChildByTag(i).getChildByName('button').active){
                this.node.parent.parent.getChildByTag(i).getChildByName('button').active=false;
            };
            this.node.parent.parent.getChildByTag(i).getChildByName('mark').opacity=100;
        };
    },

    onDisable:function(){
        if(this.state===0){
            if(this.idx%this.lineNumber===0){
                    if(this.idx-this.lineNumber>=0){
                            this.node.parent.parent.getChildByTag(this.idx-this.lineNumber).getChildByName('button').active=false;
                    };
                    if(this.idx-this.lineNumber+1>=0){
                            this.node.parent.parent.getChildByTag(this.idx-this.lineNumber+1).getChildByName('button').active=false;
                    };
                    if(this.idx+1<this.lineNumber*this.columnNumber){
                            this.node.parent.parent.getChildByTag(this.idx+1).getChildByName('button').active=false;
                    };
                    if(this.idx+this.lineNumber<this.lineNumber*this.columnNumber){
                            this.node.parent.parent.getChildByTag(this.idx+this.lineNumber).getChildByName('button').active=false;
                    };
                    if(this.idx+this.lineNumber+1<this.lineNumber*this.columnNumber){
                            this.node.parent.parent.getChildByTag(this.idx+this.lineNumber+1).getChildByName('button').active=false;
                    };
                }else if(this.idx%this.lineNumber===this.lineNumber-1){
                    if(this.idx-this.lineNumber-1>=0){
                            this.node.parent.parent.getChildByTag(this.idx-this.lineNumber-1).getChildByName('button').active=false;
                    };
                    if(this.idx-this.lineNumber>=0){
                            this.node.parent.parent.getChildByTag(this.idx-this.lineNumber).getChildByName('button').active=false;
                    };
                    if(this.idx-1>=0){
                            this.node.parent.parent.getChildByTag(this.idx-1).getChildByName('button').active=false;
                    };
                    if(this.idx+this.lineNumber-1<this.lineNumber*this.columnNumber){
                            this.node.parent.parent.getChildByTag(this.idx+this.lineNumber-1).getChildByName('button').active=false;
                    };
                    if(this.idx+this.lineNumber<this.lineNumber*this.columnNumber){
                            this.node.parent.parent.getChildByTag(this.idx+this.lineNumber).getChildByName('button').active=false;
                    };
                }else{
                    if(this.idx-this.lineNumber-1>=0){
                            this.node.parent.parent.getChildByTag(this.idx-this.lineNumber-1).getChildByName('button').active=false;
                    };
                    if(this.idx-this.lineNumber>=0){
                            this.node.parent.parent.getChildByTag(this.idx-this.lineNumber).getChildByName('button').active=false;
                    };
                    if(this.idx-this.lineNumber+1>=0){
                            this.node.parent.parent.getChildByTag(this.idx-this.lineNumber+1).getChildByName('button').active=false;
                    };
                    
                    if(this.idx+this.lineNumber-1<this.lineNumber*this.columnNumber){
                            this.node.parent.parent.getChildByTag(this.idx+this.lineNumber-1).getChildByName('button').active=false;
                    };
                    if(this.idx+this.lineNumber<this.lineNumber*this.columnNumber){
                            this.node.parent.parent.getChildByTag(this.idx+this.lineNumber).getChildByName('button').active=false;
                    };
                    if(this.idx+this.lineNumber+1<this.lineNumber*this.columnNumber){
                            this.node.parent.parent.getChildByTag(this.idx+this.lineNumber+1).getChildByName('button').active=false;
                    };
                    this.node.parent.parent.getChildByTag(this.idx+1).getChildByName('button').active=false;
                    this.node.parent.parent.getChildByTag(this.idx-1).getChildByName('button').active=false;
                };
    };
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
