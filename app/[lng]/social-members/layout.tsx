import "@/styles/global.css";
import { draftMode } from "next/headers";
import { SiteLocale } from "@/graphql/generated";
import getAvailableLocales from "../../i18n/settings";

type Params = {
  children: React.ReactNode;
  params: {
    lng: SiteLocale;
  };
};

export async function generateStaticParams() {
  const languages = await getAvailableLocales();
  return languages.map((language) => {
    language;
  });
}

export default async function RootLayout({
  children,
  params: { lng },
}: Params) {
  const { isEnabled } = draftMode();
  return (
    <>
      {children}
    </>
  );
}
