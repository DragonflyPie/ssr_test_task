import Search from "@/app/_components/Search";

const ResultsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full max-w-7xl flex-col items-center gap-12 p-4">
      <Search />
      {children}
    </div>
  );
};

export default ResultsLayout;
