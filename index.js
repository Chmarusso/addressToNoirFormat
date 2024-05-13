export const formatAddr = (addr) => {
  console.log("test")
  return addr.replace("0x", "").match(/.{1,2}/g).map((x) => `0x${x}`).join(", ");
}