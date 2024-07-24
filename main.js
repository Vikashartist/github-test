 const bulbPlc = document.getElementById('bulb-img-plc');
 const btnOn = document.getElementById('bulb-on');
 const btnOf = document.getElementById('bulb-off');

 btnOn.addEventListener('click', () => {
   bulbPlc.src = "pic_bulbon (1).gif";
 });

 btnOf.addEventListener('click', () => {
   bulbPlc.src = "pic_bulboff (1).gif";
 });
