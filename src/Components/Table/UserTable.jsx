import { Table, TableBody, TableCaption } from "@/components/ui/table";
import { useReterieveData } from "@/hooks/useReterieveData";
import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";
import { useMemo, useState } from "react";
import FilterModal from "../Filter/FilterModal";

const UserTable = () => {
  const [clientDataList] = useReterieveData();
  const [modalOpen, setModalOpen] = useState(false);
  const [appliedSorts, setAppliedSorts] = useState([]);
  const [selectedSorts, setSelectedSorts] = useState([]);

  // Filtered/sorted data
  const sortedData = useMemo(() => {
    if (!clientDataList) return [];
    if (!appliedSorts.length) return clientDataList;
    return [...clientDataList].sort((a, b) => {
      for (const sort of appliedSorts) {
        const { field, direction } = sort;
        let aValue = a[field];
        let bValue = b[field];

        // Handle number fields
        if (field === "id") {
          aValue = Number(aValue);
          bValue = Number(bValue);
        }

        // Handle date fields
        if (field === "createdAt" || field === "updatedAt") {
          aValue = new Date(aValue);
          bValue = new Date(bValue);
        }

        if (aValue < bValue) return direction === "asc" ? -1 : 1;
        if (aValue > bValue) return direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [clientDataList, appliedSorts]);

  // Modal handlers
  const handleApply = () => {
    setAppliedSorts(selectedSorts);
    setModalOpen(false);
  };
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
