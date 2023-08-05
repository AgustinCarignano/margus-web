import { HomePage, AboutPage, ServicesPage, OurWorksPage } from "@src/_sections";
import Contact from "@src/_sections/Contact/Contact";

export default function MainPage() {
    return (
        <div>
            <HomePage />
            <AboutPage />
            <ServicesPage />
            <OurWorksPage />
            <Contact />
        </div>
    );
}
