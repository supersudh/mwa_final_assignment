import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div>
                React Pages
            </div>
            <nav>
                <ul className={classes['custom-nav-ul']}>
                    <li className={classes['custom-nav-li']}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={classes['custom-nav-li']}>
                        <Link to="/new-page">New Page</Link>
                    </li>
                    <li className={classes['custom-nav-li']}>
                        <Link to="/new-second-page">New Second Page</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
