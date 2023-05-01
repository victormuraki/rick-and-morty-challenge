export default (key) => {
    const localStorageObject = {
        get() {
            return JSON.parse(localStorage.getItem(key))
        },
        set(value) {
            localStorage.setItem(key, JSON.stringify(value))
        },
        remove() {
            localStorage.removeItem(key)
        }
    }
}