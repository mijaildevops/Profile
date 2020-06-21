console.log("desde contact");

const form = document.getElementById('Emailform');
const NameF = document.getElementById('Name');
const EmailF = document.getElementById('Email');
const MessageF = document.getElementById('Message');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let users = Array ({
        NameP: NameF.value,
        EmailP: EmailF.value,
        MessageP: MessageF.value
    });
    
    var formData = new FormData();
    var Name = users[0].NameP
    var Email = users[0].EmailP
    var Message = users[0].MessageP
    
    formData.append('Name', Name);
    formData.append('Email', Email);
    formData.append('Message', Message);
    console.log(Name);
    console.log(Email);
    console.log(Message);
  
    fetch('http://192.168.100.51:5060/Email', {
    method: 'POST',
    body: formData
    })
    .then(Res=>Res.json())
    .then(Res=>{
    console.log(Res)  
    EmailMenaje.innerHTML = '';
    EmailMenaje.innerHTML += `${Res.message}`;

  })})





    

  
  

