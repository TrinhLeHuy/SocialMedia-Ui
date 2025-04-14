import React from 'react';
import classNames from 'classnames/bind';
import styles from './Group.module.scss';
import { FaThumbsUp, FaCommentAlt, FaShare, FaEllipsisH } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Group() {
    // Dữ liệu mô phỏng một bài viết
    const post = {
        authorName: 'Âm Dương Sư - Onmyoji',
        authorAvatar: 'https://via.placeholder.com/40?text=Avatar',
        time: '4 phút trước',
        content: 'Chill đi chứ vì lướt nữa hết biến hình á',
        image: 'https://via.placeholder.com/800x400?text=Battle+Screenshot',
        reactions: 30,
        comments: 10,
        shares: 2,
    };

    return (
        <div className={cx('group-page')}>
            {/* Tiêu đề "Hoạt động gần đây" */}
            <div className={cx('recent-activity-title')}>Hoạt động gần đây</div>

            {/* Khu vực bài viết */}
            <div className={cx('post')}>
                {/* Header bài viết */}
                <div className={cx('post-header')}>
                    <img src={post.authorAvatar} alt={post.authorName} className={cx('avatar')} />
                    <div className={cx('author-info')}>
                        <span className={cx('author-name')}>{post.authorName}</span>
                        <span className={cx('time')}>{post.time}</span>
                    </div>
                    <FaEllipsisH className={cx('post-options')} />
                </div>

                {/* Nội dung text của bài viết */}
                <div className={cx('post-content')}>
                    <p>{post.content}</p>
                </div>

                {/* Ảnh bài viết */}
                <div className={cx('post-image')}>
                    <img src={post.image} alt="post" />
                </div>

                {/* Thanh số liệu tương tác */}
                <div className={cx('post-stats')}>
                    <span>{post.reactions} lượt thích</span>
                    <span>{post.comments} bình luận</span>
                    <span>{post.shares} lượt chia sẻ</span>
                </div>

                {/* Các nút hành động (Thích, Bình luận, Chia sẻ) */}
                <div className={cx('post-actions')}>
                    <button>
                        <FaThumbsUp />
                        Thích
                    </button>
                    <button>
                        <FaCommentAlt />
                        Bình luận
                    </button>
                    <button>
                        <FaShare />
                        Chia sẻ
                    </button>
                </div>

                {/* Khung nhập bình luận "Viết cảm nghĩ..." */}
                <div className={cx('comment-input')}>
                    <img src="https://via.placeholder.com/32?text=Me" alt="Me" className={cx('avatar-small')} />
                    <input type="text" placeholder="Viết cảm nghĩ..." className={cx('comment-text')} />
                </div>
            </div>
        </div>
    );
}

export default Group;
