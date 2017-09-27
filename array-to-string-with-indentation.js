"use strict";

var getMessageProcessor = require( "./lib/getMessageProcessor" );

module.exports = function ( message ) {
	return message instanceof Array ?
		message.map( getMessageProcessor( 1 ) )
		.join( "\n" ) :
		message;
};
