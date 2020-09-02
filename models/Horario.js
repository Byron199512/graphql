const mongoose= require('mongoose');
 
const horarioSchema = new mongoose.Schema({
	personal: mongoose.Types.ObjectId,
	nombrePersonal: String,
	rolUsuario: String,
	fechaCreacion: Date,
	mes: String,
	year: String,
	diasTrabajo: Array,
	totalHoras: Number,
	estado: Boolean
});

module.exports = mongoose.model('horario', horarioSchema);