import type { DataTableAppliedFilters } from '@/@types/data-table-applied-filters'
import type { User } from '@/@types/User'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DataTableColumnHeader } from '@/components/ui/data-table/data-table-column-header'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import type { ColumnDef } from '@tanstack/react-table'
import { CalendarIcon, Clock, Ticket, UserIcon } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router'

export function useCustomerListColumns() {
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()

	const appliedFilters: DataTableAppliedFilters<User>[] = [
		{
			id: 'name',
			title: 'Nome',
			value: searchParams.get('name') ?? '',
		},
		{
			id: 'createdAt',
			title: 'Criado em:',
			value: searchParams.get('createdAt') ?? '',
		},
		{
			id: 'documentId',
			title: 'CPF',
			value: searchParams.get('documentId') ?? '',
		},
		{
			id: 'identityCard',
			title: 'RG',
			value: searchParams.get('identityCard') ?? '',
		},
		{
			id: 'email',
			title: 'Email',
			value: searchParams.get('email') ?? '',
		},
	]

	const tableColumns: ColumnDef<User>[] = [
		{
			accessorKey: 'name',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Usuário" />
			),
			cell: ({ row }) => {
				return (
					<div className="flex max-w-72 items-center gap-2 md:w-[300px]">
						<Avatar>
							<AvatarFallback>{row.original.name.charAt(0)}</AvatarFallback>
						</Avatar>
						<div className="flex w-full flex-col items-start">
							<div className="flex items-center gap-2">
								<span>
									<UserIcon className="size-4 text-[#718EBF]" />
									{row.original.age} anos, {row.original.gender}
								</span>
								<span className="text-primary text-left font-medium">
									{row.original.name}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-sm text-[#718EBF]">
									<CalendarIcon className="size-4" />
									{row.original.createdAt}
								</span>
								<span className="text-sm text-[#718EBF]">
									<Clock className="size-4" />
									{row.original.updatedAt}
								</span>
								<span className="text-sm text-[#718EBF]">
									<Ticket className="size-4" />
									Usuário padrão
								</span>
							</div>
						</div>
					</div>
				)
			},
		},
		{
			accessorKey: 'status',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Status" />
			),
			cell: ({ row }) => (
				<div className="flex items-center justify-center gap-2">
					<Badge
						variant={row.original.isActive ? 'default' : 'secondary'}
						className="w-28"
					>
						{row.original.isActive ? 'Ativo' : 'Inativo'}
					</Badge>
				</div>
			),
		},
		{
			accessorKey: 'actions',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Ações" />
			),
			cell: ({ row }) => (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon">
							<DotsVerticalIcon className="size-5" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-40">
						<DropdownMenuLabel>Ações</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<Button
									variant="ghost"
									className="w-full"
									onClick={() => navigate(`users/${row.original.id}`)}
								>
									Detalhes
								</Button>
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			),
		},
	]

	return {
		tableColumns,
		appliedFilters,
	}
}
