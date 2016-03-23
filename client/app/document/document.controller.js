'use strict';

angular.module('fullstackApp')
  .controller('DocumentCtrl', function ($scope, $state, $stateParams ,DocumentsResource) {
      //This is how we are getting data from resource,
      // you need to execute query method on resource to get list of all data
    DocumentsResource.query().$promise.then(function (response) {
        $scope.documents = response;
    });

    $scope.new = function() {
        $state.go('documents.new');
    };

    $scope.edit = function(caseId) {
        $state.go('documents.edit', {id: caseId});
    };

  });
