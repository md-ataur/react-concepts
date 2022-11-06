import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-nav">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="render-props"
                            className={({ isActive }) => (isActive ? 'is-active' : '')}
                        >
                            Render Props
                        </NavLink>{' '}
                    </li>
                    <li>
                        <NavLink
                            to="state-lifecycle"
                            className={({ isActive }) => (isActive ? 'is-active' : '')}
                        >
                            State and lifecycle
                        </NavLink>{' '}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
