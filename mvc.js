
//アイスクリーム一覧
var icecreamModel = {
    //アイスクリームのリストをいれる。
    list: [
        {id: 't1',name: 'バニラ'},
        {id: 't2',name: 'チョコレートチップ'},
        {id: 't3',name: 'オレンジシャーベット'},
        {id: 't4',name: 'チョコミント'},
        {id: 't5',name: 'ストロベリー'},
        {id: 't6',name: '抹茶'}
    ],
    //すべてのアイスクリームを返す。
    getAll: function(){
        return this.list;
    },
    //idで指定したアイスクリームを返すメソッド。
    findById: function(id){
        //idのやつだけを返す。$.grepは条件で取り出すときに使える。
        return  $.grep(this.list,function(val){
                                    return id == val.id;
                                })[0];
    }
};

//選択されているアイスクリームの管理
var selectionModel = {
    //選択されているアイスクリームが入る。
    list: [],

    //アイスクリームの最大数
    icecreamNumber: 2,

    //listにアイスクリームを追加する。
    add: function(item){
        var list  = this.list;
        //listにいれる。
        list.push(item);
        //icecreamNumber以上に追加した場合
        if(list.length > this.icecreamNumber){
            //listの0番目を捨てる。
            list.shift();
        }
        //ビューを更新する。
        this.updateView();
    },

    //指定したアイスクリームが選択されていればtrueを返す。
    contain: function(icecream){
        //配列にはいっているか？を見る。
        return this.list.indexOf(icecream) >= 0;
    },

    //IDで指定したアイスクリームが選択されていればtrueが返す。
    containById: function(id){
        return this.contain(icecreamModel.findById(id));
    },

    //選択されているアイスクリームを返す。
    getIcecreams: function(){
        return this.list;
    },

    //viewを更新する。
    updateView: function(){
        //viewを更新する。

    }


};



//ここにテストを書く。
//簡単なテストチェック関数。expectが期待値、valueは実際の値。
function ok(title,expect,value){
    if(expect === value){
        //テストが通ったとき
        console.log("OK : " + title);
    }else{
        //テストが通らなかったとき
        console.log("NG : " + title + "[" + expect + "] -> [" + value + "]");
    }
}

//テスト内容
function testModels(){
    var all = icecreamModel.getAll();
    var icecreamNumber = selectionModel.icecreamNumber;

    ok("icecreamModel:個数",all.length,6);
    ok("icecreamModel.findById",icecreamModel.findById('t4'),all[3]);

    //登録してない場合
    ok("selectionModel:最初の個数",selectionModel.getIcecreams().length,0);
    ok("selectionModel.contain:空の場合",false,selectionModel.contain(all[0]));

    //1つ追加
    selectionModel.add(all[0]);
    ok("selectionModel:1つ目を追加したときの個数",selectionModel.getIcecreams().length,1);
    ok("selectionModel:1つ目を追加したときのチェック",true,selectionModel.contain(all[0]));

    //2つ追加
    selectionModel.add(all[1]);
    ok("selectionModel:2つ目を追加したときの個数",selectionModel.getIcecreams().length,2);
    ok("selectionModel:2つ目を追加したときのチェック",true,selectionModel.contain(all[1]));

    //3つを追加
    selectionModel.add(all[2]);
    //個数は2つ。
    ok("selectionModel:3つ目を追加したときの個数",selectionModel.getIcecreams().length,icecreamNumber);
    ok("selectionModel:3つ目を追加したときのチェック",true,selectionModel.contain(all[2]));
    //最初のものは消える。
    ok("selectionModel:2つ目を追加したときのチェック",false,selectionModel.contain(all[0]));


}

testModels();









