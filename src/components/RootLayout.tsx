import { Outlet } from 'react-router-dom';

import { Grid, GridItem } from '@chakra-ui/react';

import NavBar from './NavBar';

const RootLayout:any = ({page}:{page:any}) => {
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
                {page({props:"asdasd"}) }
            </GridItem>
        </Grid>
    )
};

export default RootLayout