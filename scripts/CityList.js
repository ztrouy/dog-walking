import { getCities, getWalkers } from "./database.js"

const cities = getCities()


document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target

        if (clickTarget.dataset.type === "city") {
            const cityId = parseInt(clickTarget.dataset.id)
            
            const walkers = getWalkers()
            for (const walker of walkers) {
                if (walker.cityId === cityId) {
                    window.alert(`${walker.name} is servicing this city`)
                }
            }
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

