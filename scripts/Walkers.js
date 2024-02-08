import { getWalkers } from "./database.js"


document.addEventListener(
    "click",
    (clickEvent) => {
        const elementClickedOn = clickEvent.target
        
        if (elementClickedOn.dataset.type === "walker") {
            window.alert(`This walker works in ${elementClickedOn.dataset.city}`)
        }
    })
    
    export const Walkers = () => {
    const walkers = getWalkers()
    
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}" 
                            data-cityId="${walker.cityId}"
                            data-type="walker">
                            ${walker.name}
                        </li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

