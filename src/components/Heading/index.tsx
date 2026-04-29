import styles from "./styles.module.css";

type HeadingProps = {
  children: React.ReactNode; // tudo que o react aceita como tipo esta nesse tipo aqui
};

//desestruturacao de props
export function Heading({ children }: HeadingProps) {
  return (
    <div>
      
      <h1 className={styles.heading}>{children}</h1>
    </div>
  );
}
