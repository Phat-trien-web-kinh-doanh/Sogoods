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


 //calculate total price by cart total price minus shipping fee

 function calculateTotalPrice() {
  var cartTotalPrice = document.getElementById("cart-total").innerHTML;
  var shippingFee = document.getElementById("shipping-fee").innerHTML;
  var totalPrice = document.getElementById("total");
  totalPrice.innerHTML = parseInt(cartTotalPrice) - parseInt(shippingFee) + ".000đ";
}
calculateTotalPrice();




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
    document.getElementById("total").innerHTML = "0";
    document.getElementById("cart-total").innerHTML = "0";
  }
}
);
// //click on button thanh toan if validation form is pass to show notification "Bạn đã thanh toán thành công đơn hàng của mình" and set the total price to 0
// var btnThanhtoan = document.getElementsByClassName('btn-thanhtoan')[0];
// btnThanhtoan.addEventListener('click', function() {
 

//   alert("Bạn đã thanh toán thành công đơn hàng của mình");
//   document.getElementById("total").innerHTML = "0";
//   document.getElementById("total").innerHTML = "0";
//   document.getElementById("cart-total").innerHTML = "0";
  
//   }
// );

// Get tỉnh thành, quận huyện, phường xã
//<![CDATA[
  if (address_2 = localStorage.getItem('address_2_saved')) {
    $('select[id="city"] option').each(function() {
      if ($(this).text() == address_2) {
        $(this).attr('selected', '')
      }
    })
    $('input.billing_address_2').attr('value', address_2)
  }
  if (district = localStorage.getItem('district')) {
    $('select[name="calc_shipping_district"]').html(district)
    $('select[name="calc_shipping_district"]').on('change', function() {
      var target = $(this).children('option:selected')
      target.attr('selected', '')
      $('select[name="calc_shipping_district"] option').not(target).removeAttr('selected')
      address_2 = target.text()
      $('input.billing_address_2').attr('value', address_2)
      district = $('select[name="calc_shipping_district"]').html()
      localStorage.setItem('district', district)
      localStorage.setItem('address_2_saved', address_2)
    })
  }
  $('select[name="calc_shipping_provinces"]').each(function() {
    var $this = $(this),
      stc = ''
    c.forEach(function(i, e) {
      e += +1
      stc += '<option value=' + e + '>' + i + '</option>'
      $this.html('<option value="">Tỉnh / Thành phố</option>' + stc)
      if (address_1 = localStorage.getItem('address_1_saved')) {
        $('select[name="calc_shipping_provinces"] option').each(function() {
          if ($(this).text() == address_1) {
            $(this).attr('selected', '')
          }
        })
        $('input.billing_address_1').attr('value', address_1)
      }
      $this.on('change', function(i) {
        i = $this.children('option:selected').index() - 1
        var str = '',
          r = $this.val()
        if (r != '') {
          arr[i].forEach(function(el) {
            str += '<option value="' + el + '">' + el + '</option>'
            $('select[name="calc_shipping_district"]').html('<option value="">Quận / Huyện</option>' + str)
          })
          var address_1 = $this.children('option:selected').text()
          var district = $('select[name="calc_shipping_district"]').html()
          localStorage.setItem('address_1_saved', address_1)
          localStorage.setItem('district', district)
          $('select[name="calc_shipping_district"]').on('change', function() {
            var target = $(this).children('option:selected')
            target.attr('selected', '')
            $('select[name="calc_shipping_district"] option').not(target).removeAttr('selected')
            var address_2 = target.text()
            $('input.billing_address_2').attr('value', address_2)
            district = $('select[name="calc_shipping_district"]').html()
            localStorage.setItem('district', district)
            localStorage.setItem('address_2_saved', address_2)
          })
        } else {
          $('select[name="calc_shipping_district"]').html('<option value="">Quận / Huyện</option>')
          district = $('select[name="calc_shipping_district"]').html()
          localStorage.setItem('district', district)
          localStorage.removeItem('address_1_saved', address_1)
        }
      })
    })
  })
  //]]







