import React from 'react';
import classNames from 'classnames/bind';
import styles from './MarketPage.module.scss';

const cx = classNames.bind(styles);

function MarketPage() {
    const sections = [
        {
            key: 'today',
            title: 'Lựa chọn hôm nay',
            showAll: true,
            items: [
                {
                    id: 1,
                    image: 'https://via.placeholder.com/300x200?text=Fujifilm+Xm5',
                    price: '2.400.000 đ',
                    title: 'Fujifilm Xm5 likenew fullbox',
                    location: 'Thành phố Hồ Chí Minh',
                },
                {
                    id: 2,
                    image: 'https://via.placeholder.com/300x200?text=Ghe+o+to',
                    price: '729 đ',
                    title: 'Ghế ô tô gấp gọn',
                    location: 'Thủ Dầu Một',
                },
                {
                    id: 3,
                    image: 'https://via.placeholder.com/300x200?text=Vision+2023',
                    price: '75.500 đ',
                    title: 'Vision 2023 chính hãng',
                    location: 'Thành phố Hồ Chí Minh',
                },
                {
                    id: 4,
                    image: 'https://via.placeholder.com/300x200?text=Exciter',
                    price: '18 đ',
                    title: 'Exciter 150cc còn mới',
                    location: 'Long Thành',
                },
                {
                    id: 5,
                    image: 'https://via.placeholder.com/300x200?text=Matiz',
                    price: '19.000 đ',
                    title: 'Xe Matiz cũ chất lượng',
                    location: 'Biên Hòa',
                },
                {
                    id: 6,
                    image: 'https://via.placeholder.com/300x200?text=Acer+Predator',
                    price: '15.000.000 đ',
                    title: 'Acer Predator RTX 3060 + i7 11800H, Màn 16inch + 2.5K',
                    location: 'Thành phố Hồ Chí Minh',
                },
                {
                    id: 7,
                    image: 'https://via.placeholder.com/300x200?text=Canon+30D',
                    price: '1.850.000 đ',
                    title: 'Canon 30D kèm kit mới keng',
                    location: 'Thành phố Hồ Chí Minh',
                },
                {
                    id: 8,
                    image: 'https://via.placeholder.com/300x200?text=Aspire+Camera',
                    price: '1.450.000 đ',
                    title: 'Cam body Aspire Full HD',
                    location: 'Thành phố Hồ Chí Minh',
                },
            ],
        },
        {
            key: 'electronics',
            title: 'Đồ điện tử',
            showAll: true,
            items: [
                {
                    id: 1,
                    image: 'https://via.placeholder.com/300x200?text=Asus+Rog',
                    price: '57.700.000 đ',
                    title: 'Asus Rog Strix SCAR 17',
                    location: 'Hà Nội',
                },
                {
                    id: 2,
                    image: 'https://via.placeholder.com/300x200?text=Laptop+Gaming',
                    price: '14.000.000 đ',
                    title: 'Cam kết bán laptop Gaming ROG',
                    location: 'Bình Dương',
                },
                {
                    id: 3,
                    image: 'https://via.placeholder.com/300x200?text=Lens+EF+50mm',
                    price: '1.400.000 đ',
                    title: 'Lens EF 50mm f/1.2L for canon',
                    location: 'Thủ Đức',
                },
            ],
        },
        {
            key: 'phone-accessories',
            title: 'Điện thoại di động & phụ kiện',
            showAll: true,
            items: [
                {
                    id: 1,
                    image: 'https://via.placeholder.com/300x200?text=iPhone+11',
                    price: '400.000 đ',
                    title: 'iPhone 11 cũ đủ loại màu',
                    location: 'Quận 9',
                },
                {
                    id: 2,
                    image: 'https://via.placeholder.com/300x200?text=iPhone+12',
                    price: '0 đ',
                    title: 'iPhone 12 siêu đẹp',
                    location: 'Quận 7',
                },
                {
                    id: 3,
                    image: 'https://via.placeholder.com/300x200?text=Oppo+Reno8+Pro+5g',
                    price: '1.600.000 đ',
                    title: 'Oppo Reno 8 Pro 5g',
                    location: 'Huyện Nhà Bè',
                },
            ],
        },
        {
            key: 'games',
            title: 'Trò chơi điện tử & phụ kiện game',
            showAll: true,
            items: [
                {
                    id: 1,
                    image: 'https://via.placeholder.com/300x200?text=PS5+Game+Patch',
                    price: '94.994 đ',
                    title: 'PS5 và game patch quyền truy cập',
                    location: 'Quận 4',
                },
                {
                    id: 2,
                    image: 'https://via.placeholder.com/300x200?text=Game+Slots',
                    price: '300.000 đ',
                    title: 'Gói dịch vụ game watch online',
                    location: 'Quận 10',
                },
                {
                    id: 3,
                    image: 'https://via.placeholder.com/300x200?text=Nintendo+Switch',
                    price: '3.300.000 đ - 3.600.000 đ',
                    title: 'Nintendo Switch Fullbox',
                    location: 'Quận 3',
                },
            ],
        },
    ];

    return (
        <div className={cx('market-wrapper')}>
            {sections.map((section) => (
                <div key={section.key} className={cx('section')}>
                    <div className={cx('section-header')}>
                        <h2 className={cx('section-title')}>{section.title}</h2>
                        {section.showAll && <span className={cx('show-all')}>Xem tất cả</span>}
                    </div>
                    <div className={cx('item-list')}>
                        {section.items.map((item) => (
                            <div key={item.id} className={cx('item')}>
                                <img src={item.image} alt={item.title} className={cx('item-image')} />
                                <div className={cx('item-info')}>
                                    <p className={cx('item-title')}>{item.title}</p>
                                    <p className={cx('item-price')}>{item.price}</p>
                                    <p className={cx('item-location')}>{item.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MarketPage;
