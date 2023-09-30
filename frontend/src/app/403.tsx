'use client'

import Line from '../components/line'
import Quote from '../components/quote/quote'

export default function Custom403(): JSX.Element {
    return (
        <main className="grid place-items-center h-[92vh]">
            <div className='flex place-items-center'>
                <h1 className='text-3xl'>403</h1>
                <Line width={1} height={40} className='mx-4' />
                <h1 className='text-3xl'>S2G Requires VPN</h1>
            </div>
            <Quote type={404}/>
        </main>
    )
}
