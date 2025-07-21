import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, AlertCircle, Info, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export interface ToastData {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
  duration?: number;
}

interface ToastNotificationProps {
  toasts: ToastData[];
  onRemove: (id: string) => void;
}

const ToastNotification = ({ toasts, onRemove }: ToastNotificationProps) => {
  const getIcon = (type: ToastData['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-600" />;
      default:
        return <Zap className="w-5 h-5 text-purple-600" />;
    }
  };

  const getBackgroundColor = (type: ToastData['type']) => {
    switch (type) {
      case 'success':
        return 'from-green-50 to-emerald-50 border-green-200';
      case 'error':
        return 'from-red-50 to-pink-50 border-red-200';
      case 'warning':
        return 'from-yellow-50 to-orange-50 border-yellow-200';
      case 'info':
        return 'from-blue-50 to-cyan-50 border-blue-200';
      default:
        return 'from-purple-50 to-indigo-50 border-purple-200';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-[9999] space-y-2 max-w-sm">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 300, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`bg-gradient-to-r ${getBackgroundColor(toast.type)} border shadow-lg rounded-lg p-4 min-w-[320px] backdrop-blur-sm`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {getIcon(toast.type)}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                  {toast.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {toast.message}
                </p>
              </div>
              <button
                onClick={() => onRemove(toast.id)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastNotification;

// Toast manager hook
export const useToast = () => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (toast: Omit<ToastData, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };
    
    setToasts(prev => [...prev, newToast]);

    // Auto remove after duration
    setTimeout(() => {
      removeToast(id);
    }, toast.duration || 5000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const showSuccess = (title: string, message: string, duration?: number) => {
    addToast({ type: 'success', title, message, duration });
  };

  const showError = (title: string, message: string, duration?: number) => {
    addToast({ type: 'error', title, message, duration });
  };

  const showInfo = (title: string, message: string, duration?: number) => {
    addToast({ type: 'info', title, message, duration });
  };

  const showWarning = (title: string, message: string, duration?: number) => {
    addToast({ type: 'warning', title, message, duration });
  };

  return {
    toasts,
    removeToast,
    showSuccess,
    showError,
    showInfo,
    showWarning,
  };
};
