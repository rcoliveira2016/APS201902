var MontarPerguntas = function (){
	
	return {
		montar: function (){
			var perguntas = [
				{
					numero:1, 
					textoPergunta:"pergunta",
					sim: 2,
					nao: 3,
				},
				{
					numero:2, 
					textoPergunta:"pergunta",
					sim: 2,
					nao: 3,
				},
				{
					numero:3, 
					textoPergunta:"pergunta",
					sim: 2,
					nao: 3,
				},
				{
					numero:4, 
					textoPergunta:"pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta pergunta",
					sim: 2,
					nao: 3,
				}
			];
			
			
			perguntas.forEach(x=> $((new TempletePergunta(x)).obter()).appendTo("#container-perguntas"));
			
			
		}
	};
}