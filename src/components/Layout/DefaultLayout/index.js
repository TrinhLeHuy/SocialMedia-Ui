import Header from './Header';
import SidebarHome from './SidebarHome';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container"></div>
            <SidebarHome />
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
