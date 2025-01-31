import React from "react";

interface Column {
  head: string;
  element?: React.ReactNode;
  width?: string;
}

interface StyleRow {
  position: number;
  style: string;
}

interface DevTableProps {
  data: Record<string, React.ReactNode>[];
  columns?: (string | Column)[];
  stickyColumns?: string[];
  styleRows?: StyleRow[];
}

const DevTable = ({
  data,
  columns = [],
  stickyColumns = [],
  styleRows = [],
}: DevTableProps) => {
  const headers = columns.length
    ? columns.map((col) => (typeof col === "string" ? col : col.head))
    : data.length
    ? Object.keys(data[0])
    : [];

  if (columns.length) {
    data.forEach((row, index) => {
      const rowKeys = Object.keys(row);
      const invalidKeys = rowKeys.filter((key) => !headers.includes(key));
      if (invalidKeys.length > 0) {
        throw new Error(
          `Data at index ${index} contains invalid columns: ${invalidKeys.join(
            ", "
          )}. Allowed columns are: ${headers.join(", ")}.`
        );
      }
    });
  }

  if (!data.length && !columns.length) {
    return (
      <div className="text-center p-4 text-ACCENT/80">No data available</div>
    );
  }

  const currentData = data;

  const formatCellValue = (value: any) => {
    if (React.isValidElement(value)) return value;
    if (value === null || value === undefined) return "-";
    if (typeof value === "boolean") return value.toString();
    if (typeof value === "object") return JSON.stringify(value);
    return value;
  };

  const getRowStyle = (rowIndex: number) => {
    const rowStyle = styleRows.find((style) => style.position === rowIndex);
    return rowStyle ? rowStyle.style : "";
  };

  const getColumnWidth = (col: string | Column) => {
    if (typeof col === "string") return "auto";
    return col.width || "auto";
  };

  const headerItems = columns.length ? columns : headers;

  return (
    <div className="w-full max-h-screen overflow-x-auto border rounded-lg border-ACCENT/50">
      <table className="w-full table-auto divide-y divide-ACCENT/30">
        <thead className="bg-ACCENT text-white">
          <tr>
            {headerItems.map((col: string | Column, index) => {
              const header = typeof col === "string" ? col : col.head;
              const headerElement =
                typeof col === "string" ? header : col.element || header;
              const width = getColumnWidth(col);
              const isSticky = stickyColumns.includes(header);
              const isLastSticky =
                isSticky && headers.indexOf(header) === headers.length - 1;

              return (
                <th
                  key={header}
                  className={`
                    px-4 py-2 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap
                    ${isSticky ? "sticky z-10 bg-ACCENT" : ""}
                    ${isLastSticky ? "right-0" : isSticky ? "left-0" : ""}
                  `}
                  style={{
                    width: width,
                    maxWidth: width === "auto" ? "none" : width,
                  }}
                >
                  <div className="flex items-center gap-1">
                    <span className="truncate">{headerElement}</span>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-ACCENT/30">
          {data.length ? (
            currentData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`hover:bg-LIGHT/50 hover:dark:bg-DARK/50 ${getRowStyle(
                  rowIndex
                )}`}
              >
                {headers.map((header, colIndex) => {
                  const col = headerItems[colIndex];
                  const width = getColumnWidth(col);
                  const isSticky = stickyColumns.includes(header);
                  const isLastSticky =
                    isSticky && headers.indexOf(header) === headers.length - 1;

                  return (
                    <td
                      key={`${rowIndex}-${header}`}
                      className={`
                        px-4 py-2 text-sm whitespace-nowrap
                        ${isSticky ? "sticky z-10 bg-LIGHT dark:bg-DARK" : ""}
                        ${isLastSticky ? "right-0" : isSticky ? "left-0" : ""}
                      `}
                      style={{
                        width: width,
                        maxWidth: width === "auto" ? "none" : width,
                      }}
                    >
                      <div className="overflow-hidden overflow-ellipsis">
                        {formatCellValue(row[header])}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={headers.length}
                className="px-4 py-2 text-center text-ACCENT/80"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DevTable;
