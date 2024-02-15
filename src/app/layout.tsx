import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google';

import scss from './Home.module.scss'
import 'scss/_reset.scss';

const ptSans = PT_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-pt_sans',
});

export const metadata: Metadata = {
    title: 'Historical Dates',
    description: 'Historical Dates',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                style={{ background: '#F4F5F9' }}
                className={`${ptSans.variable} ${scss.body}`}
            >

                {children}
            </body>
        </html>
    );
}
