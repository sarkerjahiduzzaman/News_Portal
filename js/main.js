// Api link handalink function

const menuBarFunction=()=>{
  fetch('https://openapi.programming-hero.com/api/news/categories')
  .then(res=>res.json())
  .then(data=>display1(data.data.news_category))
  .catch(error=>console.log(error))

}
// Api link handalink function end

//  display Meubar

const display1=(news)=>{
  const ul=document.getElementById('div-container');
  news.forEach(m => {
  
    
    const li=document.createElement('li')
   
    li.innerHTML=`
    <li class="nav-item m-1">
          <a onclick="findid(${m.category_id})" class="nav-link" href="#">${m.category_name}</a>
        </li>

    `
    ul.appendChild(li)
    
  });

}
// display menubar end

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
        
         <button onclick="showdDetails('${news.author.name}','${news.total_view}','${news.thumbnail_url}','${news.rating.number}','${news.rating.badge}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         <i class="fa-sharp fa-solid fa-arrow-right"></i>
       </button>
           
         </div>
       </div>
     </div>

    </div>
  </div>
  
    ` 
    div.appendChild(divp)
 
  });
  loadigFunction(false)
}
const showdDetails=(name,view,photos,rating,badge)=>{
  if(name==''||name=='null')
  {
    name='NO data available'
  }
  if(view==''||view=="null")
  {
    view='no views'
  }
  const modeldiv=document.getElementById('modelid')
  
  modeldiv.innerHTML=`
  
  <div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Author:${name}</h5>
    <h5>View:${view}
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body >
 
  <h5 class="d-inline">Rating is: ${rating}</h5>
  <h5 class="d-inline me-2">Badge is: ${badge}</h5>

  
  <img src= ${photos}class="img-fluid rounded-start" alt="...">

  </div>
</div>
  `
}
const loadigFunction=isLoading =>{
  const loder=document.getElementById('loader');
  if(isLoading)
  {
    loder.classList.remove('d-none')
  }
  else
  {
    loder.classList.add('d-none')
  }
  
}

findid(08)