import Framework7 from 'framework7/bundle';
import Framework7React, { App, View } from 'framework7-react';
Framework7.use(Framework7React);
import '../node_modules/framework7/framework7-bundle.min.css';
import PanelLeft from '/components/PanelLeft.js';
import { useRouter } from 'next/router';



const routes = [{
    path: '/about.html',
    async({ resolve }) {
        const reactComponent = () => import('../pages/about.js');
        reactComponent().then((rc) => {
            console.log(rc);
            resolve({ component: rc.default })
        });
    } ,
    //asyncComponent: () => import('../pages/dr/s/asr.js'),
},{
    path: '/dr/s/asr.html',
    async({ resolve }) {
        const reactComponent = () => import('../pages/dr/s/asr.js');
        reactComponent().then((rc) => {
            resolve({ component: rc.default })
        });
    } ,
    //asyncComponent: () => import('../pages/dr/s/asr.js'),
}, {
    path: '/abc/p.html',
    asyncComponent: () => import('../pages/abc/p.js'),
}, {
    path: '/',
    asyncComponent: () => import('../pages/index.js'),
}];



function CordovaApp({ Component, pageProps }) {
    const router = useRouter();
    return <>
        <App theme="ios" url={(process.env.NEXT_PUBLIC_HOST + router.asPath)} routes={routes}>
            <PanelLeft />
            <View url="/" className="view-main view-init">
                <Component initialPage {...pageProps} />
            </View>
        </App>
    </>;
}

export default CordovaApp;