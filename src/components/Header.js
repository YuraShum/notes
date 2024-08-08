import logo from "../image/markdown_logo.png"
export default function Header({setNotes, filterNotes, setFilterNotes}){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'];

    const month= ["January","February","March","April","May","June","July",
        "August","September","October","November","December"];
    return(
        <nav className="nav">
            <div className="nav__logo">
                <a href="./">
                    <img src={logo} alt ='logo'/>
                </a>
                <p>Markdown Notes</p>
            </div>
            <div className="navigation">
                <div className="search">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                    </svg>
                    <input type="text" placeholder="Знайти Нотатки..." value={filterNotes} onChange = {(e) => setFilterNotes(e.target.value)}  />
                </div>
                <button onClick={() => setNotes(prevValue => [
                    ...prevValue, 
                    {
                        title: ``,
                        time: `${days[new Date().getDay()]} ${new Date().getDate()} ${month[new Date().getMonth()]}, ${new Date().getFullYear()} at ${new Date().getHours()}:${new Date().getMinutes() >= 10? new Date().getMinutes(): `0${new Date().getMinutes()}`}`,
                        id: (prevValue.length > 0 ? prevValue[prevValue.length -1].id + 1 : 0),
                        text: ``,
                        edit: false
                    }
                    ])}>
                    Нова записка
                </button>
            </div>
        </nav>
    )
}