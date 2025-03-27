import classNames from 'classnames/bind';
import styles from './SidebarHome.module.scss';

const cx = classNames.bind(styles);

function SidebarHome() {
    return (
        <aside className={cx('wrapper')}>
            <h2>SidebarHome</h2>
        </aside>
    );
}

export default SidebarHome;
