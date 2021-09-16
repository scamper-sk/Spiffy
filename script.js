function getItems(){
    db.collection("items").get().then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                image: doc.data().image,
                name: doc.data().name,
                make: doc.data().make,
                rating: doc.data().rating,
                price: doc.data().price
            })
        });
        generateItems(items)
    });
}

function addToCart(item){
    console.log(item);
    let cartItem=db.collection("cart-items").doc(item.id);
    cartItem.get()
    .then(function(doc){
        if(doc.exists){
            cartItem.update({
                quantity: doc.data().quantity + 1
            })
        } else {
            cartItem.set({
                image: item.image,
                make: item.make,
                name: item.name,
                price: item.price,
                rating: item.rating,
                quantity: 1
            })
        }
    })
}
    

function generateItems(items) {
    //by concatenation of a string
    let itemsHTML = "";
    items.forEach((item) => {
        let doc = document.createElement("div");
        doc.classList.add("main-product", "mr-5");
        doc.innerHTML = `
            <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
                <img class="w-full h-full object-contain" src="${item.image}">
            </div>
            <div class="product-name text-gray-700 font-bold mt-2 text-sm">
                ${item.name}
            </div>
            <div class="product-make text-gray-600 text-sm">
                ${item.make}
            </div>
            <div class="product-rating text-yellow-300 font-bold my-1">
            ⭐⭐⭐⭐⭐ ${item.rating}
            </div>
            <div class="product-price font-bold text-gray-700 ">
                ${numeral(item.price).format('$0,0.00')};
            </div>
        `
        //add to cart is created as a object so now we can use eventListener . we cannnot use event listener on string.
        let addToCartEl = document.createElement("div");
        addToCartEl.classList.add("border-2","border-yellow-500","bg-yellow-500","w-28", "h-7" , "cursor-pointer", "mt-2", "flex" ,"items-center" ,"justify-center", "font-medium", "text-white", "hover:bg-yellow-600");
        addToCartEl.innerText = "Add to cart";
        addToCartEl.addEventListener("click", function(){
            addToCart(item)
        })
        doc.appendChild(addToCartEl);
        document.querySelector(".main-section-products").appendChild(doc);
        })  
    }
getItems();