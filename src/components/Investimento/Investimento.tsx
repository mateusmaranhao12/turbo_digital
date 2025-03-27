export default function Investimento() {

    function whatsApp() {
        window.open('wa.me/5518997541191')
    }
    
    return (
        <section className="w-full px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-6">
                    Investimento e Condições Especiais
                </h2>

                <p className="text-lg md:text-xl text-gray-800 mb-4">
                    Agora, eu quero que você faça um <span className="text-emerald-600 font-semibold">investimento inteligente no seu futuro</span>.
                </p>

                <p className="text-lg md:text-xl text-gray-800 mb-4">
                    Você pode ter acesso à <strong>Mentoria Turbo Digital</strong> por apenas:
                </p>

                <p className="text-4xl font-bold text-emerald-500 mb-4">
                    R$997,00
                </p>

                <p className="text-lg md:text-xl text-emerald-700 mb-6">
                    Menos de <strong>R$100,00 por mês</strong> – acredite, essa é uma oferta que vai te pagar de volta rapidamente!
                </p>

                <button onClick={whatsApp} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl px-8 py-4 rounded-full shadow-lg flash-fast cursor-pointer">
                    EU QUERO
                </button>

                <p className="text-sm text-gray-500 mt-4">
                    Para se inscrever, basta clicar no botão acima <i className="fa-solid fa-circle-chevron-up"></i>
                </p>
            </div>
        </section>
    );
}
