// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())



//GET THE TOTAL PRICE FROM LOCAL STORAGE
var totalPrice = localStorage.getItem("totalPrice");
//function set the text in total cart to the total price from local storage
document.getElementById("cart-total").innerHTML = localStorage.getItem("totalPrice");

function calculateTotalPrice1() {
  var cartTotalPrice = document.getElementById("cart-total").innerHTML;
  var totalPrice = document.getElementById("total");
  totalPrice.innerHTML = parseInt(cartTotalPrice) + ".000đ";
}
calculateTotalPrice1();

 //calculate total price by cart total price minus shipping fee

 function calculateTotalPrice2() {
  var cartTotalPrice = document.getElementById("cart-total").innerHTML;
  var shippingFee = document.getElementById("shipping-fee").innerHTML;
  var totalPrice = document.getElementById("total");
  totalPrice.innerHTML = parseInt(cartTotalPrice) + parseInt(shippingFee) + ".000đ";
}





//get number of items from the local storage and display it on the cart icon
var rowCount = localStorage.getItem("rowCount");
document.getElementsByClassName("badge-pill")[0].innerText = rowCount;

//validate for the form
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}
)()
//validation of form when click on button thanh toán
var btnThanhtoan = document.getElementsByClassName('btn-thanhtoan')[0];
btnThanhtoan.addEventListener('click', function() {
  var forms = document.getElementsByClassName('needs-validation')[0];
  if (forms.checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
    alert("Vui lòng điền đầy đủ thông tin");
    
  }
  forms.classList.add('was-validated')
  if (forms.checkValidity() === true) {
    alert("Bạn đã thanh toán thành công đơn hàng của mình");
    document.getElementById("total").innerHTML = "0";
    document.getElementById("shipping-fee").innerHTML = "0";
    document.getElementById("cart-total").innerHTML = "0";
  }
}
);


//if the radio id='card'is checked, its input is required , if not, it is not required
var btnCard = document.getElementById("card");

btnCard.addEventListener('click', function() {
  document.getElementById("cc-number").setAttribute("required", "true");
  document.getElementById("cc-name").setAttribute("required", "true");
  document.getElementById("cc-date").setAttribute("required", "true");
  document.getElementById("cc-cvv").setAttribute("required", "true");
}
);

var btnBanking = document.getElementById("banking");
btnBanking.addEventListener('click', function() {
  document.getElementById("b-number").setAttribute("required", "true");
  document.getElementById("b-name").setAttribute("required", "true");
  document.getElementById("b-expiration").setAttribute("required", "true");

}
);
//if select tỉnh thành is checked , display the shipping fee, if not select, display none
var selectTinhThanh = document.getElementById("province");
var ship = document.getElementById("shipping-fee");
selectTinhThanh.addEventListener('change', function() {
  ship.style.display = "block";
  calculateTotalPrice2();
}
);

//if tỉnh thành is "Tỉnh Đồng Nai" , the shipping fee is free, if not, the shipping fee is 22.000đ
var selectTinhThanh = document.getElementById("province");
var ship = document.getElementById("shipping-fee");
selectTinhThanh.addEventListener('change', function() {
  if (selectTinhThanh.value == "75") {
    ship.innerHTML = "0.000đ";
  }
  else if (selectTinhThanh.value == "82") {
    ship.innerHTML = "100.000đ";
  } 
  else {
    ship.innerHTML = "22.000đ";
  }
  calculateTotalPrice2();
}
);













