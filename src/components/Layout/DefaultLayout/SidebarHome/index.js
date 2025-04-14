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
import images from '~/assets/images';

const cx = classNames.bind(styles);

const menuItems = [
    {
        icon: faUser,
        title: 'Huy Lê',
        avatar: images.avatar, // thay bằng avatar thật
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
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1011/1011123.png', // icon sách
        title: 'SGU - HCI - 012025',
    },
    {
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png', // icon cộng đồng
        title: 'Bộ tộc MixiGaming',
    },
    {
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png', // icon tài liệu
        title: 'ĐỀ THI KHOA CNTT SGU',
    },
    {
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1904/1904425.png', // icon nghiên cứu
        title: 'Research SGU',
    },
    {
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png', // icon sinh viên
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
