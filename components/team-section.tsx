import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function TeamSection() {
  // Sample team data
  const teamMembers = [
    {
        name: 'Johanna Kaldewei', 
        image: 'Team/JohannaKaldewei.png',
        role: 'Initiatorin \nCo-Creator \nKünstlerische Leitung \nVeranstaltungsmanagement',
    },
    {
        name: 'Alice von Podbielski-Stellpflug', 
        image: 'Team/AliceStellpflug.png',
        role: 'Co-Creator\nVeranstaltungsmanagement\nFundraising\nPR',
    },
    {
        name: 'Thorsten Kaldewei', 
        image: 'Team/ThorstenKaldewei.png',
        role: 'Co-Creator\nProgrammgestaltung',
    },
    {
        name: 'Silja Rheingans', 
        image: 'Team/SiljaRheingans.png',
        role: 'Webmaster',
    },
  ]

  return (
    <section id="team" className="py-20 water-bg-backwards">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Das Team</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden bg-beige-50 border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6 dark:bg-slate-800">
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{member.name}</h4>
                <p className="text-sm font-medium text-teal-600 dark:text-teal-400 mb-3">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>  
      <div className="flex items-center justify-center m-10">
        <Card className="w-1/2 overflow-hidden bg-beige-50 border-none shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative w-full h-52">
            <Image src={"logos/Logo_Ev_Kirche.png"} alt="Logo der Evangelischen Kirchengemeinde Berlin-Wannsee" fill className="object-cover" />
          </div>
          <CardContent className="p-6 bg-beige">
            <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
              In Zusammenarbeit mit der Evangelischen Kirchengemeinde Berlin-Wannsee<br/>
              und der Kirche St. Peter und Paul auf Nikolskoe<br/></h4>
            <p className="text-sm font-medium text-teal-600 dark:text-teal-400 mb-3">Sapna Joshi, Pfarrerin der Ev. Gemeinde Berlin-Wannsee</p>
          </CardContent>
        </Card>
      </div>

    </section>
  )
}

/*
    {
        name: 'In Zusammenarbeit mit der Evangelischen Kirchengemeinde Berlin-Wannsee\nund der Kirche St. Peter und Paul auf Nikolskoe\n', 
        image: 'logos/Logo_Ev_Kirche.png',
        role:
        'Sapna Joshi, Pfarrerin der Ev. Gemeinde Berlin-Wannsee\n' + 
        'Alice von Podbielski-Stellpflug, Vorsitzende des Gemeindekirchenrates und des Kuratoriums'
    },
    */
