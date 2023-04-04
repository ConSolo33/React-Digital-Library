import Input from "./Input"
import Button from "./Button"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux'
import { chooseTitle, chooseAuthor, chooseYear, chooseGenre, chooseLength, chooseFormat, choosePublisher } from '../redux/slices/RootSlice'

interface BookFormProps {
    id?: string[]
}

const BookForm = (props: BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    if (props.id && props.id.length > 0) {
        server_calls.update(props.id[0], data)
        console.log(`Updated: ${ data } ${ props.id }`);
        setTimeout( () => {window.location.reload()}, 1000);
        event.target.reset()
    } else {
        dispatch(chooseTitle(data.title));
        dispatch(chooseAuthor(data.author));
        dispatch(chooseYear(data.year_published));
        dispatch(chooseGenre(data.genre));
        dispatch(chooseLength(data.length));
        dispatch(chooseFormat(data.format));
        dispatch(choosePublisher(data.publisher));

        server_calls.create(store.getState())
        setTimeout( () => {window.location.reload()}, 1000);
    }
    
  }

  return (


    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">Title</label>
                <Input {...register('title')} name="title" placeholder="Title"/>
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <Input {...register('author')} name="author" placeholder="Author"/>
            </div>
            <div>
                <label htmlFor="year_published">Publication Year</label>
                <Input {...register('year_published')} name="year_published" placeholder="Year"/>
            </div>
            <div>
                <label htmlFor="genre">Genre</label>
                <Input {...register('genre')} name="genre" placeholder="Genre"/>
            </div>
            <div>
                <label htmlFor="length">Length</label>
                <Input {...register('length')} name="length" placeholder="Length"/>
            </div>
            <div>
                <label htmlFor="format">Format</label>
                <Input {...register('format')} name="format" placeholder="Format"/>
            </div>
            <div>
                <label htmlFor="publisher">Publisher</label>
                <Input {...register('publisher')} name="publisher" placeholder="Publisher"/>
            </div>
            <div className="flex my-5">
                <Button
                className="flex justify-center w-full bg-black border-white border-2 p-2 hover:bg-slate-800 text-[#00FF00]"
                >
                    Submit
                </Button>
            </div>
        </form>
    </div>
  )
}

export default BookForm