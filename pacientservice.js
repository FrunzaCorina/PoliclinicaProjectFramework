angular
	.module("pacientApp")
	.factory("PacientService", PacientService)

function PacientService(){
	var oPacient = {};
	oPacient.getPacients = getPacients;
	oPacient.addPacient = addPacient;
	oPacient.editPacient = editPacient;
	oPacient.deletePacient = deletePacient;
	oPacient.maxId = maxId;

	var pacients = [{
		id: 1,
		name: 'Frunza Corina',
		address: 'Telenesti, str. Gheorghe Sova 9',
		medic: 'Viorica Lupu',
		mobile: '+373 680 123 45' 
	},
	{
		id: 2,
		name: 'Mariana Onofras',
		address: 'Chisinau, str. Sarmizegetusa 48/2',
		medic: 'Ana Rusu',
		mobile: '+373 601 234 56' 
	},
	{
		id: 3,
		name: 'Teodor Frimu',
		address: 'Chisinau, str. Alba Iulia 1',
		medic: 'Ana Rusu',
		mobile: '+373 022 222 333' 
	},
	{
		id: 4,
		name: 'Mircea Procopi',
		address: 'Socora, str. Grenoble 22/4',
		medic: 'Elena Topala',
		mobile: '+373 764 567 89' 
	}];

	function getPacients(){
		return pacients;
	}

	function addPacient(pacient){
		pacients.push(pacient);
	}

	function editPacient(pacient){
		debugger;
		for(var i = 0; i< pacients.length; i++){
			if(	pacients[i].id 		== 	pacient.id){
				pacients[i].name 	= 	pacient.name;
				pacients[i].address = 	pacient.address;
				pacients[i].medic 	= 	pacient.medic;
				pacients[i].mobile 	= 	pacient.mobile;
				break;
			}
		}
	}

	function deletePacient(sid){
		for(var i = 0; i< pacients.length; i++){
			if(pacients[i].id == sid){
				var deleteUser = pacients[i].name;
				var isconfirm = confirm("Sunteti siguri ca doriti sa stergeri pacientul " + deleteUser);
				if(isconfirm){
					pacients.splice(i, 1);
					alert(deleteUser +" a fost sters cu succes");
				}
				break;
			}
		}
	}

	function maxId(){
		// var max = Math.max(...pacients.id);
		var max = 0;
		for(var i = 0; i< pacients.length; i++){
			if(pacients[i].id > max){
				max = pacients[i].id;
			}
		}
		return max;
	}

	return oPacient;
}