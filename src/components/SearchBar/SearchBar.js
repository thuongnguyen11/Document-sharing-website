import React, { useState } from 'react'


const SearchBar = ({ onChange }) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className='flex flex-col my-16 mx-40'>
            <div className='text-left text-white text-lg font-medium '>Tìm kiếm</div>
            <input
                className='h-10  px-5 border-2 rounded-lg w-full'
                type="search"
                placeholder="Tên tài liệu, môn học"
                onChange={handleChange} />
        </div>
    )



};

export default SearchBar;