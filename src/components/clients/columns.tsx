import { Checkbox } from "@radix-ui/react-checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../Badge";
import { BadgeLabelType } from "@/types";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Client = {
  name: string;
  clinician: string;
  type: BadgeLabelType;
  lastSession: string;
  unsavedNotes: string;
};

export const columns: ColumnDef<Client>[] = [
  {
    id: "select",
    header: ({ table }) => {
      console.log({ selected: table.getIsAllPageRowsSelected() });
      return (
        <span>
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsAllPageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => {
              console.log({ value });
              table.toggleAllPageRowsSelected(!!value);
            }}
            value={table.getIsAllPageRowsSelected() ? "checked" : "unchecked"}
            // aria-checked={table.getIsAllPageRowsSelected()}
            // defaultChecked={table.getIsAllPageRowsSelected()}
            // aria-label="Select all"
            className="block bg-white w-4 h-4 ring-1 ring-primary-500 rounded-sm ml-2"
          />
        </span>
      );
    },
    cell: ({ row }) => {
      console.log({ rowselected: row.getIsSelected() });
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="block bg-white w-4 h-4 ring-1 ring-primary-500 rounded-sm ml-2"
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "name",
    accessorKey: "name",
    header: () => (
      <span className=" text-label-bold text-black">Client Name</span>
    ),
    cell: ({ row }) => {
      return (
        <span className={`text-label-regular text-black`}>
          {row.getValue("name")}
        </span>
      );
    },
  },
  {
    id: "clinician",
    accessorKey: "clinician",

    header: () => (
      <span className=" text-label-bold text-black">Clinician Name</span>
    ),
    cell: ({ row }) => {
      return (
        <span className="text-label-regular text-black">
          {row.getValue("clinician")}
        </span>
      );
    },
  },
  {
    id: "type",
    accessorKey: "type",

    header: () => (
      <span className=" text-label-bold text-black">Client Type</span>
    ),
    cell: ({ row }) => {
      return (
        <span className="text-label-regular text-black">
          <Badge type={row.getValue("type")} />
        </span>
      );
    },
  },

  {
    id: "lastSession",
    accessorKey: "lastSession",

    header: () => (
      <span className=" text-label-bold text-black">Last session</span>
    ),
    cell: ({ row }) => {
      return (
        <span className="text-label-regular text-black">
          {row.getValue("lastSession")}
        </span>
      );
    },
  },

  {
    id: "unsavedNotes",
    accessorKey: "unsavedNotes",
    header: () => (
      <span className=" text-label-bold text-black">Unsaved Notes</span>
    ),
    cell: ({ row }) => {
      return (
        <span className="text-label-regular text-black">
          {row.getValue("unsavedNotes")}
        </span>
      );
    },
  },
];
