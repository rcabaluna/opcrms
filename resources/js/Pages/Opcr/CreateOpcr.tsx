import { Separator } from '@/Components/ui/separator';
import MainBreadcrumb from '@/Layouts/MainBreadcrumb';
import MainSidebar from '@/Layouts/MainSidebar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { ReactNode, useState } from 'react';
import { Button } from "@/components/ui/button";

const CreateOpcr = () => {
  const [rows, setRows] = useState([{ id: "1" }]);

  const addLevel = () => {
    const mainLevels = rows.filter(row => !row.id.includes('.'));
    const lastMainId = mainLevels.length ? parseInt(mainLevels[mainLevels.length - 1].id) : 0;
    const newId = (lastMainId + 1).toString();
    setRows([...rows, { id: newId }]);
  };

  const addSublevel = (parentId: string) => {
    const parentIndex = rows.findIndex(row => row.id === parentId);
    const allSubRows = rows.filter(row => row.id.startsWith(parentId + '.'));
    const lastSubId = allSubRows.length ? allSubRows[allSubRows.length - 1].id : `${parentId}.0`;
    const lastNumber = parseInt(lastSubId.split('.').pop() || "0");
    const newId = `${parentId}.${lastNumber + 1}`;
    
    setRows([...rows.slice(0, parentIndex + allSubRows.length + 1), { id: newId }, ...rows.slice(parentIndex + allSubRows.length + 1)]);
  };

  return (
    <>
      <MainBreadcrumb blink="OPCR" bpage="Create" />
      <div className="flex flex-col gap-4 p-4 mt-8 mx-6">
        <h1 className="text-lg font-semibold">New OPCR Targets</h1>
        <p className="text-sm text-gray-600">
          Create new Office Performance Commitment and Review (OPCR) targets.
        </p>
        <Separator />
        
        <div className="overflow-x-auto border border-gray-200 rounded-md">
          <div className="w-full min-w-[1200px]">
            <Table className="border-collapse w-full min-w-[1200px] whitespace-nowrap">
              <TableHeader className="bg-gray-100 sticky top-0">
                <TableRow className="text-[11px] text-gray-700 text-center">
                  <TableHead rowSpan={2}>Add <br/>Sublevel</TableHead>
                  <TableHead rowSpan={2}>No.</TableHead>
                  <TableHead rowSpan={2} className='min-w-[250px]'>Indicators</TableHead>
                  <TableHead rowSpan={2} className='min-w-[50px]'>Alignment of Indicators</TableHead>
                  <TableHead rowSpan={2}>Setting of Targets</TableHead>
                  <TableHead rowSpan={2}>Definitions or Examples</TableHead>
                  <TableHead rowSpan={2}>Specific Reporting Units</TableHead>
                  <TableHead rowSpan={2}>Reporting Staff Members</TableHead>
                  <TableHead className="text-center" colSpan={3}>PSTO Bukidnon</TableHead>
                  <TableHead className="text-center" colSpan={3}>PSTO Camiguin</TableHead>
                  <TableHead className="text-center" colSpan={3}>PSTO Lanao del Norte</TableHead>
                  <TableHead className="text-center" colSpan={3}>PSTO Misamis Occidental</TableHead>
                  <TableHead className="text-center" colSpan={3}>PSTO Misamis Oriental</TableHead>
                </TableRow>
                <TableRow className="text-[11px] text-gray-700 text-center">
                  <TableHead>Total Targets 2024</TableHead>
                  <TableHead>Total Accomp. 2024</TableHead>
                  <TableHead>Target 2025</TableHead>
                  <TableHead>Total Targets 2024</TableHead>
                  <TableHead>Total Accomp. 2024</TableHead>
                  <TableHead>Target 2025</TableHead>
                  <TableHead>Total Targets 2024</TableHead>
                  <TableHead>Total Accomp. 2024</TableHead>
                  <TableHead>Target 2025</TableHead>
                  <TableHead>Total Targets 2024</TableHead>
                  <TableHead>Total Accomp. 2024</TableHead>
                  <TableHead>Target 2025</TableHead>
                  <TableHead>Total Targets 2024</TableHead>
                  <TableHead>Total Accomp. 2024</TableHead>
                  <TableHead>Target 2025</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="px-1 py-0.5 border text-center">
                      <button onClick={() => addSublevel(row.id)} className="text-xs text-blue-500 hover:underline">+</button>
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border text-center">
                      <span className="text-xs">{row.id}</span>
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      <input type="text" className="w-full px-1 py-0.5 text-xs border rounded focus:ring-1 focus:ring-blue-300" />
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      <input type="text" className="w-full px-1 py-0.5 text-xs border rounded focus:ring-1 focus:ring-blue-300" />
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      <input type="text" className="w-full px-1 py-0.5 text-xs border rounded focus:ring-1 focus:ring-blue-300" />
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      <input type="text" className="w-full px-1 py-0.5 text-xs border rounded focus:ring-1 focus:ring-blue-300" />
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      <input type="text" className="w-full px-1 py-0.5 text-xs border rounded focus:ring-1 focus:ring-blue-300" />
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      <input type="text" className="w-full px-1 py-0.5 text-xs border rounded focus:ring-1 focus:ring-blue-300" />
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      x
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      x
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      <input type="text" className="w-full px-1 py-0.5 text-xs border rounded focus:ring-1 focus:ring-blue-300" />
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      x
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      x
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      <input type="text" className="w-full px-1 py-0.5 text-xs border rounded focus:ring-1 focus:ring-blue-300" />
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      x
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      x
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      <input type="text" className="w-full px-1 py-0.5 text-xs border rounded focus:ring-1 focus:ring-blue-300" />
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      x
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      x
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      <input type="text" className="w-full px-1 py-0.5 text-xs border rounded focus:ring-1 focus:ring-blue-300" />
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      x
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      x
                    </TableCell>
                    <TableCell className="px-1 py-0.5 border">
                      <input type="text" className="w-full px-1 py-0.5 text-xs border rounded focus:ring-1 focus:ring-blue-300" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <Button onClick={addLevel} className="fixed bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg">+ Add Level</Button>
    </>
  );
};

CreateOpcr.layout = (page: ReactNode) => <MainSidebar>{page}</MainSidebar>;

export default CreateOpcr;