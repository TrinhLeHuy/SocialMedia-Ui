import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faUserFriends,
    faHistory,
    faBookmark,
    faUsers,
    faVideo,
    faStore,
    faRss,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import styles from './SidebarHome.module.scss';

const cx = classNames.bind(styles);

const menuItems = [
    {
        icon: faUser,
        title: 'Huy Lê',
        avatar: 'https://via.placeholder.com/40', // thay bằng avatar thật
        isProfile: true,
    },
    { icon: faUserFriends, title: 'Bạn bè' },
    { icon: faHistory, title: 'Kỷ niệm' },
    { icon: faBookmark, title: 'Đã lưu' },
    { icon: faUsers, title: 'Nhóm' },
    { icon: faVideo, title: 'Video' },
    { icon: faStore, title: 'Marketplace' },
    { icon: faRss, title: 'Bảng feed' },
    { icon: faChevronDown, title: 'See more' },
];

const shortcuts = [
    {
        iconUrl: 'https://via.placeholder.com/40/FFCC00/000000?text=SGU',
        title: 'SGU - HCI - 012025',
    },
    {
        iconUrl: 'https://via.placeholder.com/40/88CC88/000000?text=MG',
        title: 'Bộ tộc MixiGaming',
    },
    {
        iconUrl: 'https://via.placeholder.com/40/6699CC/ffffff?text=IT',
        title: 'ĐỀ THI KHOA CNTT SGU',
    },
    {
        iconUrl: 'https://via.placeholder.com/40/CC6699/ffffff?text=RS',
        title: 'Research SGU',
    },
    {
        iconUrl: 'https://via.placeholder.com/40/666666/ffffff?text=CS',
        title: 'Cộng đồng Sinh viên SGU',
    },
];

function SidebarHome() {
    return (
        <aside className={cx('wrapper')}>
            <ul className={cx('menu')}>
                {menuItems.map((item, idx) => (
                    <li key={idx} className={cx('menu-item', { profile: item.isProfile })}>
                        {item.isProfile ? (
                            <img src={item.avatar} alt={item.title} className={cx('avatar')} />
                        ) : (
                            <FontAwesomeIcon icon={item.icon} className={cx('icon')} />
                        )}
                        <span className={cx('title')}>{item.title}</span>
                    </li>
                ))}
            </ul>

            <div className={cx('divider')} />

            <div className={cx('shortcuts-section')}>
                <h3 className={cx('shortcuts-title')}>Your shortcuts</h3>
                <ul className={cx('shortcuts-list')}>
                    {shortcuts.map((sc, idx) => (
                        <li key={idx} className={cx('shortcut-item')}>
                            <img src={sc.iconUrl} alt={sc.title} className={cx('shortcut-icon')} />
                            <span className={cx('shortcut-title')}>{sc.title}</span>
                        </li>
                    ))}
                    <li className={cx('shortcut-item', 'see-more')}>
                        <FontAwesomeIcon icon={faChevronDown} />
                        <span className={cx('shortcut-title')}>See more</span>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default SidebarHome;
