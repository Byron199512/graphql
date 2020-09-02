const mongoose= require('mongoose');

const personalHospitalarioSchema = new mongoose.Schema({
	nombres: String,
	apellidos: String,
	identificacion: String,
	rol: String,
	fechaNacimiento: String,
	usuario: String,
	password: String,
	estado: Boolean,
	imagen: String,
	telefonos: Array,
	emails: Array,
	tipoSangre: String,
	nombreContacto: String,
	telefonoContacto: String,
	tipoIdentificacion: String,
	fechaIngreso: String,
	especialidad: String,
	gestionHorarios: String,
	direcciones: Array
});


module.exports = mongoose.model('personalHospitalario', personalHospitalarioSchema);
