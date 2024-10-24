import CryptoGuru from '@/assets/Peoples/1.svg';
import CryptoTrader from '@/assets/Peoples/2.svg';
import DeFiExpert from '@/assets/Peoples/3.svg';
import AltcoinQueen from '@/assets/Peoples/4.svg';
import CryptoNews from '@/assets/Peoples/5.svg';
import NFTCollector from '@/assets/Peoples/6.svg';
import BlockChainDev from '@/assets/Peoples/7.svg';
import CryptoEducator from '@/assets/Peoples/8.svg';
import MarketAnalyst from '@/assets/Peoples/9.svg';
import TokenTalk from '@/assets/Peoples/10.svg';
import WalletWhiz from '@/assets/Peoples/11.svg';
import CryptoCommunity from '@/assets/Peoples/12.svg';


export interface Testimonial {
    id: number;
    name: string;
    role: string;
    message: string;
    image: string;
}




export const TestimonialData: Testimonial[] = [
    {
        "id": 1,
        "name": "John Doe",
        "role": "CEO Motion Design Agency",
        "message": `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”`,
        "image": CryptoGuru.src
    },
    {
        "id": 2,
        "name": "John Doe",
        "role": "CEO Motion Design Agency",
        "message": `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”`,
        "image": CryptoTrader.src
    },
    {
        "id": 3,
        "name": "John Doe",
        "role": "CEO Motion Design Agency",
        "message": `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”`,
        "image": DeFiExpert.src
    },
    {
        "id": 4,
        "name": "John Doe",
        "role": "CEO Motion Design Agency",
        "message": `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”`,
        "image": AltcoinQueen.src
    },
    {
        "id": 5,
        "name": "John Doe",
        "role": "CEO Motion Design Agency",
        "message": `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”`,
        "image": CryptoNews.src
    },
    {
        "id": 6,
        "name": "John Doe",
        "role": "Digital Artist",
        "message": `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”`,
        "image": NFTCollector.src
    },
    {
        "id": 7,
        "name": "John Doe",
        "role": "Blockchain Developer",
        "message": `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."Lorem ipsum dolor sit amet, consectetur adipiscing elit, `,
        "image": BlockChainDev.src
    },
    {
        "id": 8,
        "name": "John Doe",
        "role": "Crypto Educator",
        "message": `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”`,
        "image": CryptoEducator.src
    },
    {
        "id": 9,
        "name": "John Doe",
        "role": "CEO Motion Design Agency",
        "message": `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."Lorem ipsum dolor sit amet, consectetur adipiscing elit, `,
        "image": MarketAnalyst.src
    },
    {
        "id": 10,
        "name": "John Doe",
        "role": "CEO Motion Design Agency",
        "message": `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”`,
        "image": TokenTalk.src
    },
    {
        "id": 11,
        "name": "John Doe",
        "role": "CEO Motion Design Agency",
        "message": `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”`,
        "image": WalletWhiz.src
    },
    {
        "id": 12,
        "name": "John Doe",
        "role": "CEO Motion Design Agency",
        "message": `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”`,
        "image": CryptoCommunity.src
    },
];