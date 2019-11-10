var TempletePergunta = function (model) {
		
	var tempalte = `
		<div class="col-lg-12 mt-1" data-pergunta="${model.numero}">
			<div class="form-group">
				<label>${model.textoPergunta}</label>
				<div class="input-group-append">				
					<div class="custom-control custom-radio mr-2">
					  <input type="radio" id="${model.numero}_sim" name="${model.numero}" class="custom-control-input respota-checkbox" value="${model.sim}">
					  <label class="custom-control-label" for="${model.numero}_sim">Sim</label>
					</div>
					<div class="custom-control custom-radio">
					  <input type="radio" id="${model.numero}_nao" name="${model.numero}" class="custom-control-input respota-checkbox" value="${model.nao}">
					  <label class="custom-control-label" for="${model.numero}_nao">Não</label>
					</div>
				</div>
			</div>
		</div>
	`

	return{
		obter:function(){
			return tempalte;
		}
	}
}