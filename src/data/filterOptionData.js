export const FILTER_OPTIONS = [
  {
    label: "Client Name",
    value: "name",
    options: [
      { label: "A-Z (Ascending)", value: "asc" },
      { label: "Z-A (Descending)", value: "desc" },
    ],
  },
  {
    label: "Created At",
    value: "createdAt",
    options: [
      { label: "Newest to Oldest", value: "desc" },
      { label: "Oldest to Newest", value: "asc" },
    ],
  },
  {
    label: "Updated At",
    value: "updatedAt",
    options: [
      { label: "Newest to Oldest", value: "desc" },
      { label: "Oldest to Newest", value: "asc" },
    ],
  },
  {
    label: "Client Id",
    value: "id",
    options: [
      { label: "A-Z", value: "asc" },
      { label: "Z-A", value: "desc" },
    ],
  },
];
