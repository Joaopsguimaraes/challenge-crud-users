'use client'

import { ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components/ui/sidebar'
import { Button } from '../ui/button'

export function TeamSwitcher({
	teams,
}: {
	teams: {
		name: string
		logo: React.ElementType
	}[]
}) {
	const { isMobile } = useSidebar()
	const [activeTeam, setActiveTeam] = React.useState(teams[0])

	if (!activeTeam) {
		return null
	}

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-background-accent cursor-pointer data-[state=open]:text-sidebar-accent-foreground"
						>
							<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-zinc-900 text-sidebar-primary-foreground">
								<TeamIconButton name={activeTeam.name} />
							</div>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium">{activeTeam.name}</span>
							</div>
							<ChevronsUpDown className="ml-auto" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
						align="start"
						side={isMobile ? 'bottom' : 'right'}
						sideOffset={4}
					>
						<DropdownMenuLabel className="text-xs text-muted-foreground">
							Filiais
						</DropdownMenuLabel>
						{teams.map((team, index) => (
							<DropdownMenuItem
								key={team.name}
								onClick={() => setActiveTeam(team)}
								className="gap-3 p-2"
							>
								<div className="flex size-6 items-center justify-center rounded-sm border">
									<TeamIconButton name={team.name} />
								</div>
								{team.name}
								<DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}

export interface TeamIconButtonProps {
	name: string
}

function TeamIconButton({ name }: TeamIconButtonProps) {
	const initials = React.useMemo(() => {
		return name
			.split(' ')
			.filter(Boolean)
			.map((word) => word.charAt(0).toUpperCase())
			.join('')
	}, [name])

	return (
		<Button variant="secondary" size="icon">
			{initials}
		</Button>
	)
}
