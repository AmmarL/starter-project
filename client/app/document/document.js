'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('documents', {
        url: '/documents',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('documents.list', {
        url: '',
        controller: 'DocumentCtrl',
        templateUrl: 'app/document/document.html'
      })
      .state('documents.new', {
        url: '/new',
        controller: 'DocumentEditCtrl',
        templateUrl: 'app/document/documentedit.html'
    }).state('documents.edit', {
      url: '/:id',
      controller: 'DocumentEditCtrl',
      templateUrl: 'app/document/documentedit.html'
  });

  });
