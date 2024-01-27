import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        citiesHTML += `<li data-walkerName="${walker.name}"
                            data-type="city"
                            >${walker.city}
                        </li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

