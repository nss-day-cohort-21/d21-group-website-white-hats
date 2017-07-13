let shirts = [
  {
    name: 'The Malcolm',
    description: 'Cotton1 t-shirt.',
    price: "$19",
    image:"../images/tshirt3.jpg"
  },
  {
    name: 'Code',
    description: 'Peplum t-shirt.',
    price: "$18",
    image:"../images/tshirt2.png"
  },
  {
    name: 'Site',
    description: 'Cotton2 t-shirt.',
    price: "$11",
    image:"../images/tshirt1.JPG"
  },
  {
    name: 'MJDM Special',
    description: 'Cotton3 t-shirt.',
    price: "$14",
    image:"../images/tshirt4.jpg"
  } 
];


shirts.forEach(function(item){
    document.getElementById("card").innerHTML += `<li><img src="${item.image}"</li>`
    document.getElementById("card").innerHTML += `<h1>${item.name}</h1>`
    document.getElementById("card").innerHTML += `<li>${item.price}</li>`
    document.getElementById("card").innerHTML += `<li>${item.description}</li>`
});