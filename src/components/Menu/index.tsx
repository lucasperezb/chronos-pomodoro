import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

  function handleToggleTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault(); //Nao segue o link

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    })
    
  }

  // useEffect(() => {
  //   console.log("useEffect sem dependencias")
  // }) //executado toda vez que o componente renderiza na tela
 
 
  // useEffect(() => {
  //   console.log('useEffect com array deps vazio')
  // }, []) // Executa apenas quando o React monta o componente na tela pela primeira vez (executa somente uma vez)

  useEffect(() => { //Enquanto o valor theme nao mudar ele nao executa a funcao
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme]) //Executa apenas quando o valor de theme muda


  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="/"
        aria-label="Ir para home"
        title="Ir para Home"
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href="/"
        aria-label="Ver histórico"
        title="Ver histórico"
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href="/"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href="/"
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleToggleTheme}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
