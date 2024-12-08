import BacktoTopButton from "@/components/BackToTopButton";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <main>{children}</main>
        <BacktoTopButton />
      </>
    )
  }