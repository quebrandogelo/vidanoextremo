let sidenav 	= new M.Sidenav(document.querySelector('.sidenav'));
let $content 	= $('#content');

// SPA
$('a').click(function(e) {
	let href = $(this).attr('href');
	
	e.preventDefault();
	
	sidenav.close();
	
	if(href.substr(0, 1) == '#') return;
	
	// remove abas na home page
	$('.nav-content').attr('style', 'display: ' + (href == 'home' ? 'none' : 'block') + ';');
	
	// ativa item do menu
	$('.sidenav li.active').removeClass('active');
	$(this).parent().addClass('active');
	
	$.ajax({
		method: 'GET',
		url: 'view/' + href + '.html',
		dataType: 'text',
		
		success: function(data) {
			$content.html(data);
		}
	});
});

FastClick.attach(document.body);

$('.sidenav > li:nth-child(2) > a').click();