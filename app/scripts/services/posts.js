/**
 * Created by P2 on 5/14/2015.
 */
'use strict';

app.factory( 'Post', function ($firebase, FIREBASE_URL) {


	var ref = new Firebase( FIREBASE_URL ),
		posts = $firebase( ref.child( 'posts' ) ).$asArray();

	var Post = {
		all   : posts,
		create: function (post) {
			return posts.$add( post );
		},
		get   : function (postId) {
			return $firebase( ref.child( 'posts' ).child( postId ) ).$asObject();
		},
		delete: function (post) {
			return posts.$remove( post );
		}
	};

	return Post;
} );
