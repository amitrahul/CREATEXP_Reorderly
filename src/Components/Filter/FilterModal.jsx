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
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { useFilterOptions } from "@/hooks/useReterieveData";
import { useEffect, useRef } from "react";

const FilterModal = ({
  open,
  onClose,
  selectedSorts,
  setSelectedSorts,
  onApply,
}) => {
  const [filterOptionsList] = useFilterOptions();
  const listRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("selectedSorts", JSON.stringify(selectedSorts));
  }, [selectedSorts]);

  const handleToggle = (field, direction) => {
    setSelectedSorts((prev) => {
      const filtered = prev.filter((s) => s.field !== field);
      return [...filtered, { field, direction }];
    });
  };

  const isSelected = (field, direction) =>
    selectedSorts.some((s) => s.field === field && s.direction === direction);

  const selectedCount = selectedSorts.length;

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="relative w-40 h-10 flex items-center justify-center mb-4"
          >
            <FaFilter size={20} />
            Sort & Filter
            {selectedCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {selectedCount}
              </span>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Sort By</DialogTitle>
          </DialogHeader>
          <div ref={listRef} className="grid gap-4">
            {filterOptionsList &&
              filterOptionsList.map((opt) => (
                <div
                  key={opt?.value}
                  className="flex w-full flex-wrap gap-24 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:bg-amber-50 rounded"
                >
                  <Badge variant="secondary" className="w-20">
                    {opt?.label}
                  </Badge>
                  <div className="flex gap-4">
                    {opt?.options.map((option) => (
                      <Button
                        key={option.value}
                        variant="outline"
                        className={
                          (isSelected(opt.value, option.value)
                            ? "bg-green-500 text-white "
                            : "") + " transition-all duration-200 ease-in-out"
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          handleToggle(opt.value, option.value);
                        }}
                        type="button"
                      >
                        {option.label}{" "}
                        {(option.value === "asc" && <FiArrowUp />) || (
                          <FiArrowDown />
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
          </div>
          <DialogFooter>
            <Button
              className={"bg-amber-600 text-white"}
              variant="destructive"
              type="button"
              onClick={() => setSelectedSorts([])}
            >
              Clear
            </Button>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                type="submit"
                onClick={onApply}
                className="bg-blue-500 text-white"
              >
                Save changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default FilterModal;
