var MontarPerguntas = function (){
	
	return {
		montar: function (){		
			$.ajax({
				url : window.urls.api+"/buscar-perguntas.php",
				type : 'GET',
				success: function(data){
					var perguntas = data;
					perguntas.forEach(x=> $((new TempletePergunta(x)).obter()).appendTo("#container-perguntas"));
				},
				error: function(data){
					
				}
			});
		}
	};
}