import Heading from "@/components/common/heading";
import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { serverTranslation } from "@/i18n";

interface BlogHeaderProps {
  title: string;
  imageSrc: string | StaticImport;
  imageAlt: string;
  updatedTime: Date;
}
export default async function BlogHeader(props: BlogHeaderProps) {
  const { t } = await serverTranslation("en", "blogPost");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formattedDate = `${
    months[props.updatedTime.getMonth()]
  } ${props.updatedTime.getDate()}, ${props.updatedTime.getFullYear()}`;

  return (
    <div className='tw-w-full tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-8'>
      <Heading.H1 className='tw-mb-6'>{props.title}</Heading.H1>
      <div className='tw-relative tw-w-full xl:tw-h-[800px] lg:tw-h-[600px] md:tw-h-[400px] sm:tw-h-[300px] tw-h-[250px]'>
        <Image src={props.imageSrc} alt={props.imageAlt} placeholder='blur' fill objectFit='cover' />
      </div>
      <div>
        <time dateTime={props.updatedTime.toISOString()}>{t("lastUpdate", { time: formattedDate })}</time>
      </div>
    </div>
  );
}
