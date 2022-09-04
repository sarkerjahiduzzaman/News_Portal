// Api link handalink function

const menuBarFunction=()=>{
  fetch('https://openapi.programming-hero.com/api/news/categories')
  .then(res=>res.json())
  .then(data=>display1(data.data.news_category))
  .catch(error=>console.log(error))

}
// Api link handalink function end
