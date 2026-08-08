import { InviteOption } from "entities/invite/model/types";
import styles from "./OptionCard.module.scss"
import clsx from "clsx";
interface OptionCardProps {
  /*Доп классы*/
  className?: string;
  /**Данныее карточки*/
  option: InviteOption;
  /**Обработчик для кнопки удаления карточки */
  onRemove: (id: string) => void
  
}

export const OptionCard = (props: OptionCardProps) => {
  const {option, onRemove, className} = props
  return (
    <li className={clsx(styles.card, className)}>
      <div className={styles.info}>
        <h3 className={styles.name}>{option.name}</h3>
        <span>{option.time}</span>
        {option.weatherIcon && (
          <div className={styles.weather}>
            {option.weatherIcon} {option.weatherTemp}°
          </div>
        )}
      </div>
      <button className={styles.removeButton} onClick={() => onRemove(option.id)}>×</button>
    </li>
  );
};