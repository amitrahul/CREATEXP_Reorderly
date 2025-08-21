import { useEffect, useState } from "react";

export const useReterieveData = () => {
  const [clinetData, setClientData] = useState([]);

  useEffect(() => {
    import("../data/clientData").then((data) => {
      setClientData(data.CLIENT_DATA);
    });
  }, []);

  return [clinetData];
};

export const useTableHeader = () => {
  const [tableHeader, setTableHeader] = useState({});

  useEffect(() => {
    import("../data/TableHeaderData").then((data) => {
      setTableHeader(data.TABLE_HEADER);
    });
  }, []);

  return [tableHeader];
};

export const useFilterOptions = () => {
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    import("../data/filterOptionData").then((filterData) => {
      setFilterOptions(filterData.FILTER_OPTIONS);
    });
  });

  return [filterOptions];
};
