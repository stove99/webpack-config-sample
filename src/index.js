const component = () => {
    const element = document.createElement('div');

    element.innerHTML = [['Hello', 'webpack'], ...['a', 'b', 'c']].join(' ');

    const obj = {
        a: 1,
        b: [1, 2, 3, 4],
        c: {
            key1: 'val',
        },
    };

    console.log(Object.values(obj));

    return element;
};

document.body.appendChild(component());
