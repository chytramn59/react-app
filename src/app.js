console.log('app.js is running!');

 const app ={
     title:'Hands on computer',
     subtitle:'jsx form submission',
     options:[]
 };
 
 const onFormSubmit = (e) =>{
    e.preventDefault();
    // console.log('form submitted');
     const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        formRenderApp();
    }
 }
 const onRemoveAll = ()=>{
     app.options = [];
     formRenderApp();
 }

 const onMakeDecision = ()=>{
     const randomNum = Math.floor(Math.random()*app.options.length);
     console.log(randomNum);
     const option = app.options[randomNum];
     alert(option);

 }
const appRoot = document.getElementById('app');

// const numbers = [55,45,12];

const formRenderApp = () =>{
    const template = (
        <div>
           <h1>{app.title}</h1>
           {app.subtitle&&<p>subtitle:{app.subtitle}</p>}
           <p>{app.options.length>0?'here is some options':'no options'}</p>
           {/* <p>{app.options.length}</p> */}
           <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should i do?</button>
           <button onClick={onRemoveAll}>Remove</button>
           <ol>
               {app.options.map((str)=>{
                   return <li key={str}>{str}</li>
               })}
           </ol>
           <form onSubmit={onFormSubmit}>
               <input type="text" name="option" />
               <button>Add options</button>
           </form>
        </div>   
   );
   ReactDOM.render(template,appRoot);
}

formRenderApp();















//  const user = {
//     name:'',
//      age:36,
//      location:'new york'
//  };

//  function getLocation(location){
//     if(location){
//         return <p>loac:{location}</p>
//     }
//  }

// const templateTwo = (
//     <div>
//         <h1>{user.name? user.name:'unknw'}</h1>
//        {(user.age && user.age>=18) &&<p>age:{user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );