export type ThemeOptions = {
    light: ThemeColors;
    dark: ThemeColors;
};

type ThemeColors = {
    background: string;
    text: string;
    links: string;
};

export const themeOptions: ThemeOptions = {
    light: {
        background: "#ffffff",
        text: "#3e6270",
        links: "#058271",
    },
    dark: {
        background: "#223f4a",
        text: "#ffffff",
        links: "#1cceb5",
    },
};

export const getThemePreference = (): boolean => {
    const theme = localStorage.getItem("themePreference");
    if (theme) {
        setThemeColors(theme as keyof ThemeOptions);
        return theme === "light";
    } else return true;
};

export const setThemeColors = async (theme: keyof ThemeOptions) => {
    const body = document.querySelector("body");
    if (body) {
        body.style.setProperty("--bg-color", themeOptions[theme as keyof typeof themeOptions].background);
        body.style.setProperty("--text-color", themeOptions[theme as keyof typeof themeOptions].text);
        body.style.setProperty("--links-color", themeOptions[theme as keyof typeof themeOptions].links);
    }
};
