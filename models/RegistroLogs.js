const mongoose= require('mongoose');


const registroLogsSchema = new mongoose.Schema({
    fecha: String,
    usuario:String,
	accion: String,
    tabla:String,
    registro:String
});

module.exports  = mongoose.model('registro_log', registroLogsSchema);

