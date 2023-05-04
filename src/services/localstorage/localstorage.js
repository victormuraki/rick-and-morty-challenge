import store from '../../store'

export default (key) => {
    const localStorageObject = {
        getFavorites() {
            return JSON.parse(localStorage.getItem(key))
        },
        setFavorites(value) {
            localStorage.setItem(key, JSON.stringify(value))
        },
        addFavorites(value) {
            const currentFavorites = JSON.parse(localStorage.getItem('favoriteCharacter'))
            const isDuplicatedId = currentFavorites.length ? currentFavorites.find(id => id === value) : false
            
            if (!currentFavorites.length) {
                localStorage.setItem('favoriteCharacter', JSON.stringify([value]))
                store.dispatch('addFavorite', value)
                return
            }

            if (isDuplicatedId) return
            currentFavorites.push(value)
            store.dispatch('addFavorite', value)
            localStorage.setItem('favoriteCharacter', JSON.stringify(currentFavorites))
        },
        remove() {
            localStorage.removeItem(key)
        },
        removeFavorite(value) {
            const currentFavorites = JSON.parse(localStorage.getItem('favoriteCharacter'))
            const favoriteIndex = currentFavorites.findIndex(id => id === value)
            
            if (favoriteIndex === -1) return
            currentFavorites.splice(favoriteIndex, 1)
            store.dispatch('removeFavorite', value)
            localStorage.setItem('favoriteCharacter', JSON.stringify(currentFavorites))
        }
    }

    if (localStorageObject.getFavorites() === null) {
        localStorageObject.setFavorites({})
    }

    return localStorageObject
}