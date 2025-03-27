import Header from '~/components/Layout/component/Header';
import SidebarVideo from './SidebarVideo';
import classNames from 'classnames/bind';
import styles from './VideoLayout.module.scss';

const cx = classNames.bind(styles);

function VideoLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SidebarVideo />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default VideoLayout;
