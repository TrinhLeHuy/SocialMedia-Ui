import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

// Danh sách dữ liệu ví dụ
const accounts = [
    {
        id: 1,
        name: 'SGU - HCI - 012025',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/473568118_3406960556104488_2717152780966980611_n.png?stp=c794.0.973.973a_cp0_dst-png_s50x50&_nc_cat=1&ccb=1-7&_nc_sid=33e84f&_nc_ohc=ZHqlv3iorFUQ7kNvwGvAsrO&_nc_oc=AdnJqeUh69znLpxs4yj7BYcPg6tiD3W_cnn2_D6Qklk9m4KaETeBvpwuqDMDFwV_-t0&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=1AErD9qIORkOAtPbdhi6RQ&oh=00_AfEBPcgLJSQt6CoTOjiUfCHINh3yvS0EBLJgglz8fc4J4A&oe=68026394',
        newInfo: 2,
    },
    {
        id: 2,
        name: 'Revelation: Thiên Dụ',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/473568118_3406960556104488_2717152780966980611_n.png?stp=c794.0.973.973a_cp0_dst-png_s50x50&_nc_cat=1&ccb=1-7&_nc_sid=33e84f&_nc_ohc=ZHqlv3iorFUQ7kNvwGvAsrO&_nc_oc=AdnJqeUh69znLpxs4yj7BYcPg6tiD3W_cnn2_D6Qklk9m4KaETeBvpwuqDMDFwV_-t0&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=1AErD9qIORkOAtPbdhi6RQ&oh=00_AfEBPcgLJSQt6CoTOjiUfCHINh3yvS0EBLJgglz8fc4J4A&oe=68026394',
        newInfo: 10,
    },
    {
        id: 3,
        name: 'Bộ tộc MixiGaming',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/473568118_3406960556104488_2717152780966980611_n.png?stp=c794.0.973.973a_cp0_dst-png_s50x50&_nc_cat=1&ccb=1-7&_nc_sid=33e84f&_nc_ohc=ZHqlv3iorFUQ7kNvwGvAsrO&_nc_oc=AdnJqeUh69znLpxs4yj7BYcPg6tiD3W_cnn2_D6Qklk9m4KaETeBvpwuqDMDFwV_-t0&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=1AErD9qIORkOAtPbdhi6RQ&oh=00_AfEBPcgLJSQt6CoTOjiUfCHINh3yvS0EBLJgglz8fc4J4A&oe=68026394',
        newInfo: 7,
    },
    {
        id: 4,
        name: 'ĐỀ THI KHOA CNTT SGU',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/473568118_3406960556104488_2717152780966980611_n.png?stp=c794.0.973.973a_cp0_dst-png_s50x50&_nc_cat=1&ccb=1-7&_nc_sid=33e84f&_nc_ohc=ZHqlv3iorFUQ7kNvwGvAsrO&_nc_oc=AdnJqeUh69znLpxs4yj7BYcPg6tiD3W_cnn2_D6Qklk9m4KaETeBvpwuqDMDFwV_-t0&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=1AErD9qIORkOAtPbdhi6RQ&oh=00_AfEBPcgLJSQt6CoTOjiUfCHINh3yvS0EBLJgglz8fc4J4A&oe=68026394',
        newInfo: 10,
    },
    {
        id: 5,
        name: 'Cộng đồng Sinh viên SGU',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/473568118_3406960556104488_2717152780966980611_n.png?stp=c794.0.973.973a_cp0_dst-png_s50x50&_nc_cat=1&ccb=1-7&_nc_sid=33e84f&_nc_ohc=ZHqlv3iorFUQ7kNvwGvAsrO&_nc_oc=AdnJqeUh69znLpxs4yj7BYcPg6tiD3W_cnn2_D6Qklk9m4KaETeBvpwuqDMDFwV_-t0&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=1AErD9qIORkOAtPbdhi6RQ&oh=00_AfEBPcgLJSQt6CoTOjiUfCHINh3yvS0EBLJgglz8fc4J4A&oe=68026394',
        newInfo: 10,
    },
    {
        id: 6,
        name: 'Revelation Thiên Dụ',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/473568118_3406960556104488_2717152780966980611_n.png?stp=c794.0.973.973a_cp0_dst-png_s50x50&_nc_cat=1&ccb=1-7&_nc_sid=33e84f&_nc_ohc=ZHqlv3iorFUQ7kNvwGvAsrO&_nc_oc=AdnJqeUh69znLpxs4yj7BYcPg6tiD3W_cnn2_D6Qklk9m4KaETeBvpwuqDMDFwV_-t0&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=1AErD9qIORkOAtPbdhi6RQ&oh=00_AfEBPcgLJSQt6CoTOjiUfCHINh3yvS0EBLJgglz8fc4J4A&oe=68026394',
        newInfo: 0,
    },
    {
        id: 7,
        name: 'Research SGU',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/473568118_3406960556104488_2717152780966980611_n.png?stp=c794.0.973.973a_cp0_dst-png_s50x50&_nc_cat=1&ccb=1-7&_nc_sid=33e84f&_nc_ohc=ZHqlv3iorFUQ7kNvwGvAsrO&_nc_oc=AdnJqeUh69znLpxs4yj7BYcPg6tiD3W_cnn2_D6Qklk9m4KaETeBvpwuqDMDFwV_-t0&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=1AErD9qIORkOAtPbdhi6RQ&oh=00_AfEBPcgLJSQt6CoTOjiUfCHINh3yvS0EBLJgglz8fc4J4A&oe=68026394',
        note: 'Nhóm của bạn',
    },
    {
        id: 8,
        name: 'Minh Vũ',
        avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/473568118_3406960556104488_2717152780966980611_n.png?stp=c794.0.973.973a_cp0_dst-png_s50x50&_nc_cat=1&ccb=1-7&_nc_sid=33e84f&_nc_ohc=ZHqlv3iorFUQ7kNvwGvAsrO&_nc_oc=AdnJqeUh69znLpxs4yj7BYcPg6tiD3W_cnn2_D6Qklk9m4KaETeBvpwuqDMDFwV_-t0&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=1AErD9qIORkOAtPbdhi6RQ&oh=00_AfEBPcgLJSQt6CoTOjiUfCHINh3yvS0EBLJgglz8fc4J4A&oe=68026394',
        note: 'Người',
    },
];

function AccountItem() {
    return (
        <div>
            {/* Header */}
            <div className={cx('wrapper', 'header')}>
                <span className={cx('left')}>Mới đây</span>
                <span className={cx('right')}>Chỉnh sửa</span>
            </div>

            {/* Danh sách tài khoản */}
            {accounts.map((account) => (
                <div
                    key={account.id}
                    className={cx('wrapper')}
                    style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}
                >
                    <img className={cx('avatar')} src={account.avatar} alt={account.name} />
                    <div className={cx('info')}>
                        <p className={cx('name')}>{account.name}</p>
                        {account.newInfo !== undefined ? (
                            <span className={cx('username')}>
                                {account.newInfo > 9 ? '9+ thông tin mới' : `${account.newInfo} thông tin mới`}
                            </span>
                        ) : (
                            <span className={cx('username')}>{account.note}</span>
                        )}
                    </div>
                    <FontAwesomeIcon icon={faXmark} style={{ marginLeft: 'auto', cursor: 'pointer', color: '#ccc' }} />
                </div>
            ))}
        </div>
    );
}

export default AccountItem;
