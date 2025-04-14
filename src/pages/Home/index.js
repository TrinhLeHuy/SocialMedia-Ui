import React from 'react';
import styles from './Home.module.scss';

function Home() {
    // Dữ liệu mẫu cho stories
    const stories = [
        {
            id: 1,
            name: 'Mỹ Duyên',
            avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?...',
        },
        {
            id: 2,
            name: 'Trân Vinh',
            avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?...',
        },
        {
            id: 3,
            name: 'Bạch Nguyễn',
            avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?...',
        },
        {
            id: 4,
            name: 'Cát Tiên',
            avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?...',
        },
        {
            id: 5,
            name: 'Phạm Minh Trung',
            avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?...',
        },
    ];

    // Dữ liệu mẫu cho các bài post
    const posts = [
        {
            id: 1,
            author: 'Hà Nội Trend',
            content: 'TỤ TẬP SĂN MÂY, 78 THANH NIÊN XẾP HÀNG LẦN LƯỢT DẮT 78 XE MÁY VÀO CHỐT...',
            image: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?...',
        },
        {
            id: 2,
            author: 'Nguyễn Văn A',
            content: 'Hôm nay thời tiết thật đẹp!',
            image: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?...',
        },
    ];

    return (
        <div className={styles['home-wrapper']}>
            {/* Phần tạo bài đăng */}
            <div className={styles['create-post']}>
                <div className={styles['create-post-input']}>
                    <img
                        src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?..."
                        alt="Huy Avatar"
                        className={styles.avatar}
                    />
                    <input type="text" placeholder="What's on your mind, Huy?" className={styles['input-post']} />
                </div>
                <div className={styles['create-post-actions']}>
                    <button className={styles['action-btn']}>Video trực tiếp</button>
                    <button className={styles['action-btn']}>Ảnh/video</button>
                    <button className={styles['action-btn']}>Cảm xúc/hoạt động</button>
                </div>
            </div>

            {/* Danh sách stories */}
            <div className={styles.stories}>
                {stories.map((story) => (
                    <div key={story.id} className={styles['story-item']}>
                        <img src={story.avatar} alt={story.name} className={styles['story-avatar']} />
                        <p className={styles['story-name']}>{story.name}</p>
                    </div>
                ))}
            </div>

            {/* Feed các bài post */}
            <div className={styles.feed}>
                {posts.map((post) => (
                    <div key={post.id} className={styles.post}>
                        <div className={styles['post-header']}>
                            <img
                                src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/486260778_3953267108258408_8567231552601551686_n.jpg?..."
                                alt="Author Avatar"
                                className={styles['post-avatar']}
                            />
                            <div className={styles['post-info']}>
                                <p className={styles['post-author']}>{post.author}</p>
                                <p className={styles['post-time']}>1 giờ trước</p>
                            </div>
                        </div>
                        <p className={styles['post-content']}>{post.content}</p>
                        {post.image && <img src={post.image} alt="post" className={styles['post-image']} />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
