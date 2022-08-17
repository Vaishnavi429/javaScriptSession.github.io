let firstName= document.getElementById("firstName")
let lastName=document.getElementById("lastName")
let Email= document.getElementById("Email")
let PhoneNumber=document.getElementById("PhoneNumber")
let State =document.getElementById("State")
let ZipCode= document.getElementById("ZipCode")
let PersonDetail=[]


function validate(){
if(firstName.value.length===0)
console.log("input firstName")

if(lastName.value.length===0)
console.log("input lastName")

 
if(Email.value.length===0)
console.log("input Email");

if(PhoneNumber.value.length===0 || PhoneNumber.value.length<10 || PhoneNumber.value.length>10  ){
console.log("input valid phone number");
return
}

if(ZipCode.value.length!=6)
console.log('input valid code');
 let newInput={firstName:firstName.value,lastName:lastName.value,Email:Email.value,PhoneNumber:PhoneNumber.value,State:State.value,ZipCode:ZipCode.value}
 PersonDetail.push(newInput)
 console.log(PersonDetail);

}
