import BookForm from "./BookForm";


interface Props {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>);
    return (
        <div
            onClick={ props.onClose }
            className='fixed w-full h-3/5 flex overflow-auto z-1
            justify-center align-middle bg-black bg-opacity-50 mb-10 p-6'
        >
            <div 
                className="max-w-600px w-2/5 mb-auto flex z-1 bg-white"
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart bg-black">
                        <p className="flex justify-start m-3 bg-black text-[#00FF00]
                         hover:text-black hover:bg-white hover:cursor-pointer p-1"
                        onClick={props.onClose}>
                        <i className="fa-solid fa-xmark"></i>
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center font-mono p-2 bg-black text-[#00FF00]">
                        <BookForm id={ props.id }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal