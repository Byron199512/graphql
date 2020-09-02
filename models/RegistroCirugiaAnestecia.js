const mongoose= require('mongoose');

const registroCirugiaAnesteciaSchema = new mongoose.Schema({
	idMedico: mongoose.Types.ObjectId,
	nombreMedico: String,
	idQuirofano: mongoose.Types.ObjectId,
	nombreQuirofano: String,
	fechaOperacion: String,
	idPaciente: mongoose.Types.ObjectId,
	nombrePaciente: String,
	edad: Number,
	sexo: String,
	peso: Number,
	talla: Number,
	idOperacionRealizada: mongoose.Types.ObjectId,
	nombreOperacion: String,
	diagnosticoPreoperatorio: String,
	riesgo: String,
	anestecia: String,
	recuperacionAldrette: String,
	observacion: String,
	servicio: String,
	idCirujano: mongoose.Types.ObjectId,
	nombreCirujano: String,
	idAyudante: String,
	nombreAyudante: String,
	idAnestesista: String,
	nombreAnestesista: String,
	idIntrumentista: String,
	nombreIntrumentista: String,
	idCirculante: String,
	nombreCirculante: String,
	emergencia: Boolean,
	estado: Boolean
});

module.exports = mongoose.model('registrocirugiaanestecia', registroCirugiaAnesteciaSchema);
