import { Button } from "@/components/ui/button";

export default function SectionLaura() {
    return (
        <section className="w-full px-6 py-12 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-6">
                        Eu sou a Laura Ruiz
                    </h2>
                    <p className="text-gray-800 text-lg mb-4">
                        Sou especialista em marketing digital e minha missão é transformar o potencial do seu negócio em resultados reais.
                        Ajudar você a se posicionar no digital e aumentar suas vendas é o meu trabalho, e eu estou aqui para te ajudar a conquistar a visibilidade que você sempre sonhou.
                    </p>
                    <p className="text-gray-800 text-lg mb-6">
                        Minha abordagem é simples, mas poderosa: <span className="font-semibold text-emerald-500">posicionamento estratégico</span>,
                        <span className="font-semibold text-emerald-500"> conteúdo de qualidade</span> e
                        <span className="font-semibold text-emerald-500"> tráfego pago inteligente</span>.
                        Estou aqui para colocar um <span className="font-bold uppercase text-emerald-600">TURBO</span> no seu negócio digital!
                    </p>
                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-white text-base font-semibold px-6 py-3 rounded-full shadow-md cursor-pointer">
                        Fale comigo
                    </Button>
                </div>

                <div className="flex justify-center">
                    <img
                        src="/IMG_1549.png"
                        alt="Laura Ruiz"
                        className="rounded-2xl w-72 h-auto object-cover shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
