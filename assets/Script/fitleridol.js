function showIdol() {
  document.getElementById('sm1').style.display="none";
  document.getElementById('smr1').style.display="none";
  document.getElementById('smr2').style.display="none";
  document.getElementById('smr3').style.display="none";
  document.getElementById('sm2').style.display="none";
  document.getElementById('sm3').style.display="none";
  document.getElementById('yg1').style.display="none";
  document.getElementById('ygr1').style.display="none";
  document.getElementById('yg2').style.display="none";
  document.getElementById('ygr2').style.display="none";
  document.getElementById('cube').style.display="none";
  document.getElementById('cuber1').style.display="none";
  document.getElementById('hype1').style.display="none";
  document.getElementById('hype2').style.display="none";
  document.getElementById('hyper2').style.display="none";
  document.getElementById('hyper1').style.display="none";
  document.getElementById('starship').style.display="none";
  document.getElementById('starshipr1').style.display="none";
  document.getElementById('pledis1').style.display="none";
  document.getElementById('pledisr1').style.display="none";
  document.getElementById('jyp1').style.display="none";
  document.getElementById('jypr1').style.display="none";


  if(document.getElementById('ctsm').checked == true){
  document.getElementById('sm1').style.display="block";
  document.getElementById('smr1').style.display="block";
  document.getElementById('smr2').style.display="block";
  document.getElementById('smr3').style.display="block";
  document.getElementById('sm2').style.display="block";
  document.getElementById('sm3').style.display="block";
}
  
  if(document.getElementById('ctyg').checked == true){
  document.getElementById('yg1').style.display="block";
  document.getElementById('ygr1').style.display="block";
  document.getElementById('yg2').style.display="block";
  document.getElementById('ygr2').style.display="block";}


  if(document.getElementById('ctcube').checked == true){
  document.getElementById('cube').style.display="block";
  document.getElementById('cuber1').style.display="block";
}

  if(document.getElementById('cthype').checked == true){
  document.getElementById('hype1').style.display="block";
  document.getElementById('hype2').style.display="block";
  document.getElementById('hyper2').style.display="block";
  document.getElementById('hyper1').style.display="block";
}

  if(document.getElementById('ctstarship').checked == true){
  document.getElementById('starship').style.display="block";
  document.getElementById('starshipr1').style.display="block";
}
  if(document.getElementById('ctpledis').checked == true){
  document.getElementById('pledis1').style.display="block";
  document.getElementById('pledisr1').style.display="block";

  }
  if(document.getElementById('ctjyp').checked == true){
  document.getElementById('jyp1').style.display="block";
  document.getElementById('jypr1').style.display="block";}

  else{if(document.getElementById('ctstarship').checked == false && document.getElementById('ctsm').checked == false && document.getElementById('ctyg').checked == false && document.getElementById('ctcube').checked == false && document.getElementById('ctpledis').checked == false && document.getElementById('ctjyp').checked == false && document.getElementById('cthype').checked == false){
    document.getElementById('sm1').style.display="block";
    document.getElementById('smr1').style.display="block";
    document.getElementById('smr2').style.display="block";
    document.getElementById('smr3').style.display="block";
    document.getElementById('sm2').style.display="block";
    document.getElementById('sm3').style.display="block";
    document.getElementById('yg1').style.display="block";
    document.getElementById('ygr1').style.display="block";
    document.getElementById('yg2').style.display="block";
    document.getElementById('ygr2').style.display="block";
    document.getElementById('cube').style.display="block";
    document.getElementById('cuber1').style.display="block";
    document.getElementById('hype1').style.display="block";
    document.getElementById('hype2').style.display="block";
    document.getElementById('hyper2').style.display="block";
    document.getElementById('hyper1').style.display="block";
    document.getElementById('starship').style.display="block";
    document.getElementById('starshipr1').style.display="block";
    document.getElementById('pledis1').style.display="block";
    document.getElementById('pledisr1').style.display="block";
    document.getElementById('jyp1').style.display="block";
    document.getElementById('jypr1').style.display="block";}}
}
function cancelFilter(){
  //show all divs
  document.getElementById('ctstarship').checked = false; document.getElementById('ctsm').checked = false; document.getElementById('ctyg').checked = false;document.getElementById('ctcube').checked = false;document.getElementById('cthype').checked = false; 
  document.getElementById('ctpledis').checked = false; document.getElementById('ctjyp').checked = false;
  document.getElementById('sm1').style.display="block";
  document.getElementById('smr1').style.display="block";
  document.getElementById('smr2').style.display="block";
  document.getElementById('smr3').style.display="block";
  document.getElementById('sm2').style.display="block";
  document.getElementById('sm3').style.display="block";
  document.getElementById('yg1').style.display="block";
  document.getElementById('ygr1').style.display="block";
  document.getElementById('yg2').style.display="block";
  document.getElementById('ygr2').style.display="block";
  document.getElementById('cube').style.display="block";
  document.getElementById('cuber1').style.display="block";
  document.getElementById('hype1').style.display="block";
  document.getElementById('hype2').style.display="block";
  document.getElementById('hyper2').style.display="block";
  document.getElementById('hyper1').style.display="block";
  document.getElementById('starship').style.display="block";
  document.getElementById('starshipr1').style.display="block";
  document.getElementById('pledis1').style.display="block";
  document.getElementById('pledisr1').style.display="block";
  document.getElementById('jyp1').style.display="block";
  document.getElementById('jypr1').style.display="block";
}