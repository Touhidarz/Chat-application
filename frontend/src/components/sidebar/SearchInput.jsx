import { FcSearch } from "react-icons/fc";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full"/>
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
            <FcSearch />
        </button>

    </form>
  )
}

export default SearchInput



// import { FcSearch } from "react-icons/fc";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//         <input type="text" placeholder="Search..." className="input input-bordered rounded-full"/>
//         <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//             <FcSearch />
//         </button>

//     </form>
//   )
// }

// export default SearchInput