import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './DashBoardTabsComponent.css';

function DashBoardTabsComponent({ data, action, dataTarget, headingData, elm, icon }) {
    const [ShowTab, setShowTab] = useState(false);

    const ShowTabHandler = function () {
        setShowTab(!ShowTab);
    };

    return (
        <div className="dashboard_tab_card" onClick={ShowTabHandler}>
            <div
                className={
                    data === dataTarget
                        ? 'dashboard_sm_card_div dashboard_cart_active'
                        : 'dashboard_sm_card_div'
                }
                onClick={action}
                data-target={data}
            >
                <i class={icon ? icon : null}></i>
                <p className="mb-0">{headingData}</p>
            </div>

            <div
                className={
                    data === dataTarget
                        ? 'tabs_options_div tabs_options_div_active'
                        : 'tabs_options_div '
                }
            >
                <ul>
                    {elm
                        ? elm.map((el) => (
                              <Link to={el.el.replaceAll(' ', '-')}>
                                  <li>
                                      <i className={el.ic ? el.ic : null}></i> {el.el}
                                  </li>
                              </Link>
                          ))
                        : null}
                </ul>
            </div>
        </div>
    );
}

export default DashBoardTabsComponent;
