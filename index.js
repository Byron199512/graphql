const {ApolloServer} = require ('apollo-server');
const typeDefs=require ('./db/schema')
const resolvers=require ('./db/resolvers')
const conectarDB=require('./config/db');
require('dotenv').config({path:'variables.env'});
const jwt = require( 'jsonwebtoken');

//conectar

conectarDB();

const server= new ApolloServer({
    typeDefs,
    resolvers,
    context:async({req})=>{
        const token=req.headers['authorization'];
        if(token !== "null"){
            try {
                //verificamos el token del front end 
                const usuarioActual=await jwt.verify(token, process.env.SECRETO );
                
                //agregamos el usuario actual al request
                req.usuarioActual=usuarioActual;

                return{
                    usuarioActual
                }
            } catch (err) {
                console.log(err);
            }
        }

    }
});
server.listen({port:process.env.PORT||4000}).then(({url})=>{
    console.log(`servidor listo en la url ${url}`)
})
