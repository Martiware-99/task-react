let randomCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', '1', '2', '3', '4', '5', '6', '7']

export const randomId = () => {
    let id = []
    for (let index = 0; index <= 4; index++) {
        id.push(randomCharacters[Math.floor(Math.random() * 14)])
    }
    let finalId = id[0] + id[1] + id[2] + id[3] + id[4]
    return finalId
}

// Chère futur martin,
// tu as ecris cette fonction un vendredi en fin d apres midi,
// ne t en veux pas trop si tu trouve cela absolument degueulasse