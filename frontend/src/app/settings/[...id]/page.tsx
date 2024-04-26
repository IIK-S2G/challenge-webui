export default function Settings({ params }: { params: { id: string } }): JSX.Element {

    return(
        <main className="grid place-items-center h-[92vh] w-full">
            <div className='flex w-full'>
                {params.id}
            </div>
        </main>
    )
}
