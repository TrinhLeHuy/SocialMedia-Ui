import Header from '~/components/Layout/component/Header';
import SidebarMarket from './SidebarMarket';
import classNames from 'classnames/bind';
import styles from './MarketLayout.module.scss';

const cx = classNames.bind(styles);

function MarketLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SidebarMarket />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default MarketLayout;
