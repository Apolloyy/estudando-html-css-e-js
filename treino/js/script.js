var click = false;
function trocadecor()
{
var change = document.getElementById('change-color');
var button = document.getElementsByClassName('btn');
if(!click) {
change.style.backgroundColor = '#2b1e1e';
change.style.color = '#b1c1db';
click = true;


}else{
    change.style.backgroundColor = '#fff';
    change.style.color = '#000';
    click = false;
}
}


if (trocadecor()) {
    button.style.backgroundColor ='#b1c1db';
    click = true;
}else{
    button.style.backgroundColor ='#2b1e1e';
    click = false;
}
