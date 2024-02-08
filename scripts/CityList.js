import { getCities } from "./database.js"

const cities = getCities()


document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target

        if (clickTarget.dataset.type === "city") {
            window.alert(`${clickTarget.dataset.walkername} is servicing this city`)
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

