const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    axios.get('/weather?address=' + location)
    .then((response) => {
        const data = response.data;
        if (data.error) {
            console.log(data.error);
            messageOne.textContent = data.error;
        } else {
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
})