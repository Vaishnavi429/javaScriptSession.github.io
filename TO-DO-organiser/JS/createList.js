






function createListDiv() {
    let inputTaskValue = document.getElementById('inputTaskID').value
    let levelSelectedValue = document.getElementById('levelSelected').value
    let dateTimeValue = document.getElementById('dateTime').value
    
    const parentTodolist = document.getElementById('parent-To-do-list');
    let colDiv = document.createElement('div')
    let cardHeaderDiv = document.createElement('div')
    let headerDiv = document.createElement('div')
    let levelH5 = document.createElement('h5')
    let dateH3 = document.createElement('h6')
    let bodyDiv = document.createElement('div')
    let listP = document.createElement('p')
    let deleteA = document.createElement('a')


    let levelH5Text = document.createTextNode(levelSelectedValue)
    let dateH3Text = document.createTextNode(dateTimeValue)
    let listPText = document.createTextNode(inputTaskValue)
    let deleteAText = document.createTextNode('Delete')

    parentTodolist.appendChild(colDiv)
    colDiv.appendChild(cardHeaderDiv)
    cardHeaderDiv.appendChild(levelH5)
    cardHeaderDiv.appendChild(dateH3)
    colDiv.appendChild(bodyDiv)
    bodyDiv.appendChild(listP)
    bodyDiv.appendChild(deleteA)

    levelH5.appendChild(levelH5Text)
    dateH3.appendChild(dateH3Text)
    listP.appendChild(listPText)
    deleteA.appendChild(deleteAText)

    colDiv.classList = 'card list-card'
    cardHeaderDiv.classList = 'card__header'
    bodyDiv.classList = 'card-body'
    listP.classList = 'card-text'
    deleteA.classList = 'btn btn-primary'
}





// <div class="card list-card" id="test-id" draggable="true" ondragstart="toDoDragStart(event)">
// <div class="card__header">
// <h5>medium</h5>
// <h3>date</h3>
// </div>
// <div class="card-body">
//     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//     <a href="#" class="btn btn-primary">Delete</a>
// </div>
// </div>


function HandleSaveList() {
    createListDiv()
}


const toDoDragStart = (event) => {
    let toDoIDBlockDragged = event.target.id
}
const allowDrop = (event) => {
    console.log('drop allow');

}
const toDoDrop = (event) => {
    console.log('dropped');

}