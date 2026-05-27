"use client";
import React from "react";
import { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";

const ToastContext = createContext<any>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState({ message: "", type: "success" });

  const showToast = (message: any, type: string = "success") => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast({ message: "", type: "success" });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-wrapper">
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      </div>
    </ToastContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
