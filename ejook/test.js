/**
 * Created by leizha on 10/24/16.
 */
var indexlayer = [ {
    first:"第一周线性结构",
    second:["9月13日视频回放","Array","LinkedList","Stack","Queue"],
    third:["Easy","Medium","Hard"]
},
    { first:"第二周树形结构",
        second:["9月20日视频回放","Recursion","Binary Tree","Binary Search"],
        third:["Easy","Medium","Hard"]
    },
    {
        first:"第三周图形结构",
        second:["9月27日视频回放","BackTracking","Heap & Best fist Search","DFS","BFS"],
    },
    {
        first:"第四周高级算法",
        second:["10月4日视频回放","Dynamic Programming"],
    }
];

var sum =0;
for(var indexl in indexlayer){
    // console.log(indexlayer[indexl].first + 'view/'+indexl.first+'.html');
    // console.log(indexl.first);
    console.log(indexlayer[indexl].second.map());
    console.log("------" +sum );
    sum++;

    // for(var index2 in indexlayer[indexl].second){
    //     console.log(indexlayer[indexl]);
    //     // for(var i = 0; i< indexlayer[indexl].third;++i)
    //     //
    //     // console.log( 'view/'+indexlayer[indexl].second[index2]+indexlayer[indexl].third[i]+'.html');
    //     // console.log( 'view/'+indexlayer[indexl].second[index2]+'Medium'+'.html');
    //     // console.log( 'view/'+indexlayer[indexl].second[index2]+'Hard'+'.html');
    //
    // }
}

var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj));