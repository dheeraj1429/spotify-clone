import React from 'react';
import './DashBoardHeadingComponent.css';

function DashBoardHeadingComponent({ heading, subHeading, ic }) {
    return (
        <div className="dashBoard_heading_div">
            <h4>{heading}</h4>

            <div>
                <p>
                    <i className={ic}></i> {subHeading}
                </p>
            </div>
        </div>
    );
}

export default DashBoardHeadingComponent;
