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
                <div className="parent-nav">
                    <p>Composition Vs Inheritance</p>
                    <ul>
                        <li>
                            <NavLink
                                to="/inheritance"
                                className={({ isActive }) =>
                                    isActive ? 'menu-active-class' : 'no-active-class'
                                }
                            >
                                <div className="menu-list">Inheritance</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/composition"
                                className={({ isActive }) =>
                                    isActive ? 'menu-active-class' : 'no-active-class'
                                }
                            >
                                <div className="menu-list">Composition</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink
                    to="/hoc"
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
                                Higher Order Component
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
                <div className="parent-nav">
                    <p>Hooks</p>
                    <ul>
                        <li>
                            <NavLink
                                to="/useEffect"
                                className={({ isActive }) =>
                                    isActive ? 'menu-active-class' : 'no-active-class'
                                }
                            >
                                <div className="menu-list">UseEffect</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/UseCallbackAndMemo"
                                className={({ isActive }) =>
                                    isActive ? 'menu-active-class' : 'no-active-class'
                                }
                            >
                                <div className="menu-list">useCallback & useMemo</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/UseRefAndForwardRef"
                                className={({ isActive }) =>
                                    isActive ? 'menu-active-class' : 'no-active-class'
                                }
                            >
                                <div className="menu-list">useRef & forwardRef</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
