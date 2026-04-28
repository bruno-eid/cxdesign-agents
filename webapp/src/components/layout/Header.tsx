'use client';

import {
  Header as CarbonHeader,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from '@carbon/react';
import {
  Notification,
  UserAvatar,
  Switcher,
} from '@carbon/icons-react';
import Link from 'next/link';

export default function Header() {
  return (
    <CarbonHeader aria-label="CX Operating System">
      <Link href="/" passHref legacyBehavior>
        <HeaderName prefix="">
          CX Operating System
        </HeaderName>
      </Link>

      <HeaderNavigation aria-label="CX Operating System">
        <Link href="/projects" passHref legacyBehavior>
          <HeaderMenuItem>Projetos</HeaderMenuItem>
        </Link>
        <Link href="/agents" passHref legacyBehavior>
          <HeaderMenuItem>Agentes</HeaderMenuItem>
        </Link>
        <Link href="/templates" passHref legacyBehavior>
          <HeaderMenuItem>Templates</HeaderMenuItem>
        </Link>
        <Link href="/reports" passHref legacyBehavior>
          <HeaderMenuItem>Relatórios</HeaderMenuItem>
        </Link>
        <Link href="/docs" passHref legacyBehavior>
          <HeaderMenuItem>Documentação</HeaderMenuItem>
        </Link>
      </HeaderNavigation>

      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label="Notificações"
          tooltipAlignment="end"
        >
          <Notification size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="Configurações"
          tooltipAlignment="end"
        >
          <Switcher size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="Perfil do usuário"
          tooltipAlignment="end"
        >
          <UserAvatar size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </CarbonHeader>
  );
}

// Made with Bob
