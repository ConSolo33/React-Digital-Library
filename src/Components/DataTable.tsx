import { useState } from "react";
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from "../api/server"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from "../custom-hooks/FetchData";
import { ThemeProvider } from "@mui/system";
import darkTheme from "../Components/Theme"

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90},
    { field: 'title', headerName: "Title", flex: 1},
    { field: 'author', headerName: "Author", flex: 1},
    { field: 'year_published', headerName: "Publication Year", flex: 1},
    { field: 'genre', headerName: "Genre", flex: 1},
    { field: 'length', headerName: "Length", flex: 1},
    { field: 'format', headerName: "Format", flex: 1},
    { field: 'publisher', headerName: "Publisher", flex: 1},

]


function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { bookData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        console.log(selectionModel);
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload() }, 500)
        
    }

  return (
    <>
        <Modal
            id={selectionModel} 
            open={open}
            onClose={handleClose}
        />


        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col justify-center "}
            style={{ height: 400, width: '100%' }}
            >
            <h2 className="pb-2 pt-5 flex justify-center bg-black bg-opacity-75 text-[#00FF00] text-3xl font-mono">
                My Books
            </h2>
            <div className="flex flex-row bg-black bg-opacity-75 p-4 justify-center">
                <div>
                    <button 
                        className="p-3 bg-black bg-opacity-75 text-[#00FF00] mx-10 rounded hover:bg-opacity-100
                        hover:text-white border-white border-2 font-mono"
                        onClick={() => handleOpen()}
                        >
                        Add New Book
                    </button>
                </div>
                <Button
                    onClick={handleOpen}
                    className="p-3 bg-black bg-opacity-75 text-[#00FF00] mx-10 rounded hover:bg-opacity-100
                    hover:text-white border-white border-2 font-mono"
                    >
                    Update Book Info
                </Button>
                <Button
                    onClick={deleteData}
                    className="p-3 bg-black bg-opacity-75 text-[#00FF00] mx-10 rounded hover:bg-opacity-100
                    hover:text-white border-white border-2 font-mono"
                    >
                    Delete Book
                </Button>
            </div>
            <ThemeProvider theme={darkTheme}>
                <DataGrid className="bg-black bg-opacity-75 text-[#00FF00]" 
                columnVisibilityModel={{id: false}}
                sx={{fontFamily: "monospace", fontWeight: 'bold', color: "lime"}}
                rows={bookData} 
                columns={columns}
                checkboxSelection={true}
                onRowSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}
                />
            </ThemeProvider>
        </div>
    </>
  )
}

export default DataTable