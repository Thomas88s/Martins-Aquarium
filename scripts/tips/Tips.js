/**
 *  Fish which renders individual fish objects as HTML
 */
export const Tips = (tips) => {
    return `
        <section class="Tips card"> 
        <div><img  class="fish__image image--card" src="${tips.image}" /></div>
        <div class="tips__name">${tips.Tips}</div>
        
        </section>
    `
}