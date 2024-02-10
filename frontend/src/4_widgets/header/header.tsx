// 'use client'

// import { useState } from 'react';
import { Container, Group, Burger, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './header.module.css';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function Header() {
  // const [opened, { toggle }] = useDisclosure(false);
  // const [active, setActive] = useState(links[0].link);

  // const items = links.map((link) => (
  //   <a
  //     key={link.label}
  //     href={link.link}
  //     className={classes.link}
  //     data-active={active === link.link || undefined}
  //     // onClick={(event) => {
  //     //   event.preventDefault();
  //     //   setActive(link.link);
  //     // }}
  //   >
  //     {link.label}
  //   </a>
  // ));

  return (
    <header className={classes.header}>
      <Container size='md'>
        <Flex></Flex>
      </Container>
    </header>
  );
}