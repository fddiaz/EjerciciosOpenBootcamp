const myName="Federico"
const lastName="Diaz"

const data = {
    myName,
    lastName
}

sessionStorage.setItem("data", JSON.stringify(data))
localStorage.setItem("data", JSON.stringify(data))

const now = new Date()
document.cookie = `data=${JSON.stringify(data)};expires=${new Date(now.getTime() + 2 * 60000)}`