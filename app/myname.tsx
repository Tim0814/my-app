export default function Home() {
  //假如設default，你在其他檔案匯入Myname.tsx的時候會直接匯入Home()的值
  return <h2>i am batman </h2>;
}

export function Test() {
  return <h2>i am batman2 </h2>;
}
