import classNames from 'classnames/bind';
import styles from './SidebarChat.module.scss';

const cx = classNames.bind(styles);

function SidebarChat() {
    return (
        <aside className={cx('wrapper')}>
            <h2>SidebarChat</h2>
        </aside>
    );
}

export default SidebarChat;
