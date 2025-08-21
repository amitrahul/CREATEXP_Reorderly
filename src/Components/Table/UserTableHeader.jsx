import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTableHeader } from "@/hooks/useReterieveData";

const UserTableHeader = () => {
  const [headerList] = useTableHeader();
  let headerLength = Object.keys(headerList).length;

  return (
    <TableHeader>
      <TableRow>
        {headerLength > 0 &&
          Object.entries(headerList).map(([key, value]) => (
            <TableHead key={key} className="w-[100px] bg-amber-100">
              {value}
            </TableHead>
          ))}
      </TableRow>
    </TableHeader>
  );
};

export default UserTableHeader;
