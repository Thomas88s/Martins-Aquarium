       
        import { Fish } from "./Fish.js"
        import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"

        const buildFishListHTML = (arrayOfFish, heading) => {

            let fishHTMLRepresentation = `<h3>${heading}</h3>`
            for (const fishObj of arrayOfFish) {

                fishHTMLRepresentation += Fish(fishObj)
                console.log(fishHTMLRepresentation)
            }
            return fishHTMLRepresentation
        }
        

        export const FishList = () => {
       
            const contentElement = document.querySelector(".content")

            const holyFishArray = mostHolyFish()
            const holyfishHTMLRepresentations = buildFishListHTML(holyFishArray, "Holy Fish")
            
            const soldierFishArray = soldierFish()
            const soldierFishHTMLRepresentations = buildFishListHTML(soldierFishArray, "Soldier Fish") 

            const regularFishArray = nonHolyFish()
            const regularFishHTMLRepresentations = buildFishListHTML(regularFishArray, "Regular Fish")
             
           return contentElement.innerHTML +=`
            
                <article class= "content__fishList contentArticle">
                ${holyfishHTMLRepresentations}
                ${soldierFishHTMLRepresentations}
                ${regularFishHTMLRepresentations}
                </article>
                `
            }


