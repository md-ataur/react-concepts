import React from 'react';
import './Dashboard.css';
// import { FiMenu, FiShoppingCart } from 'react-icons/fi';
import { GrMenu } from 'react-icons/gr';
import { Outlet } from 'react-router-dom';

const Dashboard = ({ setIsSideMenuOpenFunction, isSideMenuOpen }) => {
    const itemSearch = (value) => {
        console.log(value);
    };

    return (
        <div className={!isSideMenuOpen ? 'side-menu-open dashboard' : 'dashboard'}>
            <div className="dash-header">
                <div className="menu-icon">
                    <span>
                        <GrMenu onClick={setIsSideMenuOpenFunction} />
                    </span>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Dashboard;
