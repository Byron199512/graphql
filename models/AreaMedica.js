const mongoose= require('mongoose');
const areaMedicaSchema = new mongoose.Schema({
	nombres: String,
	ubicacion: String,
	descripcion: String,
	estado: Boolean
});

module.exports = mongoose.model('areaMedica', areaMedicaSchema);