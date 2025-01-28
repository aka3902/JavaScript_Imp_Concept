// Select elements
const outerDiv = document.querySelector('.outer');
const innerDiv = document.querySelector('.inner');
const button = document.querySelector('#myButton');

// Add event listener to the outer div with capturing phase
outerDiv.addEventListener(
    'click',
    function () {
        alert('Outer Div clicked! (Capturing phase)');
    },
    true // Capturing phase
);

// Add event listener to the inner div with bubbling phase
innerDiv.addEventListener('click', function () {
    alert('Inner Div clicked! (Bubbling phase)');
});

// Add event listener to the button
button.addEventListener('click', function () {
    alert('Button clicked!');
});
