import Image from 'next/image'
import en from "./text/en.json"
import Link from 'next/link'
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export default function Resources(): JSX.Element {
    return (
        <main className="grid place-items-center h-[92vh] w-full">
            <div className='flex mx-8'>
                <div className='bg-[#191919] mr-4 p-10 h-[92vh] w-1/2 overflow-auto rounded-xl'>
                    <h1 className='text-4xl font-bold'>{en.title}</h1>
                    <p className='text-1xl mt-2'>{en.titleDescription}</p>
                    <h2 className='text-1xl font-bold mt-5'>{en.tools}</h2>
                    <p dangerouslySetInnerHTML={{__html: en.toolsDescription}} />
                    <h2 className='text-1xl font-bold mt-5'>{en.general}</h2>
                    <p dangerouslySetInnerHTML={{__html: en.generalDescription}} />
                    <h2 className='text-1xl font-bold mt-5'>{en.web}</h2>
                    <p dangerouslySetInnerHTML={{__html: en.webDescription}} />
                    <h2 className='text-1xl font-bold mt-5'>{en.forensics}</h2>
                    <p dangerouslySetInnerHTML={{__html: en.forensicsDescription}} />
                    <h2 className='text-1xl font-bold mt-5'>{en.reversing}</h2>
                    <p dangerouslySetInnerHTML={{__html: en.reversingDescription}} />
                    <h2 className='text-1xl font-bold mt-5'>{en.osint}</h2>
                    <p dangerouslySetInnerHTML={{__html: en.osintDescription}} />
                    <h2 className='text-1xl font-bold mt-5'>{en.crypto}</h2>
                    <p dangerouslySetInnerHTML={{__html: en.cryptoDescription}} />
                    <h2 className='text-1xl font-bold mt-5'>{en.buffer}</h2>
                    <p dangerouslySetInnerHTML={{__html: en.bufferDescription}} />
                </div>
                <div className='bg-[#191919] ml-4 p-10 h-[92vh] w-1/2 overflow-auto rounded-xl'>
                    <h1 className='text-4xl font-bold'>{en.kali.title}</h1>
                    <p className='mt-2'>{en.kali.description}</p>
                    <h2 className='text-1xl font-bold mt-5'>{en.kali.stepTitle}</h2>
                    <p className='mt-2' dangerouslySetInnerHTML={{__html: en.kali.stepOne}} />
                    <Image src="/images/kali/kali1.png" alt="Kali1" width="0" height="0" sizes="100vw" className="w-full h-auto mt-2"/>
                    <p className='mt-5'>{en.kali.stepTwo}</p>
                    <Image src="/images/kali/kali2.png" alt="Kali2" width="0" height="0" sizes="100vw" className="w-full h-auto mt-2"/>
                    <p className='mt-5'>{en.kali.stepThree}</p>
                    <Image src="/images/kali/kali3.png" alt="Kali3" width="0" height="0" sizes="100vw" className="w-full h-auto mt-2"/>
                    <p className='mt-5'>{en.kali.stepFour}</p>
                    <Image src="/images/kali/kali4.png" alt="Kali4" width="0" height="0" sizes="100vw" className="w-full h-auto mt-2"/>
                    <p className='mt-5'>{en.kali.stepFive}</p>
                    <Image src="/images/kali/kali5.png" alt="Kali5" width="0" height="0" sizes="100vw" className="w-full h-auto mt-2"/>
                    <h2 className='text-1xl font-bold mt-5'>{en.kali.run.title}</h2>
                    <p className='mt-2' dangerouslySetInnerHTML={{__html: en.kali.run.stepOne}} />
                    <Image src="/images/kali/kali6.png" alt="Kali6" width="0" height="0" sizes="100vw" className="w-full h-auto mt-2"/>
                    <p className='mt-5'>{en.kali.run.stepTwo}</p>
                    <Image src="/images/kali/kali7.png" alt="Kali7" width="0" height="0" sizes="100vw" className="w-full h-auto mt-2"/>
                    <p className='mt-5'>{en.kali.run.stepThree}</p>
                    <Image src="/images/kali/kali8.png" alt="Kali8" width="0" height="0" sizes="100vw" className="w-full h-auto mt-2"/>
                    <p className='mt-5'>{en.kali.run.stepFour}</p>
                    <Image src="/images/kali/kali9.png" alt="Kali9" width="0" height="0" sizes="100vw" className="w-full h-auto mt-2"/>
                    <p className='mt-5'>{en.kali.run.stepFive}</p>
                    <Image src="/images/kali/kali10.png" alt="Kali10" width="0" height="0" sizes="100vw" className="w-full h-auto mt-2"/>
                    <h2 className='text-1xl font-bold mt-5'>{en.kali.run.keymap}</h2>
                    <p className='mt-2'>{en.kali.run.stepSix}</p>
                    <Image src="/images/kali/kali11.png" alt="Kali11" width="0" height="0" sizes="100vw" className="w-full h-auto mt-2"/>
                    <h2 className='text-1xl font-bold mt-5'>{en.kali.run.keymapHeader}</h2>
                    <p>{en.kali.run.keymapOne}</p>
                    <p>{en.kali.run.keymapTwo}</p>
                    <p>{en.kali.run.keymapThree}</p>
                    <p>{en.kali.run.keymapFour}</p>
                    <Image src="/images/kali/kali12.png" alt="Kali12" width="0" height="0" sizes="100vw" className="w-full h-auto mt-2"/>
                    <h2 className='text-1xl font-bold mt-5'>{en.kali.run.tools}</h2>
                    <p className='mt-2'>{en.kali.run.toolsDescription}</p>
                    <ReactMarkdown remarkPlugins={[gfm]} children={en.kali.run.exampleOne} />
                    <p className='mt-2'>{en.kali.run.toolsOne}</p>
                    <Image src="/images/kali/kali13.png" alt="Kali13" width="0" height="0" sizes="100vw" className="w-full h-auto mt-2"/>
                    <p className='mt-5'>{en.kali.run.toolsTwo}</p>
                    <ReactMarkdown remarkPlugins={[gfm]} children={en.kali.run.exampleTwo} />
                    <Image src="/images/kali/kali14.png" alt="Kali14" width="0" height="0" sizes="100vw" className="w-full h-auto mt-2"/>
                    <p className='mt-5'>{en.kali.run.toolsThree}</p>
                    <p className='mt-5 font-bold'>{en.kali.run.toolsFour}</p>
                    <ReactMarkdown remarkPlugins={[gfm]} children={en.kali.run.exampleThree} />
                    <p className='mt-5 font-bold'>{en.kali.run.toolsFive}</p>
                    <ReactMarkdown remarkPlugins={[gfm]} children={en.kali.run.exampleFour} />
                    <p className='mt-5 font-bold'>{en.kali.run.toolsSix}</p>
                    <ReactMarkdown remarkPlugins={[gfm]} children={en.kali.run.exampleFive} />

                </div>
            </div>
        </main>
      )
}
