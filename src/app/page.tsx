import { CompanyInfo } from "@/components/features/company/company-start-page";
import { PersonalInfo } from "@/components/features/personal-info";
import { ProductShowcase } from "@/components/features/product-info";
import { CompanyTexts } from "@/components/features/company/company-texts";

export default function Home() {
  return (
    <div>
        <section id="company">
          <CompanyInfo />
         
          <CompanyTexts />
        </section>
        <section id="product">
          <ProductShowcase />
        </section>
        <section id="stuff">
          <PersonalInfo/> 
        </section>
      </div>
    );

}
