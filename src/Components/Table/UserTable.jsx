import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useReterieveData } from "@/hooks/useReterieveData";
import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";

const UserTable = () => {
  const [clientDataList] = useReterieveData();
  console.log("Client Data List:", clientDataList);

  return (
    <>
      <h3 className="text-lg text-center font-bold">user Table</h3>
      <Table className="m-2 p-5">
        <TableCaption>A list of client.</TableCaption>
        <UserTableHeader />
        <TableBody>
          {clientDataList &&
            clientDataList.map((user) => (
              <UserTableRow key={user.id} user={user} />
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UserTable;
