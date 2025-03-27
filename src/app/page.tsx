import BonusExclusivos from "@/components/BonusExclusivos/BonusExclusivos";
import ClientesSatisfeitos from "@/components/ClientesSatisfeitos/ClientesSatisfeitos";
import HeaderAplicacao from "@/components/HeaderAplicacao/HeaderAplicacao"
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
    </div>
  );
}
