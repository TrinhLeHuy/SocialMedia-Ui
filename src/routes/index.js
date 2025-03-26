import { GameLayout, GroupLayout, MarketLayout, VideoLayout } from '~/components/Layout';
import Home from '~/pages/Home';
import Video from '~/pages/Video';
import Market from '~/pages/Market';
import Group from '~/pages/Group';
import Game from '~/pages/Game';
// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/video', component: Video, layout: VideoLayout },
    { path: '/market', component: Market, layout: MarketLayout },
    { path: '/group', component: Group, layout: GroupLayout },
    { path: '/game', component: Game, layout: GameLayout },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
