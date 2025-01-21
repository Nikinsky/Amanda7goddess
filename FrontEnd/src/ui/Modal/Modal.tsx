import React, { useState } from "react";
import ModalConsul from "@/ui/modalConsul/ModalConsul";

const App: React.FC = () => {
  const [modalType, setModalType] = useState<"form" | "success" | null>("form");

  const handleClose = (type?: "success" | null) => {
    if (type === "success") {
      setModalType("success");
    } else {
      setModalType(null); // Закрыть модалку
    }
  };

  return (
    <div>
      {modalType && <ModalConsul type={modalType} onClose={handleClose} />}
      <button onClick={() => setModalType("form")}>Открыть модалку</button>
    </div>
  );
};

export default App;
