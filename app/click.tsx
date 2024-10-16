import { useState } from "react";
import Name, { Test as T } from "./myname"; //Myname代表Myname.tsx的default值(沒有default的都要加括號{})
import styles from "./page.module.css";

function MyClickButton(props: any) {
  function click() {
    props.setCount(props.count + 1); // setCount只負責調動count變數，並不會return任何值
  }
  return <button onClick={click}>Click me</button>;
}
export default function Click() {
  const [count, setCount] = useState(0); //usestate一定要綁在元件裡，

  // function handleClick() {
  //   setCount(count + 1);
  //   alert(count);
  // }
  return (
    <div className={styles.main}>
      {count}
      <Name />
      <T></T>
      <MyClickButton counts={count} setcount={setCount} />{" "}
      {/* <button onClick={handleClick}>Click Me</button> */}
    </div>
  );
}
