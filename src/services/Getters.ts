//this is just for before we have the api
const wrap = (val: any) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(val);
    })
  );
};

export function incomingAmount() {
  return wrap(324);
}
export function outgoingAmount() {
  return wrap(172);
}

export function getTrips() {
  const trips = [
    {
      id: 1,
      name: "Beach Getaway",
      participants: ["Alice", "Bob"],
      amountOwed: 85,
    },
    {
      id: 2,
      name: "Mountain Hike",
      participants: ["Charlie", "Dave"],
      amountOwed: 120,
    },
  ];
  return wrap(trips);
}

export function getFriends() {
  const data = [
    {
      name: "John Doe",
      amount: 312,
      key: 1,
    },
    {
      name: "Jonathan Little",
      amount: -312,
      key: 2,
    },
    {
      name: "Samantha ",
      amount: -401,
      key: 3,
    },
  ];

  return wrap(data);
}
