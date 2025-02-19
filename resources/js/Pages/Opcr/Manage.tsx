    import React, { ReactNode, useEffect, useState } from "react";
    import MainBreadcrumb from "@/Layouts/MainBreadcrumb";
    import MainSidebar from "@/Layouts/MainSidebar";
    import { Payment, columns } from "@/Components/opcr/manage/columns";
    import { DataTable } from "@/Components/opcr/manage/data-table";
import { Separator } from "@/Components/ui/separator";

    async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
        },
        // ...
    ];
    }

    const Manage = () => {
        const [data, setData] = useState<Payment[]>([]);
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            getData().then((fetchedData) => {
                setData(fetchedData);
                setLoading(false);
            });
        }, []);
    
        return (
            <>
                <MainBreadcrumb blink="OPCR" bpage="Manage" />
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mt-10 mx-3">
                    <h1 className="text-xl -mb-3 font-bold">Manage OPCRs</h1>
                    <p className="text-sm text-muted-foreground">
                        View and manage the Office Performance Commitment and Review (OPCR) records.
                    </p>
                    <Separator/>
                    <div className="grid auto-rows-min mt-5 gap-4 md:grid-cols-1 mx-8">
                        <div className="rounded-xl">
                            {loading ? (
                                <p className="text-center">Loading...</p>
                            ) : (
                                <DataTable columns={columns} data={data} />
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    };
    
    Manage.layout = (page: ReactNode) => <MainSidebar>{page}</MainSidebar>;
    
    export default Manage;
    