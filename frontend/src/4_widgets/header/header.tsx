"use client"

import { Menu, Group, Center, Burger, Container, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';
import Link from 'next/link';

export const Header = ({data}: {data: any}) => {
  const [opened, { toggle }] = useDisclosure(false);

  const links = data.links.map((el: any) => {
    return <Link href={el.url} target={el.newTab ? "_blank" : "_self"} key={el.text}>{el.text}</Link>
  })

  return (
    <header className={classes.header}>
      <Container size="md" h="100%">
        <Flex align="center" justify="space-between" h="100%">
          <Link href="/">
            <img src={data.navbarLogo.logoImg} alt="logo" className={classes.logo} />
          </Link>
          <Flex align="center" justify="space-between">
            <Group gap={16} visibleFrom="sm">
              {links}
            </Group>
            <Group></Group>
          </Flex>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </Flex>
      </Container>
    </header>
  );
}

export default Header