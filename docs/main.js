const button = document.getElementById("change-advice")
const number = document.getElementById("advice-number")
const adviceText = document.getElementById("advice-text")

button.addEventListener("click", () => 
{
  changeData()
})

const getData = () =>
{
  const request = fetch("https://api.adviceslip.com/advice")
  .then(data => data.json())
  .then(res => res)
  .catch(err => console.log(err))
  const data = request
  return data
}

const changeData = async (d) => 
{
  d = await getData()
  adviceText.textContent = d.slip.advice
  number.textContent = d.slip.id
}

changeData()