const Navbar = () => {
  return (
    <nav className="flex h-12 justify-center bg-[#003580]">
      <div className="max flex items-center justify-between text-white">
        <span className="font-medium	">CozuBooking</span>
        <div>
          <button className="ml-5 cursor-pointer	border-none bg-white py-1.5 px-2.5 text-[#003580]">
            Register
          </button>
          <button className="ml-5 cursor-pointer	border-none bg-white py-1.5 px-2.5 text-[#003580]">
            Login
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
