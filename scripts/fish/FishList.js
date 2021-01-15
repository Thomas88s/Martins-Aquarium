        /**
         *  FishList which renders individual fish objects as HTML
         */
        import { useFish } from "./FishDataProvider.js"
        import { Fish } from "./Fish.js"

        export const FishList = () => {
        // TODO: Import `useFish` from the data provider module

            // Get a reference to the `<article class="content">` element
            const contentElement = document.querySelector(".content")
            const fishes = useFish()

            // Genimport { useFish } from './FishDataProvider.js'

        
        // Generate all of the HTML for all of the fish
            let fishHTMLRepresentations = ""
            for (const fish of fishes) {

                
                /*
                    Invoke the Fish component function
                    and pass the current fish object as an argument.
                    Each time, add the return value to the
                    fishHTMLRepresentations variable with `+=`
                */
                fishHTMLRepresentations += Fish(fish)

            }

            // Add to the existing HTML in the content element
            contentElement.innerHTML +=`
            
                <article class= "fishList">
                ${fishHTMLRepresentations}
                </article>
                `
            }