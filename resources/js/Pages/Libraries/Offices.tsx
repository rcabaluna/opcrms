import { Button } from '@/components/ui/button';
import { Separator } from '@/Components/ui/separator';
import MainBreadcrumb from '@/Layouts/MainBreadcrumb';
import MainSidebar from '@/Layouts/MainSidebar';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import React, { ReactNode, useState, useEffect } from 'react';
import { columns, OfficesCols } from '@/Components/libraries/offices/columns';
import { DataTable } from '@/Components/libraries/offices/data-table';
import MainToast from '@/Layouts/MainToast';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/Components/ui/drawer";

// Define a type for props
interface OfficesProps {
    offices: OfficesCols[];
}

// Function to format date
const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
    });
};

const Offices: React.FC<OfficesProps> & { layout?: (page: ReactNode) => ReactNode } = ({ offices }) => {
    
    const { flash } = usePage().props;
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    
    const formattedData = offices.map(office => ({
        ...office,
        created_at: formatDate(office.created_at),
        updated_at: formatDate(office.updated_at),
    }));

    // Close modal/drawer when flash message appears
    useEffect(() => {
        if (flash.message) {
            setOpen(false);
        }
    }, [flash.message]);

    return (
        <>
            {flash.message && <MainToast title="Success!" description={flash.message} bg="green" />}
            <MainBreadcrumb blink="Libraries" bpage="Offices" />
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mt-10 mx-10">
                <div className="flex items-center justify-between">
                    <div className="page-title">
                        <h1 className="text-xl font-bold">Manage Offices</h1>
                        <p className="text-sm text-muted-foreground">
                            View and manage offices.
                        </p>
                    </div>
                    {isDesktop ? (
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <Button><Plus/> Add</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Add New Office</DialogTitle>
                                    <DialogDescription>
                                        Enter office details below.
                                    </DialogDescription>
                                </DialogHeader>
                                <ProfileForm setOpen={setOpen} />
                            </DialogContent>
                        </Dialog>
                    ) : (
                        <Drawer open={open} onOpenChange={setOpen}>
                            <DrawerTrigger asChild>
                                <Button><Plus/> Add</Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader className="text-left">
                                    <DrawerTitle>Add New Office</DrawerTitle>
                                    <DrawerDescription>
                                        Enter office details below.
                                    </DrawerDescription>
                                </DrawerHeader>
                                <ProfileForm setOpen={setOpen} className="px-4" />
                                <DrawerFooter className="pt-2">
                                    <DrawerClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    )}
                </div>
                <Separator />
                <div className="grid auto-rows-min mt-5 gap-4 md:grid-cols-1">
                    <div className="rounded-xl">
                        {offices.length === 0 ? (
                            <p className="text-center">No data available</p>
                        ) : (
                            <DataTable columns={columns} data={formattedData} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

Offices.layout = (page: ReactNode) => <MainSidebar>{page}</MainSidebar>;


function ProfileForm({ className, setOpen }: React.ComponentProps<"form"> & { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    const { data, setData, post, processing } = useForm({
        officename: "",
        officecode: ""
    });

    function submitForm(e: React.FormEvent) {
        e.preventDefault();
        post('/libraries/offices', {
            onSuccess: () => setOpen(false) // Close modal/drawer on success
        });
    }

    return (
        <form onSubmit={submitForm} className={cn("grid items-start gap-4", className)}>
            <div className="grid gap-2">
                <Label htmlFor="officename">Office</Label>
                <Input type="text" id="officename" name="officename" value={data.officename} onChange={(e) => setData('officename', e.target.value)} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="officecode">Code</Label>
                <Input id="officecode" name="officecode" value={data.officecode} onChange={(e) => setData('officecode', e.target.value)} />
            </div>
            <Button disabled={processing} type="submit">Submit</Button>
        </form>
    );
}

export default Offices;
