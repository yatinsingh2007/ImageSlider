import React, { Fragment, useState } from 'react';
const ImageSlider = () => {
    const listImages = [
        'https://wallpapers.com/images/featured/cool-anime-6kbwj9794wpnsfr1.jpg',
        'https://www.hindustantimes.com/ht-img/img/2023/12/21/1600x900/one_piece_gear_5_1691322181077_1703152176723.jpg',
        'https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ94zuZk-nr5fUE0hX0b1QTxRqftRmYdV97decHANZkQNK8MmOuVGLpgxGJvy_RMfl4UBvigYJnUluud1n5dE--qdMrMlmwF43fG8WkYSSIHkU8ORSuYInVb.jpg?r=480',
        'https://i.pinimg.com/736x/49/7e/d8/497ed8543c49612e265765e54d7362bf.jpg',
        'https://preview.redd.it/l1cw90m4lnl61.jpg?width=1080&crop=smart&auto=webp&s=57e9c4aedc14e7e88f45f2b356d8064aeb5f9766',
        'https://preview.redd.it/466b7dxocnq51.jpg?width=640&crop=smart&auto=webp&s=794e990665c35bad03ee308b5fdbad53cee72d34',
        'https://wallpapers.com/images/hd/kakashi-hatake-lightning-fan-art-rucahp8r526bpfmi.jpg',
        'https://wallpapercat.com/w/full/1/3/d/32654-1920x1080-desktop-1080p-your-name-wallpaper.jpg',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c2e9d59-ee54-490e-bf96-5497f587844f/dgctdnb-65456fe0-72db-41c6-832a-5b1807d0d68c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljMmU5ZDU5LWVlNTQtNDkwZS1iZjk2LTU0OTdmNTg3ODQ0ZlwvZGdjdGRuYi02NTQ1NmZlMC03MmRiLTQxYzYtODMyYS01YjE4MDdkMGQ2OGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.C2hp9MDgctOJRKea0VGz0UgHMbaoMUIQ-Frx-G2vS_U',
        'https://cdn.iticket.az/event/artist_bg/1eaBNDDttYrd2OjwKqmMnIoZv2cLE2nxGl8ENijA.jpg'
    ];
    
    const [index, setIndex] = useState(0);

    return (
        <Fragment>
            <div className='bg-black min-h-screen flex flex-col items-center justify-center min-w-screen'>
                <h1 className='font-mono text-white text-center pt-12'>Image Slider</h1>
                <div className='flex justify-center items-center pt-10'>
                    <img src={listImages[index]} alt='slider' className='h-72 rounded-lg shadow-lg' />
                </div>
                <div className='flex justify-center gap-6 pt-8'>
                    <button 
                        className='bg-white text-black rounded p-2' 
                        onClick={() => setIndex(index => {
                            if (index === 0) {
                                return listImages.length - 1;
                            }
                            return index - 1;
                        })}
                    >Previous
                    </button>
                    <button 
                        className='bg-white text-black rounded p-2'
                        onClick={() => setIndex(0)}
                    >Reset
                    </button>
                    <button 
                        className='bg-white text-black rounded p-2' 
                        onClick={() => setIndex(index => {
                            if (index === listImages.length - 1) {
                                return 0;
                            }
                            return index + 1;
                        })}
                    >Next
                    </button>
                </div>
            </div>
        </Fragment>
    );
};
export default ImageSlider;