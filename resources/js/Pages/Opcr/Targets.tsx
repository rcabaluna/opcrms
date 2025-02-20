import { columns, TargetSummary } from '@/Components/opcr/targets/columns';
import { DataTable } from '@/Components/opcr/targets/data-table';
import { Button } from '@/components/ui/button';
import { Separator } from '@/Components/ui/separator';
import MainBreadcrumb from '@/Layouts/MainBreadcrumb';
import MainSidebar from '@/Layouts/MainSidebar';
import MainToast from '@/Layouts/MainToast';
import { Link, usePage } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { ReactNode, useState } from 'react';

// Define a type for props
interface TargetsProps {
    targets: TargetSummary[];
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


const Targets: React.FC<TargetsProps> & { layout?: (page: ReactNode) => ReactNode } = ({ targets }) => {

    const {flash} = usePage().props;

    const formattedData = targets.map(target => ({
        ...target,
        created_at: formatDate(target.created_at),
        updated_at: formatDate(target.updated_at),
        is_psto_label: target.is_psto === 1 ? "PSTO" : "TSD",
    }));

    return (
        <>
        {flash.message &&  <MainToast title="Success!" description={flash.message} bg="green" />}
            <MainBreadcrumb blink="OPCR" bpage="Targets" />
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mt-10 mx-10">
                <div className="flex items-center justify-between">
                    <div className="page-title">
                        <h1 className="text-xl font-bold">Manage OPCR Targets</h1>
                        <p className="text-sm text-muted-foreground">
                            View and manage the Office Performance Commitment and Review (OPCR) targets.
                        </p>
                    </div>
                    <Link href="/opcr/create">
                        <Button className="ml-auto flex items-center gap-2">
                            <Plus size={16} /> New
                        </Button>
                    </Link>
                </div>
                <Separator />
                <div className="grid auto-rows-min mt-5 gap-4 md:grid-cols-1">
                    <div className="rounded-xl">
                        {targets.length === 0 ? (
                            <p className="text-center">No data available</p>
                        ) : (
                            <DataTable columns={columns} data={formattedData} />
                        )}
                    </div>
                </div>

                
            </div>
        </>
    );
};

// Define the layout property
Targets.layout = (page: ReactNode) => <MainSidebar>{page}</MainSidebar>;

export default Targets;
