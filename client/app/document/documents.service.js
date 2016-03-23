'use strict';

angular.module('fullstackApp')
.factory('DocumentsResource', function ($resource) {
    return $resource('/api/documents/:id/', {
        id: '@id'
    },{
        update: {
            method: 'PUT'
        }
    });
});
