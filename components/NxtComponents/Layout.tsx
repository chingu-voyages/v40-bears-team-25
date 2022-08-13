import React from 'react';
import Footer from '../Footer';
import MetaHeader from './MetaHeader';
import Navbar from '../Navbar';

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <React.Fragment>
            <MetaHeader />
            <Navbar />
                {/*all Page components goes here*/}
                <main>
                {children}
                </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;