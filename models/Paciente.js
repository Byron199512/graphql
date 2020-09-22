const mongoose= require('mongoose');

const pacienteSchema = new mongoose.Schema({
	nombres: String,
	apellidos: String,
	identificacion: String,
	fechaNacimiento: String,
	sexo: String,
	peso: Number,
	talla: Number,
	estadoCivil: String,
	procedencia: String,
	ocupacion: String,
	estado: Boolean,
	imagen: String,
	telefonos: Array,
	emails: Array,
	direcciones: Array,
	tipoSangre: String,
	nombreContacto: String,
	telefonoContacto: String,
	tipoIdentificacion: String,
	numeroHistoriaClinica:String
});

module.exports = mongoose.model('paciente', pacienteSchema);