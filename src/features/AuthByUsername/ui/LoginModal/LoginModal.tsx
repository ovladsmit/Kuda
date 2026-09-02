import { Modal } from 'shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';
interface LoginModalProps {
  /*Доп классы*/
  className?: string;
  /*Состояние открытия*/
  isOpen?: boolean
  /*Функция закрытия*/
  onClose?: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={className}>
      <LoginForm/>
    </Modal>
  );
};