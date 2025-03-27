import { Button } from "@/components/ui/button";

export default function AcelerarResultados() {
    return (
        <section className="w-full px-6 py-16 bg-red-50">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-6">
                    Pronta para Acelerar Seus Resultados?
                </h2>

                <p className="text-lg md:text-xl text-gray-800 mb-4">
                    Não deixe para amanhã o sucesso que você pode alcançar hoje.
                </p>

                <p className="text-lg md:text-xl text-gray-800 mb-8">
                    Se você realmente quer transformar seu posicionamento no digital e alcançar as vendas que merece, <span className="text-emerald-800 font-semibold">
                        essa é a sua chance!
                    </span>
                </p>

                <Button className="text-lg px-8 py-4 font-semibold bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white rounded-full shadow-lg transition duration-300">
                    Garanta sua vaga agora
                </Button>
            </div>
        </section>
    );
}
