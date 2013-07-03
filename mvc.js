
//アイスクリーム一覧
var icecreamModel = {
    //アイスクリームのリストをいれる。
    list: [
        {id: 't1',name: 'バニラ'},
        {id: 't2',name: 'チョコレートチップ'},
        {id: 't2',name: 'オレンジシャーベット'},
        {id: 't2',name: 'チョコミント'},
        {id: 't2',name: 'ストロベリー'},
        {id: 't2',name: '抹茶'}
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
        // this.updateView();
    },

    //指定したアイスクリームが選択されていればtrueを返す。
    contain: function(icecream){
        //配列にはいっているか？を見る。
        return this.list.indexOf(icecream) >= 0;
    },





};












