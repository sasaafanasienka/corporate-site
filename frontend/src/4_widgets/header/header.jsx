"use client"

import { Menu, Group, Center, Burger, Container, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';
import Link from 'next/link';
import { IconChevronDown } from '@tabler/icons-react';
import Image from 'next/image';

export const Header = ({data}) => {
  const [opened, { toggle }] = useDisclosure(false);

  const links = data.links
  const desktopLogoData = data.logoDesktop.data.attributes
  const { url: mobileLogoUrl } = data.logoMobile.data.attributes

  const items = data.links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <Link href={item.url}>{item.text}</Link>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.text} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.url}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.text}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.text}
        href={link.url}
        className={classes.link}
      >
        {link.text}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Link href={'/'}>
            <Image src={'http://localhost:1337' + desktopLogoData.url} width={desktopLogoData.width} height={desktopLogoData.height} alt={desktopLogoData.alt ?? 'Picture'} style={{maxHeight: '40px', maxWidth: "40px"}}>
            </Image>
          </Link>
          <Group gap={20} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}

export default Header