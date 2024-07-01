"use client";
import { ColumnDef } from "@tanstack/react-table";
import { useToast } from "../ui/use-toast";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { IoIosMore } from "react-icons/io";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Result = {
  patientId: string; // the client-specific identifier
  scannedAt: Date; // the time at which the sample was digitally scanned
  score: number; // the score of the sample
  event: "Baseline" | "FollowUp" | "Conclusion"; // the event that the sample was taken at
  sampleQuality: "high ↑" | "medium →" | "low ↓"; // the quality of the sample
  dateOfBirth: string;
};

export const columns: ColumnDef<Result>[] = [
  {
    accessorKey: "scannedAt",
    header: "SCANNED AT",
    cell: ({ row }) => {
      const date = row.getValue<string>("scannedAt");
      const formatDate = (date: string): string => {
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        return new Date(date).toLocaleString(undefined, options);
      };
      return formatDate(date);
    },
  },
  {
    accessorKey: "dateOfBirth",
    header: "DATE OF BIRTH",
    cell: ({ row }) => {
      const date = row.getValue<string>("dateOfBirth");
      const formatDate = (date: string): string => {
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        return new Date(date).toLocaleDateString(undefined, options);
      };
      return formatDate(date);
    },
  },
  {
    accessorKey: "event",
    header: "EVENT",
    cell: ({ row }) => {
      const event = row.getValue<string>("event");

      return event === "FollowUp" ? (
        <span className="px-3 py-[2px] rounded-full text-blue-400 bg-blue-50 border border-blue-200 w-fit">
          {event}
        </span>
      ) : event === "Baseline" ? (
        <span className="px-3 py-[2px] rounded-full text-green-400 bg-green-50 border border-green-200 w-fit">
          {event}
        </span>
      ) : (
        <span className="px-3 py-[2px] rounded-full text-red-400 bg-red-50 border border-red-200 w-fit">
          {event}
        </span>
      );
    },
  },
  {
    accessorKey: "score",
    header: "SCORE",
    cell: ({ row }) => {
      const score = row.getValue<number>("score");
      const percentagedScore = score * 100;
      return percentagedScore > 50 ? (
        <h1 className="text-yellow-400 ">{percentagedScore}%</h1>
      ) : (
        <h1 className="text-green-400 ">{percentagedScore}%</h1>
      );
    },
  },
  {
    accessorKey: "sampleQuality",
    header: "SAMPLE QUALITY",
    cell: ({ row }) => {
      const sampleQuality = row.getValue<string>("sampleQuality");

      return sampleQuality === "medium →" ? (
        <span className="text-yellow-400 capitalize w-fit">
          {sampleQuality}
        </span>
      ) : sampleQuality === "high ↑" ? (
        <span className="text-green-400 capitalize w-fit">{sampleQuality}</span>
      ) : (
        <span className="text-red-400 capitalize w-fit">{sampleQuality}</span>
      );
    },
  },
  {
    id: "actions",
    // header: "ACTIONS",
    cell: ({ row }) => {
      const patient = row.original;
      const { toast } = useToast();
      const copyPatientIdFunction = (patientId: string) => {
        navigator.clipboard.writeText(patientId);
        toast({
          description: "Patient ID copied successfully!",
        });
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <span className="sr-only">Open menu</span>
              <IoIosMore className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => copyPatientIdFunction(patient.patientId)}
            >
              Copy patient ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View patient</DropdownMenuItem>
            <DropdownMenuItem>View scanned image</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
