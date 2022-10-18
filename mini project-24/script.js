


function increament(incDec,prc,itm){
    let count = document.getElementById(incDec);
    let price = document.getElementById(prc);
    let item = document.getElementById(itm);

    let pr_amount = document.getElementById('pr_amount');
    let charge = document.getElementById('charge');
    let fTotalAmount = document.getElementById('fTotalAmount');

    

    if(count.value >= 5){
        count.value = 5;
        alert('You can maximum 5pcs order in one item.')
    }
    else{
        count.value++;
        let result = parseInt(price.innerHTML)+ parseInt(item.innerHTML);
        item.innerHTML = result;
        let totalAmount = parseInt(price.innerHTML)+ parseInt(pr_amount.innerHTML);
        pr_amount.innerHTML= totalAmount;
        let finalAmount = totalAmount + parseInt(charge.innerHTML);
        fTotalAmount.innerHTML = finalAmount;

        
        let kupondiv = document.getElementById('kupondiv');
        
        if(finalAmount >= 200){
            kupondiv.style.display = "block";
        }
        else{

        }
        
    }
}





function decreament(incDec,prc,itm){
    let count = document.getElementById(incDec);
    let price = document.getElementById(prc);
    let item = document.getElementById(itm);
    let pr_amount = document.getElementById('pr_amount');

    let charge = document.getElementById('charge');
    let fTotalAmount = document.getElementById('fTotalAmount');

    if(count.value <= 0){
        count.value = 0;
        
    }
    else{
        count.value--;
        let result = parseInt(item.innerHTML)- parseInt(price.innerHTML);
        item.innerHTML = result;
        let totalAmount = parseInt(pr_amount.innerHTML)- parseInt(price.innerHTML);
        pr_amount.innerHTML = totalAmount;
        let finalAmount = totalAmount + parseInt(charge.innerHTML);
        fTotalAmount.innerHTML = finalAmount;

        
    }
}
let kupondiv = document.getElementById('kupondiv');
kupondiv.style.display = "none";

let applybtn = document.getElementById('applybtn');
applybtn.addEventListener('click',function(){
    let kinput = document.getElementById('kinput');
    let fTotalAmount = document.getElementById('fTotalAmount').innerHTML;
    

    if(kinput.value == 'sUMoN'){
        
        let total = parseInt(fTotalAmount)-50;
        document.getElementById('fTotalAmount').innerHTML = total;

        alert('Congratulation');
        kupondiv.style.display = "none";
    }
    else{
        alert('kupon not match');
    }
});