import React from 'react';

const Sidebar = () => {
  return <div className="sidebar">
      <div className='brand-name'>
        <p> Prenetics</p>
      </div>
      <div className='sidebar-nav'>
        <ul>
            <li className='sidebaractive'>
                Patient Management
            </li>
            <li>
                Results Upload
            </li>
            <li>
                Kit Activation
            </li>
        </ul>
      </div>
  </div>;
};

export default Sidebar;
