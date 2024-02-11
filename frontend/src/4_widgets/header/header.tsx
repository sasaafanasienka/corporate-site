"use client"

import { Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './header.module.css';
import Link from 'next/link';

export const Header = ({data}: {data: any}) => {
  const [opened, { toggle }] = useDisclosure(false);

  console.log(data)

  const links = data.links.map((el: any) => {
    return <Link href={el.url} target={el.newTab ? "_blank" : "_self"} key={el.text}>{el.text}</Link>
  })

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Link href="/">
            <img src={data.navbarLogo.logoImg} alt="logo" className={classes.logo} />
          </Link>
          {/* <MantineLogo size={28} /> */}
          <Group gap={5} visibleFrom="sm">
            {links}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}

export default Header