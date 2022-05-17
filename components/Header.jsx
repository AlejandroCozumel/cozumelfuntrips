import { useState } from 'react'
import { useRouter } from 'next/router'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import { MdHotel } from 'react-icons/md'
import {
  FaPlane,
  FaUmbrellaBeach,
  FaTaxi,
  FaCalendar,
  FaUsers,
} from 'react-icons/fa'
import { AiTwotoneCar } from 'react-icons/ai'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

const Header = ({ type }) => {
  const [destination, setDestination] = useState('')
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    child: 0,
    room: 1,
  })
  const [openOptions, setOpenOptions] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])
  const startDate = format(date[0].startDate, 'MM/dd/yyyy')
  const endDate = format(date[0].endDate, 'MM/dd/yyyy')

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
    }))
  }
  const router = useRouter()

  const handleSearch = () => {
    router.push({
      pathname: '/list',
      query: { destination, openDate, ...options, startDate, endDate },
    })
  }

  return (
    <div className="relative flex justify-center bg-[#003580] text-white">
      <div className="max mt-5 ml-24 py-16">
        <div className="mb-10 flex gap-10">
          <div className="headerList	 active">
            <MdHotel />
            <span>Stays</span>
          </div>
          <div className="headerList">
            <FaPlane />
            <span>Flights</span>
          </div>
          <div className="headerList">
            <AiTwotoneCar />
            <span>Car rentals</span>
          </div>
          <div className="headerList">
            <FaUmbrellaBeach />
            <span>Attractions</span>
          </div>
          <div className="headerList">
            <FaTaxi />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            <h1 className="">A lifetime to discounts? It's Genius.</h1>
            <p className="my-5">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="button">Sign in / Register</button>
            <div className="max absolute bottom-[-35px] flex h-16 items-center justify-around rounded border-4 border-solid border-[#febb02] bg-white py-3">
              <div className="flex items-center gap-3">
                <MdHotel className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Where are you going"
                  className="border-none text-gray-400 outline-none"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-3">
                <FaCalendar className="text-gray-400" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="cursor-pointer text-gray-400"
                >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyyy'
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    ranges={date}
                    moveRangeOnFirstSelection={false}
                    minDate={new Date()}
                    className="absolute top-[60px] z-10"
                  />
                )}
              </div>
              <div className="flex items-center gap-3">
                <FaUsers className="text-gray-400" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="cursor-pointer text-gray-400"
                >
                  {`${options.adult} adults · ${options.child} children · ${options.room} room`}{' '}
                </span>
                {openOptions && (
                  // agregar box shadow
                  <div className="absolute top-[60px] z-10 rounded bg-white text-gray-400 shadow-2xl ">
                    <div className="m-3 flex w-52 justify-between">
                      <span className="text-black">Adult</span>
                      <div className="flex items-center gap-3 text-xs text-black">
                        <button
                          disabled={options.adult <= 1}
                          className="h-8 w-8 border-2 border-solid border-[#0071c2]"
                          onClick={() => handleOption('adult', 'd')}
                        >
                          -
                        </button>
                        <span className="">{options.adult}</span>
                        <button
                          className="h-8 w-8 border-2 border-solid border-[#0071c2]"
                          onClick={() => handleOption('adult', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="m-3 flex w-52 justify-between">
                      <span className="text-black">Children</span>
                      <div className="flex items-center gap-3 text-xs text-black">
                        <button
                          disabled={options.child <= 0}
                          className="h-8 w-8 border-2 border-solid border-[#0071c2]"
                          onClick={() => handleOption('child', 'd')}
                        >
                          -
                        </button>
                        <span className="">{options.child}</span>
                        <button
                          className="h-8 w-8 border-2 border-solid border-[#0071c2]"
                          onClick={() => handleOption('child', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="m-3 flex w-52 justify-between">
                      <span className="text-black">Room</span>
                      <div className="flex items-center gap-3 text-xs text-black">
                        <button
                          disabled={options.room <= 1}
                          className="h-8 w-8 border-2 border-solid border-[#0071c2]"
                          onClick={() => handleOption('room', 'd')}
                        >
                          -
                        </button>
                        <span className="">{options.room}</span>
                        <button
                          className="h-8 w-8 border-2 border-solid border-[#0071c2]"
                          onClick={() => handleOption('room', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="cursor-pointer rounded border-none bg-[#0071c2] p-3 font-medium text-white"
                  onClick={handleSearch}
                >
                  Search
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
