import React from 'react';
import HeaderImage from 'resources/bodyHeader.png';
import 'components/body/BodyHeader.css';

class BodyHeader extends React.Component {
    render() {
        return (
            <div className="body-header">
                <svg className='body-header-image' preserveAspectRatio='xMinYMin meet'>
                    <circle cx='70' cy='20' />
                    <circle cx='120' cy='20' />
                    <circle cx='170' cy='20' />
                    <circle cx='220' cy='20' />
                    <circle cx='270' cy='20' />
                    <circle cx='320' cy='20' />
                    <circle cx='370' cy='20' />
                    <circle cx='420' cy='20' />
                    <circle cx='470' cy='20' />
                    <circle cx='520' cy='20' />
                    <circle cx='570' cy='20' />
                    <circle cx='620' cy='20' />
                    <circle cx='670' cy='20' />
                    <circle cx='720' cy='20' />

                    <rect x='750' y='0' width='8000' height='45' fill='#8d0002' />
                </svg>
                {/* <img src={HeaderImage} alt={'logo'} /> */}
            </div>
        );
    }
}

export default BodyHeader;