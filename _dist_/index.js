/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";


const appNode = document.querySelector('#app');

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: "USD",
    }).format(price)

    return newPrice;
};

//web api
//Conectarnos al servidor
window
    .fetch(`${baseUrl}/api/avo`)
    //Procesar la respuesta y convertirla en JSON
    .then(respuesta => respuesta.json())
    //JSON -> Data -> Renderizar info browser
    .then((responseJson) => {

        const todosLosItems = [];

        responseJson.data.forEach((item) => {
            //crear imagen
            const imagen = document.createElement('img');
            imagen.className = "cartaImg";
            imagen.src = `${baseUrl}${item.image}`;

            //crear titulo
            const title = document.createElement("h2");
            title.className = "card-title"; //Clase de Bootstrap
            title.textContent = item.name;

            //crear precio
            const price = document.createElement("div");
            price.className = "card-subtitle"; //Clase de Bootstrap
            price.textContent = formatPrice(item.price);

            const boton = document.createElement('button');
            boton.type = "button";
            boton.textContent = "Comprar";
            boton.className = "btn btn-primary";

            const container = document.createElement('div')
            container.className = "card"; //Clase de Bootstrap
            container.append(imagen, title, price, boton);

            todosLosItems.push(container)
        });

        appNode.append(...todosLosItems);
    });