const btn = document.querySelector('.vote');
btn.addEventListener('click', () => {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('GET', 'http://127.0.0.1:5000/', true);
    ajaxRequest.onreadystatechange = function () {

        if (ajaxRequest.readyState === 4) {
            if (ajaxRequest.status === 200) {

                btn.innerHTML = ajaxRequest.responseText;
            }
        }
    }
    ajaxRequest.send()
})

const booksBtn = document.querySelector('.books');
booksBtn.addEventListener('click', () => {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('GET', 'http://127.0.0.1:5000/books', true);
    ajaxRequest.onreadystatechange = function () {
        if (ajaxRequest.readyState === 4) {
            if (ajaxRequest.status === 200) {
                const books = JSON.parse(ajaxRequest.responseText);
                const list = document.getElementsByClassName('list')[0];
                books.forEach((book) => {
                    const li = document.createElement('li');
                    li.innerText = book.author + ', ' + book.title;
                    list.append(li);
                })
            }
        }
    }
    ajaxRequest.send()
})