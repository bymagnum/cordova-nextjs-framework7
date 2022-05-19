import Locale from '../components/Locale';
import Meta from '../components/Meta';
import { Page, Block, Navbar, NavRight, NavLeft, NavTitle, Link } from 'framework7-react';


function IndexPage() {
    const lng = Locale();
    return <>
        <Meta title={lng.title} description={lng.description} />
        <Navbar>
            <NavLeft>
                <Link panelOpen="left">Left Link</Link>
            </NavLeft>
            <NavTitle>My App</NavTitle>
            <NavRight>
                <Link>Right Link</Link>
            </NavRight>
        </Navbar>
        <Page>
            <Block>
                <p>Here comes main view page text</p>
            </Block>
        </Page>
    </>;
}

export default IndexPage;



