import { Button } from "@/components/ui/button"

export default function HeaderAplicacao() {
    return (
        <header className="p-8 text-center bg-gradient-to-b from-green-200 to-white rounded-b-2xl shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                Transforme Seu Negócio Digital: Aprenda a Se Posicionar, Criar Conteúdo e Vender com Estratégia!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                Chega de tentar adivinhar o que funciona. Com a
                <span className="font-bold text-red-500"> Mentoria Turbo Digital</span>,
                você aprenderá as estratégias que realmente trazem resultados no digital, de forma simples e prática!
            </p>
            <Button className="mt-4 px-8 py-5 text-lg font-bold bg-red-500 hover:bg-red-600 text-white rounded-full transition duration-300 shadow-lg cursor-pointer">
                Garanta sua vaga agora!
            </Button>
        </header>
    );
}
