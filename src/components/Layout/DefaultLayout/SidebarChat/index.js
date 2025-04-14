import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faSearch, faEllipsisH, faEdit } from '@fortawesome/free-solid-svg-icons';
import styles from './SidebarChat.module.scss';

const cx = classNames.bind(styles);

// Dữ liệu sinh nhật
const birthday = { name: 'Thiện Nguyễn' };

// Dữ liệu contacts
const contacts = [
    {
        name: 'Khoa Nguyễn',
        avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ggtpod5wZgAQ7kNvwFzscH8&_nc_oc=AdmrVQf0Rv8K-K3zvZ6JwubYe-wlZKU2G_ok5YdMYeB1DMfV7Yvf88emo9IRJdoUgIQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=0ay2GykdbgN4h2nkrWhezg&oh=00_AfGhG_uL-aPAOx4vAedg5Axt5_S2kdXE9uajSyRBku2k1Q&oe=68029E1B',
        online: true,
    },
    {
        name: 'Nguyễn Phương',
        avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ggtpod5wZgAQ7kNvwFzscH8&_nc_oc=AdmrVQf0Rv8K-K3zvZ6JwubYe-wlZKU2G_ok5YdMYeB1DMfV7Yvf88emo9IRJdoUgIQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=0ay2GykdbgN4h2nkrWhezg&oh=00_AfGhG_uL-aPAOx4vAedg5Axt5_S2kdXE9uajSyRBku2k1Q&oe=68029E1B',
        online: true,
    },
    {
        name: 'Luật Nguyễn',
        avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ggtpod5wZgAQ7kNvwFzscH8&_nc_oc=AdmrVQf0Rv8K-K3zvZ6JwubYe-wlZKU2G_ok5YdMYeB1DMfV7Yvf88emo9IRJdoUgIQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=0ay2GykdbgN4h2nkrWhezg&oh=00_AfGhG_uL-aPAOx4vAedg5Axt5_S2kdXE9uajSyRBku2k1Q&oe=68029E1B',
        online: true,
    },
    {
        name: 'Nguyễn Trọng An',
        avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ggtpod5wZgAQ7kNvwFzscH8&_nc_oc=AdmrVQf0Rv8K-K3zvZ6JwubYe-wlZKU2G_ok5YdMYeB1DMfV7Yvf88emo9IRJdoUgIQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=0ay2GykdbgN4h2nkrWhezg&oh=00_AfGhG_uL-aPAOx4vAedg5Axt5_S2kdXE9uajSyRBku2k1Q&oe=68029E1B',
        online: true,
    },
    {
        name: 'Mỹ Lý',
        avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ggtpod5wZgAQ7kNvwFzscH8&_nc_oc=AdmrVQf0Rv8K-K3zvZ6JwubYe-wlZKU2G_ok5YdMYeB1DMfV7Yvf88emo9IRJdoUgIQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=0ay2GykdbgN4h2nkrWhezg&oh=00_AfGhG_uL-aPAOx4vAedg5Axt5_S2kdXE9uajSyRBku2k1Q&oe=68029E1B',
        online: true,
    },
    {
        name: 'Kiều Diễm',
        avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ggtpod5wZgAQ7kNvwFzscH8&_nc_oc=AdmrVQf0Rv8K-K3zvZ6JwubYe-wlZKU2G_ok5YdMYeB1DMfV7Yvf88emo9IRJdoUgIQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=0ay2GykdbgN4h2nkrWhezg&oh=00_AfGhG_uL-aPAOx4vAedg5Axt5_S2kdXE9uajSyRBku2k1Q&oe=68029E1B',
        online: true,
    },
    {
        name: 'Nguyễn Thị Bích Tuyền',
        avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ggtpod5wZgAQ7kNvwFzscH8&_nc_oc=AdmrVQf0Rv8K-K3zvZ6JwubYe-wlZKU2G_ok5YdMYeB1DMfV7Yvf88emo9IRJdoUgIQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=0ay2GykdbgN4h2nkrWhezg&oh=00_AfGhG_uL-aPAOx4vAedg5Axt5_S2kdXE9uajSyRBku2k1Q&oe=68029E1B',
        online: true,
    },
    {
        name: 'Hoàng Huy Lê',
        avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ggtpod5wZgAQ7kNvwFzscH8&_nc_oc=AdmrVQf0Rv8K-K3zvZ6JwubYe-wlZKU2G_ok5YdMYeB1DMfV7Yvf88emo9IRJdoUgIQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=0ay2GykdbgN4h2nkrWhezg&oh=00_AfGhG_uL-aPAOx4vAedg5Axt5_S2kdXE9uajSyRBku2k1Q&oe=68029E1B',
        online: true,
    },
    {
        name: 'Mai Thơ',
        avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ggtpod5wZgAQ7kNvwFzscH8&_nc_oc=AdmrVQf0Rv8K-K3zvZ6JwubYe-wlZKU2G_ok5YdMYeB1DMfV7Yvf88emo9IRJdoUgIQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=0ay2GykdbgN4h2nkrWhezg&oh=00_AfGhG_uL-aPAOx4vAedg5Axt5_S2kdXE9uajSyRBku2k1Q&oe=68029E1B',
        online: true,
    },
    {
        name: 'Lê Toàn',
        avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ggtpod5wZgAQ7kNvwFzscH8&_nc_oc=AdmrVQf0Rv8K-K3zvZ6JwubYe-wlZKU2G_ok5YdMYeB1DMfV7Yvf88emo9IRJdoUgIQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=0ay2GykdbgN4h2nkrWhezg&oh=00_AfGhG_uL-aPAOx4vAedg5Axt5_S2kdXE9uajSyRBku2k1Q&oe=68029E1B',
        online: true,
    },
    {
        name: 'Hưng Lê',
        avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ggtpod5wZgAQ7kNvwFzscH8&_nc_oc=AdmrVQf0Rv8K-K3zvZ6JwubYe-wlZKU2G_ok5YdMYeB1DMfV7Yvf88emo9IRJdoUgIQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=0ay2GykdbgN4h2nkrWhezg&oh=00_AfGhG_uL-aPAOx4vAedg5Axt5_S2kdXE9uajSyRBku2k1Q&oe=68029E1B',
        online: true,
    },
    {
        name: 'Vinh Triệu',
        avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ggtpod5wZgAQ7kNvwFzscH8&_nc_oc=AdmrVQf0Rv8K-K3zvZ6JwubYe-wlZKU2G_ok5YdMYeB1DMfV7Yvf88emo9IRJdoUgIQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=0ay2GykdbgN4h2nkrWhezg&oh=00_AfGhG_uL-aPAOx4vAedg5Axt5_S2kdXE9uajSyRBku2k1Q&oe=68029E1B',
        online: true,
    },
    {
        name: 'Thành Phát',
        avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ggtpod5wZgAQ7kNvwFzscH8&_nc_oc=AdmrVQf0Rv8K-K3zvZ6JwubYe-wlZKU2G_ok5YdMYeB1DMfV7Yvf88emo9IRJdoUgIQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=0ay2GykdbgN4h2nkrWhezg&oh=00_AfGhG_uL-aPAOx4vAedg5Axt5_S2kdXE9uajSyRBku2k1Q&oe=68029E1B',
        online: true,
    },
    {
        name: 'Thanh Minh',
        avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ggtpod5wZgAQ7kNvwFzscH8&_nc_oc=AdmrVQf0Rv8K-K3zvZ6JwubYe-wlZKU2G_ok5YdMYeB1DMfV7Yvf88emo9IRJdoUgIQ&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=0ay2GykdbgN4h2nkrWhezg&oh=00_AfGhG_uL-aPAOx4vAedg5Axt5_S2kdXE9uajSyRBku2k1Q&oe=68029E1B',
        online: true,
    },
];

// Dữ liệu community chats
const communityChats = [
    { name: '[Hỏi xoáy đáp xoay quay đầu] Cộng đồng Sinh viên SGU' },
    { name: 'SGU - Nơi khởi nghiệp thành công' },
    { name: '[CDSVSGU] trao đổi tài liệu' },
];

// Dữ liệu groups chats
const groupChats = [{ name: '9/4' }, { name: 'Xt, Hg and 9 others' }, { name: 'Nhi and Nguyễn' }];

function SidebarChat() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('scroll-area')}>
                {/* ==== Sinh nhật ==== */}
                <section className={cx('birthday-section')}>
                    <h3 className={cx('section-title')}>Sinh nhật</h3>
                    <div className={cx('birthday-item')}>
                        <FontAwesomeIcon icon={faGift} className={cx('birthday-icon')} />
                        <span>
                            Hôm nay là sinh nhật của <strong>{birthday.name}</strong>.
                        </span>
                    </div>
                </section>

                <div className={cx('divider')} />
                {/* ==== Contacts ==== */}
                <section className={cx('contacts-section')}>
                    <div className={cx('contacts-header')}>
                        <span className={cx('contacts-title')}>Contacts</span>
                        <div className={cx('contacts-actions')}>
                            <FontAwesomeIcon icon={faSearch} className={cx('action-icon')} />
                            <FontAwesomeIcon icon={faEllipsisH} className={cx('action-icon')} />
                        </div>
                    </div>

                    <ul className={cx('contacts-list')}>
                        {contacts.map((c, idx) => (
                            <li key={idx} className={cx('contact-item')}>
                                <div className={cx('avatar-wrapper')}>
                                    <img src={c.avatar} alt={c.name} className={cx('avatar')} />
                                    {c.online && <span className={cx('status')} />}
                                </div>
                                <span className={cx('name')}>{c.name}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ==== Community Chats ==== */}
                <section className={cx('community-section')}>
                    <div className={cx('community-header')}>
                        <span className={cx('community-title')}>Community Chats</span>
                        <div className={cx('community-actions')}>
                            <FontAwesomeIcon icon={faSearch} className={cx('action-icon')} />
                            <FontAwesomeIcon icon={faEllipsisH} className={cx('action-icon')} />
                        </div>
                    </div>
                    <ul className={cx('community-list')}>
                        {communityChats.map((chat, idx) => (
                            <li key={idx} className={cx('community-item')}>
                                <span className={cx('name')}>{chat.name}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <div className={cx('divider')} />

                {/* ==== Groups Chats ==== */}
                <section className={cx('groups-section')}>
                    <div className={cx('groups-header')}>
                        <span className={cx('groups-title')}>Groups</span>
                        <div className={cx('groups-actions')}>
                            <FontAwesomeIcon icon={faSearch} className={cx('action-icon')} />
                            <FontAwesomeIcon icon={faEllipsisH} className={cx('action-icon')} />
                        </div>
                    </div>
                    <ul className={cx('groups-list')}>
                        {groupChats.map((group, idx) => (
                            <li key={idx} className={cx('groups-item')}>
                                <span className={cx('name')}>{group.name}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <div className={cx('divider')} />

                {/* ==== Nút chat nằm trong vùng scroll ==== */}
                <button className={cx('chat-button')}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
            </div>
        </aside>
    );
}

export default SidebarChat;
