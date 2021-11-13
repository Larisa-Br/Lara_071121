const sendForm = async (formData) => {
  const response = await fetch("https://api.chigrin.ml/form", {
      method: "POST",
      body: JSON.stringify(formData)
  })
  const { data, success, errors } = await response.json()
  if (success) {
      return data
  }
  console.log(errors)
}

const form = document.getElementById("form")

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const inputs = Array.from(event.target.elements)
      .filter((e) => !!e.name)
      .map(({name, value}) => [name, value])
  const request = Object.fromEntries(inputs)
  
  const data = await sendForm(request)
  if (data) {
      document.location.href = "/success.html"
  }
  event.target.elements['email'].classList.add("is-invalid")
  document.getElementById("email-input-feedback").textContent = "Invalid email"
})