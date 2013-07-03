
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













