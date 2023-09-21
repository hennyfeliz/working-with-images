import { useState } from 'react';
import './Subir.css'

const Subir = () => {

  const [fetchResponse, setFetchResponse] = useState(false);

  const uploadImages = (event) => {
    const url = 'http://localhost:8080/many';
    const files = event.target.files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('archivo', files[i]);
    }

    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => {
        setFetchResponse(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error occurred while uploading images:', error);
        throw error;
      });
  };

  return (
    <div className='subir'>
      <input type='file' onChange={uploadImages} multiple />
      {/* <button onClick={uploadImages}>Enviar imagenes</button> */}
      {fetchResponse ? <span>Carga completada...</span> : ''}
    </div>
  )
}

export default Subir