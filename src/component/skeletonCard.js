import React from 'react';
import SkeletonElement from './skeleton';

const SkeletonCard = () => {
    return (
        <div className="ft-recipe-skeleton">
        <SkeletonElement type="image" />
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />

    </div>
    );
}

export default SkeletonCard;