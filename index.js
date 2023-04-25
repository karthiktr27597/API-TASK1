console.log('welcome');

// let api = 'https://restcountries.com/v3.1/all' // restcountries

let dogApi = "https://random.dog/woof.json"

//  let birdsApi = `https://api.ebird.org/v2/data/obs/${Americas}/recent`

 // let bookApi = 'https://www.abibliadigital.com.br/api/verses/nvi/sl/23'

let body = document.querySelector('body');

let div = document.createElement('div');
div.classList.add('dogPic');
let p = document.createElement('p');
p.innerText = 'Random Dog picture for every refresh'
div.append(p);
body.append(div);

let res , result;

async function getData(api){
     res = await fetch(api);
     result = await res.json();

      let img = document.createElement('img')
      img.setAttribute('src',result.url)
      img.setAttribute('alt','RandomDogPic')
      div.append(img);
      //console.log(result.url);
}
getData(dogApi);



































































































// const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=tt0001702%2Ctt0001856%2Ctt0001856';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'content-type': 'application/octet-stream',
// 		'X-RapidAPI-Key': '155e253b6bmsh74499c77b0a0f41p17be44jsnf66ff29db3a9',
// 		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
// 	}
// }

// async function getData(input1, input2){

// try {
// 	const response = await fetch(input1,input2);
// 	const result = await response.json();
// 	return result;
// } catch (error) {
// 	console.error(error);
// }
// }

// async function find(){
//     let a = await getData(url, options)
//     console.log(a.results[1].primaryImage.url);
//     console.log(a);

//     for(let i of a.results)
//     {
//         console.log(i);
//     }
// }
// find()
