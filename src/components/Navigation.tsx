import Link from "next/link"

interface NavigationProps {

}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <section className="h-[10vh] hidden sm:flex flex-row justify-end pt-7">
      <div className="flex gap-[60px]">
        <Link href="#"><a className="text-white text-2xl">Home</a></Link>
        <Link href="#"><a className="text-white text-2xl font-light">Explore</a></Link>
        <Link href="#"><a className="text-white text-2xl font-light">About us</a></Link>
      </div>
    </section>
  )
}

export default Navigation
