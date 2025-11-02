import { CompanyInfo } from "@/components/features/company/company-info"
import { PersonalInfo } from "@/components/features/team/personal-info"
import { FallingImages } from "@/components/ui/falling-images-bg"


const CompanyPage = () => {

  return (

    <>
        <FallingImages />
        <CompanyInfo />
        <PersonalInfo />
    </>
  )
}

export default CompanyPage