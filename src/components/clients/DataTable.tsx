import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import React, { useState } from "react";
import { TableFilter } from "@/components/clients/TableFilter";
import { Container } from "@/components/Container";
import { NewClient } from "@/components/clients/NewClient";
import { Archive } from "@/components/icons/Archive";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ClientSelection = ({ table }: { table: any }) => {
  const isTableEmpty = table.getRowModel().rows.length === 0;
  const tableSelectedElements = table.getFilteredSelectedRowModel().rows.length;
  const tableHasSelectedElements = tableSelectedElements > 0;

  return (
    <Container>
      <div className="flex w-full py-4 justify-between items-end gap-2">
        <div className="flex grow max-w-[308px] flex-col gap-2">
          <span className="text-small-medium text-black">Client name</span>
          <TableFilter
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            label="Select client"
          />
        </div>

        <div className="flex grow flex-col gap-2">
          <span className="text-small-medium text-black">Clinician name</span>
          <TableFilter
            value={
              (table.getColumn("clinician")?.getFilterValue() as string) ?? ""
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              table.getColumn("clinician")?.setFilterValue(event.target.value)
            }
            label="Select clinician"
          />
        </div>
        <div className="grow self-center max-sm:hidden">
          <hr className="h-2 grow mt-8  text-gray-200" />
        </div>
        <div
          className={`${isTableEmpty || !tableHasSelectedElements ? "hidden" : ""} flex gap-2 self-center mt-6 mx-2 items-center`}
        >
          <Archive />
          <span className="text-label-regular text-primary-500">
            Deactivate
          </span>
        </div>
        <div className="grow max-sm:grow-0">
          <NewClient />
        </div>
      </div>
    </Container>
  );
};

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),

    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <>
      <ClientSelection table={table} />
      {table.getRowModel().rows.length === 0 ? (
        <div className="bg-transparent flex items-center justify-center text-label-medium text-black py-16">
          🙁 Oops! No matches found. Please double-check your input.
        </div>
      ) : (
        <div className="rounded-lg bg-white max-h-96 relative overflow-auto custom-scrollbar">
          <Table>
            <TableHeader className="sticky top-0 bg-white">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow className="border-gray-100 " key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead className="w-max shrink-0" key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="">
              {table.getRowModel().rows?.length ? (
                table.getCoreRowModel().rows.map((row) => (
                  <TableRow
                    className={`border-gray-100 ${row.getIsSelected() && "bg-secondary-100"}`}
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell className=" w-max shrink-0" key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
}
