import React, { useEffect, useState } from 'react';
import faceIO from '@faceio/fiojs'
import './FaceAuth.css'; //Conexion al archivo CSS

const FaceAuth = () => {

  let [faceio, setFaceio] = useState(null);
  

  useEffect(() => {
    const faceioAcc = new faceIO("TOKEN");
    setFaceio(faceioAcc);
  }, []);
  

  const handleEnrollment = async () => {
    const userInfo = await faceio
                            .enroll({locale: "auto"})
                            .catch(err => {
                              handleError(err);
                              /*
                              if (err === 20)
                              {
                                const restart = window.confirm("Sesión en progreso. ¿Desea cerrar la sesión?");
                                if (restart)
                                {
                                  const restarted = faceio.restartSession();

                                  if (restarted)
                                  {
                                    handleEnrollment();
                                  }
                                  else
                                  {
                                    console.log("No se puede reiniciar la sesión")
                                  }
                                }
                              }
                              else if (err === 13)
                              {
                                let x = faceio;
                                const restarted = x.restartSession();
                                setFaceio(restarted);
                              }
                              else
                              {
                                console.log("Register failed: ", err);
                              }
                                */
                            })
  };

  const handleAuthentication = async () => {
    const login = await faceio
                        .authenticate({
                          locale: "auto"
                        }).then(userData => {
                          console.log("User authenticated: ", userData);
                        }).catch(err => {console.log("Authentication failed: ", err);});
  };

  function handleError(errCode) 
  {
		switch (errCode) {
			case 1:
				console.log("Access to the Camera stream was denied by the end user");
        faceio.restartSession();
				break;
			case 2:
				console.log("No faces were detected during the enroll or authentication process");
        faceio.restartSession();
				break;
			case 3:
				console.log("Unrecognized face on this application's Facial Index");
        faceio.restartSession();
				break;
			case 4:
				console.log("Two or more faces were detected during the scan process");
        faceio.restartSession();
				break;
			case 21:
				console.log("User enrolled previously (facial features already recorded). Cannot enroll again!");
        faceio.restartSession();
				break;
			case 22:
				console.log("Minors are not allowed to enroll on this application!");
        faceio.restartSession();
			break;
			case 5:
				console.log("Presentation (Spoof) Attack (PAD) detected during the scan process");
        faceio.restartSession();
				break;
			case 6:
				console.log("Calculated Facial Vectors of the user being enrolled do not matches");
        faceio.restartSession();
				break;
			case 8:
				console.log("Wrong PIN code supplied by the user being authenticated");
        faceio.restartSession();
				break;
			case 9:
				console.log("Server side error");
        faceio.restartSession();
				break;
			case 10:
				console.log("Your application is not allowed to perform the requested operation (eg. Invalid ID, Blocked, Paused, etc.). Refer to the FACEIO Console for additional information");
        faceio.restartSession();
				break;
			case 11:
				console.log("Terms & Conditions set out by FACEIO/host application rejected by the end user");
        faceio.restartSession();
				break;
			case 12:
				console.log("The FACEIO Widget could not be (or is being) injected onto the client DOM");
        faceio.restartSession();
				break;
			case 13:
				console.log("Client session expired. The first promise was already fulfilled but the host application failed to act accordingly");
        faceio.restartSession();
				break;
			case 14:
				console.log("Ongoing operation timed out (eg, Camera access permission, ToS accept delay, Face not yet detected, Server Reply, etc.)");
        faceio.restartSession();
				break;
			case 15:
				console.log("Widget instantiation requests exceeded for freemium applications. Does not apply for upgraded applications");
        faceio.restartSession();
				break;
			case 16:
				console.log("Origin or Referer HTTP request header is empty or missing");
        faceio.restartSession();
				break;
			case 17:
				console.log("Domain origin is forbidden from instantiating fio.js");
        faceio.restartSession();
				break;
			case 18:
				console.log("Country ISO-3166-1 Code is forbidden from instantiating fio.js");
        faceio.restartSession();
				break;
			case 20:
				console.log("Another authentication or enrollment session is in progress");
        faceio.restartSession();
				break;
			case 7:
        console.log("Error while establishing network connection with the FACEIO processing node.");
        faceio.restartSession();
        break; //fioErrCode.NETWORK_IO
			default:
				console.log("Error while establishing network connection with the target FACEIO processing node");
        faceio.restartSession();
				break;
    };
  };
  return (
    <div>

      <button onClick={handleEnrollment}>
        <div class='text'>Registrarse</div>
        <div class='wave'></div>
      </button>
      <button onClick={handleAuthentication}>
        <div class='text'>Iniciar Sesión</div>
        <div class='wave'></div>
      </button>
      
    </div>
  );
};

export default FaceAuth;
