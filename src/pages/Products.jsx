import React, { useState } from 'react';

const Products = () => {
    const [search, setSearch] = useState('');
    const [searchText, setSearchText] = useState('');
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
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
    console.log(searchText);

    return (
        <div>
            <h3 className='text-3xl font-medium text-blue-400 text-center'>Products</h3>
            <div className='flex flex-col  lg:flex-row justify-center items-center  gap-5'>
                <div className='flex flex-wrap gap-5'>
                <select onChange={handleBrand} className="select select-info border-blue-400 ">
                    <option disabled selected>Filter By Brand</option>
                    <option value={'bata'}>Bata</option>
                    <option value={'nike'}>Nike</option>
                </select>
                <select onChange={handleCategory} className="select select-info  border-blue-400 ">
                    <option disabled selected>Filter By Category</option>
                    <option value={'shoe'}>Shoe</option>
                    <option value={'shirt'}>Shirt</option>
                </select>
                </div>
                <form onSubmit={handleSearch} className=''>
                    <label className="input    mx-auto border border-blue-400 flex items-center gap-2">
                        <input onChange={e => setSearchText(e.target.value)} name="search" type="text" value={searchText} className="grow" placeholder="Search" />
                        <button><p className="text-2xl text-[#669bbc]">Search</p></button>
                        {/* <button><FaSearch className="text-2xl text-[#669bbc]" /></button> */}
                    </label>
                </form>
                <div className='flex flex-wrap gap-5'>
                <select onChange={handlePrice} className="select select-info  border-blue-400 ">
                    <option disabled selected>Sort By Price</option>
                    <option value={'low'}>Low to High</option>
                    <option value={'high'}>High to Low</option>
                </select>
                <select onChange={handleDate} className="select select-info  border-blue-400">
                    <option disabled selected>Sort By Date</option>
                    <option value={'new'}>Newest Fast</option>
                </select>
                </div>
            </div>
        </div>
    );
};

export default Products;