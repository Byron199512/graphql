const mongoose= require('mongoose');

const medicoTratanteSchema = new mongoose.Schema({
	nombres: String,
	apellidos: String,
	identificacion: String,
	fechaNacimiento: String,
	estado: Boolean,
	imagen: String,
	telefonos: Array,
	emails: Array,
	direcciones: Array,
	nombreContacto: String,
	telefonoContacto: String,
	tipoSangre: String,
	fechaIngreso: String,
	tipoIdentificacion: String,
	especialidad: String
});

module.exports = mongoose.model('medicoTratante', medicoTratanteSchema);