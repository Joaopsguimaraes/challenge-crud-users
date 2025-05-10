'use client'

import { type LucideIcon } from 'lucide-react'

import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

export function NavMain({
	items,
}: {
	items: {
		title: string
		url: string
		icon?: LucideIcon
		isActive: boolean
	}[]
}) {
	return (
		<SidebarGroup>
			<SidebarGroupLabel className="pl-4">Menu</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => (
					<SidebarMenuItem>
						<SidebarMenuButton
							tooltip={item.title}
							className={cn(
								'w-full cursor-pointer rounded-4xl h-11 text-md px-4 text-gray-700 dark:text-foreground transition-colors duration-200 ease-in-out',
								{
									'bg-primary text-white font-medium hover:bg-primary/90 hover:text-white':
										item.isActive,
									'hover:bg-primary/80 hover:text-white': !item.isActive,
								}
							)}
						>
							{item.icon && <item.icon />}
							<span>{item.title}</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	)
}
