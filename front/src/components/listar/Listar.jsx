import { useState } from 'react'
import './Listar.css'
import { useEffect } from 'react';
import imgIcon from '../../assets/icons/image.svg'


const Listar = () => {

  const [imageBlob, setImageBlob] = useState(null);
  const [imageURL, setImageURL] = useState('');

  const [images, setImages] = useState([]);

  const searchImages = () => {
    const url = "http://localhost:8080/imgdata";

    return fetch(url, {
      method: "GET",
      header: "Content-Type: application/json",
    })
      .then((response) => {
        return response.blob();
      })
      .then((blobData) => {
        // Convierte el blob a una URL de imagen en base64
        const reader = new FileReader();
        // console.log(blobData);
        reader.onload = () => {
          console.log('salida por consola datos de la imagen: ', blobData);
          setImageBlob(blobData);
          setImages(blobData);
          setImageURL(reader.result);
        };
        reader.readAsDataURL(blobData);
      })
      .catch((error) => {
        console.error("Error al intentar obtener las imagenes:", error);
        throw error;
      });
  }

  return (

    <>
      <div className='img-list'>
        {imageBlob ? (
          images.map((item, index) => {
            return (
              <div className="img-container" key={index}>
                <img src={item.imageURL} alt="Imagen" className="img" />
              </div>
            )
          })
        ) : (
          // images.map((item, index) => {
          //   return (
          <div className="img-container">
            <img src={imgIcon} alt="default-img" className="img" />
          </div>
          //   )
          // })
        )}
      </div >
      <button className='refresh-button' onClick={searchImages}>
        Refrescar
      </button>
    </>
    // <>
    //   <div className='img-list'>
    //     {
    //       images.map((item, index) => {
    //         return (
    //           <div className="img-container" key={index}>
    //             <img
    //               src={imgIcon}
    //               alt="default-img"
    //               className="img"
    //             />
    //           </div>
    //         )
    //       })
    //     }
    //   </div>
    //   <button className='refresh-button' onClick={searchImages}>Refrescar</button>
    // </>
  )
}

export default Listar