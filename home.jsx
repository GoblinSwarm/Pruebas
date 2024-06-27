const getCharacters = async () => {
    try {
        let response = await fetch(`${URL_BASE}/character`)
        let data = await response.json()

        setCharacter(data.results)
        console.log(data)

    } catch {
        console.log(error)
    }
}