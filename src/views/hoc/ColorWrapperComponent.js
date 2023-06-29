import React from 'react';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Tự định nghĩa 1 Higher Order Component
const ColorWrapperComponent = (WrappedComponent) => {
    const colorRandom = getRandomColor();

    return (props) => (
        <div style={{ color: colorRandom }}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default ColorWrapperComponent;