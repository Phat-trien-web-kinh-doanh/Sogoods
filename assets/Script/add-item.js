
//if number on cart icon is 0, hide the cart
function noCart () {
  var count =  document.getElementsByClassName("number")[0].innerHTML
    
  if (count = "0")
     {
      document.getElementsByClassName("header__cart-list-item")[0].style.display = "none";
      document.getElementsByClassName("header__cart-heading")[0].style.display = "none";
      document.getElementsByClassName("more-cart")[0].style.display = "none";
      document.getElementsByClassName("header__cart-no-cart-img")[0].style.display = "block";
      document.getElementsByClassName("header__cart-list-no-cart-msg")[0].style.display = "block";
  }
}


var btnLike = document.getElementById('like-btn');
btnLike.onclick = function () {
  
    alert("Đã thêm vào yêu thích.");
            ;}     



//click on button to add to cart
var addToCartButtons = document.getElementsByClassName("add-btn");
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
}
//add to cart
function addToCartClicked(event) {
    var shopItem = document.getElementsByClassName("container product my-5 pt-2")[0];
    var title = shopItem.getElementsByClassName("item-title")[0].innerText;
    var price = shopItem.getElementsByClassName("item-price")[0].innerText;
    var imageSrc = shopItem.getElementsByClassName("item-img")[4].src;
    var quantity = shopItem.getElementsByClassName("item-quantity")[0].value;
    addItemToCart(title, price, imageSrc, quantity);
    alert("Đã thêm vào giỏ hàng.");
}

//show the item in cart
function addItemToCart(name, price, image, quantity) {
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart--item");
    var cartItems = document.getElementsByClassName("header__cart-list-item")[0];
    var cartItemNames = cartItems.getElementsByClassName("item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == name) {
            alert("Sản phẩm đã có trong giỏ hàng");
            return;
        }
    }
    var cartRowContents = `
    <li class="header__cart-item">
    <img width="35px" src="${image}" alt="" class="header__cart-img">
    <div class="header__cart-item-info">
    <div class="header__cart-item-info">
      <div class="header__cart-item-head">
        <span class="header__cart-item-name">${name}</span>
        <div class="header__cart-item-price-wrap">
          <span class="header__cart-item-price">${price}</span>
          <span class="header__cart-item-multiply">x</span>
          <span class="header__cart-item-qnt">${quantity}</span>
        </div>
      </div>
      <div class="header__cart-item-body">
        <span class="header__cart-item-description">Phân loại: 1</span>
        <span class="header__cart-item-remove">Xóa</span>
      </div>
    </div>
    </li>
`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    removeCartandCountItem();
    CountItem();
   
}

function removeCartandCountItem() {
    $(".header__cart-item-remove").on("click", function (e) {
        e.preventDefault();
        $(this).parent().parent().parent().parent().remove();
        var rowCount = document.getElementsByClassName("header__cart-list-item")[0].getElementsByTagName("li").length;
        document.getElementsByClassName("number")[0].innerHTML = rowCount;
        return true;
    });

}
 //remove the item in cart
 function removeCart(){
$(".header__cart-item-remove").on("click", function (e) {
 e.preventDefault();
$(this).parent().parent().parent().parent().remove();
return true;
    });
    
}

function CountItem () {
    var rowCount = document.getElementsByClassName("header__cart-list-item")[0].getElementsByTagName("li").length;
    document.getElementsByClassName("number")[0].innerHTML = rowCount;   

}
//count the number of items in the cart and display it on the cart icon
var rowCount = document.getElementsByClassName("header__cart-list-item")[0].getElementsByTagName("li").length;
document.getElementsByClassName("number")[0].innerHTML = rowCount;
//remove the item in cart and count again
$(".header__cart-item-remove").on("click", function (e) {
    e.preventDefault();
    $(this).parent().parent().parent().parent().remove();
    var rowCount = document.getElementsByClassName("header__cart-list-item")[0].getElementsByTagName("li").length;
    document.getElementsByClassName("number")[0].innerHTML = rowCount;
    return true;
});





