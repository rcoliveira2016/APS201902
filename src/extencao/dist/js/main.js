/*var arrayLocalStore = function(nomeChave){
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
}*/


$(document).ready(function(){	
	
});