import CategoryHeader from "../components/categoryheader";

export default function LoreLayout({ children }: {
  children: React.ReactNode
}) {
  return (
      <section>
        <CategoryHeader />
        {children}
      </section>
  );
}