import { PersonalInfo } from "@/components/features/personal-info";



const TeamPage = () => {
    return (
        <div className="pt-20 text-[var(--text-foreground)] w-full h-full">
            <div className="flex items-center justify-center">
                <PersonalInfo /> 
            </div>
        </div>
    )
}

export default TeamPage;