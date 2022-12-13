
/*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    var proQty = $('.pro-qty-2');
    proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
        updateCartTotal();
    });

    
  // Remove item when click on  remove button
  $(".cart-item-remove").on("click", function (e) {
    e.preventDefault();
    $(this).parent().parent().remove();
    recalculateCart();
}
);

// calculate table cell price values
function recalculateCart() {
    var subtotal = 0;
    var totalPrice = 0;
    var taxRate = 0.05;
    //iterate through each row in the table
    $(".cart-item tbody tr").each(function () {
        // replace "đ" with "" in price


        var price = parseFloat($(this).find(".cart-item-price").text());
        var quantity = $(this).find(".pro-qty-2 input").val();
        var total = price * quantity;
        subtotal += total;
        tax = subtotal * taxRate;
        totalPrice = subtotal + (subtotal * taxRate);
        $(this).find(".cart-item-total").text(total.toFixed(3) + "đ");
    });
    $(".tax span").text(tax.toFixed(3)+"đ");
    $(".cart-subtotal span").text(subtotal.toFixed(3)+"đ");
    $(".cart-total span").text(totalPrice.toFixed(3)+"đ");
}
//Update cart total
function updateCartTotal() {
    var subtotal = 0;
    var totalPrice = 0;
    var taxRate = 0.05;
    //iterate through each row in the table
    $(".cart-item tbody tr").each(function () {
        // replace "đ" with "" in price


        var price = parseFloat($(this).find(".cart-item-price").text());
        var quantity = $(this).find(".pro-qty-2 input").val();
        var total = price * quantity;
        subtotal += total;
        tax = subtotal * taxRate;
        totalPrice = subtotal + (subtotal * taxRate);
        $(this).find(".cart-item-total").text(total.toFixed(3) + "đ");
    });
    $(".tax span").text(tax.toFixed(3)+"đ");
    $(".cart-subtotal span").text(subtotal.toFixed(3)+"đ");
    $(".cart-total span").text(totalPrice.toFixed(3)+"đ");
}

function updateCartTotal2() {
    var subtotal = 0;
    var totalPrice = 0;
    var taxRate = 0.05;
    //iterate through each row in the table
    $(".cart-item tbody tr").each(function () {
        // replace "đ" with "" in price


        var price = parseFloat($(this).find(".cart-item-price").text());
        var quantity = $(this).find(".pro-qty-2 input").val();
        var total = price * quantity;
        subtotal += total;
        tax = subtotal * taxRate;
        totalPrice = subtotal + (subtotal * taxRate) - 25;
        $(this).find(".cart-item-total").text(total.toFixed(3) + "đ");
    });
    $(".tax span").text(tax.toFixed(3)+"đ");
    $(".cart-subtotal span").text(subtotal.toFixed(3)+"đ");
    $(".cart-total span").text(totalPrice.toFixed(3)+"đ");
}


    

//calculate table cell price values when load page
$(document).ready(function () {
    recalculateCart();
});



//CLICK ON BUTTON ÁP DỤNG TO SAVE THE INPUT TEXT AND CHECK IF IT IS "SOGOODS2811" THEN SHOW ALERT "Mã giảm giá hợp lệ" AND UPDATE CART TOTAL
var btnApdung = document.getElementsByClassName('btn-apdung')[0];
btnApdung.addEventListener('click', function() {
    var discount = document.getElementsByClassName("form-control")[0].value;
    if (discount == "SOGOODS2811") {
       

   alert("Mã giảm giá hợp lệ");
    //show discount and remove the style display none


  document.getElementsByClassName("voucher-code")[0].style.display = "block";

  updateCartTotal2();
    } else {
    alert("Mã giảm giá không hợp lệ");
    document.getElementsByClassName("voucher-code")[0].style.display = "none";
    updateCartTotal();
    }
    }
);
//SAVE THE TOTAL PRICE TO LOCAL STORAGE
var btnDathang = document.getElementsByClassName('btn-checkout')[0];
btnDathang.addEventListener('click', function() {
    var totalPrice = document.getElementsByClassName("price-cart-total")[0].innerText;
    localStorage.setItem("totalPrice", totalPrice);
    }
);

//set the total price to the cart total price
var totalPrice = localStorage.getItem("totalPrice");
document.getElementsByClassName("price-cart-total")[0].innerText = totalPrice;

 //save the total price of each item in the cart to local storage
    var btnDathang = document.getElementsByClassName('btn-checkout')[0];
    btnDathang.addEventListener('click', function() {
        var cartItemTotal = document.getElementsByClassName("cart-item-total");
        for (var i = 0; i < cartItemTotal.length; i++) {
            localStorage.setItem("cartItemTotal" + i, cartItemTotal[i].innerText);
        }
        }
    );

  
 //count the number of items in the cart and display it on the cart icon
 var rowCount = $('.cart-item >tbody >tr').length;
//show the number of items on the cart icon
document.getElementsByClassName("badge-pill")[0].innerText = rowCount;
//update number of item when delete item
$(".cart-item-remove").on("click", function (e) {
    e.preventDefault();
    $(this).parent().parent().remove();
    var rowCount = $('.cart-item >tbody >tr').length;
    document.getElementsByClassName("badge-pill")[0].innerText = rowCount;
    recalculateCart();
});

//save the number of items in local storage
var btnDathang = document.getElementsByClassName('btn-checkout')[0];
btnDathang.addEventListener('click', function() {
    var rowCount = $('.cart-item >tbody >tr').length;
    localStorage.setItem("rowCount", rowCount);
    }
);
// save data in this page into local storage
var btnDathang = document.getElementsByClassName('btn-checkout')[0];
btnDathang.addEventListener('click', function() {
    var cartItemPic = document.getElementsByClassName("product__cart__item__pic");
    var cartItemName = document.getElementsByClassName("product__cart__item__text");
    var cartItemPrice = document.getElementsByClassName("cart-item-price");
    var cartItemQuantity = document.getElementsByClassName("pro-qty-2 input");
    var cartItemTotal = document.getElementsByClassName("cart-item-total");
    for (var i = 0; i < cartItemName.length; i++) {
        localStorage.setItem("cartItemPic" + i, cartItemPic[i].src);
        localStorage.setItem("cartItemName" + i, cartItemName[i].innerText);
        localStorage.setItem("cartItemPrice" + i, cartItemPrice[i].innerText);
        localStorage.setItem("cartItemQuantity" + i, cartItemQuantity[i].innerText);
        localStorage.setItem("cartItemTotal" + i, cartItemTotal[i].innerText);
    }
    }
);
//Click button cart-item-update to reload the cart page
$(".cart-item-update").on("click", function (e) {
    e.preventDefault();
    location.reload();
}
);




















    
   


 
    

      