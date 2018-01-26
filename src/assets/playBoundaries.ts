var eagleFordGeoJSON = require('./geoJSON/ShalePlay_EagleFord_Boundary_EIA_Aug2015_v2.json');
var aboYesoGeoJSON = require('./geoJSON/ShalePlay_AboYeso_Boundary_EIA_Aug2015_v2.json');
var bakkenGeoJSON = require('./geoJSON/ShalePlay_Bakken_Boundary_EIA_Aug2015_v2.json');
var boneSpringGeoJSON = require('./geoJSON/ShalePlay_BoneSpring_Boundary_EIA_Aug2015_v2.json');
var delawareGeoJSON = require('./geoJSON/ShalePlay_Delaware_Boundary_EIA_Aug2015_v2.json');
var glorietaYesoGeoJSON = require('./geoJSON/ShalePlay_GlorietaYeso_Boundary_EIA_Aug2015_v2.json');
var marcellusGeoJSON = require('./geoJSON/ShalePlay_Marcellus_Boundary_EIA_Aug2015_v2.json');
var niobraraGeoJSON = require('./geoJSON/ShalePlay_Niobrara_Boundary_EIA_Aug2015_v2.json');
var spraberryGeoJSON = require('./geoJSON/ShalePlay_Spraberry_Boundary_EIA_Aug2015_v2.json');
var threeForksGeoJSON = require('./geoJSON/ShalePlay_ThreeForks_Boundary_EIA_Aug2015_v2.json');
var uticaGeoJSON = require('./geoJSON/ShalePlay_Utica_Boundary_EIA_May2016.json');

export const plays = [
  {
    name: 'EagleFord',
    JSON: eagleFordGeoJSON,
    color: 'brown',
    about: {
      age: 'Cenomanian to Turonian: 96 to 90 million years',
      importance: 'The Eagle Ford Shale (EFS) is quite possibly the largest single economic development in the history of the state of Texas and ranks as the largest oil & gas development in the world based on capital invested'
    }
  },
  {
    name: 'Abo Yeso',
    JSON: aboYesoGeoJSON,
    color: 'cyan',
    about: {
      age: 'Cenomanian to Turonian: 96 to 90 million years',
      importance: 'The Eagle Ford Shale (EFS) is quite possibly the largest single economic development in the history of the state of Texas and ranks as the largest oil & gas development in the world based on capital invested'
    }
  },
  {
    name: 'Delaware',
    JSON: delawareGeoJSON,
    color: 'darkred',
    about: {
      age: 'Cenomanian to Turonian: 96 to 90 million years',
      importance: 'The Eagle Ford Shale (EFS) is quite possibly the largest single economic development in the history of the state of Texas and ranks as the largest oil & gas development in the world based on capital invested'
    }
  },
  {
    name: 'BoneSpring',
    JSON: boneSpringGeoJSON,
    color: 'darkblue',
    about: {
      age: 'Cenomanian to Turonian: 96 to 90 million years',
      importance: 'The Eagle Ford Shale (EFS) is quite possibly the largest single economic development in the history of the state of Texas and ranks as the largest oil & gas development in the world based on capital invested'
    }
  },
  {
    name: 'Glorieta',
    JSON: glorietaYesoGeoJSON,
    color: 'hsl(120, 100%, 25%)',
    about: {
      age: 'Cenomanian to Turonian: 96 to 90 million years',
      importance: 'The Eagle Ford Shale (EFS) is quite possibly the largest single economic development in the history of the state of Texas and ranks as the largest oil & gas development in the world based on capital invested'
    }
  },
  {
    name: 'Marcellus',
    JSON: marcellusGeoJSON,
    color: 'purple',
    about: {
      age: 'Cenomanian to Turonian: 96 to 90 million years',
      importance: 'The Eagle Ford Shale (EFS) is quite possibly the largest single economic development in the history of the state of Texas and ranks as the largest oil & gas development in the world based on capital invested'
    }
  },
  {
    name: 'Niobrara',
    JSON: niobraraGeoJSON,
    color: 'red',
    about: {
      age: 'Cenomanian to Turonian: 96 to 90 million years',
      importance: 'The Eagle Ford Shale (EFS) is quite possibly the largest single economic development in the history of the state of Texas and ranks as the largest oil & gas development in the world based on capital invested'
    }
  },
  {
    name: 'Spraberry',
    JSON: spraberryGeoJSON,
    color: 'orange',
    about: {
      age: 'Cenomanian to Turonian: 96 to 90 million years',
      importance: 'The Eagle Ford Shale (EFS) is quite possibly the largest single economic development in the history of the state of Texas and ranks as the largest oil & gas development in the world based on capital invested'
    }
  },
  {
    name: 'Three Forks',
    JSON: threeForksGeoJSON,
    color: 'teal',
    about: {
      age: 'Cenomanian to Turonian: 96 to 90 million years',
      importance: 'The Eagle Ford Shale (EFS) is quite possibly the largest single economic development in the history of the state of Texas and ranks as the largest oil & gas development in the world based on capital invested'
    }
  },
  {
    name: 'Utica',
    JSON: uticaGeoJSON,
    color: 'grey',
    about: {
      age: 'Cenomanian to Turonian: 96 to 90 million years',
      importance: 'The Eagle Ford Shale (EFS) is quite possibly the largest single economic development in the history of the state of Texas and ranks as the largest oil & gas development in the world based on capital invested'
    }
  },{ 
    name: 'Bakken',
    JSON: bakkenGeoJSON,
    color: 'blue',
    about: {
      age: 'Cenomanian to Turonian: 96 to 90 million years',
      importance: 'The Eagle Ford Shale (EFS) is quite possibly the largest single economic development in the history of the state of Texas and ranks as the largest oil & gas development in the world based on capital invested'
    }
  }
]