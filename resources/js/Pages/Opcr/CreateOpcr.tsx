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
import React, { ReactNode } from 'react';

const HEADERS = [
  "Indicators", "Alignment of Indicators", "Setting of Targets", "Definitions or Examples", "Remarks",
  "TOTAL BUK TARGETS 2024", "TOTAL BUK ACCOMP. 2024", "BUK 2025 TARGETS",
  "TOTAL CAM TARGETS 2024", "TOTAL CAM ACCOMP. 2024", "CAM 2025 TARGETS",
  "TOTAL LDN TARGETS 2024", "TOTAL LDN ACCOMP. 2024", "LDN 2025 TARGETS",
  "TOTAL MOC TARGETS 2024", "TOTAL MOC ACCOMP. 2024", "MOC 2025 TARGETS",
  "TOTAL MOR TARGETS 2024", "TOTAL MOR ACCOMP. 2024", "MOR 2025 TARGETS"
];

const CreateOpcr = () => (
  <>
    <MainBreadcrumb blink="OPCR" bpage="Create" />
    <div className="flex flex-col gap-4 p-4 mt-8 mx-6">
      <h1 className="text-lg font-semibold">New OPCR Targets</h1>
      <p className="text-sm text-gray-600">
        Create new Office Performance Commitment and Review (OPCR) targets.
      </p>
      <Separator />
      
      {/* Scrollable Table Container */}
      <div className="overflow-x-auto border border-gray-200 rounded-md">
        <Table className="border-collapse w-full min-w-[1200px]">
          <TableHeader className="bg-gray-100 sticky top-0">
            <TableRow className="text-[11px] text-gray-700">
              {HEADERS.map((header, i) => (
                <TableHead key={i} className="px-1 py-1 border whitespace-nowrap">{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(20)].map((_, rowIndex) => (
              <TableRow key={rowIndex} className="text-[10px] odd:bg-white even:bg-gray-50">
                {HEADERS.map((_, colIndex) => (
                  <TableCell key={colIndex} className="px-1 py-0.5 border">
                    <input
                      type="text"
                      className="w-full px-1 py-0.5 text-[10px] border rounded focus:ring-1 focus:ring-blue-300"
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  </>
);

CreateOpcr.layout = (page: ReactNode) => <MainSidebar>{page}</MainSidebar>;

export default CreateOpcr;
