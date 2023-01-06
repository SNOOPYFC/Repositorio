var n_estrellas = 500;
		var cv, cx, estrellas = [];
		var vel_max = 5;

		function prepararEstrella(index) {
			estrellas[index] = {
				'color' : 'rgb('
					+(Math.random() * 255) + ','
					+(Math.random() * 255) + ','
					+(Math.random() * 255) + ')',
				'vel_x' :
					(Math.random() * vel_max * 2) - vel_max + 1,
				'vel_y' :
					(Math.random() * vel_max * 2) - vel_max + 1,
				'x'     : 110,
				'y'     : 110
			};
		}

		function pintar() {
			// Limpiar el área con un cuadro negro
			cx.fillStyle = '#000';
			cx.fillRect(0,0,300,300);

			cx.fillStyle = '#fff';
			for(var i = 0; i < n_estrellas; i++) {
				var e = estrellas[i];
				cx.fillStyle = '#06b3be'//e.color;
				if(e.x > 300 || e.y > 300|| e.x < 0 || e.y < 0) {
					prepararEstrella(i);
				}
				// Hacer el incremento de la posición
				// de las estrellas en pantalla.
				e.x += e.vel_x;
				e.y += e.vel_y;
				// Pintar la estrella
				cx.fillRect(e.x,e.y,1, 1);
			}

			setTimeout(pintar, 25);
		}

		window.onload = function() {
			cv = document.getElementById('lienzo');
			cx = cv.getContext('2d');

			for(var i = 0; i < n_estrellas; i++) {
				prepararEstrella(i);
			}

			pintar();
		};