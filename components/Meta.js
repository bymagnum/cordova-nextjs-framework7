import Head from 'next/head';

function Meta ({ title, description }) {
    return <>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="description" content={description} />
            <script src="cordova.js"></script>
        </Head>
    </>;
}

export default Meta;