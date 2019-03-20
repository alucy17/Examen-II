// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'auto', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/destinos/',
    	url: 'destinos.html',
    	name: 'destinos',
  		},
		{
		path: '/sobre/',
    	url: 'sobre.html',
    	name: 'sobre',
  		},
		{
		path: '/promociones/',
    	url: 'promociones.html',
    	name: 'promociones',
  		},
		{
		path: '/cotizaciones/',
    	url: 'cotizaciones.html',
    	name: 'cotizaciones',
  		},
		{
		path: '/tabs/',
    	url: 'tabs.html',
    	name: 'tabs',
  		},
		{
		path: '/accordions/',
    	url: 'accordions.html',
    	name: 'accordions',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;


var notificationWelcome = myApp.notification.create({
  icon: '<i class="material-icons">info</i>',
  title: '¡Bienvenido!',
  subtitle: 'Aplicaciones con Framework7',
  text: '',
  closeButton: true,
  closeTimeout: 3000,
});
$$('.open-welcome').on('click', function () {
  notificationWelcome.open();
});
$$(window).on('load', function () {
  notificationWelcome.open();
});




 

