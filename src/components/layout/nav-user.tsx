'use client'

import { HeadsetIcon } from 'lucide-react'

import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'

export function NavHelperButton() {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<SidebarMenuButton className="bg-background rounded-4xl p-4 h-12 w-full flex items-center justify-between">
					<span>Precisa de ajuda?</span>
					<HeadsetIcon />
				</SidebarMenuButton>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}
