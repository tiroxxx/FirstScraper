console.log('connected');

const form = document.querySelector('#form')
const button = document.querySelector('#button')

form.addEventListener('submit', e => {
    e.preventDefault();
    submitChannel();
});
button.addEventListener('click', e => {
    e.preventDefault();
    submitChannel();
});

function submitChannel() {
    const channelURL = document.querySelector('.channel-input').value;
    console.log(channelURL);
    fetch('http://localhost:3000/creators', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({channelURL})
    })
}

function newEl(type, attrs = {}) {
    const el = document.createElement(type);
    // add attributes to the newly created element
    for (let attr in attrs) {
        const value = attrs[attr];
        // if attribute is inner text
        // just set the innerText with that value
        if (attr == 'innerText') {
            el.innerText = value;
        }
        else {
            el.setAttribute(attr, value);
        }
    }
    return el
}

async function loadCreators() {
    const res = await fetch('http://localhost:3000/creators')
    const creators = await res.json();

    const ctr = document.querySelector('.container');

    creators.forEach(creator => {
        const card = newEl('div', { class: 'card' });
        const title = newEl('h4', { innerText: creator.name });
        const img = newEl('img', { src: creator.img });

        card.appendChild(title);
        card.appendChild(img);
        ctr.append(card);
    })
}

loadCreators();




