console.log('app.js is running!');

 const app ={
     title:'jsx first line',
     subtitle:'new work',
     options:['One','Two']
 };

 const template = (
     <div>
        <h1>{app.title}</h1>
        {app.subtitle&&<p>subtitle:{app.subtitle}</p>}
        <p>{app.options.length>0?'here is some options':'no options'}</p>
     </div>   
);

 const user = {
    name:'',
     age:36,
     location:'new york'
 };

 function getLocation(location){
    if(location){
        return <p>loac:{location}</p>
    }
 }

const templateTwo = (
    <div>
        <h1>{user.name? user.name:'unknw'}</h1>
       {(user.age && user.age>=18) &&<p>age:{user.age}</p>}
        {getLocation(user.location)}
    </div>
);

let count=0;
const addOne=()=>{
    console.log('addOone');
}
const minusOne=()=>{
    console.log('minusOone');
}
const reset=()=>{
    console.log('reset');
}
const templateThree= (
    <div>
        <h1>count:{count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);





const appRoot = document.getElementById('app');


ReactDOM.render(templateThree,appRoot);