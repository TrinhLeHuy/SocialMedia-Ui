import Header from './Header';
import SidebarMarket from './SidebarMarket';

function MarketLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container"></div>
            <SidebarMarket />
            <div className="content">{children}</div>
        </div>
    );
}

export default MarketLayout;
