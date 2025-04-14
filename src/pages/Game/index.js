import React from 'react';
import classNames from 'classnames/bind';
import styles from './PageGame.module.scss';

const cx = classNames.bind(styles);

function PageGame() {
    // Dữ liệu mô phỏng các danh mục hiển thị trên trang game
    const gamesRecommended = [
        {
            id: 1,
            title: 'Fairyland Merge & Match',
            image: 'https://via.placeholder.com/180x100?text=Game1',
            playerCount: '32K người chơi',
        },
        {
            id: 2,
            title: 'Puzzle Blocks Classic',
            image: 'https://via.placeholder.com/180x100?text=Game2',
            playerCount: '21K người chơi',
        },
        {
            id: 3,
            title: 'Hotel Fever Tycoon',
            image: 'https://via.placeholder.com/180x100?text=Game3',
            playerCount: '12K người chơi',
        },
        {
            id: 4,
            title: 'Western Solitaire',
            image: 'https://via.placeholder.com/180x100?text=Game4',
            playerCount: '9K người chơi',
        },
        {
            id: 5,
            title: 'Baseball FVRR',
            image: 'https://via.placeholder.com/180x100?text=Game5',
            playerCount: '15K người chơi',
        },
    ];

    const gamesNew = [
        {
            id: 1,
            title: 'Bingo Mate - New Puzzle Released!',
            image: 'https://via.placeholder.com/280x160?text=Bingo+Mate',
        },
    ];

    const gamesPopular = [
        {
            id: 1,
            title: '8 Pool',
            image: 'https://via.placeholder.com/120x120?text=8Pool',
        },
        {
            id: 2,
            title: 'Words With Friends',
            image: 'https://via.placeholder.com/120x120?text=Words',
        },
        {
            id: 3,
            title: 'Quiz Planet',
            image: 'https://via.placeholder.com/120x120?text=Quiz',
        },
        {
            id: 4,
            title: 'Word Blitz',
            image: 'https://via.placeholder.com/120x120?text=Word+Blitz',
        },
    ];

    return (
        <div className={cx('game-page')}>
            {/* Khối Game chúng tôi thích */}
            <section className={cx('section')}>
                <h2 className={cx('section-title')}>Game chúng tôi thích</h2>
                <div className={cx('game-list')}>
                    {gamesRecommended.map((game) => (
                        <div key={game.id} className={cx('game-item')}>
                            <img src={game.image} alt={game.title} className={cx('game-image')} />
                            <div className={cx('game-info')}>
                                <span className={cx('game-title')}>{game.title}</span>
                                <span className={cx('game-player')}>{game.playerCount}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Khối Đang diễn ra */}
            <section className={cx('section')}>
                <h2 className={cx('section-title')}>Đang diễn ra</h2>
                <div className={cx('game-banner')}>
                    {/* Ví dụ chỉ có 1 game, bạn có thể để dạng slider hoặc lưới tùy ý */}
                    {gamesNew.map((game) => (
                        <div key={game.id} className={cx('banner-item')}>
                            <img src={game.image} alt={game.title} className={cx('banner-image')} />
                            <div className={cx('banner-info')}>
                                <span className={cx('banner-title')}>{game.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Khối Game có nhiều người chơi nhất */}
            <section className={cx('section')}>
                <h2 className={cx('section-title')}>Game có nhiều người chơi nhất</h2>
                <div className={cx('popular-list')}>
                    {gamesPopular.map((game) => (
                        <div key={game.id} className={cx('popular-item')}>
                            <img src={game.image} alt={game.title} className={cx('popular-image')} />
                            <span className={cx('popular-title')}>{game.title}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default PageGame;
