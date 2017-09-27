"use strict";

var processMessageArrayWithLevelCache = Array( 1 );

function getProcessMessageArrayWithLevel( level ) {
	var joinString = "\n" + Array( level + 1 )
		.join( "\t" );

	return function ( message ) {
		return message instanceof Array ?
			"\t" + ( message.map( getProcessMessageArrayWithLevel( level + 1 ) )
				.join( joinString ) ) :
			message;
	};
}

module.exports = function ( level ) {
	if ( processMessageArrayWithLevelCache.length <= level ) {
		return ( processMessageArrayWithLevelCache[ level ] = getProcessMessageArrayWithLevel( level ) );
	} else {
		return processMessageArrayWithLevelCache[ level ];
	}
};
