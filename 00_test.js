import fetch from "node-fetch";

const getData = (url) =>
new Promise((resolve, reject) =>
fetch(url)
    .then((response) => response.json())
    .then(json => resolve(json))
    .catch((error) => reject(error))
)

getData('http://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))