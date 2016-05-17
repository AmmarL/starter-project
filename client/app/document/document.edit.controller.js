'use strict';

angular.module('fullstackApp')
  .controller('DocumentEditCtrl', function ($scope , DocumentsResource, $stateParams) {
    $scope.message = 'Hello';

    if($stateParams.id){
        DocumentsResource.get({ id: $stateParams.id}).$promise.then(function(response){
            $scope.document = response;
        });
    }

    $scope.save = function(){
        $scope.document.case = $stateParams.caseId;
        DocumentsResource.save($scope.document).$promise.then(function(response){
            $scope.document = response;
        });
    };
  });
