import React from 'react';
import './skeleton.css';
const SkeletonElement = ({type}) => {
    const classess = 'skeleton ' + type;
    return (
        <div className={classess} ></div>
    );
}

export default SkeletonElement;