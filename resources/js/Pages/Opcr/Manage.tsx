import React, { ReactNode, useEffect, useState } from "react";
import MainBreadcrumb from "@/Layouts/MainBreadcrumb";
import MainSidebar from "@/Layouts/MainSidebar";
import { Payment, columns } from "@/Components/opcr/targets/columns";
import { DataTable } from "@/Components/opcr/targets/data-table";
import { Separator } from "@/Components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { Plus } from "lucide-react";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
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
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mt-10 mx-10">
      <div className="flex items-center justify-between">
        <div className="page-title">
          <h1 className="text-xl font-bold">Manage OPCRs</h1>
          <p className="text-sm text-muted-foreground">
            View and manage the Office Performance Commitment and Review (OPCR) records.
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
