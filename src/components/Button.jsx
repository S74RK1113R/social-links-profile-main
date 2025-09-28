export default function Button({children}) {
    return(
        <button className="text-center rounded-md w-full bg-FTM-Grey-700 text-FTM-White py-2.5 text-base font-bold hover:bg-FTM-Green hover:text-FTM-Grey-900">
            {children}
        </button>
    )
}