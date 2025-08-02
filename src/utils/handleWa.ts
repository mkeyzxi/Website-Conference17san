// utils/handleWa.ts
export default function handleWA() {
  const phoneNumber = "6287823505392";
  const message =
    "Halo, saya ingin menghubungi panitia perayaan HUT RI ke-80 di RT III Karema Utara.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return url;
}
