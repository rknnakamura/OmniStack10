const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
/*
Nomes usados para métodos:
index: metodo para retornar uma lista
show: mostrar um unico registro
store: criar
update: atualizar
destroy: deletar
*/
module.exports = {
    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },
    async store(request, response) { //async quer para função que poderá demorar para responder
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, //se o 'name' não existir ele pegara o nome do 'login'
                    avatar_url, 
                    bio } = apiResponse.data;
            techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }
    
        return response.json(dev); //Retornando um json
    }
}