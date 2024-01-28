import { getWalkers } from "./database.js"

const walkers = getWalkers()


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

    for (const walker of walkers) {
        citiesHTML += `<li data-walkerName="${walker.name}"
                            data-type="city"
                            >${walker.city}
                        </li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

