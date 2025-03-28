import classNames from 'classnames/bind';
import styles from './SidebarVideo.module.scss';

const cx = classNames.bind(styles);

function SidebarVideo() {
    return (
        <aside className={cx('wrapper')}>
            <h2>SidebarVideo</h2>
        </aside>
    );
}

export default SidebarVideo;
