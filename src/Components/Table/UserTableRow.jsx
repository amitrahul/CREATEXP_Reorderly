import { TableCell, TableRow } from "@/components/ui/table";

const UserTableRow = ({ user }) => {
  const { id, name, email, createdAt, updatedAt, status } = user;
  return (
    <TableRow>
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{createdAt}</TableCell>
      <TableCell>{updatedAt}</TableCell>
      <TableCell>{status}</TableCell>
    </TableRow>
  );
};

export default UserTableRow;
