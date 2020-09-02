const mongoose= require('mongoose');
 
const turnoSchema = new mongoose.Schema({
	abreviatura: String,
	descripcion: String,
	estado: Boolean,
	horaEntrada: String,
	horaSalida: String,
	totalHoras: String,
	colorIdentificacion: String
});

module.exports= mongoose.model('turno', turnoSchema);