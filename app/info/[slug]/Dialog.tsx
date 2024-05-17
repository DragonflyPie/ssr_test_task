"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "../../_components/Button";
import CloseIcon from "@/app/_components/CloseIcon";
import useClickOutside from "@/utils/useClickOutside";

const Dialog = () => {
  const searchParams = useSearchParams();
  const address = searchParams.get("address");
  const pathname = usePathname();
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const navigateBack = () => {
    router.replace(pathname);
  };

  useClickOutside(modalRef, navigateBack);

  return (
    <>
      {address && (
        <dialog className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
          <div
            className="relative flex flex-col items-center rounded bg-white p-6 pt-12"
            ref={modalRef}
          >
            <Link
              replace
              href={pathname}
              className="absolute right-3 top-3 cursor-pointer transition-all hover:scale-110 active:scale-95"
            >
              <CloseIcon />
            </Link>
            <p>Вы действительно хотите перейти на Яндекс карты?</p>
            <br />
            <div className="flex w-full justify-between">
              <Link replace href={pathname}>
                <Button value="Назад" />
              </Link>
              <Link href={`https://yandex.ru/maps/?text=${address}`}>
                <Button value="Перейти" type="secondary" />
              </Link>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Dialog;
