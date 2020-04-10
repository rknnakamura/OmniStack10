//models = representa a entidade na aplicação que serão armazenados

const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere' //Index para facilitar a busca da geolocalização
    }
});

module.exports = mongoose.model(
    'Dev', //Nome que eu quero na tabela
    DevSchema
)