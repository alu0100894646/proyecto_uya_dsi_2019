Tarea Introducción protocolo HTTP

Para la url:  http://www.gobiernodecanarias.org/istac/api/

Qué peticiones desencadena la consulta.
	Tras hacer la petición de la página principal de la url, se piden una hoja de estilos css (istac.css) y dos imágenes (logo_isatic.jpg, logo_edatos.jpg)
	Estas peticiones son de tipo text/http y luego desencadena otra petición  de los mismos ficheros que somos redireccionados. 
	Por último se pide una hoja de estilos de fuentes. 

¿Qué tipo de petición estás realizando?
	Se utiliza una petición GET.
Qué código de estatus devuelve.
	El código de status es 200 OK, y 302 Found. 
Qué DNS tiene el servidor
	http://www.gobiernodecanarias.org
Qué IP tiene tiene el servidor
	http://93.188.137.123
¿La página tiene alguna cookie?, ¿Cuáles?.
	Sí, tiene 4 cookies del tipo request cookies
		_utma
		_utmz
		_ga
		cookies_allowed
	Del tipo response cookies no tiene ninguna
¿Qué idioma acepta?.
	Acepta Español
Alguna línea de código JavaScript
	No Tiene código JS
Alguna línea de código CSS que se aplique
	.section .izq {
		float: left;
	}
Alguna línea de código HTML que se aplique.
	<head>
		<title>ISTAC | API | eDatos</title>
		<link href="/istac/resources/css/istac.css" media='screen' rel='stylesheet' type='text/css' />
	</head>

Para la url: https://www3.gobiernodecanarias.org/istac/api/operations/v1.0/operations?limit=5

Qué peticiones desencadena la consulta.
	La petición operations?limit=5 que es la página principal de la url y luego un documento del tipo svg+xml
¿Qué tipo de petición estás realizando?
	Petición de tipo GET y POST.
Qué código de estatus devuelve.
	En ambos casos 200 Ok
Qué DNS tiene el servidor
	www3.gobiernodecanarias.org
Qué IP tiene tiene el servidor
	93.188.137.126:443
¿La página tiene alguna cookie?, ¿Cuáles?.
	Tiene 3 cookies del tipo request cookies
		Un código de número y letras
		_ga
		_gid
	No tiene ninguna cookie de response cookies
¿Qué idioma acepta?.
	Español
Alguna línea de código JavaScript
	No tiene
Alguna línea de código CSS que se aplique
	No tiene
Alguna línea de código HTML que se aplique.
	No tiene
