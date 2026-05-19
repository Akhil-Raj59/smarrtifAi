import Link from "next/link";

export default function Brand({ dark = false }: any) {
  return (
    <Link href="/" className={`brand ${dark ? "brand--dark" : ""}`} aria-label="SMARRTIF AI home">
      <span>SMARRTIF</span>
      <strong>AI</strong>
    </Link>
  );
}
