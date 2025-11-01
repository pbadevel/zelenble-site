import Image from "next/image"
import { CoLeaders, TeamMember } from "@/lib/personal-data"

export const PersonalInfo = () => {
  return (
    <div className="bg-transparent py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-2">Glavnie Penisi</h1>
          <div className="w-16 sm:w-18 lg:w-20 h-px bg-gray-600 mx-auto"></div>
        </div>

        {/* Список сотрудников */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {CoLeaders.map((member) => (
            <Person 
              key={member.id}
              member={member}
            />
          ))}
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
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6 lg:gap-8 py-4 sm:py-5 lg:py-6 border-b border-gray-800 last:border-b-0">
      {/* Аватар - для мобильных всегда сверху */}
      <div className={`flex-shrink-0 ${!member.imageIsFirst ? 'lg:order-3' : ''}`}>
        <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-50 lg:h-50 rounded-lg overflow-hidden border border-gray-700">
          <Image
            className="w-full h-full object-cover"
            alt={member.name}
            width={200}
            height={200}
            src={member.image}
          />
        </div>
      </div>

      {/* Информация */}
      <div className={`flex-1 w-full ${member.imageIsFirst ? 'lg:text-left' : 'lg:text-right'} text-center lg:text-left`}>
        <div className={`flex flex-col sm:flex-row ${member.imageIsFirst ? 'sm:justify-start lg:justify-start' : 'sm:justify-end lg:justify-end'} items-center gap-2 sm:gap-4 mb-3`}>
          <h2 className="text-lg sm:text-xl lg:text-xl font-normal text-white">
            {member.name}
          </h2>
          <span className="text-xs sm:text-sm lg:text-sm text-gray-400 font-light">
            {member.position}
          </span>
        </div>

        {/* Описание */}
        <div className="space-y-2 sm:space-y-3">
          {member.description.map((item, index) => (
            <p 
              key={index}
              className={`text-gray-300 text-xs sm:text-sm lg:text-sm leading-relaxed font-light ${member.imageIsFirst ? 'text-start' : 'lg:text-end text-start'}`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}