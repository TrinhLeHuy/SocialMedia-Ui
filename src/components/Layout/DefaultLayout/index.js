import styles from './DefaultLayou.module.scss';
import classNames from 'classnames/bind';
import Header from '~/components/Layout/component/Header';
import SidebarHome from './SidebarHome';
import SidebarChat from './SidebarChat';

const cx = classNames.bind(styles);

function DefaultLayout({ children, children2 }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SidebarHome />
                <div className={cx('content')}>{children}</div>
                <SidebarChat />
                <div className={cx('content2')}>{children2}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
