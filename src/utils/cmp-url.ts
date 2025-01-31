const CmpUrl=(name:string)=>{
    return name.toLowerCase().replace(/\s+/g, "-").trim()
}
export default CmpUrl