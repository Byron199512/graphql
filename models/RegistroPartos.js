const mongoose= require('mongoose');

const registroPartosSchema = new mongoose.Schema({
	fecha: String,
	idPaciente: mongoose.Types.ObjectId,
	nombrePaciente: String,
	edad: Number,
	estadoCivil: String,
	procedencia: String,
	intruccion: String,
	ocupacion: String,
	fgFum: String,
	ago: String,
	hv_hmTipo: String,
	v_mTipo: String,
	parto: String,
	sexo: String,
	apgar: String,
	egCapurro: String,
	peso: Number,
	perimetroCefalico: String,
	perimetroBraquial: String,
	talla: Number,
	obstetra: mongoose.Types.ObjectId,
	nombreObstetra: String,
	pediatra: mongoose.Types.ObjectId,
	nombrePediatra: String,
	observacion: String,
	estado: Boolean
});

module.exports  = mongoose.model('registropartos', registroPartosSchema);