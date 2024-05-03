import { Inter } from "next/font/google";

import { serverTranslation } from "@/i18n";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { t } = await serverTranslation("en", "main", {
    keyPrefix: "mainLayout.metadata",
  });

  return (
    <div className='w-full tw-flex tw-justify-center tw-px-4 tw-py-6'>
      <div className='tw-container'>{children}</div>
    </div>
  );
}
