
export type planet = 'mercury'| 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';

export type rover = 'curiosity' | 'opportunity' | 'spirit'

export type PlanetFact = {
    title: string,
    fact: string,
    img: any
};

export type PlanetInfo = {
    title: string,
    paragraphs: string [],
    img?: any
};

export type PlanetStory = {
    title: string,
    blurb: string,
    url: string,
    img?: any
}
