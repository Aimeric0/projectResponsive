import { useParams } from "react-router-dom";
import OFFERS from "../features/offers/mock";
import OfferDetails from "../features/offers/OfferDetails";
import OfferDescription from "../features/offers/OfferDescription";
import CompanyPhotoPlaceholder from "../features/offers/OfferPhotoPlaceholder";
import OfferCTA from "../features/offers/OfferCTA";
import OfferHeader from "../layout/OfferHeader"

export default function Offer() {
  const { id } = useParams();
  const offer = OFFERS.find((o) => o.id === id);

  if (!offer) {
    return (
      <section className="mx-auto w-full max-w-6xl px-4 py-6">
        <h1 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
          Offre introuvable
        </h1>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6">
      <OfferHeader company={offer.company} />

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <OfferDetails
          domain={offer.domain}
          location={offer.location}
          duration={offer.duration}
          contact={offer.contact}
        />
        <CompanyPhotoPlaceholder />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <OfferDescription description={offer.description} companyAbout={offer.companyAbout} />
        <OfferCTA
          company={offer.company}
          onApply={() => alert(`Candidature envoyée à ${offer.company} (simulation)`)}
        />
      </div>
    </section>
  );
}
