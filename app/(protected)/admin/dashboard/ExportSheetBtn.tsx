"use client";
import * as XLSX from "xlsx";

import { saveAs } from "file-saver";
import { useMutation } from "@tanstack/react-query";
import { Query } from "@/types/quries";

export const ExportSheetButton = () => {
  const useDownloadSheetH = useMutation({
    mutationKey: ["exportSheet"],
    mutationFn: async () => {
      try {
        const getDatat = await fetch("/api/queries?tabs=all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = (await getDatat.json()) as Query[];

        const exceldata = jsonToExcelBlob(data);
        saveAs(exceldata, "client-queries.xlsx");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="flex justify-end">
      <button
        onClick={() => {
          useDownloadSheetH.mutate();
        }}
        className="ml-auto rounded-xl bg-primary px-6 py-2 text-white duration-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        Download
      </button>
    </div>
  );
};
const jsonToExcelBlob = (jsonData: Query[]): Blob => {
  const workbook = XLSX.utils.book_new();

  const worksheet = XLSX.utils.json_to_sheet(
    jsonData.map((query) => ({
      Email: query.email,
      Message: query.query,
      Name: query.username,
    })),
  );
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  const workbookOut = XLSX.write(workbook, {
    type: "array",
    bookType: "xlsx",
  });
  return new Blob([workbookOut], { type: "application/octet-stream" });
};
