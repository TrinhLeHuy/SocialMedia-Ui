import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SidebarVideo.module.scss';

// Icon library (cần cài react‑icons: npm install react-icons)
import { FiSettings, FiSearch } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';
import { RiLiveFill } from 'react-icons/ri';
import { MdOndemandVideo } from 'react-icons/md';
import { GiConsoleController } from 'react-icons/gi';
import { IoRocket } from 'react-icons/io5';
import { BiBookmark } from 'react-icons/bi';

const cx = classNames.bind(styles);

const menuItems = [
    { key: 'home', label: 'Trang chủ', icon: <FaHome /> },
    { key: 'live', label: 'Trực tiếp', icon: <RiLiveFill /> },
    { key: 'reels', label: 'Reels', icon: <MdOndemandVideo /> },
    { key: 'programs', label: 'Chương trình', icon: <GiConsoleController /> },
    { key: 'explore', label: 'Khám phá', icon: <IoRocket /> },
    { key: 'saved', label: 'Video đã lưu', icon: <BiBookmark /> },
];

function SidebarVideo() {
    const [active, setActive] = useState('home');

    return (
        <aside className={cx('wrapper')}>
            {/* Header */}
            <div className={cx('header')}>
                <h2>Video</h2>
                <button className={cx('settings-btn')}>
                    <FiSettings />
                </button>
            </div>

            {/* Search */}
            <div className={cx('search')}>
                <input type="text" placeholder="Tìm kiếm video" />
                <span className={cx('search-icon')}>
                    <FiSearch />
                </span>
            </div>

            {/* Menu */}
            <nav className={cx('menu')}>
                {menuItems.map((item) => (
                    <div
                        key={item.key}
                        className={cx('item', { active: active === item.key })}
                        onClick={() => setActive(item.key)}
                    >
                        <span className={cx('icon')}>{item.icon}</span>
                        <span className={cx('label')}>{item.label}</span>
                    </div>
                ))}
            </nav>
        </aside>
    );
}

export default SidebarVideo;
