import { getCities, getWalkers } from "./database.js"

const cities = getCities()


document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target

        if (clickTarget.dataset.type === "city") {
            const cityId = parseInt(clickTarget.dataset.id)
            
            const walkers = getWalkers()
            const localWalkers = []
            for (const walker of walkers) {
                if (walker.cityId === cityId) {
                    localWalkers.push(walker.name)
                }
            }
            
            const localWalkersString = localWalkers.join(" and ")
            
            window.alert(`${localWalkersString} is servicing this city`)
        }
    }
)

export const CityList = () => {
    
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li data-id="${city.id}"
                            data-type="city"
                            >${city.name}
                        </li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

