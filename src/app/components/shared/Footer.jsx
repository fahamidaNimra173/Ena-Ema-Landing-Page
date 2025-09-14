import Image from "next/image";

export default function Footer(){
    return(
        <div className="lg:px-[150px] lg:py-16 md:p-16 p-4 py-16 flex justify-between items-center bg-[#1FFFA5]">
            <div>
                <Image
                src='/assets/Logo black.png'
                width={160}
                height={36}
                alt="Ema Ena logo"
                
                
                />
            </div>
            <div>
                <p className="text-[12px] font-normal">© All rights reserved to Ena Ema Technologies</p>
            </div>
            <div className="flex gap-4 items-center justify-center">
                <Image
                    src='/assets/linkedin.png'
                    width={24}
                    height={24}
                    alt="Ema Ena logo"
                />
                                <Image
                    src='/assets/facebook-16 (1).png'
                    width={24}
                    height={24}
                    alt="Ema Ena logo"
                />
                                <Image
                    src='/assets/lets-icons_insta.png'
                    width={24}
                    height={24}
                    alt="Ema Ena logo"
                />
                                <Image
                    src='/assets/ri_behance-fill.png'
                    width={24}
                    height={24}
                    alt="Ema Ena logo"
                />
                                <Image
                    src='/assets/icon-park-outline_dribble.png'
                    width={24}
                    height={24}
                    alt="Ema Ena logo"
                />
            </div>

        </div>
    )
}