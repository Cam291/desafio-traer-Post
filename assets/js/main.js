//declarar elementos del DOM
const btnPost = document.querySelector("#btn-post")
const postData = document.querySelector("#post-data")

//constante API
const API_URL = "https://jsonplaceholder.typicode.com/posts"

//no se usa el innerHTML ya que puede recibir código malicioso
// const displayData = (data) => {
//     data.forEach((element) => {
//         postData.innerHTML += `<li><strong>${element.title}</strong><br>${element.body}</li>`;
//     })
// }
