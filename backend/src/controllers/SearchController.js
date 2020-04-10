const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray //Retornar os techs que possui o que est� em techsArray
            },
            location: {
                $near: { //Trazer localiza��es pertos
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000 //Distancia m�xima de 10km   
                }
            }
        });

        return response.json({ devs });
    }
}