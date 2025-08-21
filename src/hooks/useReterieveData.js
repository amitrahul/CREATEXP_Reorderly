import { useEffect, useState } from "react";

export const useReterieveData = () => {
  const [clinetData, setClientData] = useState([]);

  useEffect(() => {
    import("../data/clientData").then((data) => {
      setClientData(data.clientData);
    });
  }, []);

  return [clinetData];
};

export const useTableHeader = () => {
  const [tableHeader, setTableHeader] = useState({});

  useEffect(() => {
    import("../data/TableHeaderData").then((data) => {
      setTableHeader(data.tableHeader);
    });
  }, []);

  return [tableHeader];
};
