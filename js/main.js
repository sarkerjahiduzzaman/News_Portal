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



// Display 2 division start here
const display2=d=>
{
  
  if( (d.length)==0)
  {
     
   const div1=document.getElementById('1');
   div1.innerText=d.length;
  }
  // shorting algorithm start here
  function compare( a, b ) {
    if ( a.total_view > b.total_view ){
      return -1;
    }
    if ( a.total_view< b.total_view){
      return 1;
    }
    return 0;
  }
  
 d.sort( compare );

//  shorting algorithm end here

const div=document.getElementById('divmenu')
div.innerHTML=``
d.forEach(news => {
  
  const div1=document.getElementById('1');
  div1.innerText=d.length;
  const divp=document.createElement('div')
  
  
  divp.innerHTML=`
 
  <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-3">
      <img src=${news.thumbnail_url} class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-9">
      <div class="card-body">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">${news.details.length>500 ?news.details.slice(0,600)+ '....': news.details }</p>
       
      </div>
      <div class="d-flex justify-content-between ">
        
        <div class="d-flex ">
        <div><img src=${news.image_url}alt=""
         class="rounded-circle d-inline"
         height="40px"
         width="40px">
       <p class="d-inline">${news.author.name}
       <br> ${news.author.published_date}<p>
        </div>
     </div>
        <div><i class="fa fa-eye" ><span>${news.total_view}</span></i>
        </div>
        <div>
         <i class="fa-regular fa-star-half-stroke"></i>
         <i class="fa-regular fa-star"></i>
         <i class="fa-regular fa-star"></i>
         <i class="fa-regular fa-star"></i>
       </div>
       <div>