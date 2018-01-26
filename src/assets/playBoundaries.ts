let eagleFordGeoJSON = require('./geoJSON/ShalePlay_EagleFord_Boundary_EIA_Aug2015_v2.json');
let aboYesoGeoJSON = require('./geoJSON/ShalePlay_AboYeso_Boundary_EIA_Aug2015_v2.json');
let bakkenGeoJSON = require('./geoJSON/ShalePlay_Bakken_Boundary_EIA_Aug2015_v2.json');
let boneSpringGeoJSON = require('./geoJSON/ShalePlay_BoneSpring_Boundary_EIA_Aug2015_v2.json');
let delawareGeoJSON = require('./geoJSON/ShalePlay_Delaware_Boundary_EIA_Aug2015_v2.json');
let glorietaYesoGeoJSON = require('./geoJSON/ShalePlay_GlorietaYeso_Boundary_EIA_Aug2015_v2.json');
let marcellusGeoJSON = require('./geoJSON/ShalePlay_Marcellus_Boundary_EIA_Aug2015_v2.json');
let niobraraGeoJSON = require('./geoJSON/ShalePlay_Niobrara_Boundary_EIA_Aug2015_v2.json');
let spraberryGeoJSON = require('./geoJSON/ShalePlay_Spraberry_Boundary_EIA_Aug2015_v2.json');
let threeForksGeoJSON = require('./geoJSON/ShalePlay_ThreeForks_Boundary_EIA_Aug2015_v2.json');
let uticaGeoJSON = require('./geoJSON/ShalePlay_Utica_Boundary_EIA_May2016.json');

export const plays: Array<any> = [
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
      age: 'Permian',
      importance: 'Yeso (Leonardian): The Yeso Formation is said to be comprised of four subplay members: The Upper Yeso (Glorieta and Paddock members), Blinebry subplay, Tubb subplay, and Drinkard subplay. The entire formation consists of 1000 feet of shales, sandstones, reddish colored siltstones and thin beds of limestone and gypsum. Abo (Wolfcampian-Leonardian): The Abo formation is typically interbedded with reddish brown siltstone, shale and sandstone; the sandstone said to become more arkosic to the north and northeast.'
    }
  },
  {
    name: 'Delaware',
    JSON: delawareGeoJSON,
    color: 'darkred',
    about: {
      age: 'Permian',
      importance: 'Delaware Wolfcamp (Wolfcampian): Behaves as a reservoir and source rock due to ideal mineralogy and grain size distribution. Industry publications cite mineralogy at 50-90% quartz and carbonate, with 10% clay. Other stats include a pressure gradient of 0.7 psi/ft, porosity around 5-9%, and TOC about 2-5%.'
    }
  },
  {
    name: 'BoneSpring',
    JSON: boneSpringGeoJSON,
    color: 'darkblue',
    about: {
      age: 'Permian',
      importance: 'Bone Spring (Leonardian): The entire Bone Spring group averages roughly 3,500 feet thick. It can be subdivided into alternating carbonate and clastic (sand) members deposited in slope and basin settings. This reciprocal sedimentation is thought to be the result of sea level changes where carbonates were deposited in transgression (high stand) and clastics in regression (low stand).'
    }
  },
  {
    name: 'Glorieta',
    JSON: glorietaYesoGeoJSON,
    color: 'hsl(120, 100%, 25%)',
    about: {
      age: 'Permian',
      importance: 'Glorieta sandstone is top member of Yeso formation. It consists of 500 feet of massive sandstone, even-grained and white when broken open but weathering reddish brown.'
    }
  },
  {
    name: 'Marcellus',
    JSON: marcellusGeoJSON,
    color: 'purple',
    about: {
      age: 'Middle Devonian',
      importance: 'The Marcellus natural gas trend, which encompasses 104,000 square miles and stretches across Pennsylvania and West Virginia, and into southeast Ohio and upstate New York, is the largest source of natural gas in the United States, and production was still growing rapidly in 2013. The Marcellus is an example of shale gas, natural gas trapped in low-permeability shale, and requires the well completion method of hydraulic fracturing to allow the gas to flow to the well bore. The surge in drilling activity in the Marcellus Shale since 2008 has generated both economic benefits and environmental concerns—and thus, considerable controversy.'
    }
  },
  {
    name: 'Niobrara',
    JSON: niobraraGeoJSON,
    color: 'red',
    about: {
      age: 'Late Cretaceous: 87 to 82 million years',
      importance: 'The Niobrara is in places a commercial hydrocarbon reservoir. Natural gas is produced from the Niobrara in the eastern Denver Basin. Oil is produced from the Niobrara in the North Park Basin and new fracturing methods are allowing much larger areas to be tapped for oil.'
    }
  },
  {
    name: 'Spraberry',
    JSON: spraberryGeoJSON,
    color: 'orange',
    about: {
      age: 'Permian',
      importance: 'In 2007, the U.S. Department of Energy ranked The Spraberry Trend third in the United States by total proved reserves, and seventh in total production. Estimated reserves for the entire Spraberry-Dean unit exceed 10 billion barrels (1.6×109 m3), and by the end of 1994 the field had reported a total production of 924 million barrels (146,900,000 m3)'
    }
  },
  {
    name: 'Three Forks',
    JSON: threeForksGeoJSON,
    color: 'teal',
    about: {
      age: 'Devonian to Early Mississippian',
      importance: 'Oil produced from the Three Forks Formation in the Williston Basin of North Dakota and south-eastern Saskatchewan is often included in production statistics with the overlying Bakken Formation. For instance, the Three Forks and Bakken were combined in estimates of potential production released by the United States Geological Survey on April 30, 2013. The estimate by the USGS projects that 7.4 billion barrels of oil can be recovered from the Bakken and Three Forks formations and 6.7 trillion cubic feet of natural gas and 530 million barrels of natural gas liquids using current technology.'
    }
  },
  {
    name: 'Utica',
    JSON: uticaGeoJSON,
    color: 'grey',
    about: {
      age: 'Upper Ordovician',
      importance: 'The Utica shale is a major source of tight gas in Quebec, and is rapidly becoming so in Ohio.'
    }
  },{ 
    name: 'Bakken',
    JSON: bakkenGeoJSON,
    color: 'blue',
    about: {
      age: 'Late Devonian to Early Mississippian',
      importance: 'The Bakken formation has emerged in recent years as one of the most important sources of new oil production in the United States. Most Bakken drilling and production has been in North Dakota, although the formation also extends into Montana and the Canadian provinces of Saskatchewan and Manitoba. As of 2013, the Bakken was the source of more than ten percent of all US oil production. By April 2014, Bakken production in North Dakota and Montana exceeded 1 million barrels per day (160,000 m3/d). As a result of increased production from the Bakken, and long-term production declines in Alaska and California, North Dakota as of 2014 was the second-largest oil-producing state in the US, behind only Texas in volume of oil produced.'
    }
  }
]