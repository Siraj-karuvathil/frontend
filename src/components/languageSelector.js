

const LanguageOption = (props) => {
    return(
        <>
        <div className="flex items-center">
        <i class="fa-solid fa-earth-americas"></i>
        <select className="bg-black outline-none text-white text-sm font-mono" onChange={props.onChange}>
            {/* <option>Select your Language</option> */}
            <option value={'en'}>English</option>
            <option value={'ar'}>Arabic</option>
        </select>
        </div>
        </>
    )
}


export default LanguageOption;