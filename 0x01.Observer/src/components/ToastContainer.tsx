import { useEffect } from "react";
import { Toast } from "./Toast";
import { observable } from "../utils/toast.util";

export function ToastContainer({toasts, setToasts}: any) {


  useEffect(() => {
    return observable.subscribe(event => {
      if(event.type === 'ADD_TOAST') {
        setToasts((prev: any) => [...prev, event.toast])
      }
    })
  }, []);
  
  return (
    <div className="absolute bottom-0 end-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs ">
      {toasts.map((toast: any) => (
        <Toast
          key={toast.id}
          variant={toast.variant}
          id={toast.id}
          message={toast.message}
          onClose={() => {}}
        />
      ))}
    </div>
  );
}
