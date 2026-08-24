import { useEffect, useState } from 'react';

interface BugButtonProps {
  /*Доп классы*/
  className?: string;
  
}


export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false)
  const handleButton = () => {
    setError(true)
  }

  useEffect(() => {
    if(error){
      throw new Error('Тест ошибка')
    }
  }, [error])

  return (
    <div className={className}>
      <button onClick={handleButton}>
        Вызов ошибки
      </button>
    </div>
  );
};