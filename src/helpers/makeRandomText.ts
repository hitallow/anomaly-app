function makeRandomText(length: number) {
  let text = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++)
    text += characters.charAt(Math.floor(Math.random() * charactersLength));

  return text;
}

export { makeRandomText };
