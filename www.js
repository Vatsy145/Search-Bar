let products = {
    data: [
        {
            productName: "Toner Noir et blanc"
            category: "Toner"
            price:"30",
            Image:"https://i.ibb.co/KwcFQMy/7197b-PYLO4-L-AC-UF1000-1000-QL80.jpg"//image ao amin'ilay link 1
        },
        {
            productName: "Câbles Android"
            category: "Câbles"
            price:"49",
            Image:"https://i.ibb.co/KwcFQMy/7197b-PYLO4-L-AC-UF1000-1000-QL80.jpg"//image ao amin'ilay link 2
        },
        {
            productName: "Casques"
            category: "Casques"
            price:"29",
            Image:"https://i.ibb.co/KwcFQMy/7197b-PYLO4-L-AC-UF1000-1000-QL80.jpg"//image ao amin'ilay link 3
        },
        {
            productName: "Kit"
            category: "Kit"
            price:"50",
            Image:"https://i.ibb.co/KwcFQMy/7197b-PYLO4-L-AC-UF1000-1000-QL80.jpg"//image ao amin'ilay link 4
        },
        {
            productName: "speakers"
            category: "speakers"
            price:"30",
            Image:"https://i.ibb.co/KwcFQMy/7197b-PYLO4-L-AC-UF1000-1000-QL80.jpg"//image ao amin'ilay link 5
        },
        {
            productName: "Support Voitures"
            category: "Support Voitures"
            price:"49",
            Image:"https://i.ibb.co/KwcFQMy/7197b-PYLO4-L-AC-UF1000-1000-QL80.jpg"//image ao amin'ilay link 6
        },
        {
            productName: "Boiter"
            category: "Boiter"
            price:"49",
            Image:"https://i.ibb.co/KwcFQMy/7197b-PYLO4-L-AC-UF1000-1000-QL80.jpg"//image ao amin'ilay link 7
        },
        {
            productName: ""
            category: ""
            price:"49",
            Image:"https://i.ibb.co/KwcFQMy/7197b-PYLO4-L-AC-UF1000-1000-QL80.jpg"//image ao amin'ilay link 8
        },
    ]
};

for(let i of products.data){
    //créer le Carte
    let card = documment.createElement("div");
    //card should havce category and sould stay hidden initially
    card.classList.add("card", "i.category","hide");
    //image div
    let imgContainer = documment.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.Image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    document.getElementById("products").appendChild(card);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5")
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "Ar" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("procucts").appendChild(card)
}

//parameter passes from button (Parameter same as category)
function filterProduct(value){
    //button class code
    let buttons = document.querySelectorAll("button-value");
    buttons.forEach(button => {
        //check if value equals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });
}
//Initially display all products
window.onload = () => {
    filterProduct("all");
};