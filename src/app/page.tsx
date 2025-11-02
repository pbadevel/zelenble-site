import { MainPage } from "@/components/features/company-start-page";
import { ProductShowcase } from "@/components/features/product-info";
import { CompanyTexts } from "@/components/features/company/company-texts";

export default function Home() {
  return (
    <div>
        <section id="company">
          <MainPage />
          <CompanyTexts />
        </section>
      </div>
    );

}
