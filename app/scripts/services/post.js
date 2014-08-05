'use strict';

app.factory('Post', function($resource) {
  return $resource('https://sizzling-fire-7310.firebaseIO.com/posts/:id.json');
});
