'use strict';

console.log('app.js is running!');

var app = {
    title: 'jsx first line',
    subtitle: 'new work',
    options: ['One', 'Two']
};

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
    )
);

var user = {
    name: '',
    age: 36,
    location: 'new york'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'loac:',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'unknw'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'age:',
        user.age
    ),
    getLocation(user.location)
);

var count = 0;
var addOne = function addOne() {
    console.log('addOone');
};
var minusOne = function minusOne() {
    console.log('minusOone');
};
var reset = function reset() {
    console.log('reset');
};
var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'count:',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
