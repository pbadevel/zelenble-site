import Image from "next/image"
import { CoLeaders, TeamMember } from "@/lib/data"


export const PersonalInfo = () => {

  return (
    <div>
        <div className="min-h-screen bg-transparent py-8">
        <div className="max-w-7xl mx-auto px-4">
            {/* Заголовок */}
            <div className="text-center mb-12">
            <h1 className="text-3xl font-light text-white mb-2">Glavnie Penisi</h1>
            <div className="w-20 h-px bg-gray-600 mx-auto"></div>
            </div>

            {/* Список сотрудников */}
            <div className="space-y-12">
            {CoLeaders.map((member) => (
                <Person 
                key={member.id}
                member={member}
                />
            ))}
            </div>
        </div>
        </div>
    </div>
  )
}

interface PersonProps {
  member: TeamMember
}

export const Person = ({ member }: PersonProps) => {
  return (
    <>
        <div className="flex items-start gap-8 py-6 border-b border-gray-800 last:border-b-0">
        {/* Аватар */}
        {
            member.imageIsFirst && (
                <div className="flex-shrink-0">
                    <div className="w-50 h-50 rounded-lg overflow-hidden border border-gray-700">
                    <Image
                        className="w-full h-full object-cover"
                        alt={member.name}
                        width={100}
                        height={100}
                        src={member.image}
                    />
                    </div>
                </div>
            )
        }

        {/* Информация */}
        <div className="flex-1 min-w-0 py-10">
            <div className={`flex flex-wrap items-baseline ${member.imageIsFirst ? 'justify-start':'justify-end'} gap-4 mb-3`}>
                <h2 className="text-xl font-normal text-white truncate">
                    {member.name}
                </h2>
                <span className="text-sm text-gray-400 font-light">
                    {member.position}
                </span>
            </div>

            {/* Описание */}
            <div className="space-y-2">
            {member.description.map((item, index) => (
                <p 
                key={index}
                className={`text-gray-300 text-sm leading-relaxed font-light ${member.imageIsFirst ? 'text-start':'text-end'} `}
                >
                {item}
                </p>
            ))}
            </div>
        </div>
        {
            !member.imageIsFirst && (
                <div className="flex-shrink-0">
                    <div className="w-50 h-50 rounded-lg overflow-hidden border border-gray-700">
                    <Image
                        className="w-full h-full object-cover"
                        alt={member.name}
                        width={100}
                        height={100}
                        src={member.image}
                    />
                    </div>
                </div>
            )
        }
        </div>
    </>
  )
}