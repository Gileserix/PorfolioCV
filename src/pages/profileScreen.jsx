import React from 'react';

function ProfileScreen() {
  return (
    <div className="screen2 pixel-rounded2">
      <div className="header pixel-rounded3">
        <div className="header-content">
          <div className="profile-photo">
            <img src="../assets/images/ImagenCV.png" alt="Foto de perfil" />
          </div>
          <p className="datos">Nombre: Fausto Lopez Alba<br></br><br></br>
          Edad: 26 anos<br></br><br></br>
          Fecha Nacimiento: 25/06/1998</p>
        </div>
      </div>
      <div className="header pixel-rounded3">
            <h3>Formacion</h3>
            <p>Tecnico superior de desarrollo de paginas web</p>
          </div>
          <div className="header pixel-rounded3">
            <h3>Tecnologias Utilizadas</h3>
            <div className="medal-photo">
            <img src="../assets/images/react.png" alt="Foto de perfil" />
            </div>
            <div className="medal-photo">
            <img src="../assets/images/Java.png" alt="Foto de perfil" />
            </div>
            <div className="medal-photo">
            <img src="../assets/images/html5.png" alt="Foto de perfil" />
            </div>
            <div className="medal-photo">
            <img src="../assets/images/mysql.png" alt="Foto de perfil" />
            </div>
            <br></br>
            <div className="medal-photo">
            <img src="../assets/images/JavaScript.png" alt="Foto de perfil" />
            </div>
            <div className="medal-photo">
            <img src="../assets/images/mongodb.png" alt="Foto de perfil" />
            </div>
            <div className="medal-photo">
            <img src="../assets/images/csharp.png" alt="Foto de perfil" />
            </div>
            <div className="medal-photo">
            <img src="../assets/images/docker.png" alt="Foto de perfil" />
            </div>
          </div>
          <div className="header pixel-rounded3">
            <h3>Soft Skills</h3>
            <p>- Ordenado  &nbsp; - Resolutivo  &nbsp;- Trabajo en equipo</p>
          </div>
          <div className="header pixel-rounded3">
            <h3>Datos de interes</h3>
            <p>- Disponibilidad Geografica  &nbsp; - Carnet coche  <br></br><br></br>- Vehiculo propio</p>
          </div>
        </div>
  );
}

export default ProfileScreen;