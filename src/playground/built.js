const app ={
    title:'visibilty Toggle',
   
};
let visibilty = false;

const onToggleClick = ()=>{
    // console.log("click");
    visibilty = !visibilty;
    visibleToggle();
}


const visibleToggle =()=>{
const visible = (
    <div>
        <h1>{app.title}</h1>
        <button onClick={onToggleClick}>{visibilty ? 'hide details' : 'show details'}
        </button>
        {
            visibilty && (
                <div>
                    <p>this is the paragraphy </p>
                </div>
            )
        }
    </div>
);
ReactDOM.render(visible, document.getElementById('app'));
}

visibleToggle();