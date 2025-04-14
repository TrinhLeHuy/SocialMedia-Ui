import React from 'react';
import classNames from 'classnames/bind';
import styles from './SidebarGroup.module.scss';

// Sử dụng react-icons để có một số icon cơ bản
// Cần cài: npm install react-icons
import { FaSearch, FaListAlt, FaGlobe, FaUsers, FaPlus } from 'react-icons/fa';

const cx = classNames.bind(styles);

function SidebarGroup() {
    // Danh sách ví dụ cho nhóm do bạn quản lý
    const groupsYouManage = [
        {
            id: 1,
            name: 'Group Anti idol A2',
            lastActivity: '3 giờ trước',
            avatar: 'https://via.placeholder.com/40x40?text=GA',
        },
    ];

    // Danh sách ví dụ cho nhóm đã tham gia
    const joinedGroups = [
        {
            id: 1,
            name: 'SGU - HCI - 01205',
            lastActivity: '3 giờ trước',
            avatar: 'https://via.placeholder.com/40x40?text=HCI',
        },
        {
            id: 2,
            name: 'Xã Đoàn Nhà Sử',
            lastActivity: '2 ngày trước',
            avatar: 'https://via.placeholder.com/40x40?text=XD',
        },
        {
            id: 3,
            name: 'Research SGU',
            lastActivity: '1 tuần trước',
            avatar: 'https://via.placeholder.com/40x40?text=RS',
        },
        {
            id: 4,
            name: 'Tổ bốc MixiGaming',
            lastActivity: 'Hoạt động gần đây 3 ngày trước',
            avatar: 'https://via.placeholder.com/40x40?text=MIXI',
        },
        {
            id: 5,
            name: 'Hội Con Gái Chơi Liên Minh Huyền Thoại',
            lastActivity: 'Hoạt động gần đây 5 ngày trước',
            avatar: 'https://via.placeholder.com/40x40?text=LMHT',
        },
    ];

    return (
        <aside className={cx('wrapper')}>
            {/* Ô tìm kiếm */}
            <div className={cx('search-bar')}>
                <FaSearch className={cx('search-icon')} />
                <input type="text" placeholder="Tìm kiếm nhóm" className={cx('search-input')} />
            </div>

            {/* Menu */}
            <ul className={cx('menu-list')}>
                <li className={cx('menu-item')}>
                    <FaListAlt className={cx('menu-icon')} />
                    <span>Bảng feed của bạn</span>
                </li>
                <li className={cx('menu-item')}>
                    <FaGlobe className={cx('menu-icon')} />
                    <span>Khám phá</span>
                </li>
                <li className={cx('menu-item')}>
                    <FaUsers className={cx('menu-icon')} />
                    <span>Nhóm của bạn</span>
                </li>
            </ul>

            {/* Nút tạo nhóm mới */}
            <button className={cx('create-group-btn')}>
                <FaPlus />
                Tạo nhóm mới
            </button>

            {/* Nhóm do bạn quản lý */}
            <div className={cx('group-section')}>
                <div className={cx('section-title')}>Nhóm do bạn quản lý</div>
                {groupsYouManage.map((group) => (
                    <div key={group.id} className={cx('group-item')}>
                        <img src={group.avatar} alt={group.name} className={cx('group-avatar')} />
                        <div className={cx('group-info')}>
                            <span className={cx('group-name')}>{group.name}</span>
                            <span className={cx('group-last-activity')}>
                                Lần hoạt động gần nhất: {group.lastActivity}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Nhóm bạn đã tham gia */}
            <div className={cx('group-section')}>
                <div className={cx('section-header')}>
                    <div className={cx('section-title')}>Nhóm bạn đã tham gia</div>
                    <div className={cx('view-all')}>Xem tất cả</div>
                </div>
                {joinedGroups.map((group) => (
                    <div key={group.id} className={cx('group-item')}>
                        <img src={group.avatar} alt={group.name} className={cx('group-avatar')} />
                        <div className={cx('group-info')}>
                            <span className={cx('group-name')}>{group.name}</span>
                            <span className={cx('group-last-activity')}>
                                Lần hoạt động gần nhất: {group.lastActivity}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default SidebarGroup;
