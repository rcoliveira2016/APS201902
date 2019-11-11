$(document).ready(function(){
	var _configuracoes = function(){
		window.urls = {
			api:"http://localhost/APS201902.Api"
		}
	}
	
	var _carregar = function(){
		$('.alert').hide();
		_configuracoes();
		new MontarPerguntas().montar();
		
		$(document).ajaxStart(function() {
			$(".alert-carregando").show();
		});

		$(document).ajaxStop(function() {
			$(".alert-carregando").hide();
		});
	}
	
	var _mensagemSucesso = function (texto){
		$('.alert-mensagem').removeClass('alert-danger');
		$('.alert-mensagem').addClass('alert-success');
		$('.alert-mensagem strong').text('Sucesso');
		$('.alert-mensagem span#texto').text(texto);
		$('.alert-mensagem').show('slow');
	}
	
	var _mensagemErro = function (texto){
		$('.alert-mensagem').removeClass('alert-success');
		$('.alert-mensagem').addClass('alert-danger');
		$('.alert-mensagem strong').text('Erro');
		$('.alert-mensagem span#texto').text(texto);
		$('.alert-mensagem').show('slow');
	}
	
	var _carregarEventoEnviar = function (){		
		$('.enviar').on('click', function(){
			chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {			  
				$.ajax({
					url : window.urls.api+"/enviar-email.php",
					type: 'POST',
					data: {url:tabs[0].url},
					success: function(response){
						$('.respota-checkbox').prop( "checked", false ).prop( "disabled", false);
						_mensagemSucesso("Foi enviado um email para "+ response +", o contato administrativo do servidor informando a resposta de seu questionario");						
					},
					error: function(data){
						_mensagemErro("Erro no envio de E-mail");
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
});