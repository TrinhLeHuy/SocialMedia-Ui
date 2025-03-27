import classNames from 'classnames/bind';
import styles from './SidebarMarket.module.scss';

const cx = classNames.bind(styles);

function SidebarMarket() {
    return (
        <aside className={cx('wrapper')}>
            <h2>SidebarMarket</h2>
        </aside>
    );
}

export default SidebarMarket;
