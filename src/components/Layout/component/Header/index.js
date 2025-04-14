import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faSpinner,
    faHome,
    faTv,
    faStore,
    faUsers,
    faGamepad,
    faPlus,
    faBell,
    faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const activities = [
        { icon: faHome, to: '/' },
        { icon: faTv, to: '/video' },
        { icon: faStore, to: '/market' },
        { icon: faUsers, to: '/group' },
        { icon: faGamepad, to: '/game' },
    ];

    const actions = [
        { icon: faPlus, onClick: () => console.log('Create new') },
        { icon: faFacebookMessenger, to: '/messenger' },
        { icon: faBell, onClick: () => console.log('Notifications') },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <Link to="/home">
                        <img src={images.logo} alt="Facebook" />
                    </Link>
                </div>

                {/* Search */}
                <Tippy
                    interactive
                    visible={showResult && searchResult.length > 0}
                    placement="bottom-start"
                    onClickOutside={() => setShowResult(false)}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <input placeholder="Search Facebook" spellCheck={false} onFocus={() => setShowResult(true)} />
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    </div>
                </Tippy>

                {/* Activities */}
                <div className={cx('activities')}>
                    {activities.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={cx('activity-item', {
                                active: location.pathname === item.to,
                            })}
                        >
                            <FontAwesomeIcon icon={item.icon} />
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className={cx('action')}>
                    {actions.map((item, idx) =>
                        item.to ? (
                            <Link key={idx} to={item.to} className={cx('action-btn')}>
                                <FontAwesomeIcon icon={item.icon} />
                            </Link>
                        ) : (
                            <button key={idx} className={cx('action-btn')} onClick={item.onClick}>
                                <FontAwesomeIcon icon={item.icon} />
                            </button>
                        ),
                    )}

                    {/* Profile dropdown */}
                    <Tippy
                        interactive
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className={cx('profile-menu')} {...attrs}>
                                <PopperWrapper>
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <button className={cx('action-btn')}>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </button>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
