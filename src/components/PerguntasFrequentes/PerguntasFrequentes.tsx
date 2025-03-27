'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function PerguntasFrequentes() {
    const faqList = [
        {
            pergunta: "1. O que está incluso na Mentoria Turbo Digital?",
            resposta: `A Mentoria Turbo Digital é um programa completo de 7 módulos que inclui tudo o que você precisa para transformar o seu posicionamento digital e começar a vender mais:

            - Posicionamento estratégico
            - Técnicas para falar em frente às câmeras
            - Roteiros e gravações descomplicadas
            - Edição de vídeos simples e eficaz
            - Postagens que convertem
            - Tráfego pago para aumentar o alcance

            Além disso, você recebe 5 bônus exclusivos para potencializar os resultados!`,
        },
        {
            pergunta: "2. Como funciona o acesso aos módulos da mentoria?",
            resposta: `Você terá acesso imediato ao conteúdo assim que se inscrever. Os módulos são liberados de forma gradual para que você possa aprender e aplicar no seu ritmo.`,
        },
        {
            pergunta: "3. Posso aplicar as estratégias se sou iniciante no digital?",
            resposta: `Sim! A mentoria é ideal para iniciantes e também para quem já tem experiência, mas ainda não vê resultados constantes.`,
        },
        {
            pergunta: "4. Quanto tempo leva para ver resultados?",
            resposta: `Muitos alunos já começam a ver mudanças em 30 dias. O segredo é aplicar com consistência.`,
        },
        {
            pergunta: "5. E se eu não gostar da mentoria?",
            resposta: `Você tem 30 dias de garantia. Se não gostar, é só pedir reembolso — sem perguntas.`,
        },
        {
            pergunta: "6. Quais são as formas de pagamento?",
            resposta: `À vista ou em até 10x de R$100,00. Compra 100% segura.`,
        },
        {
            pergunta: "7. E se eu perder algum conteúdo?",
            resposta: `Todo o conteúdo fica disponível 24/7 para você acessar quando quiser.`,
        },
        {
            pergunta: "8. Como garantir minha vaga?",
            resposta: `Clique no botão "Garanta sua vaga agora" e siga o passo a passo simples.`,
        },
    ];

    return (
        <section className="w-full px-6 py-16 bg-emerald-50">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 text-center mb-10">
                    Perguntas Frequentes (FAQ)
                </h2>

                <Accordion type="multiple" className="space-y-4">
                    {faqList.map((item, index) => (
                        <AccordionItem value={`faq-${index}`} key={index} className="bg-white rounded-xl shadow-md">
                            <AccordionTrigger className="text-left text-lg font-semibold text-emerald-700 px-4 py-3">
                                {item.pergunta}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-800 text-base whitespace-pre-line px-4 pb-4">
                                {item.resposta}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                    href="https://wa.me/5518997541191"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-md text-center w-full sm:w-auto"
                >
                    FALAR COM SUPORTE
                </a>

                <a
                    href="https://wa.me/5518997541191"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-md text-center w-full sm:w-auto"
                >
                    COMPRAR AGORA
                </a>

                <a
                    href="https://www.instagram.com/laurapersonaldigital?igsh=MXRtdWNocXNjZDlzMg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-md text-center w-full sm:w-auto"
                >
                    INSTAGRAM
                </a>
            </div>

        </section>
    );
}