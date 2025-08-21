import { Table, TableBody, TableCaption } from "@/components/ui/table";
import { useReterieveData } from "@/hooks/useReterieveData";
import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";
import { useMemo, useState } from "react";
import FilterModal from "../Filter/FilterModal";

const UserTable = () => {
  const [clientDataList] = useReterieveData();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedField, setSelectedField] = useState("name");
  const [selectedDirection, setSelectedDirection] = useState("asc");
  const [selectedSorts, setSelectedSorts] = useState([]);

  // Filtered/sorted data
  const sortedData = useMemo(() => {
    if (!clientDataList) return [];
    const field = selectedField;
    const direction = selectedDirection;
    return [...clientDataList].sort((a, b) => {
      if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
      if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [clientDataList, selectedField, selectedDirection]);

  // Modal handlers
  const handleApply = () => setModalOpen(false);

  return (
    <>
      <FilterModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedSorts={selectedSorts}
        setSelectedSorts={setSelectedSorts}
        onApply={handleApply}
      />

      <h3 className="text-lg text-center font-bold">user Table</h3>
      <Table className="m-2 p-5">
        <TableCaption>A list of client.</TableCaption>
        <UserTableHeader />
        <TableBody>
          {sortedData &&
            sortedData.map((user) => (
              <UserTableRow key={user.id} user={user} />
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UserTable;
