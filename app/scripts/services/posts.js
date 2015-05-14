/**
 * Created by P2 on 5/14/2015.
 */
'use strict';

app.factory('Post', function($resource){
	return $resource('https://blinding-inferno-9424.firebaseio.com/posts/:id.json');
});