import Image from "next/image";
import { headers } from "next/headers";
import hackedfont from "@/public/HACKED.module.css";
import localFont from 'next/font/local';

export const runtime = "edge";

const HACKED = localFont({
  src: "../fonts/HACKED.ttf", /* creds to David Libeau for the font */
  weight: "normal",
});

export async function generateMetadata() {
  const h = headers();
  // console.log(h);
  let hostname: any = h.get("Host");
  hostname = hostname?.includes(":") ? hostname?.split(":")[0] : hostname;
  hostname = hostname?.split(".").length > 2 ? (function (hostname: string) {
    const parts = hostname.split(".");
    const length = parts.length;
    const tld = parts[length - 1];
    console.log(`tld: ${tld}`);
    const SLDs = ["com", "net", "org", "co", "plc", "ltd",]
    console.log(`parts[length - 2]: ${parts[length - 2]}`);
    const eTLDs = /* effective TLDs as seen in the public suffix list */ ["pages.dev", "workers.dev"];
    let domain: string;
    if (SLDs.includes(parts[length - 2]) || eTLDs.includes(`${parts[length - 2]}.${tld}`)) {
      console.log(`parts[length - 2]: ${parts[length - 2]}`); // `parts[length - 2]: `
      console.log(`parts[length - 3]: ${parts[length - 3]}`); // `parts[length - 3]: `
      domain = `${parts[length - 3]}.${parts[length - 2]}`;
    } else {
      console.log(`parts[length - 2]: ${parts[length - 2]}`); // `parts[length - 2]: `
      domain = `${parts[length - 2]}`;
    }
    return `${domain}.${tld}`;
  })(hostname) : hostname;
  return {
    title: `${hostname} - Parked by MartinDEV`,
    description: `The domain ${hostname} is parked by MartinDEV.`,
    image: `https://placehold.pages.dev/og?hn=${hostname}`,
    openGraph: {
      title: `${hostname} - Parked by MartinDEV`,
      description: `The domain ${hostname} is parked by MartinDEV.`,
      images: [
        {
          url: `https://placehold.pages.dev/og?hn=${hostname}`,
          width: 1200,
          height: 630,
          alt: `${hostname} - Parked by MartinDEV`,
        },
      ]
    },
    twitter: {
      card: "summary_large_image",
      site: "@t_ub3",
      creator: "@t_ub3",
      images: [`https://placehold.pages.dev/og?hn=${hostname}`],
    },
  };
}

export default function Home() {
  const h = headers();
  // console.log(h);
  let hostname: any = h.get("Host");
  hostname = hostname?.includes(":") ? hostname?.split(":")[0] : hostname;
  hostname = hostname?.split(".").length > 2 ? (function (hostname: string) {
    const parts = hostname.split(".");
    const length = parts.length;
    const tld = parts[length - 1];
    console.log(`tld: ${tld}`);
    const SLDs = ["com", "net", "org", "co", "plc", "ltd",]
    console.log(`parts[length - 2]: ${parts[length - 2]}`);
    const eTLDs = /* effective TLDs as seen in the public suffix list */ ["pages.dev", "workers.dev"];
    let domain: string;
    if (SLDs.includes(parts[length - 2]) || eTLDs.includes(`${parts[length - 2]}.${tld}`)) {
      console.log(`parts[length - 2]: ${parts[length - 2]}`); // `parts[length - 2]: `
      console.log(`parts[length - 3]: ${parts[length - 3]}`); // `parts[length - 3]: `
      domain = `${parts[length - 3]}.${parts[length - 2]}`;
    } else {
      console.log(`parts[length - 2]: ${parts[length - 2]}`); // `parts[length - 2]: `
      domain = `${parts[length - 2]}`;
    }
    return `${domain}.${tld}`;
  })(hostname) : hostname;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <Image src="/logo.png " width={300} height={300} alt="logo" />
        <h1 className={`${HACKED.className} text-8xl mt-4`}>{hostname}</h1>
        <h2 className="text-4xl font-bold mt-4">Parked by MartinDEV</h2>
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

// goated domain parking page
