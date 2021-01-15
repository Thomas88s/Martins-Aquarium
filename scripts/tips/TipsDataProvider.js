    
    const tipCollection = [
       
        {
            image: "https://www.algone.com/wp-content/uploads/2013/11/freshwater-aquarium-fish.jpg",
            Tips: "Conditioning the water. Tap water comes with countless properties that need to be balanced in an aquarium to support aquatic life. To condition water properly, use a dechlorinating agent along with a biological aquarium supplement."
            
        },
        {
            image: "https://media.gettyimages.com/photos/closeup-of-yellow-fish-swimming-in-aquarium-picture-id902469922?k=6&m=902469922&s=612x612&w=0&h=QhOt7nPkvtS4tgUrjqUV2ALyRZckwcOFRkaaSaK2Kqg=",
            Tips: "Maintaining proper pH levels. pH is an indicator of the acidity or alkalinity of your tank water. Buy a pH test kit to check the pH level. Freshwater fish typically thrive when the pH level is between 6.8 and 7.5, depending on the species, as it is the range that will offer a natural environment that helps your fish resist illness. Check regularly for fluctuations and make the necessary changes to recalibrate as a change in pH greater than 0.3 in a 24-hour period can cause a fish to become stressed or susceptible to disease."
            
        },
        {
            image: "https://media.gettyimages.com/photos/reef-tank-maintenance-picture-id948219814?k=6&m=948219814&s=612x612&w=0&h=LuKPIbolPFrJ4Y7bLpVDo0OsnFKydFXndfqjPpOMDro=",
            Tips:"Learn about the essentials of aquarium maintenance. Maintenance should include regular water changes, servicing the filter & testing the aquarium water."
        }
    ]
    
    console.log()
    export const useTips = () => {
        return tipCollection.slice()
    }