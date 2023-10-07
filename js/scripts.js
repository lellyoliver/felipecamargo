const nameContact = document.getElementById('contactName');
const phoneContact = document.getElementById('contactTel');
const messageContact = document.getElementById('contactMessage');
document.getElementById('submitMessage').addEventListener('click', (e) => {
    if (messageContact.value == "") {
        messageContact.value = "Entrei em contato pelo site!"
    }
    getStrUrl(nameContact.value, phoneContact.value, messageContact.value);
})

function getStrUrl(name, phone, message) {
    //clear string
    name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    name = name.replace(/[( )]/g, "%20");
    phone = phone.replace(/[\(\)\.\s-]+/g, '');

    //join string
    const url = 'https://api.whatsapp.com/send?phone=+5511968425287&text='
    const concatURL = url + 'Nome:%20' + name + '%0ATelefone:%20' + phone + '%0AAssunto:%20' + message;
    window.location.href = concatURL;
}


let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
