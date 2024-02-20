import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

export default function Portal() {
  const [showmodal, setShowmodal] = useState(false);
  return (
    <>
      <button onClick={() => setShowmodal(true)}>show</button>
      {showmodal &&
        createPortal(
          <Modal onClose={() => setShowmodal(false)} />,
          document.body
        )}
    </>
  );
}
