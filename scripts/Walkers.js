import { getWalkers, getCities } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const elementClickedOn = clickEvent.target
        
        if (elementClickedOn.dataset.type === "walker") {
            const cityId = parseInt(elementClickedOn.dataset.cityid)
            const cities = getCities()

            for (const city of cities) {
                if (city.id === cityId) {
                    window.alert(`This walker works in ${city.name}`)
                    break
                }
            }
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

