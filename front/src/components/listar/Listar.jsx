import { useState } from 'react'
import './Listar.css'
import imgIcon from '../../assets/icons/image.svg'
import trash from '../../assets/icons/trash.svg'


const Listar = () => {

  const [images, setImages] = useState([]);

  const searchImages = () => {
    const url = 'http://localhost:8080/';

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error al intentar obtener las imágenes:', error);
        throw error;
      });
  }

  const deteleImage = (id) => {
    console.log(id)
    const url = `http://localhost:8080/${id}`;

    return fetch(url, {
      method: 'DELETE'
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        setImages((prevImages) => prevImages.filter((image) => image.id !== id));
      })
      .catch(error => {
        console.error('Error al intentar eliminar la imágen:', error);
        throw error;
      });
  }

  return (
    <>
      <div className='img-list'>
        {images.length === 0 ? (
          <div className="img-container">
            <img src={imgIcon} alt="default-img" className="img" />
          </div>
        ) : (
          images.map((item, index) => {
            return (
              <div className="img-container" key={index}>
                <img src={trash} alt='trash-icon' className='trans-icon' onClick={() => deteleImage(item.id)} />
                <img src={`data:image/jpeg;base64,${item.imgdata}`} alt={item.name} className="img" />
              </div>
            );
          })
        )}
      </div>
      <button className='refresh-button' onClick={searchImages}>
        Refrescar
      </button>
    </>
  )
}

export default Listar