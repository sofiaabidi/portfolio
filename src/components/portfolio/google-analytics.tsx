"use client";

import Script from "next/script";
import { gaMeasurementId } from "@/lib/portfolio-data";

// Google Analytics 4 component. Only loads when NEXT_PUBLIC_GA_MEASUREMENT_ID
// is set, so the site stays analytics-free in dev until you're ready.
//
// Setup (2 minutes):
// 1. Go to https://analytics.google.com → Admin → Create account
// 2. Property name: "Sofia Abidi Portfolio"
// 3. Add a Web stream using the final deployed portfolio URL.
//    (or your custom domain later — the same GA ID works across all)
// 4. Copy the Measurement ID (looks like G-XXXXXXXXXX)
// 5. In Vercel → Settings → Environment Variables, add:
//    NEXT_PUBLIC_GA_MEASUREMENT_ID = G-XXXXXXXXXX
// 6. Redeploy. Data starts flowing into GA within ~5 minutes.
export function GoogleAnalytics() {
  if (!gaMeasurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}', {
            page_path: window.location.pathname + window.location.search,
          });
        `}
      </Script>
    </>
  );
}
