document.getElementById('jsonBtn').addEventListener('click',cargarJSON);

function cargarJSON(){
	fetch('https://carlosreneas.github.io/endpoints/noticias.json')
		.then(function(res){
		return res.json();
		})
		.then(function(data){
		console.log(data);
		let html='';
		data.forEach(function(noticias){
		html +=`
		<li>${noticias.titulo} <br> ${noticias.categoria} <br> ${noticias.fecha} <br> ${noticias.descripcion} ${noticias.detalle}<img src="${noticias.img}" alt=""> </li>
		`;
		})
		document.getElementById('resultado').innerHTML =html;
		})
		.catch(function(error){
		console.log(error);
		});
		
}
		
		
		