/* eslint-disable @typescript-eslint/no-explicit-any */
let Formate: (date: string) => any
// eslint-disable-next-line prefer-const
Formate = function (time) {
  const indexB = time.indexOf(' ')
  return time.slice(indexB)
}
export default Formate
