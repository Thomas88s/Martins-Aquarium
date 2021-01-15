const fishCollection = [
    {
        image: "https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Bart",
        species: "birdfish",
        length: "real big",
        location: "in the water",
        food: "crustaceans"
    },
    {
        image: "https://images.pexels.com/photos/1108104/pexels-photo-1108104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Maggie",
        species: "yes please",
        length: "that too",
        location: "no thanks",
        food: "crustaceans"

    },
    {
        image: "",
        name: "Maggie",
        species: "fish",
        length: "little",
        location: "swamp",
        food: "crustaceans"

    },
    {
        image: "",
        name: "Maggie",
        species: "fish",
        length: "20 min",
        location: "earf",
        food: "crustaceans"

    }


]

console.log()
export const useFish = () => {
    return fishCollection.slice()
}
