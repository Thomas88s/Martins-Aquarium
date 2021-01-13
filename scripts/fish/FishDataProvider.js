const fishCollection = [
    {
        image: "https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Bart",
        species: "",
        length: "",
        location: "",
        food: "crustaceans"
    },
    {
        image: "https://images.pexels.com/photos/1108104/pexels-photo-1108104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Maggie",
        species: "",
        length: "",
        location: "",
        food: "crustaceans"

    },
    {
        image: "",
        name: "Maggie",
        species: "",
        length: "",
        location: "",
        food: "crustaceans"

    },
    {
        image: "",
        name: "Maggie",
        species: "",
        length: "",
        location: "",
        food: "crustaceans"

    }


]

console.log()
export const useFish = () => {
    return fishCollection.slice()
}
