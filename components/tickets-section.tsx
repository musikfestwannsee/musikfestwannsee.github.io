import Image from "next/image"

export function TicketsSection() {

  return (
    <section
      id="tickets"
      className="py-20 water-bg"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title centered">Tickets & Spenden</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Auch in diesem Jahr ist der Eintritt frei.<br/>
            Um Anmeldung wird gebeten unter</p><br/>
            <h2 className="md:text-3xl text-xl font-bold text-slate-700 mb-4">musikfest.wannsee@gmail.com</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Wir freuen uns auf alle Zuhörer:innen!<br/><br/><br/>
            Um das Musikfest Wannsee auf musikalisch höchstem Niveau auch in Zukunft nachhaltig und verlässlich stattfinden lassen zu können, benötigen wir Ihre Unterstützung.<br/><br/> 
          </p>   
          <div className="flex items-center justify-center">
            <div className="w-5/6 md:w-1/2">
              <Image 
                src={"logos/Spendenkonto.png"} 
                alt="Logo der Evangelischen Kirchengemeinde Berlin-Wannsee" 
                layout="responsive" 
                width={1}
                height={1}
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
