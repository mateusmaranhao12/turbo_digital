'use client'
import Image from "next/image"
export default function MentoriaTurboDigital() {
    return (
        <section className="w-full px-6 py-12 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div className="flex justify-center">
                    <Image
                        src={"/IMG_1455.png"}
                        alt={"Mentoria Turbo Digital"}
                        width={332}
                        height={332}
                        quality={100}
                        className="rounded-2xl w-72 h-auto object-cover shadow-lg"
                    />
                </div>
                <div>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-6">
                            O que é a Mentoria Turbo Digital?
                        </h2>

                        <p className="text-lg md:text-xl text-gray-800 mb-4">
                            A Mentoria Turbo Digital é um acompanhamento estratégico pensado para quem quer
                            transformar seu negócio online de verdade. Chega de achismos, chega de se sentir perdido(a).
                        </p>

                        <p className="text-lg md:text-xl text-gray-800 mb-4">
                            Aqui você vai aprender a se posicionar como autoridade, criar conteúdo que conecta e
                            implementar estratégias de vendas que funcionam — tudo de forma prática, com o meu suporte.
                        </p>

                        <p className="text-lg md:text-xl text-emerald-600 font-bold mb-6">
                            Essa não é só mais uma mentoria. É a virada de chave que você estava procurando.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}