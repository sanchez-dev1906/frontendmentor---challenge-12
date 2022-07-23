const button = document.getElementById("change-advice")
const number = document.getElementById("advice-number")
const adviceText = document.getElementById("advice-text")

button.addEventListener("click", () => 
{
  let data = getData();
  data.then(res => 
    {
      changeData(res)
    })
})

const getData = async () =>
{
  return await fetch("https://api.adviceslip.com/advice")
  .then(data => data.json())
  .then(res => res)
  .catch(err => err);
}

const changeData = (d) => 
{
  console.log(d);
  adviceText.textContent = d.slip.advice
  number.textContent = d.slip.id
}
