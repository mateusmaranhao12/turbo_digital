export default function PerguntasFrequentes() {
    const faqList = [
        {
            pergunta: "1. O que está incluso na Mentoria Turbo Digital?",
            resposta: `A Mentoria Turbo Digital é um programa completo de 7 módulos que inclui tudo o que você precisa para transformar o seu posicionamento digital e começar a vender mais:\n
                - Posicionamento estratégico\n
                - Técnicas para falar em frente às câmeras\n
                - Roteiros e gravações descomplicadas\n
                - Edição de vídeos simples e eficaz\n
                - Postagens que convertem\n
                - Tráfego pago para aumentar o alcance\n
                Além disso, você recebe 5 bônus exclusivos para potencializar os resultados!`,
        },
        {
            pergunta: "2. Como funciona o acesso aos módulos da mentoria?",
            resposta: `Você terá acesso imediato ao conteúdo assim que se inscrever. Os módulos são liberados de forma gradual para que você possa aprender e aplicar o conteúdo no seu ritmo. As aulas são 100% online e você pode assistir onde e quando quiser, no conforto da sua casa.`,
        },
        {
            pergunta: "3. Posso aplicar as estratégias se sou iniciante no digital?",
            resposta: `Sim! A Mentoria Turbo Digital foi desenvolvida para qualquer pessoa que queira aprender a se posicionar no digital, independentemente do nível de experiência. Eu te guio passo a passo, com técnicas fáceis de aplicar e muito práticas.`,
        },
        {
            pergunta: "4. Quanto tempo leva para ver resultados?",
            resposta: `O tempo pode variar, mas com a aplicação constante das estratégias, muitos dos meus clientes começam a ver resultados em até 30 dias. O segredo é ser consistente e seguir o que ensino no curso. O mais importante é que o seu posicionamento digital vai evoluir constantemente à medida que você aplica os ensinamentos.`,
        },
        {
            pergunta: "5. E se eu não gostar da mentoria?",
            resposta: `Eu tenho uma garantia de 30 dias. Se você sentir que a mentoria não é para você ou que não está trazendo os resultados esperados, basta me avisar e devolvo o seu investimento, sem perguntas ou complicação. Sua satisfação é a minha prioridade!`,
        },
        {
            pergunta: "6. Quais são as formas de pagamento?",
            resposta: `Você pode pagar à vista ou em até 10x de R$100,00. A compra é feita de forma segura pela plataforma de pagamentos, garantindo que seu processo de inscrição seja simples e tranquilo.`,
        },
        {
            pergunta: "7. O que acontece se eu perder algum conteúdo ao longo da mentoria?",
            resposta: `Não se preocupe! Todos os conteúdos da mentoria ficam disponíveis para você 24/7, o que significa que você pode assistir e revisar as aulas quantas vezes quiser. E se precisar de ajuda, estou à disposição para tirar dúvidas.`,
        },
        {
            pergunta: "8. Como posso garantir minha vaga agora?",
            resposta: `Basta clicar no botão "Garanta sua vaga agora" e escolher a forma de pagamento que mais se adapta a você. O processo é simples e seguro, e sua vaga será reservada instantaneamente!`,
        },
    ];

    return (
        <section className="w-full px-6 py-16 bg-emerald-50">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 text-center mb-10">
                    Perguntas Frequentes (FAQ)
                </h2>

                <div className="space-y-6">
                    {faqList.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md"
                        >
                            <h3 className="text-lg font-bold text-emerald-700 mb-2">
                                {item.pergunta}
                            </h3>
                            <p className="text-gray-800 whitespace-pre-line text-base leading-relaxed">
                                {item.resposta}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
