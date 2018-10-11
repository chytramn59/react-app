'use strict';

console.log('app.js is running!');

var app = {
    title: 'Hands on computer',
    subtitle: 'jsx form submission',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    // console.log('form submitted');
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        formRenderApp();
    }
};
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    formRenderApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    console.log(randomNum);
    var option = app.options[randomNum];
    alert(option);
};
var appRoot = document.getElementById('app');

// const numbers = [55,45,12];

var formRenderApp = function formRenderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            'subtitle:',
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'here is some options' : 'no options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'what should i do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (str) {
                return React.createElement(
                    'li',
                    { key: str },
                    str
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add options'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

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
