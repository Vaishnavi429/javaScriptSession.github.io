let PersonDetail = {
    firstname: '',
    lastname: '',
    email: '',
    state: '',
    password: ''
}

let Details = []



let newPasswordStore
function HandleNewPassword() {
    let newPassword = document.getElementById('newPassword').value

    if (newPassword.length < 5) {
        document.getElementById('newPassword-text').style.color = 'red'
        document.getElementById('newPassword-text').innerText = 'week password'
        // let passwordGuide = document.getElementById('passwordGuide').style.display = 'block'
    }
    else if (newPassword.length < 8) {
        document.getElementById('newPassword-text').style.color = 'orange'
        document.getElementById('newPassword-text').innerText = 'medium password'
    }
    else {
        document.getElementById('newPassword-text').style.color = 'green'
        document.getElementById('newPassword-text').innerText = 'strong password'

    }
    newPasswordStore = newPassword
}

function HandleConfirmPassword() {
    let confirmPassword = document.getElementById('confirmPassword').value
    if (newPasswordStore === confirmPassword) {
        document.getElementById('confirmPassword-text').innerText = 'Password matched'
        document.getElementById('confirmPassword-text').style.color = 'green'

    }
    PasswordCode(confirmPassword)
    PersonDetail.password = confirmPassword

}

function HandleEmail() {
    let email = document.getElementById('email').value
    if (email.length > 5 && !email.includes('@')) {
        document.getElementById('email-text').innerText = '@ not included'
        document.getElementById('email-text').style.color = 'red'
    }
    else if (email.includes('@') && !email.includes('.com')) {
        document.getElementById('email-text').innerText = '.com not included'
        document.getElementById('email-text').style.color = 'red'


    } else {
        document.getElementById('email-text').innerText = 'email verified'
        document.getElementById('email-text').style.color = 'green'

    }
    PersonDetail.email = email
}

function HandleUserName() {
    let username = document.getElementById('username').value
    if (username.length > 3) {
        document.getElementById('username-text').innerText = 'Look Good'
        document.getElementById('username-text').style.color = 'green'
    }
    PersonDetail.username = username


}
function HandlelastName() {
    let lastname = document.getElementById('lastname').value
    if (lastname.length > 3) {
        document.getElementById('lastname-text').innerText = 'Look Good'
        document.getElementById('lastname-text').style.color = 'green'
    }
    PersonDetail.lastname = lastname

}

function HandleClick() {
    let DetailsObj =localStorage.getItem("DetailsObj")
     if(DetailsObj =='null')
     {
        Details=[];
     }
     else
     {
         Details=JSON.parse(DetailsObj);
     }
    
    Details.push(PersonDetail)
    localStorage.setItem("DetailsObj", JSON.stringify(Details))
    console.log(Details);
    
}













// -----------------------------------ceaser cipher----------------//


const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    'a':'n','b':'o','c':'p','d':'q','e':'r',
    'f':'s','g':'t','h':'u','i':'v','j':'w','k':'x',
    'l':'y','m':'z','n':'a','o':'b','p':'c','q':'d',
    'r':'e','s':'f','t':'g','u':'h','v':'i','w':'j',
    'x':'k','y':'l','z':'m',
    '1':'!','2':'@','3':'#','4':'$','5':'%','6':'^','7':'&','8':'*','9':'(','0':')',
    '!':'1','@':'2','#':'3','$':'4','%':'5','^':'6','&':'7','*':'8','(':'9',')':'0'
};


function PasswordCode(encodedStr) {
    const codeArr = encodedStr.split("");
    let decodedArr = [];
    codeArr.map(codeArrChar =>  decodedArr.push(lookup[codeArrChar]))
    return decodedArr.join("");
}


// ---------------------------------------------------------------

// --------------------------------login-----------------

