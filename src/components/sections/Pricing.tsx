"use client";
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { PRICING_DATA } from "@/constants/pricing-data";
import { ConnectionSelector } from "./pricing/ConnectionSelector";
import { PlanCard } from "./pricing/PlanCard";
import { PricingHeading } from "./pricing/PricingHeading";
import { Bolt, Gem, Star } from "lucide-react";

const PurchaseModal = dynamic(
  () => import("./pricing/PurchaseModal").then((mod) => mod.PurchaseModal),
  { ssr: false },
);

interface Plan {
  name: string;
  duration: string;
  price?: string;
  devices?: number;
  isFree?: boolean;
}

interface PricingProps {
  pillText?: string;
  title?: React.ReactNode;
  subtitle?: string;
}

const Pricing = ({ pillText, title, subtitle }: PricingProps = {}) => {
  const [connections, setConnections] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  // Ref + Effect pattern to keep latest connections value without
  // writing to ref during render (React 19 compliance).
  const connectionsRef = useRef(connections);
  useEffect(() => {
    connectionsRef.current = connections;
  }, [connections]);

  const currentPrices = PRICING_DATA[connections as keyof typeof PRICING_DATA];

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleConnectionsChange = useCallback(
    (n: number) => setConnections(n),
    [],
  );

  const handleBuy = useCallback((plan: Plan) => {
    setSelectedPlan({
      ...plan,
      devices: connectionsRef.current,
    });
    setIsModalOpen(true);
  }, []);

  const monthlyPrices = useMemo(() => {
    const calc = (price: string, months: number) => {
      const num = parseFloat(price.replace(",", "."));
      return (num / months).toLocaleString("nl-NL", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    };
    return {
      halfYear: calc(currentPrices.halfYear, 6),
      yearly: calc(currentPrices.yearly, 12),
      biyearly: calc(currentPrices.biyearly, 24),
    };
  }, [currentPrices]);

  return (
    <section
      id="pakketten"
      className="py-24 relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 900px" }}
    >
      {/* Scroll anchor for the /#prijzen nav link — 1 px block at the section
          top so the IntersectionObserver detects the section entering viewport.
          scroll-mt-24 offsets browser-native hash navigation past the navbar. */}
      <span id="prijzen" className="block h-px scroll-mt-24" aria-hidden="true" />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-france-400/5 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PricingHeading pillText={pillText} title={title} subtitle={subtitle} />

        <div className="scroll-mt-24 text-center mb-16">
          <ConnectionSelector
            active={connections}
            onChange={handleConnectionsChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Free Trial */}
          <PlanCard
            name="Gratis Proef"
            duration="1 uur"
            isFree
            connections={1}
            features={[
              "Toegang tot basiskanalen",
              "Klantenservice 24/7",
              "HD & Full HD kwaliteit",
              "4K beschikbaar",
              "Geen creditcard nodig",
              "Directe activering",
              "Zonder verplichting",
            ]}
            buttonText="1u gratis proberen"
            onBuy={() =>
              handleBuy({
                name: "Gratis Proef",
                duration: "1 uur",
                isFree: true,
              })
            }
          />

          {/* 6 Months */}
          <PlanCard
            name="6 Maanden Abonnement"
            duration="6 maanden"
            price={currentPrices.halfYear}
            connections={connections}
            badge={{
              icon: Bolt,
              text: "40% KORTING",
              className: "text-france-400",
            }}
            savingsLabel={`BESPAREN - €${monthlyPrices.halfYear}/maand`}
            monthlyPriceLabel={`Slechts €${monthlyPrices.halfYear} per maand`}
            features={[
              "Films & series on demand",
              "Klantenservice 24/7",
              "4K, Full HD, HD & SD",
              "Uitgebreid kanaalaanbod",
              "Gratis updates",
              "30 dagen niet-goed-geld-terug",
            ]}
            buttonText="Bestel nu"
            onBuy={() =>
              handleBuy({
                name: "6 MAANDEN ABONNEMENT",
                duration: "6 maanden",
                price: currentPrices.halfYear,
              })
            }
          />

          {/* 12 Months - POPULAR */}
          <PlanCard
            name="1 Jaar Abonnement"
            duration="1 jaar"
            price={currentPrices.yearly}
            isPopular
            connections={connections}
            badge={{
              icon: Star,
              text: "AANBEVOLEN | 50% KORTING",
              className: "text-france-300",
            }}
            savingsLabel={`POPULAIR - €${monthlyPrices.yearly}/maand`}
            monthlyPriceLabel={`Slechts €${monthlyPrices.yearly} per maand`}
            features={[
              "Films & series on demand",
              "Klantenservice 24/7",
              "4K, Full HD, HD & SD",
              "Uitgebreid kanaalaanbod",
              "Gratis updates",
              "30 dagen niet-goed-geld-terug",
            ]}
            buttonText="Bestel nu"
            onBuy={() =>
              handleBuy({
                name: "1 JAAR ABONNEMENT",
                duration: "1 jaar",
                price: currentPrices.yearly,
              })
            }
          />

          {/* 24 Months - BEST VALUE */}
          <PlanCard
            name="2 Jaar Abonnement"
            duration="2 jaar"
            price={currentPrices.biyearly}
            isBestValue
            connections={connections}
            badge={{
              icon: Gem,
              text: "BESTE PRIJS | 60% KORTING",
              className: "text-rouge-500",
            }}
            savingsLabel={`2 JAAR BESPAREN - €${monthlyPrices.biyearly}/maand`}
            monthlyPriceLabel={`Slechts €${monthlyPrices.biyearly} per maand`}
            features={[
              "Films & series on demand",
              "VIP-klantenservice 24/7",
              "4K, Full HD, HD & SD",
              "Uitgebreid kanaalaanbod",
              "Updates met voorrang",
              "30 dagen niet-goed-geld-terug",
            ]}
            buttonText="Bestel nu"
            onBuy={() =>
              handleBuy({
                name: "2 JAAR ABONNEMENT",
                duration: "2 jaar",
                price: currentPrices.biyearly,
              })
            }
          />
        </div>
      </div>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
      />
    </section>
  );
};

export default Pricing;
