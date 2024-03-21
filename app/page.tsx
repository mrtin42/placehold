import Image from "next/image";
import { headers } from "next/headers";

export const runtime = "edge";

export async function generateMetadata() {
  const h = headers();
  console.log(h);
  let hostname: any = h.get("Host");
  hostname = hostname?.includes(":") ? hostname?.split(":")[0] : hostname;
  hostname = hostname?.split(".").length > 2 ? (function (hostname: string) {
    const parts = hostname.split(".");
    const length = parts.length;
    const tld = parts[length - 1];
    const domain = parts[length - 2];
    return `${domain}.${tld}`;
  })(hostname) : hostname;
  return {
    title: `${hostname} - Parked by MartinDEV`,
    description: `The domain ${hostname} is parked by MartinDEV.`,
    image: `https://${hostname}/og.png`,
  };
}

export default function Home() {
  const h = headers();
  console.log(h);
  let hostname: any = h.get("Host");
  hostname = hostname?.includes(":") ? hostname?.split(":")[0] : hostname;
  hostname = hostname?.split(".").length > 2 ? (function (hostname: string) {
    const parts = hostname.split(".");
    const length = parts.length;
    const tld = parts[length - 1];
    const domain = parts[length - 2];
    return `${domain}.${tld}`;
  })(hostname) : hostname;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <Image src="/logo.svg" width={100} height={100} alt="logo" />
        <h1 className="text-4xl font-bold mt-4">Parked by MartinDEV</h1>
        <p className="text-lg text-center mt-4">
          The domain <span className="font-bold">{hostname}</span> is parked by MartinDEV.
        </p>
      </div>
      <footer className="text-sm text-gray-400 mt-8">
        <p>&copy; {new Date().getFullYear()} MartinDEV</p>
      </footer>
    </main>
  );
}
