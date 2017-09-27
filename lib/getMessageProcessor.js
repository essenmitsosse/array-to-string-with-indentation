"use strict";

module.exports = function getMessageProcessor( level ) {
	var joinString = "\n" + Array( level + 1 )
		.join( "\t" );

	return function ( message ) {
		return message instanceof Array ?
			"\t" + ( message.map( getMessageProcessor( level + 1 ) )
				.join( joinString ) ) :
			message;
	};
};
