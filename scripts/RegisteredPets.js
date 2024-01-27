import { getPets, getWalkers } from "./database.js"

const pets = getPets()


document.addEventListener(
    "click",
    (clickEvent) => {
        const elementClickedOn = clickEvent.target

        if (elementClickedOn.dataset.type === "pet") {
            const walkerId = elementClickedOn.dataset.walkeridforeignkey
            const walkers = getWalkers()
            
            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    window.alert(`This pet is being walked by ${walker.name}`)
                }
            }
        }
    }
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-id="${pet.id}" 
                        data-walkerIdForeignKey="${pet.walkerId}"
                        data-type="pet"
                        >${pet.name}
                    </li>`
    }

    petHTML += "</ul>"

    return petHTML
}

