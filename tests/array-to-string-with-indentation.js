"use strict";
/*jshint esversion: 6*/

const chai = require( "chai" );
const expect = chai.expect;
const processMessage = require( "../array-to-string-with-indentation" );

describe( "getMessageProcessorWithCallback", function () {
	it( "should just return a string when one is passed in", function () {
		expect( processMessage( "Test Line 1." ) )
			.to.equal( "Test Line 1." );
	} );

	it( "should join an array to a string with linebreaks", function () {
		expect( processMessage( [ "Test Line 1.", "Test Line 2." ] ) )
			.to.equal( "Test Line 1.\nTest Line 2." );
	} );

	it( "should join an two-dimensional array to a string with linebreaks and indention", function () {
		expect( processMessage( [
				"Test Line 1.", [
					"Test Sub-Line 1.",
					"Test Sub-Line 2."
				]
			] ) )
			.to.equal( "Test Line 1.\n\tTest Sub-Line 1.\n\tTest Sub-Line 2." );
	} );

	it( "should join an multidimensional array to a string with linebreaks and indention", function () {
		var message = [
			"Test Line 1.", [
				"Test Sub-Line 1.", [
					"Test Sub-Sub-Line 1.",
					"Test Sub-Sub-Line 2."
				]
			]
		];

		expect( processMessage( message ) )
			.to.equal( "Test Line 1.\n\tTest Sub-Line 1.\n\t\tTest Sub-Sub-Line 1.\n\t\tTest Sub-Sub-Line 2." );
	} );

	it( "should join an multidimensional array to a string with linebreaks and indention, even when the array has only one item", function () {
		var message = [
			"Test Line 1.", [
				"Test Sub-Line 1.", [
					"Test Sub-Sub-Line 1."
				]
			]
		];

		expect( processMessage( message ) )
			.to.equal( "Test Line 1.\n\tTest Sub-Line 1.\n\t\tTest Sub-Sub-Line 1." );
	} );

	it( "should join an multidimensional array to a string with linebreaks and indention, when the first array is nothing but another array", function () {
		var message = [
			[
				"Test Sub-Line 1.",
				"Test Sub-Line 2."
			]
		];

		expect( processMessage( message ) )
			.to.equal( "\tTest Sub-Line 1.\n\tTest Sub-Line 2." );
	} );

	it( "should join an multidimensional array to a string with linebreaks and indention, when there are two arrays in a row", function () {
		var message = [
			[
				"Test 1 Sub-Line 1.",
				"Test 1 Sub-Line 2."
			],
			[
				"Test 2 Sub-Line 1.",
				"Test 2 Sub-Line 2."
			]
		];

		expect( processMessage( message ) )
			.to.equal( "\tTest 1 Sub-Line 1.\n\tTest 1 Sub-Line 2.\n\tTest 2 Sub-Line 1.\n\tTest 2 Sub-Line 2." );
	} );

	it( "should join a really complex multidimensional array to a string with linebreaks and indention", function () {
		var message = [
			"Test Line 1.", [
				"Test Sub-Line 1.", [
					"Test Sub-Sub-Line 1.",
					"Test Sub-Sub-Line 2.", [
						"Test Sub-Sub-Sub-Line 1.",
						"Test Sub-Sub-Sub-Line 2.",
					]
				],
				"Test Sub-Line 2.",
			],
			"Test Line 2."
		];

		expect( processMessage( message ) )
			.to.equal( "Test Line 1.\n\tTest Sub-Line 1.\n\t\tTest Sub-Sub-Line 1.\n\t\tTest Sub-Sub-Line 2.\n\t\t\tTest Sub-Sub-Sub-Line 1.\n\t\t\tTest Sub-Sub-Sub-Line 2.\n\tTest Sub-Line 2.\nTest Line 2." );
	} );
} );
