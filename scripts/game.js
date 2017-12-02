const graphics=require('graphics');
cc.Class({
    extends: cc.Component,

    properties: {
        mineNumber:0,
        minePrefab:cc.Prefab,
        graphics:graphics,
    },

    // use this for initialization
    onLoad: function () {
        this.node.getChildByName('graphics').active=true;
        this.arr=this.getMineArr(this.mineNumber,this.graphics.lineNumber,this.graphics.columnNumber);
        this.createMine();
        this.mark=false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(event){
            if(event.keyCode===cc.KEY.a)this.mark=true;
        }, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function(event){
            if(event.keyCode===cc.KEY.a)this.mark=false;
        }, this);
    },

    createMine:function(){
        for(let i=0;i<this.graphics.lineNumber*this.graphics.columnNumber;i++){
            var mineScript=cc.instantiate(this.minePrefab).getComponent('mine');
            this.node.addChild(mineScript.node,1,i);
            mineScript.initMine({
                idx:i,
                game:this.node,
                state:this.arr[i],
                width:this.graphics.width,
                arr:this.arr,
                lineNumber:this.graphics.lineNumber,
                columnNumber:this.graphics.columnNumber,
            });
            var x=-this.graphics.lineNumber/2*this.graphics.width+mineScript.node.width/2+mineScript.node.width*(i%10);
            var y=this.graphics.columnNumber/2*this.graphics.width-mineScript.node.width/2-mineScript.node.width*Math.floor(i/10);
            mineScript.node.setPosition(x,y);
        };
        
    },

    getMineArr:function(mineNumber,lineNumber,columnNumber){
        let arr=[];
        for(let i=0;i<mineNumber;i++){
            var randomNumber = Math.floor(cc.random0To1()*lineNumber*columnNumber);
            if(arr[randomNumber]!==-1){
                arr[randomNumber] = -1;
            }else{
                i--;
            };
        };
        for(let i=0;i<lineNumber*columnNumber;i++){
            if(arr[i]!==-1){
                arr[i]=0;
                if(i%lineNumber===0){
                    if(i-lineNumber>=0&&arr[i-lineNumber]===-1){
                        arr[i]++;
                    };
                    if(i-lineNumber+1>=0&&arr[i-lineNumber+1]===-1){
                        arr[i]++;
                    };
                    if(i+1<lineNumber*columnNumber&&arr[i+1]===-1){
                        arr[i]++;
                    };
                    if(i+lineNumber<lineNumber*columnNumber&&arr[i+lineNumber]===-1){
                        arr[i]++;
                    };
                    if(i+lineNumber+1<lineNumber*columnNumber&&arr[i+lineNumber+1]===-1){
                        arr[i]++;
                    };
                }else if(i%lineNumber===lineNumber-1){
                    if(i-lineNumber-1>=0&&arr[i-lineNumber-1]===-1){
                        arr[i]++;
                    };
                    if(i-lineNumber>=0&&arr[i-lineNumber]===-1){
                        arr[i]++;
                    };
                    if(i-1>=0&&arr[i-1]===-1){
                        arr[i]++;
                    };
                    if(i+lineNumber-1<lineNumber*columnNumber&&arr[i+lineNumber-1]===-1){
                        arr[i]++;
                    };
                    if(i+lineNumber<lineNumber*columnNumber&&arr[i+lineNumber]===-1){
                        arr[i]++;
                    };
                }else{
                    if(i-lineNumber-1>=0&&arr[i-lineNumber-1]===-1){
                        arr[i]++;
                    };
                    if(i-lineNumber>=0&&arr[i-lineNumber]===-1){
                        arr[i]++;
                    };
                    if(i-lineNumber+1>=0&&arr[i-lineNumber+1]===-1){
                        arr[i]++;
                    };
                    
                    if(i+lineNumber-1<lineNumber*columnNumber&&arr[i+lineNumber-1]===-1){
                        arr[i]++;
                    };
                    if(i+lineNumber<lineNumber*columnNumber&&arr[i+lineNumber]===-1){
                        arr[i]++;
                    };
                    if(i+lineNumber+1<lineNumber*columnNumber&&arr[i+lineNumber+1]===-1){
                        arr[i]++;
                    };
                    if(arr[i-1]===-1){
                        arr[i]++;
                    };
                    if(arr[i+1]===-1){
                        arr[i]++;
                    };
                };
            };
        };
        return arr;
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
