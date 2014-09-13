// global. currently active menu item 
var current_item = 0;

// few settings
var section_hide_time = 300;
var section_show_time = 300;

// jQuery stuff
jQuery(document).ready(function($) {

	function changeSection(element) {
		if( ! $(element).hasClass('active') ) { 
			current_item = element;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	}
	// Switch section
	$("a", '.mainmenu').click(function() {
		changeSection($(this));
	});		

	$(".taglink").click(function() {
		changeSection($(this));
	});		

});