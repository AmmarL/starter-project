'use strict';

angular.module('fullstackApp')
  .controller('CasesEditCtrl', function ($scope , $state,  CasesResource, $stateParams) {
    $scope.message = 'Hello';

    if($stateParams.id){
        CasesResource.get({ id: $stateParams.id}).$promise.then(function(response){
            $scope.case = response;
        });
    }

    $scope.save = function(){
        if($stateParams.id){
            CasesResource.update({ id: $stateParams.id} , $scope.case).$promise.then(function(response){
                $scope.case = response;
            });
        }else {
            CasesResource.save( $scope.case).$promise.then(function(response){
                $state.go('cases.edit' , { id: response._id} );
                $scope.case = response;
            });
        }

    };
  });
