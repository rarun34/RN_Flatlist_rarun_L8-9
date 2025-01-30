type dataType = {
    id: string; //this is the unique identifier (like id number)
    title: string; //this is what our list will show
  };

const DATA: dataType[] = [
    { id: "1", title: "first" },
    { id: "2", title: "second" },
    { id: "3", title: "third" },
    { id: "4", title: "fourth" },
    { id: "5", title: "fifth" },
];

export {dataType, DATA}