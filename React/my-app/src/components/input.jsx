const Input = (onChange) =>{
    return(
        <div>
            <input className="form-control w-25 ms-5"  type="text" onChange={()=>onChange} />
        </div>
    )
}

export default Input