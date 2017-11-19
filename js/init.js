let sidenav 		= new M.Sidenav(document.querySelector('.sidenav'));
let $content 		= $('#content');
let lastScrollTop 	= 0;
let st 				= {};
let $navbar			= $('.navbar-fixed');
let currentPath		= getPath();
let path			= '';

console.log(currentPath);

// SPA
$('a').click(function(e) {
	currentUrl 	= document.URL;
	currentPath = currentUrl.substr(currentUrl.lastIndexOf('#') + 1);
	path 		= $(this).attr('href');
	
	if(path.substr(0, 1) === '#') return;
	
	$.ajax({
		method: 'GET',
		url: 'view/' + path + '.html',
		dataType: 'text',
		
		success: function(data) {
			$content.html(data);
		}
	});
	
	sidenav.close();
	
	// remove abas na home page
	$('.nav-content').attr('style', 'display: ' + (path == 'home' ? 'none' : 'block') + ';');
	
	// ativa item do menu
	$('.sidenav li.active').removeClass('active');
	$(this).parent().addClass('active');
	
	// altera URL
	window.history.pushState("string", "Title", "#" + path);
	
	e.preventDefault();
});

$('.sidenav > li > a[href=' + currentPath + ']').click();

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
	
	return hashIndex == -1 ? "home" : currentUrl.substr(hashIndex + 1);
}