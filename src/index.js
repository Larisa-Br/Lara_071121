import bootstrup from 'bootstrap'
import { f } from './helpers'
f()

const form = document.getElementById("form")

form.addEventListener('submit', (event) => {
  event.preventDefault()
  //event.target.querySelector('input[name="text"]').value)
  const inputs = Array.from(event.target.elements)
        .filter((e) => e.name== !!e.name)
        .map(({name,value}) => [name.value])
        const request = Object.fromEntries(inputs)
})
const response = await fetch("https://api.chigrin.ml/form", {
    method: "POST",
    body: JSON.stringify(request)
})
 const data = await response.json();