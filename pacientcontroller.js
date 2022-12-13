angular
	.module("pacientApp")
	.controller("PacientController", PacientController);

PacientController.$inject[
						  'PacientService'
						];

function PacientController(PacientService){
	var vm = this;

	vm.pacients = PacientService.getPacients();
	vm.orderBy = orderBy;
	vm.deletePacient = deletePacient;
	vm.showStatus = false;
	vm.doShow = doShow;

	vm.addPacient = addPacient;
	vm.editPacient = editPacient;

	vm.editorEnabled = [];
	vm.enableEditor = enableEditor;
	vm.disableEditor = disableEditor;

	function orderBy(myOrder){
		vm.ordering = myOrder;
	} 

	function deletePacient(id){
		PacientService.deletePacient(id);
	}

	function doShow(){
		vm.showStatus = true;
	}

	function addPacient(){
		var maxId = PacientService.maxId();
		vm.pacient = {
			id: maxId + 1,
			name: vm.sname,
			address: vm.saddress,
			medic: vm.medic,
			mobile: vm.smobile
		};
		PacientService.addPacient(vm.pacient);
	}

	function editPacient($index, editId, editName, editAddress, editMedic, editMobile){
		vm.pacient = {
			id: editId,
			name: editName,
			address: editAddress,
			medic: editMedic,
			mobile: editMobile
		};
		PacientService.editPacient(vm.pacient);
		vm.disableEditor($index);
	}

	function enableEditor(index){
		vm.editorEnabled[index] = true;
	}

	function disableEditor(index){
		vm.editorEnabled[index] = false;
	}

}