// src/components/Button.tsx
import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  onClick: () => void;
  variant: "primary" | "secondary" | "outline";
};

export default function Button({ text, onClick, variant }: ButtonProps) {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
}
