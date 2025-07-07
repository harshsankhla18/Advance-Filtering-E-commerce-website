function Input({title,name,value,checked,handleChange}){
return (
<>
<label  className="sidebar-label">
    {title}
    <span className="checkMark" >
    <input className="Input-class" onChange={handleChange} type="checkbox" name={name} checked={checked} value={value}/>
    </span>
</label>

</>

);
}
export default Input;