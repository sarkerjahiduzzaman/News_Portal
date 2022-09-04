// Api link handalink function

const menuBarFunction=()=>{
  fetch('https://openapi.programming-hero.com/api/news/categories')
  .then(res=>res.json())
  .then(data=>display1(data.data.news_category))
  .catch(error=>console.log(error))

}
// Api link handalink function end

menuBarFunction()
//News find by id start here
const findid=(id)=>{
  loadigFunction(true)
  fetch(`https://openapi.programming-hero.com/api/news/category/0${id}`)
  .then(res=>res.json())
  .then(data=>display2(data.data))
  .catch(error=>console.log(error))
}

