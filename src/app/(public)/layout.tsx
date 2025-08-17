import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
