import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId?: string
    width?: string
    height?: string
    viewBox?: string
}

const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "35"} height={props.height || "35"} viewBox={props.viewBox || "0 0 35 35"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

export default Icon;
