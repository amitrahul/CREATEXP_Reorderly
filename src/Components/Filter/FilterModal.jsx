import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { FaFilter } from "react-icons/fa";

import { useFilterOptions } from "@/hooks/useReterieveData";

const FilterModal = ({
  open,
  onClose,
  selectedSorts,
  setSelectedSorts,
  onApply,
}) => {
  const [filterOptionsList] = useFilterOptions();
  //   console.log("filterOptionsList", filterOptionsList);

  const handleToggle = (field, direction) => {
    setSelectedSorts((prev) => {
      const filtered = prev.filter((s) => s.field !== field);
      return [...filtered, { field, direction }];
    });
  };

  const isSelected = (field, direction) =>
    selectedSorts.some((s) => s.field === field && s.direction === direction);

  //   if (!open) return null;

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">
            <FaFilter />
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Sort By</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            {filterOptionsList &&
              filterOptionsList.map((opt) => (
                <div key={opt?.value} className="flex w-full flex-wrap gap-24">
                  <Badge variant="secondary" className="w-20">
                    {opt?.label}
                  </Badge>
                  <div className="flex gap-4">
                    {opt?.options.map((option) => (
                      <Button
                        key={option.value}
                        variant="outline"
                        className={
                          isSelected(opt.value, option.value)
                            ? "bg-green-500 text-white"
                            : ""
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          handleToggle(opt.value, option.value);
                        }}
                        type="button"
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={onApply}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default FilterModal;
