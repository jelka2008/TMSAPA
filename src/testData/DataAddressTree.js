const DataAddressTree = [
  {
    id: 0,
    data: "0",
    group: true,
    children: [
      {
        id: 1,
        data: "01",
        group: true,
        children: [
          {
            id: 2,
            data: "011",
            group: false,
            children: "",
          },
          {
            id: 6,
            data: "012",
            group: true,
            children: [
              {
                id: 12,
                data: "0121",
                group: false,
                children: "",
              },
              {
                id: 13,
                data: "0122",
                group: false,
                children: "",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        data: "02",
        group: true,
        children: [
          {
            id: 5,
            data: "021",
            group: false,
            children: "",
          },
          {
            id: 7,
            data: "022",
            group: false,
            children: "",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    data: "1",
    group: true,
    children: [
      {
        id: 4,
        data: "11",
        group: false,
        children: "",
      },
    ],
  },
  {
    id: 8,
    data: "2",
    group: true,
    children: [
      {
        id: 9,
        data: "21",
        group: false,
        children: "",
      },
      {
        id: 10,
        data: "22",
        group: false,
        children: "",
      },
      {
        id: 11,
        data: "23",
        group: false,
        children: "",
      },
    ],
  },
  {
    id: 12,
    data: "3",
    group: true,
    children: [
      {
        id: 13,
        data: "31",
        group: false,
        children: "",
      },
      {
        id: 14,
        data: "32",
        group: false,
        children: "",
      },
      {
        id: 15,
        data: "33",
        group: false,
        children: "",
      },
    ],
  },
];

export default DataAddressTree;
