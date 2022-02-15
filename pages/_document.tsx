import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang='ko' className='scrollbar-hidden'>
                <Head>
                    <meta charSet='utf-8' />
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1.0'
                    />
                    <link
                        rel='shortcut icon'
                        href='/icons/favicon.ico'
                        type='image/x-icon'
                    />
                    <link
                        rel='apple-touch-icon'
                        href='/icons/apple-touch-icon.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='57x57'
                        href='/icons/apple-touch-icon-57x57.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='72x72'
                        href='/icons/apple-touch-icon-72x72.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='76x76'
                        href='/icons/apple-touch-icon-76x76.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='114x114'
                        href='/icons/apple-touch-icon-114x114.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='120x120'
                        href='/icons/apple-touch-icon-120x120.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='144x144'
                        href='/icons/apple-touch-icon-144x144.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='152x152'
                        href='/icons/apple-touch-icon-152x152.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='180x180'
                        href='/icons/apple-touch-icon-180x180.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='192x192'
                        href='/icons/android-icon-192x192.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='32x32'
                        href='/icons/favicon-32x32.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='96x96'
                        href='/icons/favicon-96x96.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='16x16'
                        href='/icons/favicon-16x16.png'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
