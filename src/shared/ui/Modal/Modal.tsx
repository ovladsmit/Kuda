import clsx from 'clsx';
import styles from './Modal.module.scss';
import { ReactNode, useCallback, useEffect, useRef, useState, useLayoutEffect } from 'react';
import { Portal } from '../Portal/Portal';
interface ModalProps {
  /*Доп классы*/
  className?: string;
  /**Контент модального окна*/
  children?: ReactNode;
  /**Состояние модального окна*/
  isOpen?: boolean
  /**Функция закрытия*/
  onClose?: () => void
}

const ANIMATION_DELAY = 300
const MODAL_ROOT_ID = 'modal-root'

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const [modalRoot, setModalRoot] = useState<HTMLElement | undefined>(undefined)

  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  // Порталим не в document.body напрямую, а в узел внутри .app,
  // чтобы модалка наследовала CSS-переменные темы (--overlay-color, --surface-color и т.д.)

  useLayoutEffect(() => {
    setModalRoot(document.getElementById(MODAL_ROOT_ID) ?? undefined)
  }, [])
  return (
    <Portal element={modalRoot}>
      <div className={clsx(className, styles.modal, { [styles.opened]: isOpen }, { [styles.isClosing]: isClosing })}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={clsx(styles.content)} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>

  );
};