'use client'

import {
	AudioWaveform,
	Command,
	FileCheckIcon,
	GalleryVerticalEnd,
	Settings,
	SquareTerminal,
	User2Icon,
} from 'lucide-react'
import * as React from 'react'

import { NavMain } from '@/components/layout/nav-main'
import { NavSettings } from '@/components/layout/nav-projects'
import { NavHelperButton } from '@/components/layout/nav-user'
import { TeamSwitcher } from '@/components/layout/team-switcher'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from '@/components/ui/sidebar'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

const data = {
	teams: [
		{
			name: 'Filial A',
			logo: GalleryVerticalEnd,
		},
		{
			name: 'Filial B',
			logo: AudioWaveform,
		},
		{
			name: 'Filial C',
			logo: Command,
		},
	],
	navMain: [
		{
			title: 'Menu',
			url: '#',
			icon: SquareTerminal,
			isActive: false,
		},
		{
			title: 'Usuários',
			url: '#',
			icon: User2Icon,
			isActive: true,
		},
		{
			title: 'Documentos',
			url: '#',
			icon: FileCheckIcon,
			isActive: false,
		},
	],
	settings: [
		{
			title: 'Configurações',
			url: '#',
			icon: Settings,
			isActive: false,
		},
	],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" className="p-4" {...props}>
			<SidebarHeader>
				<Button className="w-28 mb-4">Logo</Button>
				<Separator />
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavSettings settings={data.settings} />
			</SidebarContent>
			<SidebarFooter>
				<NavHelperButton />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
