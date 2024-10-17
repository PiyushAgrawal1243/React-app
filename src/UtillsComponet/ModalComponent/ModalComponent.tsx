import { useEffect, useRef } from "react";

export interface ModalComponentProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: (dialog: React.RefObject<HTMLDialogElement> | null) => void;
    }

function ModalComponent({ children, isOpen, onClose }:ModalComponentProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (dialogRef.current) {
            if (isOpen) {
                dialogRef.current.showModal();
            } else {
                dialogRef.current.close();
            }
        }
    }, [isOpen]);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        onClose(dialogRef);
    }

  return (
   <dialog ref={dialogRef} >
    <div className="fixed inset-0 z-10 bg-black bg-opacity-50" onClick={handleClick}>
    </div>
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      {children}
    </div>
   </dialog>
  );
}

export default ModalComponent;