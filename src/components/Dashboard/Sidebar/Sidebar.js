import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isSideMenuOpen }) => {
    return (
        <div className={!isSideMenuOpen ? 'sidebar-closed sidebar' : 'sidebar'}>
            <div className="nav-menu">
                <NavLink
                    to="/state-lifecycle"
                    end
                    className={({ isActive }) =>
                        isActive ? 'menu-active-class' : 'no-active-class'
                    }
                >
                    <div className="menu-list">
                        <div className="menu-list-left">
                            <span
                                className={
                                    !isSideMenuOpen ? 'sidebar-closed-menu' : 'menu-list-left-text'
                                }
                            >
                                State and lifecycle
                            </span>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    to="/handling-events"
                    end
                    className={({ isActive }) =>
                        isActive ? 'menu-active-class' : 'no-active-class'
                    }
                >
                    <div className="menu-list">
                        <div className="menu-list-left">
                            <span
                                className={
                                    !isSideMenuOpen ? 'sidebar-closed-menu' : 'menu-list-left-text'
                                }
                            >
                                Handling Events
                            </span>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    to="/form"
                    end
                    className={({ isActive }) =>
                        isActive ? 'menu-active-class' : 'no-active-class'
                    }
                >
                    <div className="menu-list">
                        <div className="menu-list-left">
                            <span
                                className={
                                    !isSideMenuOpen ? 'sidebar-closed-menu' : 'menu-list-left-text'
                                }
                            >
                                Form
                            </span>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    to="/render-props"
                    end
                    className={({ isActive }) =>
                        isActive ? 'menu-active-class' : 'no-active-class'
                    }
                >
                    <div className="menu-list">
                        <div className="menu-list-left">
                            <span
                                className={
                                    !isSideMenuOpen ? 'sidebar-closed-menu' : 'menu-list-left-text'
                                }
                            >
                                Render Props
                            </span>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;