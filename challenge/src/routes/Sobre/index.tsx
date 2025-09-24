import { useEffect } from "react";

export default function Sobre(){

      useEffect(()=>{
            document.title = "Sobre";
        },[])

    return(
        <main>
            <h1>Sobre</h1>
            <div>
                <p>
                    O Hospital das Clínicas tem como missão oferecer cuidado de excelência, com tradição e compromisso na saúde da comunidade. Sabemos que muitos de nossos pacientes idosos encontram barreiras para realizar o agendamento de consultas, seja pela dificuldade em utilizar sistemas digitais ou pela limitação de tempo e deslocamento

                    Pensando nisso, desenvolvemos uma plataforma acessível e simplificada, voltada especialmente para o público da terceira idade. Nossa solução prioriza facilidade de uso, clareza nas informações e atendimento humanizado, permitindo que cada paciente consiga marcar sua consulta de forma rápida, sem complicações e com total segurança.

                    Além do agendamento digital, nossa equipe de suporte está disponível para auxiliar em cada etapa do processo, garantindo que ninguém fique sem atendimento. O objetivo é unir tecnologia à tradição de décadas de cuidado médico, colocando o bem-estar dos nossos pacientes sempre em primeiro lugar.
                </p>
            </div>
        </main>
    );

}