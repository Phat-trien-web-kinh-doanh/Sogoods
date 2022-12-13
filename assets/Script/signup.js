function validateInput(){
    let formElement = document.querySelector('.signup__info')
    let inputElement = formElement.querySelectorAll('.input_txt')
    for (let i = 0; i < inputElement.length; i++) {
      if(inputElement[i].value == ''){
        inputElement[i].parentElement.querySelector('.error-message').innerHTML = `Vui lòng nhập ${inputElement[i].id}`
      }else{
        inputElement[i].parentElement.querySelector('.error-message').innerHTML = ''
      }
    }
  }
  function addAccount(){
    validateInput()
    let formElement = document.querySelector('.signup__info')
    let errorElement = formElement.querySelectorAll('.error-message')
    let arrErrorElement = []
    for (let i = 0; i < errorElement.length; i++) {
        arrErrorElement.push(errorElement[i].innerText)
    }
    let checkErrorElement = arrErrorElement.every(value => value == '')
    if(checkErrorElement){
      let name = document.getElementById('tên đăng nhập').value;
      let password = document.getElementById('password').value;
      let phonenumb = document.getElementById('số điện thoại').value;
      let email = document.getElementById('email').value;
  
    let listAccount = {
        name:name,
        password:password,
        phonenumb:phonenumb,
        email:email,
      };
      localStorage.setItem('username',JSON.stringify(listAccount));
      alert('Đăng ký thành công');
      window.location.href = 'Login.html';}
    }
function login(){
   
    let name = document.getElementById('tên đăng nhập').value;
    let password = document.getElementById('password').value;
    let listAccount = localStorage.getItem('username');
    let data=JSON.parse(listAccount);
        if (name == "admin" && password == "123456") {
            alert('Đăng nhập thành công với quyền admin');
            window.location.href = "Admin_Overview.html";
        }else if(name=="client"&& password == "123456"){
            alert('Đăng nhập thành công');
            window.location.href = "Homepage.html";
        }else if(name==data.name && password == data.password){
            alert('Đăng nhập thành công');
            window.location.href = "Homepage.html";
        }else{
            alert("Sai tài khoản hoặc mật khẩu!");
            }
        
}
