const fibonnaci = (nth: number) => {
  let x = 0;
  let y = 1;

  for (let i = 0; i <= nth; i++) {
    let tmp = y;
    y += x;
    x = tmp;
  }

  return y;
};

export { fibonnaci };
