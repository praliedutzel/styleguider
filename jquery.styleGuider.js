/*
* jQuery StyleGuider
* https://github.com/praliedutzel/styleguider
* Licensed under the MIT license.
* Copyright 2015 Pralie Dutzel
* http://praliedutzel.com
*/

(function ( $ ) {

	$.fn.styleGuider = function( options ) {

		// Declares default options
		var options = $.extend({
			codeWrapper : '.code-wrapper',
			generateNav : true,
			appendNavTo : 'body',
			headingsForNav : 'section > h2',
			navTitle : 'Style Guide',
			generateColors : true,
			colorWrapper : '.color-palette'
		}, options );


		// Searches the page for divs with a class of code-wrapper,
		// clones them, and wraps them in <pre> and <code> tags.
		// Prism will then apply syntax highlighting based on the
		// specified language, which is detected through the
		// data-code attribute.
		$( options.codeWrapper ).each(function() {
		    var parent = $(this).parent();
		    $(this).clone().insertAfter(this);

		    var clone = $(this).next( options.codeWrapper );
		    var lang = $(this).attr('data-code');

		    if (lang != '') {
		    	$(clone).wrapAll('<pre><code class="language-' + lang + '"></code></pre>');
		    }
		    else {
		    	$(clone).wrapAll('<pre><code></code></pre>');
		    }
		    $(clone).text($(this).html());
		    $(clone).contents().unwrap();
		});


		// If the generate navigation option is true, prepend the
		// style guide's navigation to the body (or otherwise
		// specified option) and add links for each of the
		// specified headings in the guide.
		if ( options.generateNav ) {
			$( options.appendNavTo ).prepend('<nav id="toc"><h5>' + options.navTitle + '</h5></nav>');
			$('.guide-wrapper').addClass('navOpen');

			$( options.headingsForNav ).each(function() {
				var headingTitle = $(this).html();
				var headingLink = $(this).html().replace(/\s+/g, '');
				$(this).attr('id', headingLink);

				$('nav#toc').append('<a href="#' + headingLink + '">' + headingTitle + '</a>');
			});
		}


		// If the generate color palette option is true, write
		// each color's hex value to a span within the color
		// wrapper. This allows the hex value to be easily copied.
		if ( options.generateColors ) {

			// RGB to Hex Color conversion function by Graham Walters
			function RGBtoHEX(rgb, hash) {
				var parts = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
				delete (parts[0]);
				for (var i = 1; i <= 3; ++i) {
					parts[i] = parseInt(parts[i]).toString(16);
					if (parts[i].length == 1) parts[i] = '0' + parts[i];
				}
				return (hash == true ? '#'+parts.join('').toUpperCase() : parts.join('').toUpperCase());
			}

			$( options.colorWrapper ).each(function() {
				var color = $(this).css('backgroundColor');
				$(this).find('span').text( '#' + RGBtoHEX(color) );
			});
		}
		

		// Enables chaining
		return this;

	};

}( jQuery ));