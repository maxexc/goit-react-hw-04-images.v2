// import { 
//   GalleryItem,
//   GalleryImage,
//   GalleryInfo,
//   GalleryInfoItem,
// } from './ImageGalleryItem.styled';
import { FcLike } from "react-icons/fc";
import { ImEye } from "react-icons/im";
import { FaComments } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import './ImageGalleryItem.css';

import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images }) => {
  return images.map((image) => (
      <li className="photo-card" key={image.id}>
        <a className="img-wrap" href={image.largeImageURL}>
          <img
          className='image'
          src={image.webformatURL}
          alt={image.tags}
          loading="lazy"
          />
        </a>
        <div className='info'>
            <p className='info__item'>
              <b>Likes</b>
              <FcLike style={{ width: 14, height: 14 }} />              
              {image.likes}
            </p>
            <p className='info__item'>
              <b>Views</b>
              <ImEye style={{ width: 14, height: 14, color: "lightgreen"}} />              
              {image.views}
            </p>
            <p className='info__item'>
              <b>Comments</b>
              <FaComments style={{ width: 14, height: 14, color: "lightblue"}} />              
              {image.comments}
            </p>
            <p className='info__item'>
              <b>Downloads</b>
              <MdOutlineFileDownload style={{ width: 14, height: 14, color: "yellow"}} />              
              {image.downloads}
            </p>
          </div>
      </li>  
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};