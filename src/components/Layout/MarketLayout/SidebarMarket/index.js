import React from 'react';
import classNames from 'classnames/bind';
import styles from './SidebarMarket.module.scss';

// Dùng react-icons (hoặc bất kỳ icon library nào bạn muốn)
// để mô phỏng các icon như Facebook Marketplace
// Bạn cần cài bằng: npm install react-icons
import {
    FaSearch,
    FaBell,
    FaInbox,
    FaStore,
    FaGlobe,
    FaCar,
    FaDog,
    FaGuitar,
    FaFutbol,
    FaGamepad,
    FaTshirt as FaClothes,
} from 'react-icons/fa';

const cx = classNames.bind(styles);

function SidebarMarket() {
    return (
        <aside className={cx('wrapper')}>
            {/* Vùng tìm kiếm */}
            <div className={cx('search-wrapper')}>
                <FaSearch className={cx('search-icon')} />
                <input type="text" placeholder="Tìm kiếm trên Marketplace" className={cx('search-input')} />
            </div>

            {/* Menu chức năng chính */}
            <ul className={cx('menu-list')}>
                <li className={cx('menu-item')}>
                    <FaGlobe className={cx('icon')} />
                    <span className={cx('menu-label')}>Lướt xem tất cả</span>
                </li>
                <li className={cx('menu-item')}>
                    <FaBell className={cx('icon')} />
                    <span className={cx('menu-label')}>Thông báo</span>
                </li>
                <li className={cx('menu-item')}>
                    <FaInbox className={cx('icon')} />
                    <span className={cx('menu-label')}>Hộp thư</span>
                </li>
                <li className={cx('menu-item')}>
                    <FaStore className={cx('icon')} />
                    <span className={cx('menu-label')}>Marketplace access</span>
                </li>
                <li className={cx('menu-item', 'create-listing-wrapper')}>
                    <button className={cx('create-listing')}>+ Tạo bài niêm yết mới</button>
                </li>
            </ul>

            {/* Vị trí */}
            <div className={cx('location')}>
                <span className={cx('location-title')}>Vị trí</span>
                <p className={cx('location-description')}>Thành phố Hồ Chí Minh · Trong vòng 65 km</p>
            </div>

            {/* Danh mục */}
            <div className={cx('category-list')}>
                <span className={cx('category-title')}>Hạng mục</span>
                <ul>
                    <li>
                        <FaCar className={cx('category-icon')} />
                        <span>Xe cộ</span>
                    </li>
                    <li>
                        <FaClothes className={cx('category-icon')} />
                        <span>Đồ may mặc</span>
                    </li>
                    <li>
                        <FaDog className={cx('category-icon')} />
                        <span>Đồ cho thú cưng</span>
                    </li>
                    <li>
                        <FaGuitar className={cx('category-icon')} />
                        <span>Nhạc cụ</span>
                    </li>
                    <li>
                        <FaFutbol className={cx('category-icon')} />
                        <span>Dụng cụ thể thao</span>
                    </li>
                    <li>
                        <FaGamepad className={cx('category-icon')} />
                        <span>Đồ chơi & Trò chơi</span>
                    </li>
                    {/* ... thêm các hạng mục khác nếu muốn */}
                </ul>
            </div>
        </aside>
    );
}

export default SidebarMarket;
