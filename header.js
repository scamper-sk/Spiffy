
function getCartItems(){
    //db.collection("cart-items").get().then((querySnapshot) =>{
    db.collection("cart-items").onSnapshot((snapshot) =>
    {
        let totalCount =0;
        //querySnapshot.forEach((doc)=>{
        snapshot.forEach((doc)=>
        {
             totalCount+= doc.data().quantity;
        })
        //console.log(totalCount);
        setCartCounter(totalCount);
    })
}

function setCartCounter(totalCount){
    //cart-item-number 
    document.querySelector(".cart-item-number").innerText =totalCount;
}
getCartItems();   