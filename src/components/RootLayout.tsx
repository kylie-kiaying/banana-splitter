import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Grid, GridItem } from '@chakra-ui/react';

import NavBar from './NavBar';
import HomePaymentOverview from './HomePaymentOverview';

const RootLayout: React.FC = () => {
    return (
        <Grid
            templateRows="auto 1fr"
            templateColumns="1fr"
            templateAreas={`'nav'
                            'main'`}
            height="100vh" 
        >
            <GridItem area={'nav'}>
                <NavBar />
            </GridItem>
            {/* <GridItem area={'side'}>
                <SideBar />
            </GridItem> */}
            <GridItem area={'main'}>
                <Outlet />
            </GridItem>
            <GridItem area={'main'}>
                <HomePaymentOverview />
            </GridItem>
        </Grid>
    )
};

export default RootLayout