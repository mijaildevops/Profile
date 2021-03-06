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

// ********************************************************************
// Paginacion 01
// ********************************************************************
function Pagina1() {
    PaginacionOptions.innerHTML = '';
    PaginacionOptions.innerHTML += `
    <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
    <a href="#" id="id01" onclick="Pagina1();" class="w3-bar-item w3-black w3-button">1</a>
    <a href="#" id="id02" onclick="Pagina2();" class="w3-bar-item w3-button w3-hover-black">2</a>
    <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
    `;
    Projects.innerHTML = '';
    Projects.innerHTML += `
    <div class="w3-row-padding">
    <div class="w3-third w3-container w3-margin-bottom">
    <a href="Proyects/project-1/index.html"><img src="./Img/Perfil/UpCloud-VM.png" alt="Norway" style="width:100%" class="w3-hover-opacity"></a>
      <div class="w3-container w3-white">
        <p><b>Desplegar una VM con ubuntu En UpCloud</b></p>
        <p>En este proyecto enseño como crear y desplegar una maquina virtual con ubuntu en UPCLOUD, Adema de como conectarse por SSH con User and Password.</p>
      </div>
    </div>
    <div class="w3-third w3-container w3-margin-bottom">
    <a href="Proyects/project-2/index.html"><img src="./Img/Perfil/SSH.png" alt="Norway" style="width:100%" class="w3-hover-opacity"></a>
      <div class="w3-container w3-white">
        <p><b>Crear Servidor SSH en Ubuntu Virtual Box</b></p>
        <p>En este proyecto enseño como crear un servidor SSH con ubuntu, conectar desde cliente con Putty utilizando Usuario y Contraseña</p>
      </div>
    </div>
    <div class="w3-third w3-container">
    <a href="Proyects/project-3/index.html"><img src="./Img/Perfil/Azure.png" alt="Norway" style="width:100%" class="w3-hover-opacity"></a>
      <div class="w3-container w3-white">
        <p><b>Deploy VM con windows 10 en Azure</b></p>
        <p>En este proyecto enseño como crear y desplegar una maquina virtual con windows 10 en AZURE, como configurar puertos firewall </p>
      </div>
    </div>
  </div>
  
  <!-- Second Photo Grid-->
  <div class="w3-row-padding">
    <div class="w3-third w3-container w3-margin-bottom">
    <a href="Proyects/project-4/index.html"><img src="./Img/Perfil/NGINX.png" alt="Norway" style="width:100%" class="w3-hover-opacity"></a>
      <div class="w3-container w3-white">
        <p><b>Configuracion y publicacion Servidor Web Nginx</b></p>
        <p>En este proyecto enseño como Configurar y publicar un servidor web, utilizando NGINX. servidor web ligero y de alto rendimiento</p>
      </div>
    </div>
    <div class="w3-third w3-container w3-margin-bottom">
    <a href="Proyects/project-5/index.html"><img src="./Img/Perfil/Jenkins.png" alt="Norway" style="width:100%" class="w3-hover-opacity"></a>
      <div class="w3-container w3-white">
        <p><b>project 5</b></p>
        <p>Project in Development</p>
      </div>
    </div>
    <div class="w3-third w3-container">
    <a href="Proyects/project-6/index.html"><img src="./Img/Perfil/Apache.png" alt="Norway" style="width:100%" class="w3-hover-opacity"></a>
      <div class="w3-container w3-white">
        <p><b>Configuracion y publicacion Servidor Web APACHE</b></p>
        <p>En este proyecto enseño como Configurar y publicar un servidor web, utilizando NGINX. Servidor web HTTP de código abierto mas utilizado</p>
      </div>
    </div>
  </div>
  `;
  }

// ********************************************************************
// Paginacion 02
// ********************************************************************
function Pagina2() {
    
    Projects.innerHTML = '';
    PaginacionOptions.innerHTML = '';
    PaginacionOptions.innerHTML += `
    <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
    <a href="#" id="id01" onclick="Pagina1();" class="w3-bar-item w3-button w3-hover-black">1</a>
    <a href="#" id="id02" onclick="Pagina2();" class="w3-bar-item w3-black w3-button">2</a>
    <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
    `;

    Projects.innerHTML += `
    <div class="w3-row-padding">
    <div class="w3-third w3-container w3-margin-bottom">
      <img src="./Img/Perfil/Project.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
      <div class="w3-container w3-white">
        <p><b>project 7</b></p>
        <p>Project in Development</p>
      </div>
    </div>
    <div class="w3-third w3-container w3-margin-bottom">
      <img src="./Img/Perfil/Project.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
      <div class="w3-container w3-white">
        <p><b>project 8</b></p>
        <p>Project in Development</p>
      </div>
    </div>
    <div class="w3-third w3-container">
      <img src="./Img/Perfil/Project.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
      <div class="w3-container w3-white">
        <p><b>project 9</b></p>
        <p>Project in Development</p>
    </div>
  </div>
  
  <!-- Second Photo Grid-->
  <div class="w3-row-padding">
    <div class="w3-third w3-container w3-margin-bottom">
      <img src="./Img/Perfil/Project.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
      <div class="w3-container w3-white">
        <p><b>project 10</b></p>
        <p>Project in Development</p>
      </div>
    </div>
    <div class="w3-third w3-container w3-margin-bottom">
      <img src="./Img/Perfil/Project.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
      <div class="w3-container w3-white">
        <p><b>project 11</b></p>
        <p>Project in Development</p>
      </div>
    </div>
    <div class="w3-third w3-container">
      <img src="./Img/Perfil/Project.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
      <div class="w3-container w3-white">
        <p><b>project 12</b></p>
        <p>Project in Development</p>
      </div>
    </div>
  </div>
  `;
  }

// cargar lista de projectos 1 
window.onload=Pagina1("window.onload");






    

  
  

