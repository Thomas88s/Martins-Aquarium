
import { useLocation } from './LocationDataProvider.js'
import { Location } from "./Location.js"

export const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".content")
    const locations = useLocation()

    let locationHTMLRepresentations = ""
    for (const location of locations) {

     locationHTMLRepresentations += Location(location)
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fishList">
            ${locationHTMLRepresentations}
        </article>
    `
}