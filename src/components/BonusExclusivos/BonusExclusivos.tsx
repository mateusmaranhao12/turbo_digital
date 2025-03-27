'use client';
import { Button } from "../ui/button";

export default function MentoriaTurboDigital() {

    function whatsApp() {
        window.open('wa.me/5518997541191')
    }

    const bonusList = [
        {
            titulo: 'Bônus 1',
            destaque: '10 Prompts para ChatGPT',
            descricao: 'Produza roteiros envolventes em minutos e crie conteúdos irresistíveis.',
        },
        {
            titulo: 'Bônus 2',
            destaque: 'Pack com Ideias para Iniciar um Vídeo',
            descricao: 'Diga adeus ao bloqueio criativo com ideias prontas para começar a gravar.',
        },
        {
            titulo: 'Bônus 3',
            destaque: 'Lista de Equipamentos para Gravação',
            descricao: 'Equipamentos essenciais que não pesam no bolso, mas elevam a qualidade do seu conteúdo.',
        },
        {
            titulo: 'Bônus 4',
            destaque: 'Pack de Ferramentas Essenciais',
            descricao: 'Ferramentas que vão simplificar sua rotina de criação e otimizar o tempo.',
        },
        {
            titulo: 'Bônus 5',
            destaque: 'Checklist para Marketing Perfeito',
            descricao: 'Nunca mais perca os detalhes! Tenha tudo sob controle para uma execução impecável.',
        },
    ];

    return (
        <section className="w-full px-6 py-12 bg-red-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 text-center mb-6">
                    Bônus Exclusivos para Você!
                </h2>

                <p className="text-lg text-emerald-700 text-center mb-8">
                    Ao se inscrever agora, você vai receber <strong>5 bônus extras</strong> que vão potencializar os resultados e acelerar sua jornada digital!
                </p>

                <ul className="space-y-4">
                    {bonusList.map((bonus, index) => (
                        <li
                            key={index}
                            className="bg-white p-5 rounded-xl shadow-md text-lg text-gray-800"
                        >
                            <span className="text-emerald-500 font-bold">{bonus.titulo}:</span>{" "}
                            <strong>{bonus.destaque}</strong>: {bonus.descricao}
                        </li>
                    ))}
                </ul>

                <p className="text-lg text-gray-700 mt-8 text-center">
                    Esses bônus vão ser sua <span className="text-emerald-700 font-bold">arma secreta</span> para acelerar seus resultados!
                </p>
            </div>
            <div className="flex justify-center">
                <Button onClick={whatsApp} className="mt-6 px-8 py-5 text-lg font-bold bg-emerald-500 
                    hover:bg-emerald-600 text-white rounded-full transition duration-300 
                    shadow-lg cursor-pointer uppercase"
                >
                    Preciso disso tudo
                </Button>
            </div>
        </section>
    );
}