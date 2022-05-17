import { useState } from 'react'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import Layout from '../components/Layout'
import Header from '../components/Header'

const list = () => {
  const router = useRouter()
  const [destination, setDestination] = useState(router.query.destination)
  const [openDate, setOpenDate] = useState(router.query.openDate)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])
  const [options, setOptions] = useState({
    adult: router.query.adult,
    child: router.query.child,
    room: router.query.room,
  })

  return (
    <Layout>
      <Header type="list" />
      <div className="mt-5 flex content-center">
        <div className="max flex gap-5">
          <div className="sticky basis-1/4 rounded-lg bg-[#febb02] p-3">
            <h1 className="mb-3 text-xl text-[#555] ">Search</h1>
            <div className="mb-2 flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Destination
              </label>
              <input
                placeholder={destination}
                type="text"
                className="h-8 border-none p-1"
              />
            </div>
            <div className="mb-2 flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Check-in Date:{' '}
              </label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="flex h-8 cursor-pointer items-center bg-white p-1"
              >
                  {`${router.query.startDate} to ${router.query.endDate}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="mb-2 flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Options
              </label>
              <div className="p-3">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="w-12" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="w-12" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adults</span>
                  <input
                    type="number"
                    min={1}
                    className="w-12"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="w-12"
                    placeholder={options.child}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Rooms </span>
                  <input
                    type="number"
                    min={1}
                    className="w-12"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className="w-full border-none bg-[#0071c2] p-3 font-medium text-white">
              Search
            </button>
          </div>
          <div className="basis-1/2"></div>
        </div>
      </div>
    </Layout>
  )
}

export default list
