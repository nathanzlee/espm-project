import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'
import Router from 'next/router'

export default function Footer({ current }) {
    const navigation = [
        { index: 0, href: '/' },
        { index: 1, href: '/waterscarcity' },
        { index: 2, href: '/soildegradation' },
        { index: 3, href: '/climatechange' },
        { index: 4, href: '/farmerdistress' },
        { index: 5, href: '/solutions' },
        { index: 6, href: '/conclusion' }
    ]

    const currentIndex = navigation.find(n => n.href == current).index

    function previous() {
        console.log(currentIndex)
        if (currentIndex > 0) Router.push(navigation.find(n => n.index == currentIndex - 1).href)
    }

    function next() {
        if (currentIndex < 6) Router.push(navigation.find(n => n.index == currentIndex + 1).href)
    }

    return (
        <div className="absolute bottom-0 w-full h-[70px] bg-white flex items-center justify-between px-5">
            <button 
                className="inline-flex items-center gap-x-2 rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={previous}
            >
                <ChevronLeftIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
                Previous
            </button>
            <button 
                className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={next}
            >
                Next
                <ChevronRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </button>
        </div>
    )
}