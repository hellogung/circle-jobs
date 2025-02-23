import { ReactNode } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  title?: string;
  padding?: boolean;
  children: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({
  title,
  children,
  footer,
  isOpen = false,
  onClose,
  padding = true,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={onClose} className="relative z-10">
          {/* Overlay dengan transisi masuk & keluar */}
          <DialogBackdrop>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gray-500/75"
            />
          </DialogBackdrop>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full  items-center  justify-center p-4 text-center sm:items-center sm:p-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div
                    className={`bg-white ${
                      padding ? "px-4 pt-5 pb-4 sm:p-6 sm:pb-4" : ""
                    }`}
                  >
                    {title && (
                      <DialogTitle
                        as="h3"
                        className="text-base font-semibold text-gray-900"
                      >
                        {title}
                      </DialogTitle>
                    )}
                    {children}
                  </div>
                  {footer && (
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      {footer}
                    </div>
                  )}
                </DialogPanel>
              </motion.div>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
