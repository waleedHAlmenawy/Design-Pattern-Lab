import { useState } from "react";
import { Button } from "./components/Button";
import { ToastContainer } from "./components/ToastContainer";
import { toast } from "./utils/toast.util";
import { ToastProps } from "./components/Toast";

function App() {
  const [toasts, setToasts] = useState<
    Pick<ToastProps, "id" | "message" | "variant">[]
  >([]);

  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-7xl font-bold text-center">Hello, World</h1>

      <div className="space-x-2">
        <Button onClick={() => toast("default")}>Default</Button>
        <Button onClick={() => toast.success("success")}>Success ✅</Button>
        <Button onClick={() => toast.error("error")}>Error ❌</Button>
        <Button
          onClick={() => {
            setToasts([]);
          }}
        >
          Dismess All 💔
        </Button>
      </div>

      <ToastContainer toasts={toasts} setToasts={setToasts} />
    </div>
  );
}

export default App;
