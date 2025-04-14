import React, { useState } from 'react';
import styles from './Video.module.scss';

// Dữ liệu mẫu cho slider “Video mới dành cho bạn”
const recommendedVideos = [
    {
        id: 1,
        title: 'Video mới của Woman News và những người khác.',
        avatar: 'https://via.placeholder.com/40x40.png?text=W',
    },
    {
        id: 2,
        title: 'Mai Mai và những người khác đã chia sẻ video.',
        avatar: 'https://via.placeholder.com/40x40.png?text=M',
    },
    // ... thêm items nếu cần
];

// Dữ liệu mẫu cho feed video
const videoPostsData = [
    {
        id: 1,
        channelName: 'Immortals Tryn',
        channelAvatar: 'https://via.placeholder.com/40x40.png?text=I',
        time: '4 Tháng 4, 2023',
        title: 'Tô Sylas đè nát lane Kalistar top và cái kết rất chi là cayyy',
        src: '/path/to/your/video.mp4', // hoặc link video
        likes: 6700,
        comments: 152,
        views: 399000,
    },
    // ... thêm posts nếu cần
];

function Video() {
    const [posts, setPosts] = useState(videoPostsData);

    const handleLike = (id) => {
        setPosts((prev) =>
            prev.map((p) => (p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p)),
        );
    };

    const handleComment = (id) => {
        setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, comments: p.comments + 1 } : p)));
    };

    const handleShare = (id) => {
        setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, shares: (p.shares || 0) + 1 } : p)));
    };

    return (
        <div className={styles['video-wrapper']}>
            {/* Slider “Video mới dành cho bạn” */}
            <section className={styles.recommended}>
                <h3 className={styles['rec-title']}>
                    Video mới dành cho bạn <span className={styles.count}>{recommendedVideos.length}</span>
                </h3>
                <div className={styles.slider}>
                    {recommendedVideos.map((item) => (
                        <div key={item.id} className={styles['slider-item']}>
                            <img src={item.avatar} alt="" className={styles['slider-avatar']} />
                            <p className={styles['slider-text']}>{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Feed video posts */}
            <section className={styles['video-feed']}>
                {posts.map((post) => (
                    <div key={post.id} className={styles['video-post']}>
                        {/* Header */}
                        <div className={styles['post-header']}>
                            <img src={post.channelAvatar} alt={post.channelName} className={styles.avatar} />
                            <div className={styles['channel-info']}>
                                <p className={styles['channel-name']}>{post.channelName}</p>
                                <p className={styles['video-time']}>{post.time}</p>
                            </div>
                            <button className={styles['follow-btn']}>Theo dõi</button>
                            <button className={styles['more-btn']}>⋯</button>
                        </div>

                        {/* Tiêu đề */}
                        <p className={styles['post-title']}>{post.title}</p>

                        {/* Video */}
                        <video src={post.src} controls className={styles['post-video']} />

                        {/* Thống kê */}
                        <div className={styles['post-stats']}>
                            <span>{post.likes.toLocaleString()} Thích</span>
                            <span>{post.comments.toLocaleString()} Bình luận</span>
                            <span>{post.views.toLocaleString()} Lượt xem</span>
                        </div>

                        {/* Hành động */}
                        <div className={styles['post-actions']}>
                            <button
                                className={`${styles['action-btn']} ${post.liked ? styles.liked : ''}`}
                                onClick={() => handleLike(post.id)}
                            >
                                👍 Thích
                            </button>
                            <button className={styles['action-btn']} onClick={() => handleComment(post.id)}>
                                💬 Bình luận
                            </button>
                            <button className={styles['action-btn']} onClick={() => handleShare(post.id)}>
                                ↗️ Chia sẻ
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Video;
