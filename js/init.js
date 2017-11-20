let sidenav 		= new M.Sidenav(document.querySelector('.sidenav'));
let $content 		= $('#content');
let lastScrollTop 	= 0;
let st 				= {};
let $navbar			= $('.navbar-fixed');
let path			= '';

// SPA
$('a').click(function(e) {
	path = $(this).attr('href');
	
	// scroll até o topo da página
	window.scrollTo(0, 0);
	
	e.preventDefault();
	
	if(path.substr(0, 1) == '#') return;
	
	$.ajax({
		method: 'GET',
		url: 'view/' + path + '.html',
		dataType: 'text',
		
		success: function(data) {
			$content.html(data);
		}
	});
	
	// fecha o menu lateral
	sidenav.close();
	
	// remove abas na home page
	$('.nav-content').attr('style', 'display: ' + (path == 'home' ? 'none' : 'block') + ';');
	
	// ativa item do menu
	$('.sidenav li.active').removeClass('active');
	$(this).parent().addClass('active');
	
	// altera URL
	window.history.pushState("string", "Title", "#" + path);
});

$('.sidenav > li > a[href=' + getPath() + ']').click();

// navbar scroll
$(window).scroll(function(){
	st = $(this).scrollTop();
	$navbar.attr('style', 'top: ' + (st > lastScrollTop ? '-56' : '0') + 'px;');
	lastScrollTop = st;
});

FastClick.attach(document.body);

function getPath() {
	let currentUrl 	= document.URL;
	let hashIndex	= currentUrl.lastIndexOf('#');
	let urlPath		= currentUrl.substr(hashIndex + 1);
	
	return hashIndex == -1 || urlPath == '' ? 'home' : urlPath;
}