'use strict';

angular.module('fullstackApp')
  .controller('CasesCtrl', function ($scope , $state , CasesResource) {

      //This is how we are getting data from resource,
      // you need to execute query method on resource to get list of all data
    $scope.getCases = function functionName() {
        CasesResource.query().$promise.then(function (response) {
            $scope.cases = response;
        });
    };

    $scope.newCase = function(){
        $state.go('cases.new');
    };

    $scope.editCase = function(caseId){
        $state.go('cases.edit', {id: caseId});
    };

    $scope.delete = function(caseId) {
        CasesResource.delete({id : caseId}).$promise.then(function (){
            $scope.getCases();
        });
    };

    $scope.getCases();

  });
