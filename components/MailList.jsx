const MailList = () => {
  return (
    <div className="w-full mt-12 bg-[#003580] text-white flex flex-col items-center gap-5 p-12">
      <h1>Save time, save money!</h1>
      <span>Sign up and we'll send the best deals to you</span>
      <div>
        <input type="text" placeholder="Your Email" className="w-72 h-7 p-2 border-none mr-2 rounded" />
        <button className="h-8 bg-[#0071c2] text-white font-medium border-none rounded cursor-pointer px-6">Subscribe</button>
      </div>
    </div>
  )
}

export default MailList