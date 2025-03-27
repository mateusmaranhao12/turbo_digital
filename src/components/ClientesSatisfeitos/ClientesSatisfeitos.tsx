export default function ClientesSatisfeitos() {
    const depoimentos = [
        {
            nome: "Carlos",
            texto: `Depois de começar a mentoria, vi meu engajamento aumentar de forma absurda! 
            Em apenas 3 meses, as vendas aumentaram 200% através do WhatsApp! 
            O método da Laura funciona!`,
        },
        {
            nome: "Nathália",
            texto: `Eu estava perdida, tentando de tudo sem saber o que estava errado. 
            Agora, com o posicionamento correto e as estratégias de tráfego, estou vendo o retorno imediato e consistente. 
            Vale cada centavo!`,
        },
    ];

    return (
        <section className="w-full px-6 py-12 bg-emerald-50">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 text-center mb-10">
                    Clientes Satisfeitos com Resultados Reais!
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {depoimentos.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md text-gray-800 text-lg"
                        >
                            <p className="mb-4 italic">“{item.texto}”</p>
                            <p className="text-right font-semibold text-emerald-700">– {item.nome}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
