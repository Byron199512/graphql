const mongoose= require('mongoose');
const procedimientoSchema = new mongoose.Schema({
	nombres: String,
	codigo: String,
	descripcion: String,
	valorTotal: Number,
	estado: Boolean,
	subprocedimiento: Array
});

module.exports  = mongoose.model('procedimiento', procedimientoSchema);
