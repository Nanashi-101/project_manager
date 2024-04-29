
type HeaderProps = {
  headerText: string
}
const Header = ({ headerText }: HeaderProps) => {
  return (
    <div className="relative">
      <h1 className='max-w-[1240px] mx-auto text-6xl font-semibold text-center my-10'>{headerText}</h1>
    </div>
  )
}

export default Header