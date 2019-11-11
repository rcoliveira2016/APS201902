var arrayLocalStore = function(nomeChave){
	var array = []
	
	
	var _carregar = function(){
		if(window.localStorage.getItem(nomeChave)){
			array = JSON.parse(window.localStorage.getItem(nomeChave));
		}
	}
	_carregar();
	return $.extend(array, {
		add: function(data){
			console.log(array)
			array.push(data) 
			window.localStorage.setItem(nomeChave, JSON.stringify(array));
		},
		removeAll:function(){
			array.splice(0,array.length)
			window.localStorage.setItem(nomeChave, JSON.stringify(array));
		}
	});
}


$(document).ready(function(){
	var _configuracoes = function(){
		window.urls = {
			api:"http://localhost/APS201902.Api"
		}
	}
	
	var _carregar = function(){
		_configuracoes();
		new MontarPerguntas().montar();
	}
	
	var _carregarEventoEnviar = function (){		
		$('.enviar').on('click', function(){
			chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {			  
				$.ajax({
					url : window.urls.api+"/enviar-email.php",
					type: 'POST',
					data: {url:tabs[0].url},
					success: function(data){
						console.log(data)
					},
					error: function(data){
						
					}
				});
			});
		});
	}
	
	var _carregarEventoLimpar = function (){		
		$('.limpar').on('click', function(){
			$('.respota-checkbox').prop( "checked", false ).prop( "disabled", false);
		});
	}
	
	_carregarEventoEnviar();	
	_carregarEventoLimpar();
	_carregar();
	/*var perguntaAtual = 1;	
	var pesguntas = new arrayLocalStore('perguntas');
	
	var _carregarPegunta  = function (input){
		$('div[data-pergunta='+perguntaAtual+']').find('.respota-checkbox').prop( "disabled", true );
		
		var resposta = $(input).val();
		$('[data-pergunta='+resposta+']').animate({
		  height: 'toggle'
		});		
		pesguntas.add({ pergunta: perguntaAtual, resposta: resposta});
		perguntaAtual = resposta;
	}
		
	var _carregarEventoPerguntas = function(){
		$('.respota-checkbox').on('change', function (event) {
			_carregarPegunta(this);
		});
	}
	
	var _carregarLimpar = function(){
		$('#limpar').on('click', function (event) {
			pesguntas.removeAll();
			$('[data-pergunta]:not([data-pergunta="1"]').hide();
			$('.respota-checkbox').prop( "checked", false ).prop( "disabled", false);
			perguntaAtual = 1;
		});
	}
	
	var _carregar = function(){
		if(pesguntas.length>0){
			pesguntas.forEach(x=>{
				var divPergunta = $('[data-pergunta='+x.pergunta+']');
				var inputRadio = divPergunta.find('.respota-checkbox[value='+x.resposta+']');
				divPergunta.find('.respota-checkbox').prop( "disabled", true );
				inputRadio.prop( "checked", true );				
				if(divPergunta.css('display') === 'none')
					divPergunta.animate({
					  height: 'toggle'
					});
				
				if(pesguntas.indexOf(x)===pesguntas.length-1){
					var divProximaPergunta = $('[data-pergunta='+x.resposta+']')					
					if(divProximaPergunta.length>0){
						divProximaPergunta.animate({ height: 'toggle'}, 800, function(){_carregarEventoPerguntas()} );
						perguntaAtual = x.resposta
					}						
					else{
						perguntaAtual = x.pergunta
						_carregarEventoPerguntas();
					}						
				}
			});
		}
		else
			_carregarEventoPerguntas();
		
	}
	_carregarLimpar();
	_carregar();*/
	
});