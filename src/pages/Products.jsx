import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { FaSearch } from 'react-icons/fa';

const Products = () => {
    const [search, setSearch] = useState('');
    const [searchText, setSearchText] = useState('');
    const [price, setPrice] = useState('')
    const [count, setCount] = useState(0)
    const [max, setMax] = useState(2000)
    const [productPerPage, setProductPerPage] = useState(12)
    const [currentPage, setCurrentPage] = useState(1)
    const [date, setDate] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')

    const { data, isLoading } = useQuery({
        queryKey: ['product', category, brand, date, price, currentPage, search,max],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/products?search=${search}&brand=${brand}&category=${category}&price=${price}&date=${date}&page=${currentPage}&size=${productPerPage}&max=${max}`)
            return data
        }
    });
    console.log(data);



    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios.get('http://localhost:5000/products-count')
            setCount(data.result)
        }
        getCount()
    }, [axios])

    const brands = [
        "SoundWave",
        "TechPro",
        "RunEase",
        "CaptureMax",
        "QuickBoil",
        "GameMaster",
        "TimeLux",
        "QuietZone",
        "FitPulse",
        "VisionPro",
        "ChargeMate",
        "SmilePro",
        "EcoTemp",
        "GlideRide",
        "BrightLite",
        "TypeEase",
        "PowerMax",
        "AdventureCam",
        "SleepWave",
        "ErgoLift",
        "SecureHome",
        "CleanBot",
        "AudioPulse",
        "CookMaster",
        "ShavePro",
        "VirtualEye",
        "HydroSmart",
        "WarmCozy",
        "BlendGo",
        "BrewMaster",
        "FitBalance",
        "ReflectFit",
        "PowerControl",
        "EcoRide",
        "CoolBreeze",
        "PowerWash",
        "CinemaGo",
        "TechTime",
        "AutoDrape",
        "CampChef"
    ]

    const categories = [
        "Electronics",
        "Footwear",
        "Home Appliances",
        "Accessories",
        "Wearables",
        "Personal Care",
        "Home Automation",
        "Outdoor"
    ]


    const handlePagination = (value) => {
        setCurrentPage(value);
    }

    const handlePrice = (e) => {
        e.preventDefault()
        setPrice(e.target.value);
    }
    const handleDate = (e) => {
        e.preventDefault()
        setDate(e.target.value);
    }
    const handleBrand = (e) => {
        e.preventDefault()
        setBrand(e.target.value);
    }
    const handleCategory = (e) => {
        e.preventDefault()
        setCategory(e.target.value);
    }



    const handleSearch = e => {
        e.preventDefault()
        setSearch(searchText)
    }


    const totalProducts = Math.ceil(count / productPerPage)
    const pages = [...Array(totalProducts).keys()].map(element => element + 1)

    return (
        <div className='container mx-auto'>
            <h3 className='text-3xl mb-10 font-medium text-blue-400 text-center'>Products</h3>
            <div className='flex flex-col   lg:flex-row justify-center items-center  gap-5'>
                <div className='w-full lg:w-1/4'>
                <div className='flex justify-between items-center'>
                <h3 className='font-semibold text-center mb-2'>Filter By Price Range</h3>
                <p className='font-medium'>Max Price : {max}</p>
                </div>
                    <input onChange={(e)=> setMax(e.target.value)} value={max} type="range" min={0} max="2000"  className="range range-info" step="500" />
                </div>
                <div className='flex w-full lg:w-auto gap-5'>
                    <select onChange={handleBrand} className="select w-full  lg:w-auto select-info border-blue-400 ">
                        <option disabled selected>Filter By Brand</option>
                        {brands.map(b => <option value={b}>{b}</option>)}
                    </select>
                    <select onChange={handleCategory} className="select w-full lg:w-auto  select-info  border-blue-400 ">
                        <option disabled selected>Filter By Category</option>
                        {categories.map(c => <option value={c}>{c}</option>)}
                    </select>
                </div>
                <form onSubmit={handleSearch} className='w-full lg:w-auto '>
                    <label className="input  mx-auto border border-blue-400 flex items-center gap-2">
                        <input onChange={e => setSearchText(e.target.value)} name="search" type="text" value={searchText} className="grow" placeholder="Search" />
                        <button><FaSearch className="text-2xl text-blue-400" /></button>
                    </label>
                </form>
                <div className='flex flex-wrap w-full lg:w-auto gap-5'>
                    <select onChange={handlePrice} className="select select-info w-full lg:w-auto border-blue-400 ">
                        <option disabled selected>Sort By Price</option>
                        <option value={'low'}>Low to High</option>
                        <option value={'high'}>High to Low</option>
                    </select>
                    <select onChange={handleDate} className="select select-info w-full lg:w-auto  border-blue-400">
                        <option disabled selected>Sort By Date</option>
                        <option value={'new'}>Newest Fast</option>
                    </select>
                </div>
                <button onClick={() => { setBrand(''), setCategory(''), setSearch(''), setDate(''), setSearchText(''), setPrice(''), setMax(2000) }} className="btn bg-blue-400 text-white">Reset</button>
            </div>

            {
                isLoading ? <span className="loading  ml-[50%] mr-[50%] loading-lg mt-48 loading-spinner text-info"></span> : <div className='grid lg:grid-cols-3 my-10 gap-5'>
                    {
                        data?.map((product) => {
                            return <Card product={product}></Card>
                        })
                    }
                </div>

            }
            <div className='flex justify-center my-12'>
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePagination(currentPage - 1)}
                    className='px-4 py-2 mx-1 bg-blue-400 text-white capitalize rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-400  hover:text-white'
                >
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>

                        <span className='mx-1'>Prev</span>
                    </div>
                </button>
                {pages.map(page => (
                    <button
                        onClick={() => handlePagination(page)}
                        key={page}
                        className={`hidden ${currentPage === page ? 'bg-blue-400 text-white' : ''
                            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-400  hover:text-white`}
                    >
                        {page}
                    </button>
                ))}
                <button
                    disabled={currentPage === totalProducts}
                    onClick={() => handlePagination(currentPage + 1)}
                    className='px-4 py-2 mx-1 bg-blue-400 text-white transition-colors duration-300 transform  rounded-md hover:bg-black  disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
                >
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Products;