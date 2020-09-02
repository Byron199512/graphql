const mongoose= require('mongoose');

const agendaQuirofanoSchema = new mongoose.Schema({
	medico: String,
	quirofano: String,
	fecha: String,
	horaEntrada: String,
	horaSalida: String,
	paciente: String,
	diagnostico: String,
	procedimiento: mongoose.Types.ObjectId,
	cancelado: Boolean,
	enfermera: mongoose.Types.ObjectId,
	auxiliar: mongoose.Types.ObjectId,
	valor: Number,
	kitSolicitado: Boolean,
	kitDespachado: Boolean,
	importado: Boolean
});

module.exports = mongoose.model('agendaQuirofano', agendaQuirofanoSchema);


