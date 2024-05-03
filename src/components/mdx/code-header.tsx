interface CodeHeaderProps {
  text: string;
}

export default function CodeHeader({ text }: CodeHeaderProps) {
  return (
    <div className='tw-rounded-t-md tw-bg-zinc-200 tw-px-4 tw-py-2 tw-font-mono tw-text-sm tw-text-neutral-700 dark:tw-bg-zinc-700 dark:tw-text-neutral-300'>
      {text}
    </div>
  );
}
