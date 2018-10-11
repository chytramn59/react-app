let count=0;
const addOne=()=>{
    count++;
    // console.log('addOone',count);
    countRenderApp();
}
const minusOne=()=>{
    // console.log('minusOone');
    count--;
    countRenderApp();
}
const reset=()=>{
    count=0;
    countRenderApp();
    // console.log('reset');
}

const appRoot = document.getElementById('app');

const countRenderApp =()=>{
    const templateThree= (
        <div>
            <h1>count:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    ); 
    ReactDOM.render(templateThree,appRoot);
}
countRenderApp();