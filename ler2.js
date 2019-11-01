function pVal(url, callback){
	var xmlhttp = new XMLHttpRequest()
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			try{
				var data = JSON.parse(xmlhttp.responseText)
			}catch(err){
				console.log(err.message + " in " + xmlhttp.responseText)
				return
			}
			callback(data)
		}
	};

	xmlhttp.open("GET", 'pedidos.json', true)
	xmlhttp.send()
}

pVal('pedidos.json', function(dados){
	var html = "<h2>Pedidos: </h2>"
	for (var i=0; i < dados["pedidos"].length; i++){
		html += "<h4>Data: " + dados["pedidos"][i]["data"] + "</h4>"
		html += "<h4>Valor total: " + dados["pedidos"][i]["valor_total"] + "</h4>"
		html += "<h4>Vendedor: " + dados["pedidos"][i]["vendedor"] + "</h4>"
		html += "<h4>Cod do Pedido: " + dados["pedidos"][i]["codigo_do_pedido"] + "</h4>"
		html += "<h4>Produto: " + dados["pedidos"][i]["produto"] + "</h4>"
		html += "<h4>Valor: " + dados["pedidos"][i]["valor"] + "</h4></br>"
	}	
		document.getElementById("texto").innerHTML = html
});	
