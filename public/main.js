var app = angular.module('namesApp', ["ui.router"]);

// app.use(express.static(__dirname + '/routepg.html'));
// app.use(express.static(__dirname + '/SeparatingDirectives.html'));

        app.config(function($stateProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'SeparatingDirectives.html'
                    // template: '<p>home</p>'
                    
                })
                .state('nextpg', {
                    url: '/nextpg',
                    templateUrl: 'routepg.html'
                    // template: '<p>nextpg</p>'
                })
        });

        app.run(['$state', function($state){
            $state.transitionTo('home');
        }])

        app.controller('uiRoutingControl', function($scope, $state){
            $scope.content = 'nextpg';
            $scope.setPage = function(page){
                $state.transitionTo(page);
            }
        })
    
    /////////////////////////////////////////////////////////////

    app.controller('namesControl', function ($scope) {
        $scope.namesList = [];
        $scope.addToNamesList = function () {
            // console.log("entered ADD function");
            if ($scope.newNameEntered && $scope.newNameEntered != "") {
                $scope.namesList.push({ nameTyped: $scope.newNameEntered });
                // console.log("...and just added " + $scope.newNameEntered);
                console.log("just added " + $scope.newNameEntered);
                
                $scope.newNameEntered = "";
            }
        };
        $scope.deleteFromNamesList = function () {
            console.log("entered DELETE function");
            $scope.namesList.splice(this.$index,1);
        }
    });

    app.directive('deletebuttonDirective', function () {

        return {
            scope:{
                deleteFromNamesList: '&',
                nameTyped:'@',
            },
            transclude: true,
            template: '<span ng-bind="nameTyped"></span><ng-transclude></ng-transclude><button class="button-class" type="button" value="delete" ng-click="deleteFromNamesList()"><i class="fa fa-trash" style="color:darkred;"></i></button>'
        };
    });

    app.directive('boldDirective', function () {

        return {
            transclude: true,
            // template: '<span ng-transclude ng-class="{bold_text: isBoldBool}"></span><button class="button-class" type="button" value="bold text" ng-click="toggleBold()"/><input type="checkbox" ng-model="isBoldBool"> bold text </button>',
            
            //change the below to use ng-ifs and font awesome for the checkbox
            
            template: 
            '<span ng-class = "{bold_text: isBoldBool}"><ng-transclude></ng-transclude></span>'+
            '<span ng-if = "!isBoldBool"><button class = "button-class" ng-click = "toggleBold()"><i class="fa fa-check-circle-o" aria-hidden="true"></i> bold text</button></span>'+
            '<span ng-if = "isBoldBool"><button class = "button-class" ng-click = "toggleBold()"><i class="fa fa-check-circle" aria-hidden="true"></i> bold text</button></span>',

            link: function(scope, element){
                scope.toggleBold = function(){
                    scope.isBoldBool = !scope.isBoldBool;
                    if(scope.isBoldBool){
                        console.log("entered TOGGLE BOLD function...isBoldBool is true");
                    }
                    else{
                        console.log("entered TOGGLE BOLD function...isBoldBool is false");
                    }
                }
            }
        };
    });

    app.directive('colorDirective', function () {

        return {
            transclude: true,
            template: '<ng-transclude></ng-transclude><input class="button-class" ng-model="color" type="color" ng-change="changeTextColor()">',
            link: function(scope, element){
                scope.changeTextColor = function(){
                    element.css('color', scope.color);
                    console.log("entered COLOR CHANGE function...color value is " + scope.color);                                        
                }
            }
        };
    });

    debugger;