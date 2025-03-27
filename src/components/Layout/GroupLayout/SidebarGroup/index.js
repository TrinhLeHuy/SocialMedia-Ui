import classNames from 'classnames/bind';
import styles from './SidebarGroup.module.scss';

const cx = classNames.bind(styles);

function SidebarGroup() {
    return (
        <aside className={cx('wrapper')}>
            <h2>SidebarGroup</h2>
        </aside>
    );
}

export default SidebarGroup;
