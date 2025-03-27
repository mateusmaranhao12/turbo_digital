import AcelerarResultados from "@/components/AcelerarResultados/AcelerarResultados";
import BonusExclusivos from "@/components/BonusExclusivos/BonusExclusivos";
import ClientesSatisfeitos from "@/components/ClientesSatisfeitos/ClientesSatisfeitos";
import Garantia from "@/components/Garantia/Garantia";
import HeaderAplicacao from "@/components/HeaderAplicacao/HeaderAplicacao"
import Investimento from "@/components/Investimento/Investimento";
import JaPassouPorIsso from "@/components/JaPassouPorIsso/JaPassouPorIsso";
import MentoriaTurboDigital from "@/components/MentoriaTurboDigital/MentoriaTurboDigital";
import SectionLaura from "@/components/SectionLaura/SectionLaura";

export default function Home() {
  return (
    <div>
      <HeaderAplicacao />
      <SectionLaura />
      <JaPassouPorIsso />
      <MentoriaTurboDigital />
      <BonusExclusivos />
      <ClientesSatisfeitos />
      <Investimento />
      <Garantia />
      <AcelerarResultados />
    </div>
  );
}
