type Props = {
  children: React.ReactNode;
  className?: string;
  cols: number;
  rows: number;
};

export default function Grid({ children, cols, rows, className }: Props) {
  return (
    <main
      className={`grid h-print w-print grid-cols-${cols} grid-rows-${rows} gap-Qinch p-Hinch pb-inch ${className}`}
    >
      {children}
    </main>
  );
}
