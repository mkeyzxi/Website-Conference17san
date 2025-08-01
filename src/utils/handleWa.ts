// utils/handleWa.ts
export default function handleWA() {
	const phoneNumber = '6285342181132';
	const message = 'Halo, saya ingin menghubungi panitia perayaan HUT RI';
	const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
	return url;
}
