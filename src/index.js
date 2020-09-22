
function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const br = document.createElement('br');

    button.innerHTML = 'Click me and look ao the console!';
    element.appendChild(br);
    element.appendChild(button);

    button.onclick = e => import(/* webpackChunkName: "print "*/ './print').then(module => {
        console.log(module)
        const print = module.default;
        print();
    })
    return element;
}

document.body.appendChild(component());
