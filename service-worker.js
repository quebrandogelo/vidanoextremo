let cacheName = 'vida-no-extremo';
let filesToCache = [
	// HTML
	'./',
	'index.html',
	'view/adelia.html',
	'view/baleia.html',
	'view/foca.html',
	'view/home.html',
	'view/imperador.html',
	'view/krill.html',
	
	// JS
	'https://code.jquery.com/jquery-3.2.1.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.1/js/materialize.min.js',
	'js/fastclick.js',
	'js/init.js',
	
	// CSS
	'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.1/css/materialize.min.css',
	'https://fonts.gstatic.com/s/materialicons/v34/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2',
	'https://fonts.googleapis.com/icon?family=Material+Icons',
	'css/style.css',
	
	// IMG
	'img/1.15131.jpg',
	'img/3_cl_20150116172027.jpg',
	'img/7penguins.jpg',
	'img/664fa2fee16b49cdb1b33c92c5203564_400x400-emperor-and-adelie-swc.jpg',
	'img/60592.ngsversion.1466467100289.adapt.1900.1.jpg',
	'img/170421-blue-whale-eating-krill-drone-vin_ds1702001-133_640x360_926724163640.jpg',
	'img/189233-004-8139E677.jpg',
	'img/194935.svg',
	'img/462599ce-f9ae-e993-d961-5966f82a9829.jpg',
	'img/1200110Chinstrap brushtail.JPG',
	'img/1230586.jpg',
	'img/20161014_58006bf8f1610.png',
	'img/65419612_frozen312_1.jpg',
	'img/87470414_XS.jpg',
	'img/116978485-blue-whae.jpg',
	'img/16596318588-43e5897fc1-k.jpg',
	'img/adelie-penguins-diving-into-the-sea-paulette-is-darrell-gulin.jpg',
	'img/antarctic (1).jpg',
	'img/antarctic (2).jpg',
	'img/antarctic (3).jpg',
	'img/antarctic.jpg',
	'img/Antarctica_Whale2_Shutterstock-1024x683.jpg',
	'img/bigaudience.jpg',
	'img/d80325803d3f945dc3ff50600f90c3cd--penguin-pictures-wildlife-photography.jpg',
	'img/default.jpg',
	'img/developer-api-coding-screen-512.png',
	'img/emperor-penguin-4_3533853k.jpg',
	'img/f0k5103-2.jpg',
	'img/flat-faces-icons-circle-6-min.png',
	'img/icon.jpg',
	'img/image.jpg',
	'img/Krill_Coronado.jpg',
	'img/krill-intro.jpg',
	'img/krill-swarm.jpg',
	'img/maxresdefault (1).jpg',
	'img/maxresdefault.jpg',
	'img/penguin.jpg',
	'img/penguin_feet.jpg',
	'img/pinguim.jpg',
	'img/pinguim_adelia.jpg',
	'img/polo-sul.jpg',
	'img/shutterstock_107424374.0.0.jpg',
	'img/shutterstock_107424374.0.0.jpg',
	'img/weddell_seals.jpg',
	'img/weddell-seal-2-jvo-lg.jpg',
	'img/weddell-seal-poking-head-through-breathing-hole-in-ice-close-up-doug-allan.jpg',
	'img/wedd-pup-nose-hide.jpg',
	'img/ZHB2lYg.jpg'
];

self.addEventListener('install', function(e) {
	console.log('[ServiceWorker] Install');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('[ServiceWorker] Caching app shell');
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener('activate',  event => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request, {ignoreSearch:true}).then(response => {
			return response || fetch(event.request);
		})
	);
});