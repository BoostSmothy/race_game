(function (canvas, width, height, speeds, strength) {


	var canvas = document.querySelector("canvas"),
		ctx = canvas.getContext("2d"),
		posit = 0, blocks = [];
	canvas.width = width; canvas.height = height;
	ctx.fillStyle = "green";





	var game = setInterval(function () {


		if (Math.random() < strength) blocks.push([Math.random() * (width - 20), -10]);

		ctx.clearRect(0, 0, width, height);

		base_image = new Image();
		base_image.src = './img/car1.png';
		ctx.drawImage(base_image, posit, height - 70, 15, 40);
		/*
		blocks[0] = new Image();
		blocks[0].src = 'car2.png';
		blocks[1] = new Image();
		blocks[1].src = 'car3.png';
		blocks[2] = new Image();
		blocks[2].src = 'car4.png';
		blocks[3] = new Image();
		blocks[3].src = 'car5.png';*/

		for (var i = 0; i < blocks.length; i++) {

			ctx.fillRect(blocks[i][0], blocks[i][1], 15, 40);
			//ctx.drawImage(blocks[i][0],blocks[i][1],15,40);

			if (blocks[i][1] > height - 100 && blocks[i][1] < height - 30 && Math.abs(posit - blocks[i][0]) < 10) {


				clearInterval(game);
				points = Math.floor(1000 * strength);
				alert("Koniec gry. Mash " + points + " points!" + " Odśwież stronę, aby zacząć gre.");



			}
			if (blocks[i][1] > height - 5) {
				blocks.splice(i, 1);
				i--;
			} else {
				blocks[i][1] += 5;
			}
		}
		strength += 0.001;

	}, speeds);



	/* var img = new Image();
	 img.src = 'race1.png';
 
	 
		 window.onload = function() {
			 var can = document.getElementById('canvas1'); 
			 ctx = canvas.getContext("2d")
			 
			 var imgHeight = 0;
			 var scrollSpeed = 10;
 
			 function loop()
			 {
				 ctx.drawImage(img, 0, imgHeight);
				 ctx.drawImage(img, 0, imgHeight - can.height);
 
				 imgHeight += scrollSpeed;
		 
				 if (imgHeight == can.height)
					 imgHeight = 0;
 
				 window.requestAnimationFrame(loop);
			 }
		 
			 loop();
	 
		 }
		 */

	document.addEventListener('mousemove', function (e) {
		posit = (e.pageX > 0) ? ((e.pageX < width) ? e.pageX : width - 10) : 0;
	}, false);





})

	("#canvas", 600, 800, 20, 0.1);
