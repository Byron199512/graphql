const mongoose= require('mongoose');

const subprocedimientoSchema = new mongoose.Schema({
	nombres: String,
	descripcion: String,
	valorTotal: Number,
	estado: Boolean
});

module.exports  = mongoose.model('subprocedimiento', subprocedimientoSchema);