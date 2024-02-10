'use client'

import { Container, Group, Burger, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function Header() {

  return (
    <header className={classes.header}>
      <Container size='md'>
        <Flex></Flex>
      </Container>
    </header>
  );
}