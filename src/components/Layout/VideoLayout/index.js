import Header from './Header';
import SidebarVideo from './SidebarVideo';

function VideoLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container"></div>
            <SidebarVideo />
            <div className="content">{children}</div>
        </div>
    );
}

export default VideoLayout;
