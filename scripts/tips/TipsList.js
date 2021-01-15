    
    import { useTips } from "./TipsDataProvider.js"
    import { Tips} from "./Tips.js"

    export const TipsList = () => {
    // TODO: Import `useFish` from the data provider module

    
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".content")
    const TipS = useTips()

    // Genimport { useFish } from './FishDataProvider.js'



// Generate all of the HTML for all of the fish
    let tipsHTMLRepresentations = ""
    for (const tips of TipS) {

         
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
        tipsHTMLRepresentations += Tips(tips)

    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML +=`
    
        <article class= "TipsList">
        ${tipsHTMLRepresentations}
        </article>
        `
}