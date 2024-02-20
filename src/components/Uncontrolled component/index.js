import { useRef } from "react";
export default function Uncontrolled() {
  const InputRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    alert("File name:" + InputRef.current.files[0].name);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" ref={InputRef} />

      <input type="submit" value="submit" />
    </form>
  );
}
