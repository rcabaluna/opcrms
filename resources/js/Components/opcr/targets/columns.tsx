"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useForm } from "@inertiajs/react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/Components/ui/alert-dialog";

import { Checkbox } from "@/Components/ui/checkbox";
import { DataTableColumnHeader } from "@/Components/table-functions/DataTableColumnHeader";

export type TargetSummary = {
    targetsummaryid: number;
    xyear: number;
    xstatus: string;
    is_psto: number;
    created_at: string;
    updated_at: string;
};

export const columns: ColumnDef<TargetSummary>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox 
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")} 
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} 
                aria-label="Select all" 
            />
        ),
        cell: ({ row }) => (
            <Checkbox 
                checked={row.getIsSelected()} 
                onCheckedChange={(value) => row.toggleSelected(!!value)} 
                aria-label="Select row" 
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "no",
        header: "No.",
        cell: ({ row }) => row.index + 1,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "is_psto_label",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Targets For" />,
    },
    {
        accessorKey: "xyear",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Year" />,
    },
    {
        accessorKey: "xstatus",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    },
    {
        accessorKey: "created_at",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Date Created" />,
    },
    {
        accessorKey: "updated_at",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Date Updated" />,
    },
    {
        id: "actions",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Actions" />,
        cell: ({ row }) => {
            const target = row.original;
            const { delete: destroy } = useForm();
            const [open, setOpen] = useState(false);

            const ConfirmDelete = () => {
                destroy(route("targets.destroy", target), {
                    onSuccess: () => setOpen(false), // Close dropdown after successful delete
                });
            };

            return (
                <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Edit</DropdownMenuItem>

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Delete</DropdownMenuItem>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete this entry.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={ConfirmDelete} className="bg-red-500">
                                        Confirm
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
