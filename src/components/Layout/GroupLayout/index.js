import Header from './Header';
import SidebarGroup from './SidebarGroup';

function GroupLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container"></div>
            <SidebarGroup />
            <div className="content">{children}</div>
        </div>
    );
}

export default GroupLayout;
