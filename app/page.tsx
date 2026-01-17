import Header from '@/components/Header'
import MissionVision from '@/components/MissionVision'
import Targets from '@/components/Targets'
import RoleResponsibilities from '@/components/RoleResponsibilities'
import Members from '@/components/Members'
import Ventures from '@/components/Ventures'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <MissionVision />
      <Targets />
      <RoleResponsibilities />
      <Members />
      <Ventures />
      <CTA />
      <Footer />
      <BackToTop />
      <FloatingCTA />
    </main>
  )
}
