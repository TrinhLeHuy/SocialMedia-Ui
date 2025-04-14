import React from 'react';
import classNames from 'classnames/bind';
import styles from './SidebarGame.module.scss';

// Icon library (npm install react-icons)
import { FaSearch, FaGamepad, FaHistory, FaBell, FaSave, FaListAlt, FaChessBoard, FaPuzzlePiece } from 'react-icons/fa';

const cx = classNames.bind(styles);

function SidebarGame() {
    return (
        <aside className={cx('wrapper')}>
            {/* Tìm kiếm */}
            <div className={cx('search-bar')}>
                <FaSearch className={cx('search-icon')} />
                <input type="text" placeholder="Tìm kiếm trong phần chơi game" className={cx('search-input')} />
            </div>

            {/* Menu */}
            <ul className={cx('menu')}>
                <li className={cx('menu-item')}>
                    <FaGamepad className={cx('menu-icon')} />
                    <span>Chơi game</span>
                </li>
                <li className={cx('menu-item')}>
                    <FaHistory className={cx('menu-icon')} />
                    <span>Hoạt động trong game</span>
                </li>
                <li className={cx('menu-item')}>
                    <FaBell className={cx('menu-icon')} />
                    <span>Thông báo</span>
                </li>
            </ul>

            {/* Game của bạn */}
            <div className={cx('section')}>
                <div className={cx('section-header')}>
                    <span className={cx('section-title')}>Game của bạn</span>
                    <span className={cx('section-link')}>Xem tất cả</span>
                </div>
                <p className={cx('section-desc')}>Hãy lưu game vào phần Game của bạn để tạo lối tắt tại đây.</p>
            </div>

            {/* Lưu game */}
            <div className={cx('section')}>
                <div className={cx('section-header')}>
                    <FaSave className={cx('menu-icon')} />
                    <span className={cx('section-title')}>Lưu game</span>
                </div>
            </div>

            {/* Hạng mục */}
            <div className={cx('section')}>
                <div className={cx('section-title')}>Hạng mục</div>
                <ul className={cx('category-list')}>
                    <li>
                        <FaListAlt className={cx('menu-icon')} />
                        <span>Tất cả game</span>
                    </li>
                    <li>
                        <FaPuzzlePiece className={cx('menu-icon')} />
                        <span>Hành động</span>
                    </li>
                    <li>
                        <FaChessBoard className={cx('menu-icon')} />
                        <span>Board game</span>
                    </li>
                    {/* ... Thêm các hạng mục khác theo ảnh bạn gửi */}
                </ul>
            </div>
        </aside>
    );
}

export default SidebarGame;
