/**
 * Created by leizha on 10/14/16.
 */
var OB = angular.module("Template",['ngRoute']);

var indexlayer = [ {
    "first":"第一周线性结构",
    "second":["9月13日视频回放","Array","LinkedList","Stack","Queue"],
    "third":["Easy","Medium","Hard"]
},
    { "first":"第二周树形结构",
        "second":["9月20日视频回放","Recursion","Binary Tree","Binary Search"],
        "third":["Easy","Medium","Hard"]
    },
    {
        "first":"第三周图形结构",
        "second":["9月27日视频回放","BackTracking","Heap & Best fist Search","DFS","BFS"],
    },
    {
        "first":"第四周高级算法",
        "second":["10月4日视频回放","Dynamic Programming"],
    }
];



OB.controller("navRepeat",function ($scope) {
    $scope.navOB = indexlayer;
});


OB.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/引言', {
            templateUrl: 'view/引言.html',
            controller: 'navRepeat'
        })
}]);


OB.config(['$routeProvider', function ($routeProvider) {

    for(var index1 in indexlayer) {
        $routeProvider.when('/' + indexlayer[index1].first, {
            templateUrl: 'view/' + indexlayer[index1].first + '.html',
            controller: 'navRepeat'
        });

            for(var index2 in indexlayer[index2].second){
                $routeProvider.when('/'+indexlayer[index2].first+indexlayer[index1].second[index2], {
                    templateUrl: 'view/'+indexlayer[index2].first+indexlayer[index1].second[index2]+'.html',
                    controller: 'navRepeat'
                });
            }


    }}])


// for(var indexl in indexlayer){
//     console.log(indexlayer[indexl].first + 'view/'+indexl.first+'.html');
//     console.log(indexl.first);
//     for(var index2 in indexlayer[indexl].second){
//
//         console.log( 'view/'+indexlayer[indexl].first+ indexlayer[indexl].second[index2]+'.html');
//
//     }
// }