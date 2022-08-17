let parentDiv = document.getElementById('parentDiv')
let emptyOrderGif = document.getElementById('empty-image-gif')
let orderNumber=0;
const createNewOrderColume=(orderIdInput)=>{
    
    let colDiv  = document.createElement('div')
    let cardDiv  = document.createElement('div')
    let cardHeaderDiv  = document.createElement('div')
    let cardBodyDiv  = document.createElement('div')
    let cardTitleH5 = document.createElement('h5')
    let cardTextP  = document.createElement('p')
    let cardButtonA  = document.createElement('a')
    let cardFooter  = document.createElement('div')
    let orderStatusDiv = document.createElement('div')


    let cardHeaderText = document.createTextNode('Order ID:'+ orderIdInput)
    let cardTitleH5Text = document.createTextNode('Bill Amount:')
    let cardTextPText = document.createTextNode(' Corn Large Pizza')
    let cardFooterText = document.createTextNode('Cancel Order')
    let orderStatusDivText = document.createTextNode('')
    

    parentDiv.appendChild(colDiv)
    colDiv.appendChild(cardDiv)
    cardDiv.appendChild(cardHeaderDiv)
    cardDiv.appendChild(cardBodyDiv)
    cardDiv.appendChild(cardFooter)
    cardBodyDiv.appendChild(cardTitleH5)
    cardBodyDiv.appendChild(cardTextP)
    cardFooter.appendChild(orderStatusDiv)
    cardFooter.appendChild(cardButtonA)


    cardTitleH5.appendChild(cardTitleH5Text)
    cardTextP.appendChild(cardTextPText)
    cardButtonA.appendChild(cardFooterText)
    cardHeaderDiv.appendChild(cardHeaderText)
    orderStatusDiv.appendChild(orderStatusDivText)

    

    colDiv.classList ='col-md-4 col-sx-12'
    cardDiv.classList = 'card text-center'
    cardHeaderDiv.classList ='card-header'
    cardBodyDiv.classList = 'card-body'
    cardTitleH5.classList = 'card-title'
    cardTextP.classList = 'card-text'
    cardButtonA.classList = 'btn btn-primary cancel-Btn'
    cardFooter.classList ='card-footer text-muted'
    orderStatusDiv.classList = 'order-status'

    orderStatusDiv.id =orderIdInput
}
// ----------------------------DESIGN NEW COLUME -----------------
{/* <div class="col-md-4 col-sx-12">
                <div class="card text-center">
                    <div class="card-header">
                        Order ID:
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">
                            Bill Amount
                        </h5>
                        <p class="card-text"> Corn Large Pizza
                            Double Cheese Medium Pizza</p>
                    </div>
                    <div class="card-footer text-muted">
                        <div class="order-status">first Layer Of Cheese Added</div>
                        <a href="#" class="btn btn-primary cancel-Btn">Cancel</a>
                    </div>
                </div>
            </div> */}

const executeOrder=()=>{
  emptyOrderGif.style.display='none';
    let orderIdInput = document.getElementById('order-id-input').value
    if(!orderIdInput.length){
        alert('pleasse enter a valid order ID')
        return
    }
   
    createNewOrderColume(orderIdInput);
  document.getElementById(orderIdInput).innerText='Order Placed';

    ChiefReceived(orderIdInput)
    .then(PizzaSauceAdded)
    .then(firstLayerOfCheeseAdded)
    .then(toppingAdded)
    .then(secondLayerOfCheeseAdded)
    .then(PizzaBaked)
    .then(oreganoAdded)
    .then(PackageReceivedAtCounter)
    .then(()=>
    document.getElementById(orderIdInput).innerText ='Order Ready')
        
    .catch((err)=>console.log(err))
    
 
}





