import Header from './Header';
import SidebarGame from './SidebarGame';

function GameLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container"></div>
            <SidebarGame />
            <div className="content">{children}</div>
        </div>
    );
}

export default GameLayout;
