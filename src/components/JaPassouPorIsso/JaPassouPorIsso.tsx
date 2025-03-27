'use client'
import Image from "next/image"
export default function JaPassouPorIsso() {
    return (
        <section className="w-full px-6 py-12 bg-gradient-to-b from-red-100">
            <div className="max-w-4xl mx-auto text-start">
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-8">
                    A sua realidade hoje é assim?
                </h2>

                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    <span className="text-red-900"><i className="fa-solid fa-xmark"></i></span> Já tentou de tudo nas redes sociais e as vendas continuam baixas?
                </p>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    <span className="text-red-900"><i className="fa-solid fa-xmark"></i></span> Está quase desistindo por não ver resultados?
                </p>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    <span className="text-red-900"><i className="fa-solid fa-xmark"></i></span>  Cansado(a) de não entender porque seu conteúdo não gera
                    engajamento.
                </p>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    <span className="text-red-900"><i className="fa-solid fa-xmark"></i></span> Ou não sabe como criar uma estratégia que realmente converta?
                </p>

                <p className="text-lg md:text-xl font-bold text-emerald-600 uppercase">Você não está só! Eu te entendo.</p>
                <p className="text-lg md:text-xl text-gray-600 mt-4">
                    O digital parece um labirinto sem fim, mas a boa notícia é: <span className="font-bold text-emerald-600">eu tenho o caminho para você sair desse labirinto.</span>
                </p>
                <div className="flex justify-start">
                    <Image
                        src={"/labirinto.jpg"}
                        alt={"Mentoria Turbo Digital"}
                        width={632}
                        height={32}
                        quality={100}
                        className="rounded-2xl h-80 object-cover shadow-lg mt-10"
                    />
                </div>
            </div>
        </section>
    );
}