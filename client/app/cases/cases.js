'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cases', {
        url: '/cases',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('cases.list', {
        url: '',
        controller: 'CasesCtrl',
        templateUrl: 'app/cases/cases.html'
      })
      .state('cases.new', {
        url: '/new',
        controller: 'CasesEditCtrl',
        templateUrl: 'app/cases/casesEdit.html'
    }).state('cases.edit', {
        url: '/:id/edit',
        controller: 'CasesEditCtrl',
        templateUrl: 'app/cases/casesEdit.html'
    }).state('cases.addDoc', {
        url: '/:caseId/add-document',
        controller: 'DocumentEditCtrl',
        templateUrl: 'app/document/documentedit.html'
    });

  });
