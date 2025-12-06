import { useState } from "react"

function SearchFilter({ clicked }) {
    const [price, setPrice] = useState(400)
    return (
        <div className={`container w-full justify-center items-center ${clicked ? 'hidden md:flex' : 'flex'}`}>
            <form class="search-form center flex-col">
                <div className="flex flex-col gap-2">
                    <div class="form-row flex flex-wrap gap-2 center">
                        {/* duration stay */}
                        <div class="form-group w-[80%] md:w-[auto]">
                            <label className="select border-0 outline-none w-full">
                                <span className="label">Duration of Stay</span>
                                <select id="duration">
                                    <option value="">Select days</option>
                                    <option value="1">1 Day</option>
                                    <option value="2">2 Days</option>
                                    <option value="3">3 Days</option>
                                    <option value="4">4 Days</option>
                                    <option value="5">5 Days</option>
                                    <option value="6">6 Days</option>
                                    <option value="7">7 Days</option>
                                    <option value="8">8+ Days</option>
                                </select>
                            </label>
                        </div>

                        {/* select location  */}
                        <div class="form-group w-[80%] md:w-[auto]">
                            <label className="select border-0 outline-none w-full">
                                <span className="label">Location</span>
                                <select id="location">
                                    <option value="">Select a location</option>
                                    <option value="new-york">Near By</option>
                                    <option value="los-angeles">Los Angeles</option>
                                    <option value="chicago">Chicago</option>
                                    <option value="miami">Miami</option>
                                    <option value="las-vegas">Las Vegas</option>
                                    <option value="san-francisco">San Francisco</option>
                                    <option value="boston">Boston</option>
                                    <option value="seattle">Seattle</option>
                                </select>
                            </label>
                        </div>

                        {/* hotel rating */}
                        <div class="form-group w-[80%] md:w-[auto]">
                            <label className="select border-0 outline-none w-full">
                                <span className="label">Hotel Rating</span>
                                <select id="hotel_rating">
                                    <option value="">Select rating</option>
                                    <option value="1">1 </option>
                                    <option value="2">2 </option>
                                    <option value="3">3 </option>
                                    <option value="4">4 </option>
                                    <option value="5">5 </option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <div class="form-row gap-2 center">
                        {/* range per night */}
                        <div className="form-group bg-base-100 w-[80%] md:w-[50%] center px-3 py-2 rounded flex flex-col gap-2">
                            <label for="budget">
                                <p className="text-sm flex gap-6">
                                    <span className="text-[rgba(_0,_0,_0,_.5)]">Budget per Night </span>
                                    <span>Taka:- {price}</span></p>
                            </label>
                            <div className="w-full max-w-xs py-1">
                                <input
                                    type="range"
                                    min={100}
                                    max={1000}
                                    step={100}
                                    defaultValue={400}
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="range w-full h-[20px] custom-range"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="search-btn button mt-4">Search Hotels</button>
            </form>
        </div>
    )
}

export default SearchFilter
