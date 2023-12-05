import { PlanetStory, planet } from "types";

const PLANETSTORIES: { [key in planet]: PlanetStory [] } = {
    mercury: [
        {
            title: "Mercury's Strange Hollows",
            blurb: `Enigmatic depressions on the surface have puzzled scientists since the 1970s For decades, scientists have been puzzling over 
        strange hollows on Mercury's surface, thousands of peculiar depressions at a variety of longitudes and latitudes, ranging in size 
        from 60 feet…`,
            url: "https://science.nasa.gov/solar-system/planets/mercury/mercurys-strange-hollows/",
            img: require("../assets/images/exploration/mercury/HollowsMercury.webp")
        },
        
        {
            title: "10 'Super Bowls' in Our Solar System",
            blurb: `Here are 10 impressively super, bowl-shaped venues adorning worlds in our solar system, including a couple where we've 
            actually made…touchdowns!`,
            url: 'https://science.nasa.gov/solar-system/10-super-bowls-in-our-solar-system/',
            img: require("../assets/images/exploration/mercury/tenSuperbowls.webp")
        },
        {
            title: "January 2022: The Next Full Moon is the Wolf Moon, or Ice Moon",
            blurb: `The Next Full Moon is the Wolf Moon, Ice Moon, the Moon after Yule, and the Old Moon.`,
            url: "https://science.nasa.gov/solar-system/planets/jupiter/full-moon-guide-january-february-2022/",
            img: require("../assets/images/exploration/mercury/jan2022.webp")
        },
        {
            title: "10+ Things: Tour of Storms Across the Solar System",
            blurb: `Our solar system is a stormy place. Join us on a tour of storms.`,
            url: "https://science.nasa.gov/solar-system/10-things-tour-of-storms-across-the-solar-system/",
            img: require("../assets/images/exploration/mercury/tenThings.webp")
        },
        {
            title: "A Closer Look at Mercury's Spin and Gravity Reveals the Planet's Inner Solid Core",
            blurb: `NASA Scientists found evidence that Mercury's inner core is indeed solid and that it is very nearly the same size as Earth's inner core.`,
            url: "https://www.nasa.gov/solar-system/a-closer-look-at-mercurys-spin-and-gravity-reveals-the-planets-inner-solid-core/",
            img: require("../assets/images/exploration/mercury/closerLook.webp")
        },
        {
            title: "45 Years Ago: Mariner 10 First to Explore Mercury",
            blurb: `A unique opportunity presented itself in 1973 to send a spacecraft to visit both Venus and Mercury in a single mission. Using gravity assist, a 
            technique theorized for decades but never used before, under favorable conditions a spacecraft sent to…`,
            url: "https://www.nasa.gov/history/45-years-ago-mariner-10-first-to-explore-mercury/",
            img: require("../assets/images/exploration/mercury/mariner_10_instruments.webp")
        },
        {
            title: "NASA Team Studies Middle-aged Sun by Tracking Motion of Mercury",
            blurb: `Like the waistband of a couch potato in midlife, the orbits of planets in our solar system are expanding. It happens because the Sun's gravitational 
            grip gradually weakens as our star ages and loses mass. Now, a team of NASA…`,
            url: "https://www.nasa.gov/missions/nasa-team-studies-middle-aged-sun-by-tracking-motion-of-mercury/",
            img: require("../assets/images/exploration/mercury/sun-and-mercury.webp")
        },
        {
            title: "Small Collisions Make Big Impact on Mercury's Thin Atmosphere/",
            blurb: `Mercury, our smallest planetary neighbor, has very little to call an atmosphere, but it does have a strange weather pattern: morning micro-meteor 
            showers. Recent modeling along with previously published results from NASA's MESSENGER spacecraft — short for Mercury Surface, Space…`,
            url: "https://www.nasa.gov/missions/small-collisions-make-big-impact-on-mercurys-thin-atmosphere/",
            img: require("../assets/images/exploration/mercury/smallCollisions.webp")
        },
        {
            title: "'Great Valley' Found on Mercury",
            blurb: `A newly discovered “great valley” in the southern hemisphere of Mercury provides more evidence that the small planet closest to the sun is 
            shrinking. Scientists used stereo images from NASA's MESSENGER spacecraft to create a high-resolution topo map that revealed…`,
            url: "https://www.nasa.gov/solar-system/great-valley-found-on-mercury/",
            img: require("../assets/images/exploration/mercury/valley.webp")
        },
        {
            title: "The Gimbal Rig Mercury Astronaut Trainer",
            blurb: `The multiple-axis space test inertia facility, fondly called “the gimbal rig,” simulated tumble-type maneuvers that might be encountered in space 
            flight. Three tubular aluminum cages could revolve separately or in combination to give roll, pitch and yaw motions at speeds…`,
            url: "https://www.nasa.gov/history/the-gimbal-rig-mercury-astronaut-trainer/",
            img: require("../assets/images/exploration/mercury/gimbalRig.webp")
        }
    ],
    venus: [
        {
            title: "Venus on Earth: NASA's VERITAS Science Team Studies Volcanic Iceland",
            blurb: `The JPL-led international team used the island as a stand-in for Venus to test radar technologies that will help uncover the planet's ground truth. 
            With its crushing atmospheric pressure, clouds of sulfuric acid, and searing surface temperature, Venus is an…`,
            url: "https://www.nasa.gov/missions/veritas/venus-on-earth-nasas-veritas-science-team-studies-volcanic-iceland/",
            img: require("../assets/images/exploration/venus/venusLava.webp")
        },
        {
            title: "NASA's Magellan Data Reveals Volcanic Activity on Venus",
            blurb: `In a first, scientists have seen direct evidence of active volcanism on Earth's twin, setting the stage for the agency's VERITAS mission to 
            investigate.`,
            url: "https://www.nasa.gov/missions/veritas/nasas-magellan-data-reveals-volcanic-activity-on-venus/",
            img: require("../assets/images/exploration/venus/magellan.webp")
        },
        {
            title: "Study Finds Venus' 'Squishy' Outer Shell May Be Resurfacing the Planet",
            blurb: `The research uses archival NASA data to show that Venus may be losing heat from geologic activity in regions called coronae, possibly like early 
            tectonic activity on Earth.`,
            url: "https://www.nasa.gov/missions/veritas/study-finds-venus-squishy-outer-shell-may-be-resurfacing-the-planet/",
            img: require("../assets/images/exploration/venus/outerShell.webp")
        },
        {
            title: "NASA Study: Massive Volcanism May Have Altered Ancient Venus' Climate",
            blurb: `Volcanic activity lasting hundreds to thousands of centuries and erupting massive amounts of material may have helped transform Venus from a 
            temperate and wet world to the acidic hothouse it is today, a NASA paper suggests. The paper also discusses…`,
            url: "https://www.nasa.gov/solar-system/nasa-study-massive-volcanism-may-have-altered-ancient-venus-climate/",
            img: require("../assets/images/exploration/venus/venus-maat-mons-volcano-large-jpg.webp")
        },
        {
            title: "NASA Instrument to Measure Temperature, Pressure, and Wind on Venus",
            blurb: `The VASI (Venus Atmospheric Structure Investigation) instrument aboard NASA's Deep Atmosphere Venus Investigation of Noble gases, Chemistry, and 
            Imaging, or DAVINCI, mission to Venus, together with the other instruments on this mission, aims to investigate Venus' mysterious atmosphere by painting…`,
            url: "https://www.nasa.gov/solar-system/nasa-instrument-to-measure-temperature-pressure-and-wind-on-venus/",
            img: require("../assets/images/exploration/venus/pressure.webp")
        },
        {
            title: "60 Years Ago: Mariner 2 Launches to Explore Venus",
            blurb: `In the early 1960s, in addition to taking on the challenge to land men on the Moon by the end of the decade, NASA also set its sights on exploring 
            our planetary neighbors. The agency gave responsibility for planetary exploration…`,
            url: "https://www.nasa.gov/history/60-years-ago-mariner-2-launches-to-explore-venus/",
            img: require("../assets/images/exploration/venus/mariner.webp")
        },
        {
            title: "NASA's DAVINCI Mission To Take the Plunge Through Massive Atmosphere of Venus",
            blurb: `In a recently published paper, NASA scientists and engineers give new details about the agency's Deep Atmosphere Venus Investigation of Noble gases, 
            Chemistry, and Imaging (DAVINCI) mission, which will descend through the layered Venus atmosphere to the surface of the planet in mid-2031. DAVINCI is the…`,
            url: "https://www.nasa.gov/centers-and-facilities/goddard/nasas-davinci-mission-to-take-the-plunge-through-massive-atmosphere-of-venus/",
            img: require("../assets/images/exploration/venus/davinci.webp")
        },
        {
            title: "Meet VMS - the briefcase-sized chemistry lab headed to Venus",
            blurb: `Short for Venus Mass Spectrometer, VMS is one of five instruments aboard the DAVINCI descent probe. Launching in 2029, DAVINCI will be the first 
            US probe mission to enter Venus' atmosphere in over 40 years. The goal of the mission…`,
            url: "https://www.nasa.gov/solar-system/meet-vms-the-briefcase-sized-chemistry-lab-headed-to-venus/",
            img: require("../assets/images/exploration/venus/vms.webp")
        },
        {
            title: "Then There Were 3: NASA to Collaborate on ESA's New Venus Mission",
            blurb: `On June 10, 2021, the European Space Agency (ESA) announced the selection of EnVision as its newest medium-class science mission. EnVision will 
            make detailed observations of Venus to understand its history and especially understand the connections between the atmosphere and geologic…`,
            url: "https://www.nasa.gov/solar-system/then-there-were-3-nasa-to-collaborate-on-esas-new-venus-mission/",
            img: require("../assets/images/exploration/venus/nasa.webp")
        },
        {
            title: "Parker Solar Probe Offers Stunning View of Venus",
            blurb: `NASA's Parker Solar Probe captured stunning views of Venus during its close flyby of the planet in July 2020. Though Parker Solar Probe's focus is 
            the Sun, Venus plays a critical role in the mission: The spacecraft whips by Venus…`,
            url: "https://www.nasa.gov/solar-system/parker-solar-probe-offers-stunning-view-of-venus/",
            img: require("../assets/images/exploration/venus/parker.webp")
        },
        {
            title: "The Return to Venus and What It Means for Earth",
            blurb: `Sue Smrekar really wants to go back to Venus. In her office at NASA's Jet Propulsion Laboratory in Pasadena, California, the planetary scientist 
            displays a 30-year-old image of Venus' surface taken by the Magellan spacecraft, a reminder of how much…`,
            url: "https://www.nasa.gov/solar-system/the-return-to-venus-and-what-it-means-for-earth/",
            img: require("../assets/images/exploration/venus/return.webp")
        }
    ],
    earth: [
        {
            title: "NASA Mission Excels at Spotting Greenhouse Gas Emission Sources",
            blurb: `Since launching 16 months ago, the EMIT imaging spectrometer aboard the International Space Station has shown an ability to detect more than just 
            surface minerals. More than a year after first detecting methane plumes from its perch aboard the International…`,
            url: "https://www.nasa.gov/missions/emit/nasa-mission-excels-at-spotting-greenhouse-gas-emission-sources/",
            img: require("../assets/images/exploration/earth/flare.webp")
        },
        {
            title: "Satellite Data Can Help Limit the Dangers of Windblown Dust",
            blurb: `Dust storms present a growing threat to the health and safety of U.S. populations.`,
            url: "https://science.nasa.gov/earth/satellite-data-can-help-limit-the-dangers-of-windblown-dust/",
            img: require("../assets/images/exploration/earth/dust.webp")
        },
        {
            title: "Trailblazing New Earth Satellite Put to Test in Preparation for Launch",
            blurb: `During three weeks in a thermal vacuum chamber in Bengaluru, India, the joint NASA-ISRO satellite demonstrated its hardiness in a harsh, 
            space-like environment. NISAR, the trailblazing Earth-observing radar satellite being developed by the United States and Indian space agencies, passed…`,
            url: "https://www.nasa.gov/missions/nisar/trailblazing-new-earth-satellite-put-to-test-in-preparation-for-launch/",
            img: require("../assets/images/exploration/earth/trailblazing.webp")
        },
        {
            title: "Peter Griffith: Diving Into Carbon Cycle Science",
            blurb: `Dr. Peter Griffith serves as the director of NASA's Carbon Cycle and Ecosystems Office at NASA's Goddard Space Flight Center. Dr. Griffith's 
            scientific journey began by swimming in lakes as a child, then to scuba diving with the Smithsonian Institution,…`,
            url: "https://www.nasa.gov/people-of-nasa/goddard-people/peter-griffith-diving-into-carbon-cycle-science/",
            img: require("../assets/images/exploration/earth/peter.webp")
        },
        {
            title: "NASA Analysis Finds Strong El Niño Could Bring Extra Floods This Winter",
            blurb: `Such high-tide flooding that inundates roads and buildings along the west coast of the Americas tends to be uncommon outside of El Niño years, but 
            that could change by the 2030s. An analysis by NASA's sea level change science team…`,
            url: "https://www.nasa.gov/missions/swot/nasa-analysis-finds-strong-el-nino-could-bring-extra-floods-this-winter/",
            img: require("../assets/images/exploration/earth/nino.webp")
        },
        {
            title: "NASA Project Manager Helps Makes Impact in Southeast Asia with SERVIR",
            blurb: `By Celine Smith “As the seedlings were placed in the water, I felt a moment of déjà vu,” said NASA scientist Tony Kim. “I was taken back to when I 
            was a child playing in similar fields in South Korea.…`,
            url: "https://www.nasa.gov/missions/servir/nasa-project-manager-helps-makes-impact-in-southeast-asia-with-servir/",
            img: require("../assets/images/exploration/earth/asia.webp")
        },
        {
            title: "Watch NASA Build Its First Robotic Moon Rover",
            blurb: `Lee esta nota de prensa en español aquí. The public now has a live, front row seat to see NASA's first robotic Moon rover take shape in the 
            Surface Segment Integration and Testing Facility clean room at the agency's Johnson Space…`,
            url: "https://www.nasa.gov/missions/viper/watch-nasa-build-its-first-robotic-moon-rover/",
            img: require("../assets/images/exploration/earth/robot.webp")
        },
        {
            title: "NASA Flights Link Methane Plumes to Tundra Fires in Western Alaska",
            blurb: `Methane 'hot spots' in the Yukon-Kuskokwim Delta are more likely to be found where recent wildfires burned into the tundra, altering carbon 
            emissions from the land. In Alaska's largest river delta, tundra that has been scorched by wildfire is emitting…`,
            url: "https://www.nasa.gov/earth/nasa-flights-link-methane-plumes-to-tundra-fires-in-western-alaska/",
            img: require("../assets/images/exploration/earth/fire.webp")
        },
        {
            title: "2023 Ozone Hole Ranks 16th Largest, NASA and NOAA Researchers Find",
            blurb: `Editor's note: This article has been updated to clarify the ranking of the 2023 ozone hole.  It is the 12th largest single-day hole on record, and 
            the 16th largest when averaged from Sept. 7 to Oct. 13. The 2023 Antarctic…`,
            url: "https://www.nasa.gov/earth/climate-change/ozone-layer/2023-ozone-hole-ranks-16th-largest/",
            img: require("../assets/images/exploration/earth/ozone.webp")

        },

        {
            title: "NASA, Partners Explore Sustainable Fuel's Effects on Aircraft Contrails",
            blurb: `Contrails, the lines of clouds from high-flying aircraft that crisscross the skies, are familiar sights, but they may have an unseen effect on the 
            planet - trapping heat in the atmosphere. Working with Boeing, and other partners, NASA researchers are…`,
            url: "https://www.nasa.gov/centers-and-facilities/armstrong/nasa-partners-explore-sustainable-fuels-effects-on-aircraft-contrails/",
            img: require("../assets/images/exploration/earth/contrails.webp")
        },
        {
            title: "NASA Technologies Receive Multiple Nods in TIME Inventions of 2023",
            blurb: `As NASA explores, innovates, and inspires through its work, agency inventions aimed at monitoring atmospheric pollution, studying samples from 
            asteroids, extracting oxygen from the Martian atmosphere, and revolutionizing flight have been named TIME's Inventions of 2023. TIME announced the 
            honorees…`,
            url: "https://www.nasa.gov/general/nasa-technologies-receive-multiple-nods-in-time-inventions-of-2023/",
            img: require("../assets/images/exploration/earth/time.webp")
        }
    ],
    mars: [
        {
            title: "NASA's Mars Fleet Will Still Conduct Science While Lying Low",
            blurb: `Rovers and orbiters will continue collecting limited data during a two-week communications pause due to the position of Earth, the Sun, and the 
            Red Planet. NASA will hold off sending commands to its Mars fleet for two weeks, from Nov.…`,
            url: "https://www.nasa.gov/solar-system/planets/mars/nasas-mars-fleet-will-still-conduct-science-while-lying-low/",
            img: require("../assets/images/exploration/mars/rover.webp")
        },
        {
            title: "NASA's Curiosity Rover Clocks 4,000 Days on Mars",
            blurb: `The mission team is making sure the robotic scientist, now in its fourth extended mission, is staying strong, despite wear and tear from its 
            11-year journey. Four thousand Martian days after setting its wheels in Gale Crater on Aug. 5, 2012, NASA's…`,
            url: "https://www.nasa.gov/missions/mars-science-laboratory/curiosity-rover/nasas-curiosity-rover-clocks-4000-days-on-mars/",
            img: require("../assets/images/exploration/mars/curiosity.webp")
        },
        {
            title: "NASA Is Locating Ice on Mars With This New Map",
            blurb: `The map could help the agency decide where the first astronauts to the Red Planet should land. The more available water, the less missions will 
            need to bring. Buried ice will be a vital resource for the first people to…`,
            url: "https://www.nasa.gov/solar-system/planets/mars/nasa-is-locating-ice-on-mars-with-this-new-map/",
            img: require("../assets/images/exploration/mars/ice.webp")
        },
        {
            title: "NASA's Perseverance Captures Dust-Filled Martian Whirlwind",
            blurb: `The six-wheeled geologist spotted the twister as part of an atmospheric exploration of Jezero Crater. The lower portion of a Martian dust devil 
            was captured moving along the western rim of Mars' Jezero Crater by NASA's Perseverance rover on Aug.…`,
            url: "https://www.nasa.gov/missions/mars-2020-perseverance/perseverance-rover/nasas-perseverance-captures-dust-filled-martian-whirlwind/",
            img: require("../assets/images/exploration/mars/perseverence.webp")
        },
        {
            title: "Historic Wind Tunnel Facility Testing NASA's Mars Ascent Vehicle Rocket",
            blurb: `The same facility that provided valuable testing for NASA missions to low-Earth orbit and the Moon is now helping the agency prepare to launch the 
            first rocket from Mars. The MAV (Mars Ascent Vehicle) team recently completed wind tunnel testing…`,
            url: "https://www.nasa.gov/missions/mars-sample-return/historic-wind-tunnel-facility-testing-nasas-mars-ascent-vehicle-rocket-2/",
            img: require("../assets/images/exploration/mars/wind.webp")
        },
        {
            title: "Autonomous Systems Help NASA's Perseverance Do More Science on Mars",
            blurb: `A computer pilot helps NASA's six-wheeled geologist as it searches for rock samples that could be brought to Earth for deeper investigation. 
            In about a third of the time it would have taken other NASA Mars rovers, Perseverance recently navigated…`,
            url: "https://www.nasa.gov/missions/mars-2020-perseverance/perseverance-rover/autonomous-systems-help-nasas-perseverance-do-more-science-on-mars-2/",
            img: require("../assets/images/exploration/mars/auto.webp")
        },
        {
            title: "NASA Releases Independent Review's Mars Sample Return Report",
            blurb: `The agency established the board in May 2023 to evaluate the technical, cost, and schedule plans prior to confirmation of the mission's design. 
            An Independent Review Board (IRB) looked at NASA's current plans and goals of the first mission to…`,
            url: "https://www.nasa.gov/missions/mars-sample-return/nasa-releases-independent-reviews-mars-sample-return-report/",
            img: require("../assets/images/exploration/mars/sample.webp")
        },
        {
            title: "NASA's Oxygen-Generating Experiment MOXIE Completes Mars Mission",
            blurb: `Riding with the Perseverance rover, the instrument has proved to be a viable technology for astronauts on Mars to produce oxygen for fuel and 
            breathing.`,
            url: "https://www.nasa.gov/missions/mars-2020-perseverance/perseverance-rover/nasas-oxygen-generating-experiment-moxie-completes-mars-mission/",
            img: require("../assets/images/exploration/mars/oxygen.webp")
        },
        {
            title: "NASA, Partners Study Ancient Life in Australia to Inform Mars Search",
            blurb: `NASA's Mars Exploration Program leaders joined their counterparts from the Australian Space Agency, ESA, and the Australian Commonwealth 
            Scientific and CSIRO on a field expedition to visit some of the oldest convincing evidence of life on Earth`,
            url: "https://www.nasa.gov/general/nasa-partners-study-ancient-life-in-australia-to-inform-mars-search/",
            img: require("../assets/images/exploration/mars/austrailia.webp")
        },
        {
            title: "Watch NASA Engineers Put a Mars Lander's Legs to the Test",
            blurb: `Sturdy legs are needed to absorb the impact of the heaviest spacecraft to ever touch down on the Red Planet.`,
            url: "https://www.nasa.gov/solar-system/watch-nasa-engineers-put-a-mars-landers-legs-to-the-test/",
            img: require("../assets/images/exploration/mars/lander.webp")
        }
    ],
    jupiter: [
        {
            title: "Time Is Running Out to Add Your Name to NASA's Europa Clipper",
            blurb: `Six weeks remain for you to add your name to a microchip that will ride aboard the spacecraft as it explores Jupiter's moon Europa. It's not every 
            day that members of the public have the chance to send their names…`,
            url: "https://www.nasa.gov/missions/europa-clipper/time-is-running-out-to-add-your-name-to-nasas-europa-clipper/",
            img: require("../assets/images/exploration/jupiter/bottle.webp")
        },
        {
            title: "NASA's Juno Finds Jupiter's Winds Penetrate in Cylindrical Layers",
            blurb: `The finding offers deeper insights into the long-debated internal structure of the gas giant. Gravity data collected by NASA's Juno mission 
            indicates Jupiter's atmospheric winds penetrate the planet in a cylindrical manner, parallel to its spin axis. A paper on…`,
            url: "https://www.nasa.gov/missions/juno/nasas-juno-finds-jupiters-winds-penetrate-in-cylindrical-layers/",
            img: require("../assets/images/exploration/jupiter/wind.webp")
        },
        {
            title: "Hubble Provides Unique Ultraviolet View of Jupiter",
            blurb: `This newly released image from the NASA Hubble Space Telescope shows the planet Jupiter in a color composite of ultraviolet wavelengths. Released in 
            honor of Jupiter reaching opposition, which occurs when the planet and the Sun are in opposite sides…`,
            url: "https://science.nasa.gov/missions/hubble/hubble-provides-unique-ultraviolet-view-of-jupiter/",
            img: require("../assets/images/exploration/jupiter/hubble.webp")
        },
        {
            title: "Salts and Organics Observed on Ganymede's Surface by NASA's Juno",
            blurb: `Data collected by NASA's Juno mission indicates a briny past may be bubbling to the surface on Jupiter's largest moon. NASA's Juno mission has 
            observed mineral salts and organic compounds on the surface of Jupiter's moon Ganymede. Data for this…`,
            url: "https://www.nasa.gov/missions/juno/salts-and-organics-observed-on-ganymedes-surface-by-nasas-juno/",
            img: require("../assets/images/exploration/jupiter/juno.webp")
        },
        {
            title: "How NASA Is Protecting Europa Clipper From Space Radiation",
            blurb: `To explore the mysterious ice-encrusted moon Europa, the mission will need to endure bombardment by radiation and high-energy particles surrounding 
            Jupiter. When NASA's Europa Clipper begins orbiting Jupiter to investigate whether its ice-encased moon, Europa, has conditions suitable for life,…`,
            url: "https://www.nasa.gov/missions/europa-clipper/how-nasa-is-protecting-europa-clipper-from-space-radiation/",
            img: require("../assets/images/exploration/jupiter/clipper.webp")
        },
        {
            title: "NASA's Webb Discovers New Feature in Jupiter's Atmosphere",
            blurb: `Narrow jet stream near equator has winds traveling 320 miles per hour NASA's James Webb Space Telescope has discovered a new, never-before-seen 
            feature in Jupiter's atmosphere. The high-speed jet stream, which spans more than 3,000 miles (4,800 kilometers) wide, sits…`,
            url: "https://www.nasa.gov/missions/webb/nasas-webb-discovers-new-feature-in-jupiters-atmosphere/",
            img: require("../assets/images/exploration/jupiter/webb.webp")
        },
        {
            title: "NASA's Webb Finds Carbon Source on Surface of Jupiter's Moon Europa",
            blurb: `Astronomers using data from NASA's James Webb Space Telescope have identified carbon dioxide in a specific region on the icy surface of Jupiters
             moon Europa.`,
             url: 'https://www.nasa.gov/solar-system/nasas-webb-finds-carbon-source-on-surface-of-jupiters-moon-europa/',
             img: require("../assets/images/exploration/jupiter/carbon.webp")
        },
        {
            title: "NASA's Europa Probe Gets a Hotline to Earth",
            blurb: `he addition of a high-gain antenna will enable the agency's Europa Clipper spacecraft - set to launch in October 2024 - to communicate with mission controllers
             hundreds of millions of miles away.`,
             url: "https://www.nasa.gov/missions/europa-clipper/nasas-europa-probe-gets-a-hotline-to-earth/",
             img: require("../assets/images/exploration/jupiter/europ.webp")
        },
        {
            title: "NASA's Juno Is Getting Ever Closer to Jupiter's Moon Io",
            blurb: `The spinning, solar-powered spacecraft will take another look of the fiery Jovian moon on July 30.`,
            url: "https://www.nasa.gov/missions/juno/nasas-juno-is-getting-ever-closer-to-jupiters-moon-io/",
            img: require("../assets/images/exploration/jupiter/io.webp")
        },
        {
            title: "Juno Marks 50 Orbits Around Jupiter",
            blurb: `NASA's Juno mission completed its 50th close pass by Jupiter on April 8, 2023. To mark the 50th close pass, NASA teamed up with Google Arts & 
            Culture to feature a selection of JunoCam images.`,
            url: "https://science.nasa.gov/missions/juno/juno-marks-50-orbits-around-jupiter/",
            img: require("../assets/images/exploration/jupiter/orbit.webp")
        }
    ],
    saturn: [
        {
            title: "NASA's Dragonfly Tunnel Visions",
            blurb: `Dragonfly Team Utilizes Unique NASA Facilities to Shape Its Innovative Titan-bound Rotorcraft  With its dense atmosphere and low gravity, Saturn's 
            moon Titan is a great place to fly.  But well before NASA's Dragonfly rotorcraft lander soars through Titan's skies, researchers…`,
            url: "https://www.nasa.gov/missions/dragonfly/nasas-dragonfly-tunnel-visions/",
            img: require("../assets/images/exploration/saturn/dragonfly-post-check1.webp")
        },
        {
            title: "New Simulations Shed Light on Origins of Saturn's Rings and Icy Moons",
            blurb: `On a clear night, with a decent amateur telescope, Saturn and its series of remarkable rings can be seen from Earth's surface. But how did those 
            rings come to be? And what can they tell us about Saturn and its…`,
            url: "https://www.nasa.gov/solar-system/new-simulations-shed-light-on-origins-of-saturns-rings-and-icy-moons/",
            img: require("../assets/images/exploration/saturn/rings.webp")
        },
        {
            title: "NASA Cassini Data Reveals Building Block for Life in Enceladus' Ocean",
            blurb: `Phosphorus, a key chemical element for many biological processes, has been found in icy grains emitted by the small moon and is likely abundant in 
            its subsurface ocean. Using data collected by NASA's Cassini mission, an international team of scientists has…`,
            url: "https://www.nasa.gov/missions/cassini/nasa-cassini-data-reveals-building-block-for-life-in-enceladus-ocean/",
            img: require("../assets/images/exploration/saturn/cassisini.webp")
        },
        {
            title: "Webb Maps Surprisingly Large Plume Jetting From Saturn's Moon Enceladus",
            blurb:`A water vapor plume from Saturn's moon Enceladus spanning more than 6,000 miles - nearly the distance from Los Angeles, California to Buenos Aires, 
            Argentina - has been detected by researchers using NASA's James Webb Space Telescope.`,
            url: "https://www.nasa.gov/solar-system/webb-maps-surprisingly-large-plume-jetting-from-saturns-moon-enceladus/",
            img: require("../assets/images/exploration/saturn/web.webp")
        },
        {
            title: "Saturn's Rings: Young and Ephemeral, Three NASA Ames Studies Say",
            blurb: `Three recent studies by scientists at NAS's Ames Research Center in California's Silicon Valley examine data from NASA's Cassini mission and 
            provide evidence that Saturn's rings are both young and ephemeral - in astronomical terms, of course.`,
            url:"https://www.nasa.gov/solar-system/saturns-rings-young-and-ephemeral-three-nasa-ames-studies-say/",
            img: require("../assets/images/exploration/saturn/rings2.webp")
        },
        {
            title: "Icy Moonquakes: Surface Shaking Could Trigger Landslides",
            blurb: `A new NASA study offers an explanation of how quakes could be the source of the mysteriously smooth terrain on moons circling Jupiter and Saturn.`,
            url: "https://www.nasa.gov/centers-and-facilities/jpl/icy-moonquakes-surface-shaking-could-trigger-landslides/",
            img: require("../assets/images/exploration/saturn/icy.webp")
        },
        {
            title: "Hubble Finds Saturn's Rings Heating Its Atmosphere",
            blurb: `The secret has been hiding in plain view for 40 years. But it took the insight of a veteran astronomer to pull it all together within a year, 
            using observations of Saturn from NASA's Hubble Space Telescope and retired Cassini…`,
            url: "https://science.nasa.gov/missions/hubble/hubble-finds-saturns-rings-heating-its-atmosphere/",
            img: require("../assets/images/exploration/saturn/hubble.webp")
        },
        {
            title: "NASA Instrument Bound for Titan Could Reveal Chemistry Leading to Life",
            blurb: `NASA's Dragonfly mission to Saturn's giant moon, Titan, will carry an instrument called the Dragonfly Mass Spectrometer designed to help scientists 
            hone in on the chemistry at work on Titan. It may also shed light on the kinds of chemical…`,
            url: "https://www.nasa.gov/missions/nasa-instrument-bound-for-titan-could-reveal-chemistry-leading-to-life/",
            img: require("../assets/images/exploration/saturn/hubble.webp")
        },
        {
            title: "Hubble Captures the Start of a New Spoke Season at Saturn",
            blurb: `New images of Saturn from NASA's Hubble Space Telescope herald the start of the planet's “spoke season” surrounding its equinox, when enigmatic
             features appear across its rings. The cause of the spokes, as well as their seasonal variability, has yet…`,
             url: "https://science.nasa.gov/missions/hubble/hubble-captures-the-start-of-a-new-spoke-season-at-saturn/",
             img: require("../assets/images/exploration/saturn/season.webp")
        },
        {
            title: "10 Things: Why Cassini Mattered",
            blurb: `The Cassini spacecraft has been gone for a year now, but the science continues. Here are 10 reasons why Cassini mattered...`,
            url: "https://science.nasa.gov/missions/cassini/10-things-why-cassini-mattered/",
            img: require("../assets/images/exploration/saturn/things.webp")
        },
        {
            title: "Swarm of Tiny Swimming Robots Could Look for Life on Distant Worlds",
            blurb: `A concept in development at NASA's Jet Propulsion Laboratory would allow potential planetary missions to chase interesting clues in subsurface 
            oceans. Someday, a swarm of cellphone-size robots could whisk through the water beneath the miles-thick icy shell of Jupiter's moon…`,
            url: "https://www.nasa.gov/directorates/stmd/niac/swarm-of-tiny-swimming-robots-could-look-for-life-on-distant-worlds/",
            img: require("../assets/images/exploration/saturn/robots.webp")
        }
    ],
    uranus: [
        {
            title: "All Eyes on the Ice Giants",
            blurb: `NASA's New Horizons spacecraft plans to observe Uranus and Neptune from its location far out in the outer solar system this fall, and the mission 
            team is inviting the global amateur astronomy community to come along for the ride…`,
            url: "https://www.nasa.gov/missions/new-horizons/all-eyes-on-the-ice-giants/",
            img: require("../assets/images/exploration/uranus/ice.webp")
        },
        {
            title: "NASA Scientists Make First Observation of a Polar Cyclone on Uranus",
            blurb: `Scientists used ground-based telescopes to get unprecedented views, thanks to the giant planet's position in its long orbit around the Sun. 
            For the first time, NASA scientists have strong evidence of a polar cyclone on Uranus. By examining radio waves…`,
            url: "https://www.nasa.gov/solar-system/planets/uranus/nasa-scientists-make-first-observation-of-a-polar-cyclone-on-uranus-2/",
            img: require("../assets/images/exploration/uranus/polar.webp")
        },
        {
            title: "New Study of Uranus' Large Moons Shows 4 May Hold Water",
            blurb: `The work is based on new modeling and explores how oceans could exist in unlikely places in our solar system.`,
            url: "https://www.nasa.gov/centers-and-facilities/jpl/new-study-of-uranus-large-moons-shows-4-may-hold-water/",
            img: require("../assets/images/exploration/uranus/moons.webp")
        },
        {
            title: "NASA's Webb Scores Another Ringed World With New Image of Uranus",
            blurb: `Following in the footsteps of the Neptune image released in 2022, NASA's James Webb Space Telescope has taken a stunning image of the solar 
            system's other ice giant, the planet Uranus. The new image features dramatic rings as well as…`,
            url: "https://www.nasa.gov/solar-system/nasas-webb-scores-another-ringed-world-with-new-image-of-uranus/",
            img: require("../assets/images/exploration/uranus/webb.webp")
        },
        {
            title: "Gravity Assist: It's Raining Diamonds on These Planets",
            blurb: `Follow via Apple Podcasts Follow via SoundCloud Follow via RSS Feed Left: Arriving at Uranus in 1986, Voyager 2 observed a bluish orb with subtle 
            features. A haze layer hid most of the planet's cloud features from view. Right: This image of…`,
            url: "https://www.nasa.gov/missions/james-webb-space-telescope/gravity-assist-its-raining-diamonds-on-these-planets/",
            img: require("../assets/images/exploration/uranus/gravity.webp")
        },
        {
            title: "Why Uranus and Neptune Are Different Colors",
            blurb: `Neptune and Uranus have much in common yet their appearances are notably different. Astronomers now have an explanation for why the two planets 
            are different colors.`,
            url: "https://science.nasa.gov/solar-system/planets/neptune/why-uranus-and-neptune-are-different-colors/",
            img: require("../assets/images/exploration/uranus/color.webp")
        },
        {
            title: "Revisiting Decades-Old Voyager 2 Data, Scientists Find One More Secret",
            blurb: `Eight and a half years into its grand tour of the solar system, NASA's Voyager 2 spacecraft was ready for another encounter. It was Jan. 24, 1986, and 
            soon it would meet the mysterious seventh planet, icy-cold Uranus. Over the next…`,
            url: "https://www.nasa.gov/solar-system/revisiting-decades-old-voyager-2-data-scientists-find-one-more-secret/",
            img: require("../assets/images/exploration/uranus/voyager.webp")
        },
        {
            title: "Hubble Spots Auroras on Uranus",
            blurb: `This is a composite image of Uranus by Voyager 2 and two different observations made by Hubble — one for the ring and one for the auroras. 
            Ever since Voyager 2 beamed home spectacular images of the planets in the…`,
            url: "https://science.nasa.gov/missions/hubble/hubble-spots-auroras-on-uranus/",
            img: require("../assets/images/exploration/uranus/aurora.webp")
        }
    ],
    neptune: [
        {
            title: "Neptune's Disappearing Clouds Linked to the Solar Cycle",
            blurb: `Astronomers have uncovered a link between Neptune's shifting cloud abundance and the 11-year solar cycle, in which the waxing and waning of the 
            Sun's entangled magnetic fields drives solar activity.`,
            url: "https://science.nasa.gov/missions/hubble/neptunes-disappearing-clouds-linked-to-the-solar-cycle/",
            img: require("../assets/images/exploration/neptune/clouds.webp")
        },
        {
            title: "All Eyes on the Ice Giants",
            blurb: `NASA's New Horizons spacecraft plans to observe Uranus and Neptune from its location far out in the outer solar system this fall, and the mission 
            team is inviting the global amateur astronomy community to come along for the ride –…`,
            url: "https://www.nasa.gov/missions/new-horizons/all-eyes-on-the-ice-giants/",
            img: require("../assets/images/exploration/neptune/ice.webp")
        },
        {
            title: "New Webb Image Captures Clearest View of Neptune's Rings in Decades",
            blurb: `NASA's James Webb Space Telescope shows off its capabilities closer to home with its first image of Neptune. Not only has Webb captured the 
            clearest view of this distant planet's rings in more than 30 years, but its cameras reveal…`,
            url:"https://www.nasa.gov/solar-system/new-webb-image-captures-clearest-view-of-neptunes-rings-in-decades/",
            img: require("../assets/images/exploration/neptune/web.webp")
        },
        {
            title: "Why Uranus and Neptune Are Different Colors",
            blurb: `Neptune and Uranus have much in common yet their appearances are notably different. Astronomers now have an explanation for why the two planets are 
            different colors.`,
            url: "https://science.nasa.gov/solar-system/planets/neptune/why-uranus-and-neptune-are-different-colors/",
            img: require("../assets/images/exploration/neptune/color.webp")
        },
        {
            title: "New Study Finds Unexpected Temperature Changes on Neptune",
            blurb: `The average global temperature on Neptune unexpectedly fluctuated during a recent 17-year period, according to a new study.`,
            url: "https://science.nasa.gov/solar-system/planets/neptune/new-study-finds-unexpected-temperature-changes-on-neptune/",
            img: require("../assets/images/exploration/neptune/temp.webp")
        },
        {
            title: "Dark Storm on Neptune Reverses Direction, Possibly Shedding a Fragment",
            blurb: `Astronomers using NASA's Hubble Space Telescope watched a mysterious dark vortex on Neptune abruptly steer away from a likely death on the giant 
            blue planet. The storm, which is wider than the Atlantic Ocean, was born in the planet's northern…`,
            url: "https://science.nasa.gov/missions/hubble/dark-storm-on-neptune-reverses-direction-possibly-shedding-a-fragment/",
            img: require("../assets/images/exploration/neptune/storm.webp")
        },
        {
            title: "Proposed NASA Mission Would Visit Neptune's Curious Moon Triton",
            blurb: `When NASA's Voyager 2 spacecraft flew by Neptune's strange moon Triton three decades ago, it wrote a planetary science cliffhanger. Voyager 2 is the 
            only spacecraft ever to have flown past Neptune, and it left a lot of unanswered questions.…`,
            url: "https://www.nasa.gov/centers-and-facilities/jpl/proposed-nasa-mission-would-visit-neptunes-curious-moon-triton/",
            img: require("../assets/images/exploration/neptune/triton.webp")
        },
        {
            title: "30 Years Ago: Voyager 2 Explores Neptune",
            blurb: `In the summer of 1989, NASA's Voyager 2 became the first spacecraft to fly by Neptune, its final planetary encounter. Managed by the Jet Propulsion 
            Laboratory in Pasadena, California, Voyagers 1 and 2 were a pair of spacecraft launched in…`,
            url: "https://www.nasa.gov/history/30-years-ago-voyager-2-explores-neptune/",
            img:  require("../assets/images/exploration/neptune/voyager.webp")
        },
        {
            title: "Next-Generation NASA Instrument Advanced to Study the Atmospheres of Uranus and Neptune",
            blurb: `Much has changed technologically since NASA's Galileo mission dropped a probe into Jupiter's atmosphere to investigate, among other things, the 
            heat engine driving the gas giant's atmospheric circulation. A NASA scientist and his team at the Goddard Space Flight Center…`,
            url: "https://www.nasa.gov/solar-system/next-generation-nasa-instrument-advanced-to-study-the-atmospheres-of-uranus-and-neptune/",
            img: require("../assets/images/exploration/neptune/atmosphere.webp")
        },
        {
            title: "Tiny Neptune Moon Spotted by Hubble May Have Broken from Larger Moon",
            blurb: `Astronomers call it “the moon that shouldn't be there.” After several years of analysis, a team of planetary scientists using NASA's Hubble Space 
            Telescope has at last come up with an explanation for a mysterious moon around Neptune that they…`,
            url: "https://science.nasa.gov/missions/hubble/tiny-neptune-moon-spotted-by-hubble-may-have-broken-from-larger-moon/",
            img:  require("../assets/images/exploration/neptune/tiny.webp")
        }
    ]
};

export default PLANETSTORIES;