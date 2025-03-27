import Header from '~/components/Layout/component/Header';
import SidebarGame from './SidebarGame';
import classNames from 'classnames/bind';
import styles from './GameLayout.module.scss';

const cx = classNames.bind(styles);

function GameLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SidebarGame />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default GameLayout;
