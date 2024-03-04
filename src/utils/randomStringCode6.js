const randomStringCode6 = () => {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
  const stringLength = 6;
  let randomstring = "";
  for (let i = 0; i < stringLength; i++) {
    const rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
};

export default randomStringCode6;
