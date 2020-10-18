import React from 'react';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import VisibilityIcon from '@material-ui/icons/Visibility';

const Imagen = ({imagen}) => {

    //Extraer variables
    const {largeImageURL, likes, webformatURL, tags, views} = imagen;

    return (  
        <div className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className = "card">
                <img src = {webformatURL} alt = {tags} className = "card-img-top"/>
            </div>
            <div className = "card-body" align = "center">
                <p className = "card-text" >{likes} <ThumbUpAltTwoToneIcon color="primary"/> {views} <VisibilityIcon color="primary"/></p>
            </div>
            <div className = "card-footer">
                <a href = {largeImageURL}
                   target = "_blank"
                   rel = "noopener noreferrer"
                   className = "btn btn-primary btn-block"
                >Ver Imagen</a>
            </div>
        </div>
    );
}
 
export default Imagen;