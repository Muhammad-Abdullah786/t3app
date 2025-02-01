// "use client";

// import { type ElementRef, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { createPortal } from "react-dom";

// export function Modal({ children }: { children: React.ReactNode }) {
//   const router = useRouter();
//   const dialogRef = useRef<ElementRef<"dialog">>(null);

//   useEffect(() => {
//     if (!dialogRef.current?.open) {
//       dialogRef.current?.showModal();
//     }
//   }, []);

//   function onDismiss() {
//     router.back();
//   }

//   return createPortal(
//     <dialog
//       ref={dialogRef}
//       className="absolute h-screen w-screen justify-center bg-zinc-800/80 align-middle"
//       onClose={onDismiss}
//     >
//       {children}
//       {/* <button onClick={onDismiss} className="close-button" /> */}
//     </dialog>,
//     document.getElementById("modal-root")!,
//   );
// }

"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="fixed inset-0 flex items-center justify-center bg-zinc-800/80 p-4 backdrop-blur-sm"
      onClose={onDismiss}
    >
      <div className="relative w-full max-w-3xl rounded-lg bg-white p-4 shadow-lg">
        <button
          onClick={onDismiss}
          className="absolute right-3 top-3 text-xl text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
        <div className="flex items-center justify-center">{children}</div>
      </div>
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
