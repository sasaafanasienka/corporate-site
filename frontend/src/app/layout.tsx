import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { Header } from '@/4_widgets/header';
import { useStrapiData } from '@/7_shared/api/useStrapiData';
import { Endpoint } from '@/7_shared/api/routes';
import { useCallback, useEffect } from 'react';
import { fetchAPI } from '@/7_shared/api/fetch-api';
// import {fetchAPI} from '@/utils/fetch-api';
// fetchAPI

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

const RootLayout = async ({ children }: { children: any }) => {

  const {getData} = useStrapiData();
  const {attributes: navbarData} = await getData(Endpoint.Navbar)

  // const {attributes: navbarData} = await getData(Endpoint.Navbar)

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        {/* <meta name='title' content={`${meta.title}`} /> */}
      </head>
      <body> 
        <MantineProvider theme={theme}>
          <Header data={navbarData.navbar}/>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

export default RootLayout
