import Header from '~/components/Layout/component/Header';
import SidebarGroup from './SidebarGroup';
import classNames from 'classnames/bind';
import styles from './GroupLayout.module.scss';

const cx = classNames.bind(styles);

function GroupLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SidebarGroup />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default GroupLayout;
