var express = require('express')
var myapp = express()
var path = require('path')
const serveStatic = require('serve-static');

/*angular.module('flexappjs', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('next', {
                    url: '/'
                    views: {
                        '': {
                            '': { templateUrl: 'C:\Users\212617185\flexapp\SeparatingDirectives.html' },
                            'test': { templateUrl: 'C:\Users\212617185\flexapp\routepg.html'}
                        }
                    }
                });
        }
    ]);*/


// myapp.get('/', function(req, res){
//     res.sendFile(path.join(__dirname + '/SeparatingDirectives.html'))
// })

myapp.use('/', serveStatic("public"))

myapp.listen(3000, function(){
    console.log('Listening')
})

//////////////////////////////////////////////
// var app = angular.module('namesApp', ["ui.router"]);
//         app.config(function($stateProvider, $urlRouterProvider) {
//             $urlRouteProvider.otherwise('/home');
//             $stateProvider
//                 .state('home', {
//                     url: '/home',
//                     templateUrl: 'SeparatingDirectives_references.html'
//                 })
//                 .state('about', {
//                     url: '/about',
//                     views:{
//                         '': {templateUrl: 'routepg.html'}
//                     }
//                     //come back later
//                 })
//         });
//////////////////////////////////////////////
