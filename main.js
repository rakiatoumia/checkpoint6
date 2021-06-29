
/************ declaration  *************/


const btn_plus = document.getElementsByClassName("btn-plus");
const btn_moins = document.getElementsByClassName("btn-moins");
const price = document.getElementsByClassName("price");
const total = document.getElementsByClassName("total");
const quantity = document.getElementsByClassName("quantity_input");
const remove = document.getElementsByClassName("fa-trash");
const heart = document.getElementsByClassName("fa-heart");
const checkout_button= document.querySelector(".check");
const total_costs = document.getElementsByClassName("total_costs");

/************ fonction boutton coeur *************/
 

for (let i=0 ;i < heart.length ;i++)
{
    heart[i].addEventListener('click',function(){
    heart[i].classList.toggle("heart-active");

})
}

/***********fonction boutton plus *********/

for (let i=0;i<btn_plus.length;i++)
{  
    btn_plus[i].addEventListener('click',function(){

    quantity[i].value ++;
    updatetot(price[i],quantity[i],total[i]);
})
}

/***********fonction boutton moins *********/

for (let i=0;i<btn_moins.length;i++)
{
  
    btn_moins[i].addEventListener('click',function(){
    quantity[i].value--; 
    updatetot(price[i],quantity[i],total[i]);

})
}

/********fonction remove button ***************/

for (let i=0; i<remove.length ;i++)
{
    var button= remove[i];
    button.addEventListener('click',function(event)
    {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updatetot(price[i],quantity[i],total[i]);
    })
}

/*******fonction mettant a jour leprix total dechaque article *********/

function updatetot(x,y,z)
{
    var tot=0;
    var Price=parseFloat(x.innerText.replace('€',''))
    var Quantity = y.value;
    tot= tot + (Price * Quantity );
    z.innerText = '€' + tot + '.00';
}

/****fonction calculant la total cost ******/


checkout_button.addEventListener('click',function()
{
    var sum=0;

    for(let i=0;i< total.length ; i++)
    {
        sum += parseFloat(total[i].innerText.replace('€',''))
        console.log(parseFloat(total[i].innerText.replace('€','')))
    }
    total_costs[0].innerText = '€'+ (sum + 5) +'.00' ;
    
})
