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
