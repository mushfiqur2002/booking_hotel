import { Search } from 'lucide-react'

function SearchInputFiled() {
    return (
        <div className='w-[90%] md:w-100'>
            <div className='center'>
                <div>
                    <label className="input validator join-item border-0 outline-none rounded-bl-[25px] rounded-tl-[25px]">
                        <Search size={20} />
                        <input
                            type="text"
                            placeholder="Search your destiny"
                            required
                            className='rounded-full px-4 pl-2 border-0 focus:border-transparent focus:outline-none' />
                    </label>
                    <div className="validator-hint hidden">Enter your destiny first</div>
                </div>
                <button className="btn btn-neutral join-item rounded-br-[25px] rounded-tr-[25px]">Search</button>
            </div>
        </div>
    )
}

export default SearchInputFiled
