function applyDiscount(cost,disc){
    
    //old way
    disc = disc || .1;
    
    return cost - (cost * disc);
}

function applyDiscountEs6(cost, disc = .1){
    
    return cost - (cost * disc);

}


//EVEN functions

//function getTax(){ return .13}
// or this
getTax = () => 1.13;

function applyDiscountEs6Func(cost,disc, tax = getTax()){
    
    
    return (cost - (cost * disc)) * tax;
}