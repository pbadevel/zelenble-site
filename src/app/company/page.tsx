import { CompanyInfo } from "@/components/features/company/info"
import { PersonalInfo } from "@/components/features/personal-info"
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