import React from 'react';
import './ThreeColumn.style.scss';

const ThreeColumn = ({ title, description }) => (
    <div class="Three">
        <div className="Column">
            <span>{title}</span>
            <div className="Content">{description}</div>
        </div>
    </div>
);
export default ThreeColumn;
