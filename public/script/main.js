
var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope, $http) {
    $scope.todoList = [];
    $http.get('/v2/todo')
    .then(function(response){
        console.log(response.data);
        $scope.todoList = response.data;
    });
    $scope.todoAdd = function() {
        // $scope.todoList.push({todoText:$scope.todoInput, done:false});
         $http.post('/v2/todo', {todoText:$scope.todoInput, done:false})
         .then(function(response){
            console.log(response);
         });

        $scope.todoInput = "";
        $http.get('/v2/todo')
            .then(function(response){
            console.log(response.data);
            $scope.todoList = response.data;
    });
    };
    $scope.updateTodoState = function(todo){
        console.log(todo);
        $http.put('/v2/todo', { done : todo.done, id: todo._id})
        .then(function(response){
            console.log(response);
        });

    }
    $scope.remove = function() {
        // var oldList = $scope.todoList;
        // $scope.todoList = [];
        // angular.forEach(oldList, function(x) {
        //     if (!x.done) $scope.todoList.push(x);
        // });
        $http.delete('/v2/todo',)
            .then(function(response) {
                $scope.todoList = response.data;
        });
    };
});