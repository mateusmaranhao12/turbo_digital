import { Button } from "@/components/ui/button"

export default function HeaderAplicacao() {

    function whatsApp() {
        window.open('wa.me/5518997541191')
    }

    return (
        <header className="p-8 text-center bg-gradient-to-b from-red-100 to-white rounded-b-2xl shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-4">
                Aprenda a Se Posicionar, Criar Conteúdo e Vender com Estratégia!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
                <span className="font-bold text-red-800">Chega de tentar adivinhar o que funciona.</span> Com a
                <span className="font-bold text-emerald-500"> Mentoria Turbo Digital</span>,
                você aprenderá as estratégias que realmente trazem resultados no digital, <span className="font-bold">de forma simples e prática!</span>
            </p>
            <Button onClick={whatsApp} className="mt-4 px-8 py-5 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition duration-300 shadow-lg cursor-pointer">
                Garanta sua vaga agora!
            </Button>
        </header>
    );
}
