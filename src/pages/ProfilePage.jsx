import { APPLIED_OFFERS, USER } from "../features/profile/data";
import ProfileCard from "../features/profile/ProfileCard";
import AppliedOffersSection from "../features/profile/AppliedOffers";

export default function ProfilePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6" aria-labelledby="profile-title">
      <h1 id="profile-title" className="text-lg font-semibold" style={{ color: "var(--text)" }}>
        Profil utilisateur
      </h1>

      <ProfileCard user={USER} />
      <AppliedOffersSection offers={APPLIED_OFFERS} />
    </section>
  );
}