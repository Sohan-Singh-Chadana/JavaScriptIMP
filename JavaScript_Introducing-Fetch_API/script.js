fetch('https://dummyjson.com/products/search?q=phone')
    .then((respons) => respons.json())
    .then((data) => {
        console.log(data.products);

        const productData = data.products;
        const productElem = document.querySelector(".product")
        productData.map((itme) => {
            const divElem = document.createElement("div");
            divElem.className = 'cart'

            divElem.innerHTML = `
        <img src='${itme.thumbnail}' class='img' >
        <div class="details">
            <span>${itme.brand}</span>
            <h2>${itme.title}</h2>
            <h3>$${itme.price}</h3>
            <h3>⭐⭐⭐⭐⭐ ${itme.rating}</h3>
        </div>`;

            productElem.append(divElem);
        })
    });



//? exaple 2
// fetch('https://dummyjson.com/products/add', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             title: 'BMW Pencil',
//             /* other product data */
//         })
//     })
//     .then(res => res.json())
//     .then(console.log)
//     .catch(err => console.log(err))