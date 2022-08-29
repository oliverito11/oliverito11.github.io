import '../styles/SearchBox.css';
import { useEffect, useState } from 'react';

function SearchBox({ valueChanged }) {
    const [text, setText] = useState('');
    const [searchString, setSearchString] = useState('');
    const [date1, setDate1] = useState(null);
    const [date2, setDate2] = useState(null);

    const date = new Date(Date.now());
    const dateToShow = date.toISOString().substring(0, date.toISOString().indexOf('T'));

    const [classToUse, setClassToUse] = useState("searchBox container-fluid col-12 col-lg-2 p-5 p-lg-3 mt-5 position-fixed");
    useEffect(() => {
        resizeWindow();
    }, [])

    window.addEventListener('resize', function () {
        resizeWindow();
    });

    const resizeWindow = () => {
        if (window.innerWidth < 992) {
            setClassToUse("searchBox container-fluid col-12 col-lg-2 p-5 p-lg-3 mt-5 position-relative");
        }
        else {
            setClassToUse("searchBox container-fluid col-12 col-lg-2 p-5 p-lg-3 mt-5 position-fixed");
        }
    }

    return (
        <div className={classToUse}>
            <div className='searchBoxContainer container'>
                <div className='row row-cols-auto d-flex flex-column align-items-center justify-content-center my-4'>
                    <form>
                        <input className="form-control rounded-pill" type="search" placeholder="🔍 Search" aria-label="Search" onChange={(e) => {
                            setSearchString(e.target.value);
                            setText(e.target.value);
                        }} value={text} />
                    </form>
                    <div className='d-flex flex-column align-items-center justify-content-center fs-5'>
                        <p>From:</p>
                        <input className='datePickers form-control' type="date" aria-label="Date" defaultValue={dateToShow} onChange={(e) => setDate1(e.target.value)} />
                        <p>To:</p>
                        <input className='datePickers form-control' type="date" aria-label="Date" defaultValue={dateToShow} onChange={(e) => setDate2(e.target.value)} />
                    </div>

                    <input type="button" className="my-3 btn-green" onClick={() => {
                        valueChanged(searchString, date1, date2);
                    }} value="Search" />
                    <input type="button" className='btn-green' onClick={() => {
                        valueChanged(null, null, null)
                        setText('');
                    }} value="Remove filters" />
                </div>
            </div>
        </div>
    );
}

export default SearchBox;