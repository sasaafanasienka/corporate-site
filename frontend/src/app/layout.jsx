import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { Header } from '@/4_widgets/header';
import { useStrapiData } from '@/7_shared/api';
import { Endpoint } from '@/7_shared/api/routes';
import { JsonView } from '@/7_shared/helpers';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

const RootLayout = async ({ children }) => {

  const {getData} = useStrapiData();
  const { attributes: navbarData } = await getData(Endpoint.Navbar)

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body> 
        <MantineProvider theme={theme}>
          {navbarData && 
            <Header data={navbarData.navbar} />
          }
          <main>
            {children}
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}

export default RootLayout
