'use strict';

angular.module('fullstackApp')
  .controller('CasesEditCtrl', function ($scope , $state,  CasesResource, $stateParams) {
    $scope.message = 'Hello';
    $scope.case = {};

    if($stateParams.id){
        CasesResource.get({ id: $stateParams.id}).$promise.then(function(response){
            $scope.case = response;
        });
    }


    $scope.save = function(){
        $scope.case.documents = [{_id: '56f1dd3c9e2ec4c431f16dde'}, {_id: '56f1dbcef26343481b4adc96'}];
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

    $scope.addDocument = function(){
        $state.go('cases.addDoc' , { caseId: $stateParams.id} );
    };

  });
