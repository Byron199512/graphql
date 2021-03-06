const { gql } = require('apollo-server');

const typeDefs = gql`
	type Token {
		token: String
	}

	type PersonalHospitalario {
		id: ID
        tipoContrato:String
		nombres: String
		apellidos: String
		identificacion: String
		emails: [Email]
		direcciones: [Direccion]
		rol: String
		fechaNacimiento: String
		usuario: String
		telefonos: [Telefono]
		estado: Boolean
		imagen: String
		nombreContacto: String
		telefonoContacto: String
		tipoSangre: String
		fechaIngreso: String
		tipoIdentificacion: String
		especialidad: String
		gestionHorarios: String
		password: String
	}

	type Telefono {
		telefono: String
	}

	type Email {
		email: String
	}

	type Direccion {
		direccion: String
	}

	type MedicoTratante {
		id: ID
        numeroRegistroProfesional:String
		nombres: String
		apellidos: String
		identificacion: String
		emails: [Email]
		especialidad: String
		nombreContacto: String
		telefonoContacto: String
		tipoSangre: String
		fechaIngreso: String
		tipoIdentificacion: String
		direcciones: [Direccion]
		fechaNacimiento: String
		telefonos: [Telefono]
		estado: Boolean
		imagen: String
	}

	#Type para querys de paciente
	type Paciente {
		id: ID
        numeroHistoriaClinica:String
		nombres: String
		apellidos: String
		identificacion: String
		fechaNacimiento: String
		sexo: String
		peso: Float
		talla: Float
		tipoSangre: String
		tipoIdentificacion: String
		nombreContacto: String
		telefonoContacto: String
		estadoCivil: String
		procedencia: String
		ocupacion: String
		estado: Boolean
		imagen: String
		telefonos: [Telefono]
		emails: [Email]
		direcciones: [Direccion]
	}

	#type para turnos
	type Turno {
		id: ID
		abreviatura: String
		descripcion: String
		estado: Boolean
		horaEntrada: String
		horaSalida: String
		totalHoras: String
		colorIdentificacion: String
	}

	type Horario {
		id: ID
		personal: ID
		rolUsuario: String
		nombrePersonal: String
		fechaCreacion: String
		mes: String
		year: String
		diasTrabajo: [Dias]
		totalHoras: Float
		estado: Boolean
	}

	type Dias {
		fechaDia: String
		turno: ID
		abreviatura: String
		colorIdentificacion: String
		totalHoras: Float
	}

	type HorarioPersonal {
		_id: ID
		personal: ID
		rolUsuario: String
		nombrePersonal: String
		personalHospitalario: [PersonalHospitalario]
		fechaCreacion: String
		mes: String!
		year: String!
		diasTrabajo: [Dias]
		totalHoras: Float
		estado: Boolean
	}

	type AreaMedica {
		id: ID
		nombres: String
		ubicacion: String
		descripcion: String
	}

	#type para subprocedimiento
	type Subprocedimiento {
		id: ID
		nombres: String
		descripcion: String
		valorTotal: Float
	}

	type Procedimiento {
		id: ID
		codigo: String
		nombres: String
		descripcion: String
		valorTotal: Float
		subprocedimiento: [SubprocedimientoArray]
	}

	type SubprocedimientoArray {
		id: String
		nombres: String
		valorTotal: Float
	}

	type AgendaQuirofano {
		id: ID
		medico: String
		quirofano: String
		fecha: String
		horaEntrada: String
		horaSalida: String
		paciente: String
		diagnostico: String
		procedimiento: ID
		cancelado: Boolean
		enfermera: ID
		auxiliar: ID
		valor: Float
		kitSolicitado: Boolean
		kitDespachado: Boolean
		importado: Boolean
	}

	type RegistroCirugiaAnestecia {
		id: ID
		idMedico: ID
		nombreMedico: String
		idQuirofano: ID
		nombreQuirofano: String
		fechaOperacion: String
		idPaciente: ID
		nombrePaciente: String
		edad: Float
		sexo: String
		peso: Float
		talla: Float
		idOperacionRealizada: ID
		nombreOperacion: String
		diagnosticoPreoperatorio: String
		riesgo: String
		anestecia: String
		recuperacionAldrette: String
		observacion: String
		servicio: String
		idCirujano: ID!
		nombreCirujano: String
		idAyudante: String
		nombreAyudante: String
		idAnestesista: String
		nombreAnestesista: String
		idIntrumentista: String
		nombreIntrumentista: String
		idCirculante: String
		nombreCirculante: String
		emergencia: Boolean
		estado: Boolean
	}

	type RegistroPartos {
		id: ID
		fecha: String
		idPaciente: ID
		nombrePaciente: String
		edad: Float
		estadoCivil: String
		procedencia: String
		intruccion: String
		ocupacion: String
		fgFum: String
		ago: String
		hv_hmTipo: String
		v_mTipo: String
		parto: String
		sexo: String
		apgar: String
		egCapurro: String
		peso: Float
		perimetroCefalico: String
		perimetroBraquial: String
		talla: Float
		obstetra: ID
		nombreObstetra: String
		pediatra: ID
		nombrePediatra: String
		observacion: String
		estado: Boolean
	}

	type CirugiasTotal {
		total: Float
		operacion: [Procedimiento]
	}

	type PorcentajeNacidos {
		_id: String
		total: Float
	}

	type MedicosTotal {
		total: Float
		medico: [PersonalHospitalario]
	}

	type RegistroLogs {
		id: ID
		fecha: String
		accion: String
		tabla: String
		usuario: String
		registro: String
	}

	type Query {
		#registro log
		obtenerRegistroLogs(limite: Int, offset: Int, filtro: String): [RegistroLogs]
		totalLogs: String
		#Personal Hospitalario
		obtenerPersonalHospitalario: PersonalHospitalario
		obtenerTrabajadores(limite: Int, offset: Int, filtro: String): [PersonalHospitalario]
		totalTrabajadores: String
		obtenerPersonal(id: ID!): PersonalHospitalario
		#Medico Tratante
		obtenerMedicos(limite: Int, offset: Int, filtro: String): [MedicoTratante]
		totalMedicos: String
		obtenerMedico(id: ID!): MedicoTratante
		#Paciente
		obtenerPacientes(limite: Int, offset: Int, filtro: String): [Paciente]
		totalPacientes: String
		obtenerPaciente(id: ID!): Paciente
		#turnos
		obtenerTurnos(limite: Int, offset: Int, filtro: String): [Turno]
		obtenerTurno(id: ID!): Turno
		totalTurnos: String
		#horario

		obtenerHorarios: [Horario]
		obtenerHorariosByPersonal(
			limite: Int
			offset: Int
			mes: String
			year: String
			rol: String
			filtro: String
		): [Horario]
		obtenerHorariosByPersonalH(mes: String, year: String, rol: String): [HorarioPersonal]
		totalHorarios: String
		obtenerHorariosById(limite: Int, offset: Int, mes: String, year: String, personal: ID): [Horario]
		#areaMedica
		obtenerAreasMedicas(limite: Int, offset: Int, filtro: String): [AreaMedica]
		obtenerAreaMedica(id: ID!): AreaMedica
		totalAreasMedicas: String
		#subprocedimiento
		obtenerSubprocedimiento(id: ID!): Subprocedimiento
		obtenerSubprocedimientos(limite: Int, offset: Int, filtro: String): [Subprocedimiento]
		totalSubprocedimientos: String
		#procedimiento
		obtenerProcedimiento(id: ID!): Procedimiento
		obtenerProcedimientos(limite: Int, offset: Int, filtro: String): [Procedimiento]
		totalProcedimientos: String
		#agendaQuirofano
		obtenerAgendaQuirofano(id: ID!): AgendaQuirofano
		obtenerAgendaQuirofanos(limite: Int, offset: Int, filtro: String): [AgendaQuirofano]
		obtenerAgendaQuirofanosAll(limite: Int, offset: Int, filtro: String, filtroM: String): [AgendaQuirofano]
		obtenerAgendaKitSolicitado(limite: Int, offset: Int, filtro: String): [AgendaQuirofano]
		totalQuirofanos: String
		#registro Cirugia anestecia
		obtenerRegistroCirugia(id: ID!): RegistroCirugiaAnestecia
		obtenerRegistrosCirugias(limite: Int, offset: Int, filtro: String): [RegistroCirugiaAnestecia]
		totalRegistroCirugia: String
		#registros partos
		obtenerRegistroParto(id: ID!): RegistroPartos
		obtenerRegistrosPartos(limite: Int, offset: Int, filtro: String): [RegistroPartos]
		totalPartos: String
		#Cirugias Panel
		topCirugias(limit: Int, fromDate: String, toDate: String): [CirugiasTotal]
		topCirugiasM(limit: Int, fromDate: String, toDate: String): [CirugiasTotal]
		topMedicos(limit: Int, fromDate: String, toDate: String): [MedicosTotal]
		topMedicosM(limit: Int, fromDate: String, toDate: String): [MedicosTotal]
		#panel Partos
		porcentajeNacidos(fromDate: String, toDate: String): [PorcentajeNacidos]
		totalNacidos: String
		porcentajeSexo(fromDate: String, toDate: String): [PorcentajeNacidos]
		porcentajeMujeresHombresMuertos(fromDate: String, toDate: String): [PorcentajeNacidos]
	}

	#types para mutations
	input TelefonoInput {
		telefono: String
	}

	input EmailInput {
		email: String
	}

	input DireccionInput {
		direccion: String
	}

	input PersonalHospitalarioInput {
		id: ID
        tipoContrato:String
		nombres: String!
		apellidos: String!
		identificacion: String!
		emails: [EmailInput]
		direcciones: [DireccionInput]
		rol: String!
		fechaNacimiento: String!
		usuario: String
		password: String
		telefonos: [TelefonoInput]
		estado: Boolean
		imagen: String
		fechaIngreso: String
		tipoSangre: String
		tipoIdentificacion: String
		nombreContacto: String
		telefonoContacto: String
		especialidad: String
		gestionHorarios: String
	}

	input MedicoTratanteInput {
		id: ID
        numeroRegistroProfesional:String
		nombres: String!
		apellidos: String!
		identificacion: String!
		emails: [EmailInput]!
		nombreContacto: String
		telefonoContacto: String
		tipoSangre: String!
		especialidad: String!
		fechaIngreso: String!
		tipoIdentificacion: String!
		direcciones: [DireccionInput]
		fechaNacimiento: String!
		telefonos: [TelefonoInput]!
		estado: Boolean
		imagen: String
	}

	#input para pacientes

	input PacienteInput {
		id: ID
        numeroHistoriaClinica:String
		nombres: String!
		apellidos: String!
		identificacion: String!
		fechaNacimiento: String!
		tipoSangre: String
		tipoIdentificacion: String
		nombreContacto: String
		telefonoContacto: String
		sexo: String!
		peso: Float
		talla: Float
		estadoCivil: String!
		procedencia: String
		ocupacion: String
		estado: Boolean
		imagen: String
		telefonos: [TelefonoInput]
		emails: [EmailInput]
		direcciones: [DireccionInput]
	}

	#input de turnos de trabajo
	input TurnoInput {
		id: ID
		abreviatura: String!
		descripcion: String!
		estado: Boolean
		horaEntrada: String
		horaSalida: String
		totalHoras: String
		colorIdentificacion: String
	}

	#input de horarios
	input HorarioInput {
		id: ID
		personal: ID
		nombrePersonal: String
		fechaCreacion: String
		rolUsuario: String
		mes: String!
		year: String!
		diasTrabajo: [DiasInput]
		totalHoras: Float
		estado: Boolean
	}

	input DiasInput {
		fechaDia: String!
		turno: ID
		abreviatura: String
		colorIdentificacion: String
		totalHoras: Float
	}

	#input para area Medica
	input AreaMedicaInput {
		id: ID
		nombres: String!
		ubicacion: String
		descripcion: String
		estado: Boolean
	}

	#input para subprocedimiento
	input SubprocedimientoInput {
		id: ID
		nombres: String!
		descripcion: String!
		valorTotal: Float
		estado: Boolean
	}

	input ProcedimientoInput {
		id: ID
		codigo: String
		nombres: String!
		descripcion: String!
		valorTotal: Float
		subprocedimiento: [SubprocedimientoArrayInput]
		estado: Boolean
	}

	input SubprocedimientoArrayInput {
		id: String
		nombres: String
		valorTotal: Float
	}

	input AgendaQuirofanoInput {
		id: ID
		medico: String!
		quirofano: String!
		fecha: String!
		horaEntrada: String!
		horaSalida: String!
		paciente: String!
		diagnostico: String!
		procedimiento: ID!
		cancelado: Boolean
		enfermera: ID!
		auxiliar: ID!
		valor: Float
		kitSolicitado: Boolean
		kitDespachado: Boolean
		importado: Boolean
	}

	input registroCirugiaAnesteciaInput {
		id: ID
		idMedico: ID!
		nombreMedico: String!
		idQuirofano: ID!
		nombreQuirofano: String!
		fechaOperacion: String!
		idPaciente: ID!
		nombrePaciente: String!
		edad: Float
		sexo: String!
		peso: Float
		talla: Float
		idOperacionRealizada: ID!
		nombreOperacion: String!
		diagnosticoPreoperatorio: String
		riesgo: String
		anestecia: String
		recuperacionAldrette: String
		observacion: String
		servicio: String
		idCirujano: ID!
		nombreCirujano: String!
		idAyudante: String
		nombreAyudante: String
		idAnestesista: String
		nombreAnestesista: String
		idIntrumentista: String
		nombreIntrumentista: String
		idCirculante: String
		nombreCirculante: String
		emergencia: Boolean
		estado: Boolean
	}

	input registroPartosInput {
		id: ID
		fecha: String!
		idPaciente: ID!
		nombrePaciente: String!
		edad: Float
		estadoCivil: String
		procedencia: String
		intruccion: String
		ocupacion: String
		fgFum: String
		ago: String
		hv_hmTipo: String
		v_mTipo: String
		parto: String
		sexo: String!
		apgar: String
		egCapurro: String
		peso: Float
		perimetroCefalico: String
		perimetroBraquial: String
		talla: Float
		obstetra: ID!
		nombreObstetra: String!
		pediatra: ID!
		nombrePediatra: String!
		observacion: String
		estado: Boolean
	}

	input RegistroLogsInput {
		id: ID
		fecha: String
		accion: String
		tabla: String
		usuario: String
		registro: String
	}

	type Mutation {
		#personal
		crearPersonalHospitalario(input: PersonalHospitalarioInput): PersonalHospitalario
		autenticarPersonal(usuario: String!, password: String!): Token
		eliminarPersonal(id: ID!): String
		actualizarPassword(id: ID!, password: String!, usuario: String!, passwordAnterior: String!): String
		actualizarPersonal(input: PersonalHospitalarioInput): PersonalHospitalario
		#MedicoTratante
		crearMedicoTratante(input: MedicoTratanteInput): MedicoTratante
		eliminarMedicoTratante(id: ID!): String
		actualizarMedicoTratante(input: MedicoTratanteInput): MedicoTratante
		#registroLogs
		crearRegistroLogs(input: RegistroLogsInput): RegistroLogs
		#paciente
		crearPaciente(input: PacienteInput): Paciente
		eliminarPaciente(id: ID!): String
		actualizarPaciente(input: PacienteInput): Paciente
		#turnos
		crearTurno(input: TurnoInput): Turno
		eliminarTurno(id: ID!): String
		actualizarTurno(input: TurnoInput): Turno
		#horarios
		crearHorario(input: HorarioInput): Horario
		actualizarHorario(input: HorarioInput): Horario
		eliminarHorario(id: ID!): String
		#areaMedica
		crearAreaMedica(input: AreaMedicaInput): AreaMedica
		actualizarAreaMedica(input: AreaMedicaInput): AreaMedica
		eliminarAreaMedica(id: ID!): String
		#subprocedimiento
		crearSubprocedimiento(input: SubprocedimientoInput): Subprocedimiento
		actualizarSubprocedimiento(input: SubprocedimientoInput): Subprocedimiento
		eliminarSubprocedimiento(id: ID!): String
		#procedimiento
		crearProcedimiento(input: ProcedimientoInput): Procedimiento
		actualizarProcedimiento(input: ProcedimientoInput): Procedimiento
		eliminarProcedimiento(id: ID!): String
		#agendaQuirofano
		crearAgendaQuirofano(input: AgendaQuirofanoInput): AgendaQuirofano
		eliminarAgendaQuirofano(id: ID!): String
		actualizarAgendaKitSolicitado(id: ID!): String
		actualizarAgendaKitDespachado(id: ID!): String
		actualizarAgendaImportado(id: ID!): String
		#registro cirugia anestecia
		crearRegistroCirugia(input: registroCirugiaAnesteciaInput): RegistroCirugiaAnestecia
		actualizarRegistroCirugia(input: registroCirugiaAnesteciaInput): RegistroCirugiaAnestecia
		eliminarRegistroCirugia(id: ID!): String
		#registro partos
		crearRegistroParto(input: registroPartosInput): RegistroPartos
		actualizarRegistroParto(input: registroPartosInput): RegistroPartos
		eliminarRegistroParto(id: ID!): String
	}
`;

module.exports = typeDefs;
