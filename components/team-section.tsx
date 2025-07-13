import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function TeamSection() {
  // Sample team data
  const teamMembers = [
    {
        name: 'Johanna Kaldewei', 
        image: 'team/JohannaKaldewei.png',
        role: 'Initiatorin \nCo-Creator \nKünstlerische Leitung \nVeranstaltungsmanagement',
    },
    {
        name: 'Alice von Podbielski-Stellpflug', 
        image: 'team/AliceStellpflug.png',
        role: 'Co-Creator\nVeranstaltungsmanagement\nFundraising\nPR',
    },
    {
        name: 'Thorsten Kaldewei', 
        image: 'team/ThorstenKaldewei.png',
        role: 'Co-Creator\nProgrammgestaltung',
    },
    {
        name: 'Silja Rheingans', 
        image: 'team/SiljaRheingans.png',
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
                <div>{member.role.split('\n').map((line, index) => (
                      <p key={index} className="text-sm font-medium text-teal-600 dark:text-teal-400 mb-3">
                          {line}
                          <br />
                      </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>  
      <div className="flex items-center justify-center m-10">
        <Card className="w-3/4 lg:w-1/2 md:2/3  overflow-hidden bg-beige-50 border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative w-full">
              <Image 
                src={"logos/Logo_Ev_Kirche.png"} 
                alt="Logo der Evangelischen Kirchengemeinde Berlin-Wannsee" 
                layout="responsive" 
                width={1}
                height={1}
                className="object-cover"
              />
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
