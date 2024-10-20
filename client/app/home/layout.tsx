import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home Page',
    description: 'Home Page Description'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <div className={'w-full h-screen flex flex-col'}>{children}</div>
    )
}
