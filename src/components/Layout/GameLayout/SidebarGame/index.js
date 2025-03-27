import classNames from 'classnames/bind';
import styles from './SidebarGame.module.scss';

const cx = classNames.bind(styles);

function SidebarGame() {
    return (
        <aside className={cx('wrapper')}>
            <h2>SidebarGame</h2>
        </aside>
    );
}

export default SidebarGame;
