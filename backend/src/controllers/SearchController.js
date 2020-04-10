const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray //Retornar os techs que possui o que está em techsArray
            },
            location: {
                $near: { //Trazer localizações pertos
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000 //Distancia máxima de 10km   
                }
            }
        });

        return response.json({ devs });
    }
}