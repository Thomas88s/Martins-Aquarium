const fishCollection = [
    {
        image: "https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Bart",
        species: "birdfish",
        length: 3,
        location: "in the water",
        food: "crustaceans"
    },
    {
        image: "https://images.pexels.com/photos/1108104/pexels-photo-1108104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Maggie",
        species: "yes please",
        length: 25,
        location: "no thanks",
        food: "crustaceans"

    },
    {
        image: "",
        name: "Maggie",
        species: "fish",
        length: 6,
        location: "swamp",
        food: "crustaceans"

    },
    {
        image: "",
        name: "Maggie",
        species: "fish",
        length: 20,
        location: "earf",
        food: "crustaceans"

    }


]

console.log()
export const useFish = () => {
    return fishCollection.slice()
}






export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for ( const fishObject of fishCollection) {
     if(fishObject.length % 3 === 0) {
        holyFish.push(fishObject)
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish

    const soldiers = []

    for (const fishObject of fishCollection) {
        if(fishObject.length % 5 === 0){
            soldiers.push(fishObject)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5

    const regularFish = []

    for(const fishObject of fishCollection) {
        if (fishObject.length % 3 !== 0 && fishObject % 5 !== 0) {
            regularFish.push(fishObject)
        }
    }
    return regularFish
}