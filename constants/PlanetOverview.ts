import { PlanetFact, planet } from "types";

const PLANETFACTS: {
    [key in planet]: PlanetFact []
} = {
    mercury: [
        {
            title: "Smallest",
            fact: "It is a little bigger than Earth's Moon",
            img: require('../assets/images/overview/mercury/smallest.webp')
        },
        {
            title: "Inside Track",
            fact: "Mercury orbits closest to the Sun",
            img: require('../assets/images/overview/mercury/insideTrack.webp')
        },
        {
            title: "Fast Times",
            fact: "A year on Mercury is 88 days on Earth",
            img: require('../assets/images/overview/mercury/fastTimes.webp')
        },
        {
            title: "Rouge Surface",
            fact: "Mercury is cratered like the Moon",
            img: require('../assets/images/overview/mercury/roughSurface.webp')
        },
        {
            title: "Bring a SpaceSuit",
            fact: "Mercury has a thin atmosphere",
            img: require('../assets/images/overview/mercury/bringASpaceSuit.webp')
        },
        {
            title: "Moonless",
            fact: "Mercury has no moons",
            img: require('../assets/images/overview/mercury/moonless.webp')
        },
        {
            title: "Ringless",
            fact: "Mercury has no rings",
            img: require('../assets/images/overview/mercury/ringless.webp')
        },
        {
            title: "Tough Spot",
            fact: "Mercury can't support life as we know it",
            img: require('../assets/images/overview/mercury/toughSpot.webp')
        },
        {
            title: "Wear Eye Protection",
            fact: "Sunlight is 11 times brighter on Mercury",
            img: require('../assets/images/overview/mercury/wearEyeProtection.webp')
        },
        {
            title: "Greatest Hit",
            fact: "The Caloris Basin is a Texas-sized impact crater",
            img: require('../assets/images/overview/mercury/greatestHit.webp')
        }
    ],
    venus: [
        {
            title: "Twin Sister",
            fact: "Venus is similar in size to Earth",
            img: require('../assets/images/overview/venus/twinSister.webp')
        },
        {
            title: "Close Neightbor",
            fact: "At its nearest Venus, is 38 million miles (about 61 million km) from Earth",
            img: require('../assets/images/overview/venus/closeNeighbor.webp')
        },
        {
            title: "Long Days",
            fact: "Venus' day is longer than its year",
            img: require('../assets/images/overview/venus/longDays.webp')
        },
        {
            title: "Active Surface?",
            fact: "Venus has volcanic plains and rifts",
            img: require('../assets/images/overview/venus/activeSurface.webp')
        },
        {
            title: "Recently Surfaced",
            fact: "Venus' surface appears young (100s of millions of years",
            img: require('../assets/images/overview/venus/recentlyResurfaced.webp')
        },
        {
            title: "Runaway Greenhouse",
            fact: "Venus' thick atmosphere traps heat",
            img: require('../assets/images/overview/venus/runawayGreenhouse.webp')
        },
        {
            title: "Foul Clouds",
            fact: "Venus' sulfuric acid clouds smell like rotten eggs",
            img: require('../assets/images/overview/venus/foulClouds.webp')
        },
        {
            title: "Science Hot Spot",
            fact: "More than 40 spacecraft have visited",
            img: require('../assets/images/overview/venus/scienceHotSpot.webp')
        },
        {
            title: "Ingredients for Life?",
            fact: "Venus is an unlikely place for life as we know it",
            img: require('../assets/images/overview/venus/ingredientsForLife.webp')
        },
        {
            title: "Backward Sunrise",
            fact: "The Sun rises in the west and sets in the east",
            img: require('../assets/images/overview/venus/backwardSunrise.webp')
        }
    ],
    earth: [
        {
            title: "Home Sweet Home",
            fact: "Earth is our home planet",
            img: require('../assets/images/overview/jupiter/bigAndLight.webp') // REPLACE WITH EARTH 
            
        },
        {
            title: "Third Rock from the Sun",
            fact: "Earth is 1 Au from the Sun",
            img: require('../assets/images/overview/venus/twinSister.webp') //REPLACE WITH EARTH

        }
       
    ],
    mars: [
        {
            title: "Small World",
            fact: "Mars is 53% percent smaller than Earth",
            img: require('../assets/images/overview/mars/smallWorld.webp')

        },
        {
            title: "Fourth Rock",
            fact: "Mars is 1.52 AU from the Sun",
            img: require('../assets/images/overview/mars/fourthRock.webp')
        },
        {
            title: "More Time",
            fact: "A Martian day is a little longer than Earth's; a Mars year is almost two Earth years",
            img: require('../assets/images/overview/mars/moreTime.webp')
        },
        {
            title: "Rocky Planet",
            fact: "Mar's surface has been altered by volcanoes, impacts, winds, and crustal movement",
            img: require('../assets/images/overview/mars/rockyPlanet.webp')
        }, 
        {
            title: "Bring a Spacesuit",
            fact: "Mar's atmosphere is mostly carbon dioxide, argon, and nitrogen",
            img: require('../assets/images/overview/mars/BringASpaceSuit.webp')
        },
        {
            title: "Two Moons",
            fact: "Phobos and Deimos are small compared to the planet",
            img: require('../assets/images/overview/mars/smallWorld.webp')
        },
        {
            title: "Ringless",
            fact: "Mars has no rings",
            img: require('../assets/images/overview/mars/ringless.webp')
        },
        {
            title: "Many Missions",
            fact: "The first success was NASA's Mariner 4 flyby in 1965",
            img: require('../assets/images/overview/mars/manyMissinos.webp')
        },
        {
            title: "The Search for Life",
            fact: "Missons are determining Mars' past and future potential for life",
            img: require('../assets/images/overview/mars/searchForLife.webp')
        },
        {
            title: "The Red Planet",
            fact: "Iron minerals in the Martian soil oxidize, causing the soil and atmosphere to look red",
            img: require('../assets/images/overview/mars/redPlanet.webp')
        }
    ],
    jupiter: [
        {
            title: "The Biggest",
            fact: "For Scale, Jupiter's Great Red Spot is about the size of Earth",
            img: require('../assets/images/overview/jupiter/theBiggest.webp')
        },
        {
            title: "Fifth from the Sun",
            fact: "Jupiter is 5.2 AU from the Sun",
            img: require('../assets/images/overview/jupiter/fifthFromTheSun.webp')
        },
        {
            title: "Short and Long",
            fact: "Jupiter's day last only 10 Earth hours, however its year is 12 Earth years",
            img: require('../assets/images/overview/jupiter/ShortandLong.webp')
        },
        {
            title: "Nowhere to Land",
            fact: "Jupiter has no solid surface; It may have an Earth-sized core",
            img: require('../assets/images/overview/jupiter/nowhereToLand.webp')
        },
        {
            title: "Big and Light",
            fact: "Jupiter's atmosphere is mostly hydrogen and helium",
            img: require('../assets/images/overview/jupiter/bigAndLight.webp')
        },
        {
            title: "Many Moons",
            fact: "As of July 2023, Jupiter had 95 moons",
            img: require('../assets/images/overview/jupiter/manyMoons.webp')
        },
        {
            title: "Faint Rings",
            fact: "The rings were spotted in 1979",
            img: require('../assets/images/overview/jupiter/faintRings.webp')
        },
        {
            title: "Exploration",
            fact: "Seven robots flew by; two stayed in orbit",
            img: require('../assets/images/overview/jupiter/exploration.webp')
        },
        {
            title: "Ingredients for Life?",
            fact: "Jupiter can't support life as we know it",
            img: require('../assets/images/overview/jupiter/ingredientsForlIfe.webp')
        },
        {
            title: "Super Storm",
            fact: "The Great Red Spot is a storm that has raged for over 100 years",
            img: require('../assets/images/overview/jupiter/superStorm.webp')
        }
    ],
    saturn: [
        {
            title: "Second Largest",
            fact: "Nine Earths would almost span Saturn's diameter",
            img: require('../assets/images/overview/saturn/secondLargest.webp')
        },
        {
            title: "Sixth from the Sun",
            fact: "Saturn is 9.5 AU from the Sun",
            img: require('../assets/images/overview/saturn/sixthFromTheSun.webp')
        },
        {
            title: "Long Year",
            fact: "It takes 29 Earth Years for Saturn to orbit the Sun",
            img: require('../assets/images/overview/saturn/longYear.webp')
        },
        {
            title: "No Surface",
            fact: "This gas giant world may have a small core",
            img: require('../assets/images/overview/saturn/noSurface.webp')
        },
        {
            title: "Bring a Spacesuit",
            fact: "Saturn's atmosphere is mostly hydrogen and helium",
            img: require('../assets/images/overview/saturn/bringASpacesuit.webp')
        },
        {
            title: "King of the Moons",
            fact: "Saturn has 146 moons",
            img: require('../assets/images/overview/saturn/kingOfTheMoons.webp')
        },
        {
            title: "The Nicest Rings",
            fact: "Eight rings make for a spectacular system",
            img: require('../assets/images/overview/saturn/theNicestRings.webp')
        },
        {
            title: "Distinct Destination",
            fact: "Four missions visted Satun; one has orbited",
            img: require('../assets/images/overview/saturn/distantDestinations.webp')
        },
        {
            title: "Not Suitable For Life",
            fact: "Saturn can't support life as we know it",
            img: require('../assets/images/overview/saturn/notSuitableForLife.webp')
        },
        {
            title: "Cloud Hexagon",
            fact: "A powerful jet stream shapes the clouds",
            img: require('../assets/images/overview/saturn/cloudHexagon.webp')
        }
    ],
    uranus: [
        {
            title: "Ice Giant",
            fact: "Uranus is about four times wider than Earth",
            img: require('../assets/images/overview/uranus/iceGiant.webp')
        },
        {
            title: "Seventh Planet",
            fact: "Uranus is about 19.8 AU from the Sun",
            img: require('../assets/images/overview/uranus/seventhPlanet.webp')
        },
        {
            title: "A Uranian Year",
            fact: "It takes Uranus 84 Earth years to make a trip around the Sun",
            img: require('../assets/images/overview/uranus/aUranianYear.webp')
        },
        {
            title: "Fluid Planet",
            fact: "Uranus is mostly a mass of 'icy' fluid around a rocky core",
            img: require('../assets/images/overview/uranus/fluidPlanet.webp')
        },
        {
            title: "Bring a Spacesuit",
            fact: "Atmosphere is mostly molecular hydrogen and helium with a bit of methane",
            img: require('../assets/images/overview/uranus/bringAPlanet.webp')
        },
        {
            title: "Literary Moons",
            fact: "Uranus' moons are named for characters in literature",
            img: require('../assets/images/overview/uranus/literaryMoons.webp')
        },
        {
            title: "13 Rings",
            fact: "Inner Rings are dark; outer rings are brightly colored",
            img: require('../assets/images/overview/uranus/thirteenRings.webp')
        },
        {
            title: "Lonely Planet",
            fact: "NASA's voyager 2 is the only spacecraft to visit Uranus",
            img: require('../assets/images/overview/uranus/lonelyPlanet.webp')
        },
        {
            title: "No Signs",
            fact: "Uranus can't support life as we know it",
            img: require('../assets/images/overview/uranus/noSigns.webp')
        },
        {
            title: "East to West Rotation",
            fact: "Uranus is the only planet that rotates on its side",
            img: require('../assets/images/overview/uranus/eastToWestRotation.webp')
        }
    ],
    neptune: [
        {
            title: "Big Blue",
            fact: "Neptune is about four times windier than Earth",
            img: require('../assets/images/overview/neptune/bigBlue.webp')
        },
        {
            title: "Number Eight",
            fact: "Neptune is 30 AU from the Sun",
            img: require('../assets/images/overview/neptune/numberEight.webp')
        },
        {
            title: "A Neptunian Year",
            fact: "Neptune takes 165 Earth Years to go around the Sun",
            img: require('../assets/images/overview/neptune/aNeptunianYear.webp')
        },
        {
            title: "Ice Giant",
            fact: "The densest of the giant planets",
            img: require('../assets/images/overview/neptune/iceGiant.webp')
        },
        {
            title: "14 Moons",
            fact: "named for sea gods and nymphs in Greek mythology",
            img: require('../assets/images/overview/neptune/fourteenYears.webp')
        },
        {
            title: "Rings and Arcs",
            fact: "Neptune has five rings and four more ring arcs",
            img: require('../assets/images/overview/neptune/ringsAndArcs.webp')
        },
        {
            title: "Solo Voyager",
            fact: "Voyager 2 is the only spacecraft to visit Neptune",
            img: require('../assets/images/overview/neptune/soloVoyager.webp')
        },
        {
            title: "Bring a Spacesuit",
            fact: "Atmosphere is molecular hydrogen and atomic helium with a bit of methane",
            img: require('../assets/images/overview/neptune/bringASpaceCraft.webp')
        },
        {
            title: "No Signs",
            fact: "Neptune cannot support life as we know it",
            img: require('../assets/images/overview/neptune/noSigns.webp')
        },
        {
            title: "Orbit Crossing",
            fact: "Pluto sometimes comes closer to the Sun than Neptune",
            img: require('../assets/images/overview/neptune/orbitCrossing.webp')
        }
    ]
}

export default PLANETFACTS;