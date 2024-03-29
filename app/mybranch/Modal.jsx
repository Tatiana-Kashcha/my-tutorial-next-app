'use client';

import { useEffect } from 'react';

import { ButtonWithSvg } from '@/app/ui/components/buttons';

import { CloseBigIcon } from '@/public/icons';
import { AngleLeftIcon } from '@/public/icons';

const btnStyle = 'left-0 flex cursor-pointer flex-center bg-transparent';

export function Modal({ children, onClose, title }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    // document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div
        className="absolute right-0 top-0 z-40 h-dvh w-screen bg-black/25"
        onClick={handleBackdropClick}
      >
        <div className="fixed right-0 top-0 w-full mob:w-[375px] tab:w-[768px]">
          <div className="flex justify-between bg-accent-100 px-3 py-[8px]">
            <ButtonWithSvg
              buttonStyle={`${btnStyle}`}
              click={onClose}
              buttonSvgComponent={<AngleLeftIcon />}
            />
            <p className="flex items-center text-body1">{title}</p>
            <ButtonWithSvg
              buttonStyle={`${btnStyle}`}
              click={onClose}
              buttonSvgComponent={<CloseBigIcon />}
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
