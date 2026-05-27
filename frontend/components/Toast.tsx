import { AlertCircle, CheckCircle, Info, X, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Toast({ message, type = "success", onClose }: any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for fade out animation
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  const icons = {
    success: <CheckCircle className="toast-icon success" size={20} />,
    error: <XCircle className="toast-icon error" size={20} />,
    info: <Info className="toast-icon info" size={20} />,
    warning: <AlertCircle className="toast-icon warning" size={20} />
  };

  return (
    <div className={`toast-container ${isVisible ? "show" : "hide"}`}>
      <div className={`toast-content ${type}`}>
        {icons[type as keyof typeof icons]}
        <p className="toast-message">{message}</p>
        <button onClick={() => setIsVisible(false)} className="toast-close" aria-label="Close">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
